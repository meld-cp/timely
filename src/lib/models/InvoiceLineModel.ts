
export type InvoiceLineModel = {
	id: string;
	extRefId: string | undefined;
	number: number;
	description: string;
	units: string;
	quantity: number;
	unitCost: number;
};
