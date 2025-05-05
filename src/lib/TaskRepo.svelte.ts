import { getContext, setContext } from "svelte";
import { TaskModel } from "./Types.svelte";

export interface ITaskRepo{
    fetch(predicate: (t: TaskModel) => boolean): TaskModel[];
    createTask() : TaskModel;
    getTask( id:string ) : TaskModel | undefined;
    markAsChanged( task:TaskModel ) : void;
}

export class TaskRepo implements ITaskRepo{

    tasks = $state<TaskModel[]>([]);

    store =  new TaskStoreLocalStorage();

    constructor(){
        this.tasks = this.store.loadTasks();
    }

    public fetch(predicate: (t: TaskModel) => boolean): TaskModel[] {
        return this.tasks.filter(predicate);
    }

    public createTask() : TaskModel{
        const task = new TaskModel();
        this.tasks.unshift(task);
        this.markAsChanged( task );
        return task;
    }

    public getTask( id:string ): TaskModel | undefined {
        return this.tasks.find( x=>x.id === id );
    }

    public markAsChanged( task:TaskModel ) {
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

    public loadTasks() : TaskModel[]{
        const tasks : TaskModel[] = [];
        
        const taskIds = this.loadTaskIds();
        for (const taskId of taskIds) {
            const taskJson = localStorage.getItem( taskId )
            if (!taskJson){
                continue;
            }
            const task = JSON.parse( taskJson ) as TaskModel;
            if (!task){
                continue;
            }
            tasks.push(task);
        }
        return tasks;
    }
    
    public saveTask( task: TaskModel ) {
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
