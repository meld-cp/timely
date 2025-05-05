import { taskRepo, type ITaskRepo } from "./TaskRepo.svelte";
import { TaskState, type TaskModel } from "./Models";

export class TaskController{
    repo: ITaskRepo;
    
    intervalId:number | undefined;
    
    constructor( repo:ITaskRepo ){
        this.repo = repo;
    }
    
    public start() {
        this.stop();

        // catch up duration
        for (const task of this.fetchTasksByState( [TaskState.Running] ) ) {
            this.recalculateDurationFromRunningSession( task );
        }
        this.intervalId = setInterval( () => this.incrementRunningTaskDuration(), 1000 )
    }
    
    public stop() {
        if (this.intervalId){
            clearInterval( this.intervalId );
        }
    }

    public addNewTaskAndStart( taskName: string ) {
        this.pauseAll();
        const task = this.repo.createTask();
        task.name = taskName;
        task.state = TaskState.Running;
        task.timeRunStarted = Date.now();
        //task.timeRunPaused = undefined;
        this.repo.markAsChanged(task);
    }

    public pauseTask( id:string ) : void {
        const task = this.repo.getTask(id);
        if (task?.state != TaskState.Running){
            return;
        }
        task.state = TaskState.Paused;
        task.timeRunStarted = undefined;
        //task.timeRunPaused = Date.now();
        this.repo.markAsChanged(task);
    }

    public resumeTask( id:string ) : void {
        const task = this.repo.getTask(id);
        if (task?.state != TaskState.Paused){
            return;
        }
        this.pauseAll();
        task.state = TaskState.Running;
        task.timeRunStarted = Date.now();
        //task.timeRunPaused = undefined;
        this.repo.markAsChanged(task);
    }

    public togglePaused( id:string ) : void {
        const task = this.repo.getTask(id);

        if (!task){
            return;
        }

        if (task.state == TaskState.Paused){
            this.pauseAll();
            task.state = TaskState.Running;
            task.timeRunStarted = Date.now();
            //task.timeRunPaused = undefined;
            this.repo.markAsChanged(task);
        }else if( task.state == TaskState.Running ){
            task.state = TaskState.Paused;
            task.timeRunStarted = undefined;
            //task.timeRunPaused = Date.now();
            this.repo.markAsChanged(task);
        }
    }

    public canPauseOrResume( id:string ) : boolean{
        const task = this.repo.getTask(id);
        if (!task){
            return false;
        }
        return [TaskState.Paused || TaskState.Running || TaskState.Stopped].includes( task.state );
    }

    public startTask( id:string ) : void{
        const task = this.repo.getTask(id);
        if (task?.state != TaskState.Stopped){
            return;
        }
        this.pauseAll();
        task.state = TaskState.Running;
        task.timeRunStarted = Date.now();
        //task.timeRunPaused = undefined;
        this.repo.markAsChanged(task);
    }

    public stopTask( id:string ) : void {
        console.log('Stop')
        const task = this.repo.getTask(id);
        if (!task){
            return;
        }
        task.state = TaskState.Stopped;
        task.timeRunStarted = undefined;
        //task.timeRunPaused = undefined;
        this.repo.markAsChanged(task);
    }

    public activateAndStartCopy(id:string) : TaskModel | undefined {
        const task = this.cloneTask(id);
        if (task){
            this.startTask(task.id);
        }
        return task;
    }

    public setDuration(id:string, newDurationInSeconds:number){
        const task = this.repo.getTask(id);
        if (!task){
            return;
        }

        task.duration = Math.ceil( newDurationInSeconds );
        task.affectiveDurationHours = this.calculateAffectiveHours( task.duration, 15 )
        
        this.repo.markAsChanged(task);
    }

    public recalculateDurationFromRunningSession( task:TaskModel) {
        if ( task.state != TaskState.Running ){
            return
        }
        const sessionStartTime = (task.timeRunStarted ?? Date.now());
        const secs = ( Date.now() - sessionStartTime ) / 1000;
        this.setDuration( task.id, secs );
    }

    public incrementTaskDuration( id:string, incrementMinutes: number ) : void {
        const task = this.repo.getTask(id);
        if (!task){
            return;
        }
        if ( task.state == TaskState.Running ){
            // inc session start time
            const currentSessionStartTime = (task.timeRunStarted ?? Date.now());
            //const dt = new Date( currentSessionStartTime );
            const incMs = incrementMinutes * 60 * 1000;
            const newSessionTime = currentSessionStartTime - incMs; 
            task.timeRunStarted = newSessionTime;
            this.recalculateDurationFromRunningSession(task)
        }else{
            this.setDuration( id, task.duration + incrementMinutes * 60 );
        }
    }

    public fetchTasksByState( states : TaskState[] ) : TaskModel[]{
        return this.repo.fetch( t=>states.includes(t.state) );
    }
   
    private pauseAll(){
        for (const task of this.repo.fetch( t=>t.state == TaskState.Running)) {
            task.state = TaskState.Paused;
            task.timeRunStarted = undefined;
            //task.timeRunPaused = undefined;
        }
    }
    
    private compareDateDescending( a:TaskModel, b:TaskModel) : number{
        if (a.date === b.date){
            return 0;
        }
        if (a.date > b.date){
            return -1;
        }
        return 1
    }

    //private comparePaused( a:TaskModel, b:TaskModel) : number{
    //     if (a.paused === b.paused){
    //         return 0;
    //     }
    //     if (a.paused > b.paused){
    //         return 1;
    //     }
    //     return -1
    // }

    private sortByDateDescending( tasks:TaskModel[]):TaskModel[]{
        return tasks.toSorted( this.compareDateDescending )
    }

    private cloneTask( id:string ): TaskModel | undefined {
        const taskToClone = this.repo.getTask(id);
        if (!taskToClone){
            return undefined;
        }
        
        const newTask = this.repo.createTask();
        newTask.name = taskToClone.name;
        
        return newTask;
    }

    private calculateAffectiveHours( durationSeconds:number, incrementMinutes: number ) : number {
        let mins = durationSeconds / 60;
        const increments = Math.ceil( mins / incrementMinutes )
        const affectiveMins = increments * incrementMinutes;
        const affectiveHours = affectiveMins / 60;
        return affectiveHours;
    }

    private incrementRunningTaskDuration(){
        for (const t of this.fetchTasksByState([TaskState.Running])) {
            this.setDuration( t.id, t.duration + 1 );
        }
    }

}

export const taskController = new TaskController( taskRepo );
