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

}
