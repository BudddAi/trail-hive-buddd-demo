interface Props {
	endpoint: string;
	query?: Record<string, string>;
	wrappedByKey?: string;
	wrappedByList?: boolean;
	page?: string;
	locale?: string;
}

/**
 * Fetches data from the Strapi API
 * @param endpoint - The endpoint to fetch from
 * @param query - The query parameters to add to the url
 * @param wrappedByKey - The key to unwrap the response from
 * @param wrappedByList - If the response is a list, unwrap it
 * @returns
 */
export async function fetchApi<T>({
	endpoint,
	query,
	wrappedByKey,
	wrappedByList,
	page,
	locale,
}: Props): Promise<T> {
	if (endpoint.startsWith('/')) {
		endpoint = endpoint.slice(1);
	}

	const url = new URL(`${import.meta.env.STRAPI_URL}/api/${endpoint}`);

	if (locale) {
		url.searchParams.append('locale', locale);
	}

	if (query) {
		Object.entries(query).forEach(([key, value]) => {
			url.searchParams.append(key, value);
		});
	}

	if (page) {
		url.searchParams.append(`populate[${page}][populate]`, '*');
	}

	const res = await fetch(url.toString());
	let data = await res.json();

	if (wrappedByKey) {
		data = data[wrappedByKey];
	}

	if (wrappedByList) {
		data = data[0];
	}

	if (page) {
		data = data[0][page];
	}

	return data as T;
}

/**
 * Builds the complete URL for an asset from Strapi
 * Handles both complete URLs (Strapi Cloud) and relative paths (local Strapi)
 * @param path - The asset path from Strapi API (can be null/undefined)
 * @returns Complete asset URL or null if no path provided
 */
export function assetsPath(path: string | null | undefined): string | null {
	if (!path) return null;

	const STRAPI_URL = import.meta.env.STRAPI_URL || '';

	// If it's already a complete URL (contains http/https), return as is
	if (path.startsWith('http://') || path.startsWith('https://')) {
		return path;
	}

	// If it's a relative path, concatenate with the base assets URL
	return `${STRAPI_URL}${path}`;
}
