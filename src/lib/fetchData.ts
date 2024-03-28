import invariant from 'tiny-invariant';

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

invariant(BASE_URL, 'API BASE_URL not set');

export async function fetchData<T>(url: string, init?: RequestInit): Promise<T> {
    const response = await fetch(`${BASE_URL}${url}`, init);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
}