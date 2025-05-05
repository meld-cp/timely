import { FormatText } from "./FormatText";

export class FormatDate {

	static toInputDateValue(dt: Date): string {
		// YYYY-MM-DD
		var day = dt.getDate();
		var month = dt.getMonth() + 1;
		var year = dt.getFullYear();

		const result = `${year}-${FormatText.padLeft(month.toString(), "0", 2)}-${FormatText.padLeft(day.toString(), "0", 2)}`;
		return result;
	}

	static toLocalDatefromString(dateString: string, locale?: string): string {
		const date = new Date(dateString);
		return FormatDate.toLocalDate(date, locale)
	}

	static toLocalDate(n: Date, locale?: string): string {
		const f = new Intl.DateTimeFormat(
			locale,
			{

			}
		);
		return f.format(n);
	}
}
