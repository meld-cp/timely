export class FormatNumber {
	static currency( n: number, currency: string, locale?:string ): string {
		const f = new Intl.NumberFormat(
			locale,
			{
				style: "currency",
				currency: currency,
				currencyDisplay: "narrowSymbol"
			}
		);
		return f.format(n);
	}
}
