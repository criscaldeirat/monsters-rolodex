// The function gets back a Promise because the return is a "await" which is a promise
export const getData = async <T>(url: string): Promise<T> => {
    const response = await fetch(url);
    return await response.json();
}