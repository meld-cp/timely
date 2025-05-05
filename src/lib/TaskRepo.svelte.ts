import { getContext, setContext } from "svelte";
import { TaskState, type TTask } from "./Types.svelte";
import { DateHelper } from "./utils";

export interface ITaskRepo{
    fetch(predicate: (t: TTask) => boolean): TTask[];
    createTask() : TTask;
    getTask( id:string ) : TTask | undefined;
    markAsChanged( task:TTask ) : void;
}

export class TaskRepo implements ITaskRepo{

    tasks = $state<TTask[]>([]);

    store =  new TaskStoreLocalStorage();

    constructor(){
        this.tasks = this.store.loadTasks();
    }

    public fetch(predicate: (t: TTask) => boolean): TTask[] {
        return this.tasks.filter(predicate);
    }

    public createTask() : TTask{
        const task : TTask = {
            id: crypto.randomUUID(),
            state: TaskState.Stopped,
            date: DateHelper.toInputDateValue( new Date() ),
            name: "",
            duration: 0,
            affectiveDurationHours: 0,
            timeRunStarted: 0,
            //timeRunPaused: 0
        };
        this.markAsChanged( task );
        this.tasks.unshift(task);
        return task;
    }

    public getTask( id:string ): TTask | undefined {
        return this.tasks.find( x=>x.id === id );
    }

    public markAsChanged( task:TTask ) {
        this.store.saveTask( task );
    }


}

class TaskStoreLocalStorage{

    private loadTaskIds() : string[]{
        const taskIdsJson = localStorage.getItem("taskIds");
        if (!taskIdsJson){
            return [];
        }
        
        return JSON.parse( taskIdsJson ) as string[];
    }

    private saveIds( ids:string[] ){
        const taskIdsJson = JSON.stringify( ids, undefined, 4 );
        localStorage.setItem( "taskIds", taskIdsJson );
    }

    public loadTasks() : TTask[]{
        const tasks : TTask[] = [];
        
        const taskIds = this.loadTaskIds();
        for (const taskId of taskIds) {
            const taskJson = localStorage.getItem( taskId )
            if (!taskJson){
                continue;
            }
            const task = JSON.parse( taskJson ) as TTask;
            if (!task){
                continue;
            }
            tasks.push(task);
        }
        return tasks;
    }
    
    public saveTask( task: TTask ) {
        const ids = this.loadTaskIds().filter( id => id != task.id);
        ids.push( task.id );
        this.saveIds( ids );

        const taskJson = JSON.stringify( task, undefined, 4 );
        localStorage.setItem( task.id, taskJson );
    }

}

const taskRepoKey = Symbol("taskrepo");

export function getTaskRepoContext() : TaskRepo{
    return getContext(taskRepoKey) as TaskRepo;
}

export function setTaskRepoContext( taskRepo:TaskRepo ) : TaskRepo{
    return setContext( taskRepoKey, taskRepo );
}
