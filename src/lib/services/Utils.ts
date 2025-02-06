
type SortableObject = { [key: string]: any };
type SortProperty = string;

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
	

		
	/**
	 * Sorts an array of objects by multiple properties. The properties are compared
	 * in the order they are specified in the `properties` array. If a property is
	 * prefixed with a colon (`:`) and either `asc` or `desc`, the comparison is
	 * done in the specified order. Otherwise, the comparison is done in ascending
	 * order.
	 * @example const sortedData = sortByProperties<Person>(data, ['name', 'age:desc']);
	 * @param arr The array of objects to sort.
	 * @param properties The properties to sort by. Each property can be prefixed
	 *                   with a colon (`:`) and either `asc` or `desc` to specify
	 *                   the order of the comparison.
	 * @returns The sorted array.
	 */
	public static sortByProperties<T extends SortableObject>(arr: T[], properties: SortProperty[]): T[] {
	  return arr.sort((a: T, b: T) => {
		for (let prop of properties) {
		  const [key, order] = prop.split(':') as [keyof T, 'asc' | 'desc' | undefined];
		  const aValue = a[key];
		  const bValue = b[key];
	
		  if (aValue < bValue) return order === 'desc' ? 1 : -1;
		  if (aValue > bValue) return order === 'desc' ? -1 : 1;
		}
		return 0;
	  });
	}
	
	  

}
