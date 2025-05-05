
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

	public static downloadAsFile( data:string, filename:string ){
		// Create a Blob from the data
		const blob = new Blob([data], { type: 'text/plain' });

		// Create a link element
		const link = document.createElement('a');

		// Create a URL for the Blob and set it as the href attribute
		link.href = URL.createObjectURL(blob);

		// Set the download attribute with a filename
		link.download = filename;

		// Programmatically click the link to trigger the download
		link.click();

		// Clean up by revoking the Object URL
		URL.revokeObjectURL( link.href );
	}
	
}
