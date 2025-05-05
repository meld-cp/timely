import type { InvoiceLineModel } from "$lib/models/InvoiceLineModel";


export class InvoiceLineViewModel {
	public id = $state(crypto.randomUUID().toString());
	public extRefId: string | undefined = $state();
	public number: number = $state(0);
	public description: string = $state("");
	public units: string = $state("");
	public quantity: number = $state(0);
	public unitCost: number = $state(0);

	public tax: number = $derived(0);
	public total: number = $derived(this.quantity * this.unitCost);

	public get isDescriptionOnlyLine(): boolean {
		return this.quantity == 0;
	}

	constructor(m?: InvoiceLineModel) {
		if (m) {
			this.applyModel(m);
		}
	}

	getModel(): InvoiceLineModel {
		return {
			id: this.id,
			extRefId: this.extRefId,
			number: this.number,
			description: this.description,
			units: this.units,
			quantity: this.quantity,
			unitCost: this.unitCost
		};
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
