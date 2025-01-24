
export class Utils {

	public static async convertFileToDataURL(file: File) : Promise<string> {
		return new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.onloadend = () => {
				const result = reader.result as string;
				return resolve(result);
			};
			reader.onerror = reject;
			reader.readAsDataURL(file);
		});
	}
	
}
