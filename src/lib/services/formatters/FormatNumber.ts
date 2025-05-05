export class FormatNumber {
	static currency( n: number, currencyCode: string, locale?:string ): string {
		const f = new Intl.NumberFormat(
			locale,
			{
				style: "currency",
				currency: currencyCode,
				currencyDisplay: "narrowSymbol",
			}
		);
		return f.format(n);
	}
}
