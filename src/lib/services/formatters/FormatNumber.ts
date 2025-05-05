export class FormatNumber {

	static decimalPlaces( n: number, decimalPlaces: number, locale?:string ): string {
		const f = new Intl.NumberFormat(
			locale,
			{
				style: "decimal",
				minimumFractionDigits: decimalPlaces,
				maximumFractionDigits: decimalPlaces,
			}
		);
		return f.format(n);
	}

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
