/**
 * Asynchronously performs an HTTP request to get a JSON response.
 * Takes a URL as input and optionally a RequestInit object for settings.
 * Returns a Promise
 */
const fetchJson = async <T>(input: string, init?: RequestInit): Promise<T> => {
    const url = new URL(input);
    return fetch(url.href, init).then(async (response) => {
        const json = parseJson(await response.text()) as T;
        if (response.status < 200 || response.status >= 300) {
            throw { status: response.status, ...json };
        }
        return json as T;
    });
};

/**
 * Convert FormData to JSON.
 */
const formDataToJson = (data: FormData) => {
    const keys = [...new Set(Array.from(data.keys()))];
    const object = Object.fromEntries(
        keys.map((key) => [key, data.getAll(key).length > 1 ? data.getAll(key) : data.get(key)]),
    );
    return JSON.parse(JSON.stringify(object));
};

/**
 * Convert String to JSON.
 */
const parseJson = (text: string | null): object => {
    try {
        return text ? JSON.parse(text) : {};
    } catch (error) {
        return {};
    }
};

/**
 * The Storer class is a class that handles storing values using the browser.
 * It has two methods:
 * set = Stores the string based on the given name.
 * get = Retrieves the saved string by name. If not found, it returns null.
 */
class Storer {
    set = (name: string, value: string | number | undefined, type?: Storage): void => {
        const storage = type ?? window.localStorage;
        if (value) {
            storage.setItem(name, String(value));
        } else {
            storage.removeItem(name);
        }
    };

    get = (name: string, type?: Storage): string | null => {
        const storage = type ?? window.localStorage;
        const content = storage.getItem(name);
        return content ?? null;
    };
}

/**
 * Creates an instance of the Storer class
 */
const storage = new Storer();

export { fetchJson, formDataToJson, parseJson, storage };
