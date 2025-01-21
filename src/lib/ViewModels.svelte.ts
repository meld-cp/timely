import { type InvoiceModel, type InvoiceLineModel, TaskState, type TaskModel } from "./Models";
import { taskRepo } from "./Repos";
import { DateFormat } from "./utils";


export class TaskViewModel {
    id: string = $state( crypto.randomUUID() );
    state: TaskState = $state(TaskState.Stopped);
    date: string = $state( DateFormat.toInputDateValue( new Date() ) );
    name: string = $state("");
    duration: number = $state(0);
    affectiveDurationHours: number = $state(0);
    timeRunStarted : number | undefined = $state();

    constructor( m?:TaskModel ){
        if (m){
            this.applyModel(m);
        }
    }

    getModel( withId?:string ): TaskModel {
        return {
            id: withId ?? this.id,
            state:this.state,
            date:this.date,
            name:this.name,
            duration:this.duration,
            affectiveDurationHours:this.affectiveDurationHours,
            timeRunStarted:this.timeRunStarted,
        }
    }

    applyModel(m: TaskModel) {
        this.id = m.id;
        this.state = m.state;
        this.date = m.date;
        this.name = m.name;
        this.duration = m.duration;
        this.affectiveDurationHours = m.affectiveDurationHours;
        this.timeRunStarted = m.timeRunStarted;
    } 
    
    public pause(){
        if (this.state != TaskState.Running){
            return;
        }
        this.state = TaskState.Paused;
        this.timeRunStarted = undefined;
    }

    public start(){
        this.state = TaskState.Running;
        this.timeRunStarted = Date.now();
    }

    public stop(){
        this.state = TaskState.Stopped;
        this.timeRunStarted = undefined;
    }

    public incrementDuration( incrementMinutes: number ) {
        if ( this.state == TaskState.Running ){
            // inc session start time
            const currentSessionStartTime = (this.timeRunStarted ?? Date.now());
            //const dt = new Date( currentSessionStartTime );
            const incMs = incrementMinutes * 60 * 1000;
            const newSessionTime = currentSessionStartTime - incMs; 
            this.timeRunStarted = newSessionTime;
            this.recalculateDurationFromRunningSession()
        }else{
            this.setDuration( this.duration + incrementMinutes * 60 );
        }
    }

    public recalculateDurationFromRunningSession() {
        if ( this.state != TaskState.Running ){
            return
        }
        const sessionStartTime = (this.timeRunStarted ?? Date.now());
        const secs = ( Date.now() - sessionStartTime ) / 1000;
        this.setDuration( secs );
    }

    public setDuration( newDurationInSeconds:number ){
        this.duration = Math.ceil( newDurationInSeconds );
        this.affectiveDurationHours = this.calculateAffectiveHours( this.duration, 15 )
    }

    private calculateAffectiveHours( durationSeconds:number, incrementMinutes: number ) : number {
        let mins = durationSeconds / 60;
        const increments = Math.ceil( mins / incrementMinutes )
        const affectiveMins = increments * incrementMinutes;
        const affectiveHours = affectiveMins / 60;
        return affectiveHours;
    }
}

export class InvoiceViewModel {
   
    public id = $state( crypto.randomUUID().toString() );
    public currencyCode:string = $state("NZD");
  
    public number:string = $state("");
    public date:string = $state(DateFormat.toInputDateValue( new Date()));
    public orderRef:string = $state("");

    public issueToLines: string[] = $state([]);
    public footerLines: string[] = $state([]);

    public lines: InvoiceLineViewModel[] = $state([]);

    subtotal:number = $derived( this.lines.reduce( (p,line) => p + line.total, 0 ))
    taxTotal:number = $derived( this.lines.reduce( (p,line) => p + line.tax, 0 ))
    grandTotal:number = $derived( this.subtotal + this.taxTotal )

    constructor( m?:InvoiceModel ){
        if (m){
            this.applyModel(m);
        }
    }

    getModel(): InvoiceModel {
        return {
            id:this.id,
            currencyCode:this.currencyCode,
            number:this.number,
            date:this.date,
            orderRef:this.orderRef,
            issueToLines:this.issueToLines,
            lines:this.lines.map( l=>l.getModel() ),
            footerLines:this.footerLines,
        }
    }

    applyModel(m: InvoiceModel) {
        this.id = m.id;
        this.currencyCode = m.currencyCode;
        this.number = m.number;
        this.date = m.date;
        this.orderRef = m.orderRef;
        this.issueToLines = m.issueToLines;
        this.lines = m.lines.map( l => new InvoiceLineViewModel(l) );
        this.footerLines = m.footerLines;
    }

