export class FormatText {

	static padLeft(s: string, fillWith: string, len: number): string {
		const lenToFill = len - s.length;

		for (let i = 0; i < lenToFill; i++) {
			s = fillWith[0] + s;
		}

		return s;
	}

}
