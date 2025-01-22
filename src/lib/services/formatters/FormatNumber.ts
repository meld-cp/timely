export class FormatNumber {
	static currency(n: number, currency: string): string {
		const f = new Intl.NumberFormat(
			undefined,
			{
				style: "currency",
				currency: currency,
				currencyDisplay: "narrowSymbol"
			}
		);
		return f.format(n);
	}
}