    get issueToAsText() {
        return this.issueToLines.join("\n")
    }
    
    set issueToAsText( v:string ){
        this.issueToLines = v.split("\n");
    }

    get footnoteAsText() {
        return this.footerLines.join("\n")
    }
    
    set footnoteAsText( v:string ){
        this.footerLines = v.split("\n");
    }
    
    public containsExtRefId(extRefId: string): boolean {
        const contains =  this.lines.some( l=>l.extRefId === extRefId);
        //console.log(extRefId, contains)
        return contains;
    }
    
    public removeLineWithExtRefId( extRefId:string ){
        this.lines = this.lines.filter( l=>l.extRefId != extRefId );
    }

    public addLine( line?: InvoiceLineViewModel ):string{
        const m  = line ?? new InvoiceLineViewModel();
        this.lines.push(m);
        return m.id;
    }

    public sortLines(){
        //TODO:
    }
}

export class InvoiceLineViewModel {
    public id = $state( crypto.randomUUID().toString() );
    public extRefId:string|undefined = $state();
    public number:number = $state(0);
    public description:string = $state("");
    public units:string = $state("");
    public quantity:number = $state(0);
    public unitCost:number = $state(0);

    tax:number = $derived(0);
    total:number = $derived(this.quantity * this.unitCost );
    
    constructor( m?:InvoiceLineModel ){
        if (m){
            this.applyModel(m);
        }
    }

    getModel(): InvoiceLineModel {
        return {
            id:this.id,
            extRefId:this.extRefId,
            number:this.number,
            description:this.description,
            units:this.units,
            quantity:this.quantity,
            unitCost:this.unitCost
        }
    }

    applyModel(m: InvoiceLineModel) {
        this.id = m.id;
        this.extRefId = m.extRefId;
        this.number = m.number;
        this.description = m.description;
        this.units = m.units;
        this.quantity = m.quantity;
        this.unitCost = m.unitCost;
    }
}


export class TimeLogPageViewModel{
        
    tasksRunning:TaskViewModel[] = $state([]);
    tasksPaused:TaskViewModel[] = $state([]);
    tasksStopped:TaskViewModel[] = $state([]);
    tasksArchived:TaskViewModel[] = $state([]);

    intervalId:number | undefined;

    constructor( ){
        
    }
    
    start() {
        this.stop();
        
        this.refresh();
        // catch up duration
        for (const task of this.tasksRunning ) {
            task.recalculateDurationFromRunningSession();
        }

        this.intervalId = setInterval( () => this.incrementRunningTaskDuration(), 1000 )
        
    }

    stop() {
        if (this.intervalId){
            clearInterval(this.intervalId);
        }
    }
    private refresh(){
        const allTasks = taskRepo.getAll().map( t=> new TaskViewModel(t) );
        this.tasksRunning = this.fetchTasksByState( allTasks, [TaskState.Running] );
        this.tasksPaused = this.fetchTasksByState( allTasks, [TaskState.Paused] );
        this.tasksStopped = this.fetchTasksByState( allTasks, [TaskState.Stopped] );
        this.tasksArchived = this.fetchTasksByState( allTasks, [TaskState.Archived] );
    }

    private fetchTasksByState( tasks:TaskViewModel[], states:TaskState[] ) : TaskViewModel[]{
        return tasks.filter( t=> states.includes(t.state));
    }

    public startNewTask( name: string ){
        const task = new TaskViewModel();
        task.name = name;
        this.startTask( task );
    }
    
    public saveTask( task:TaskViewModel ){
        taskRepo.set(task.id, task.getModel() );
    }

    public pauseAll() {
        this.refresh();
        for (const task of this.tasksRunning) {
            task.pause();
            this.saveTask( task);
        }
        this.refresh();
    }

    private incrementRunningTaskDuration(){
        console.log("incrementRunningTaskDuration")
        for (const task of this.tasksRunning ) {
            task.setDuration( task.duration + 1 );
            this.saveTask(task);
        }
    }

    public pauseTask( task: TaskViewModel ){
        task.pause();
        this.saveTask( task);
        this.refresh();
    }

    public startTask( task: TaskViewModel ){
        this.pauseAll();
        task.start();
        this.saveTask( task);
        this.refresh();
    }

    public stopTask( task: TaskViewModel ){
        task.stop();
        this.saveTask( task);
        this.refresh();
    }

    public duplicateAndStartTask( task:TaskViewModel ){
        const dup = new TaskViewModel( task.getModel( crypto.randomUUID() ) );
        this.startTask(dup);
    }

    public increaseDuration( task:TaskViewModel, mins:number ){
        task.incrementDuration( mins );
        this.saveTask( task);
    }

}