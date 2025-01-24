import { type InvoiceLineModel } from "$lib/models/InvoiceLineModel";
import { type InvoiceModel } from "$lib/models/InvoiceModel";
import { type TaskModel } from "$lib/models/TaskModel";
import { TaskState } from "$lib/models/TaskState";
import { FormatDate } from "$lib/services/formatters/FormatDate";
import { taskRepo } from "$lib/services/Singletons";


export class TaskViewModel {
	id: string = $state( crypto.randomUUID() );
	state: TaskState = $state(TaskState.Stopped);
	date: string = $state( FormatDate.toInputDateValue( new Date() ) );
	name: string = $state("");
	duration: number = $state(0);
	affectiveDurationHours: number = $state(0);
	timeRunStarted : number | undefined = $state();
	invoiceRefId: string = $state("");
	tags:string[] = $state([]);

	get tagsAsText():string {
		return this.tags.join(" ");
	}
	set tagsAsText( txt:string ){
		this.tags = txt.trim().split(" ");
	}

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
			invoiceRefId:this.invoiceRefId,
			tags: this.tags,
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
		this.invoiceRefId = m.invoiceRefId;
		this.tags = m.tags;
	}

	public save(){
		taskRepo.set(this.id, this.getModel());
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
	public currencyCode:string = $state("USD");
	
	public number:string = $state("");
	public date:string = $state(FormatDate.toInputDateValue( new Date()));
	public orderRef:string = $state("");
	
	public issueToLines: string[] = $state([]);
	public footerLines: string[] = $state([]);
	
	public nextLineNumber = $state(10);
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
		return contains;
	}
	
	public removeLineWithExtRefId( extRefId:string ){
		this.lines = this.lines.filter( l=>l.extRefId != extRefId );
	}

	public addLine( line?: InvoiceLineViewModel ):string{
		const m  = line ?? new InvoiceLineViewModel();
		
		m.number = this.nextLineNumber;
		this.nextLineNumber += 10;
		this.lines.push(m);

		return m.id;
	}

	public sortLines(){
		this.lines.sort( (a,b) => a.number - b.number );
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

	public tax:number = $derived(0);
	public total:number = $derived(this.quantity * this.unitCost );
	
	public get isDescriptionOnlyLine(): boolean {
		return this.quantity == 0;
	}

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
