import { decodeBase64, encodeBase64 } from 'base64';
import { compress, decompress } from 'lz4';

/**
 * Compresses a text string using the lz4 compression algorithm and encodes it as base64.
 * @param data - The text string to compress.
 * @returns The compressed and base64-encoded string.
 */
export function compressText(data: string): string {
	return encodeBase64(compress(new TextEncoder().encode(data)));
}

/**
 * Decompresses a text string that was previously compressed and base64-encoded using the lz4 compression algorithm.
 * @param data - The compressed and base64-encoded string.
 * @returns The decompressed text string.
 */
export function decompressText(data: string): string {
	return new TextDecoder().decode(decompress(decodeBase64(data)));
}

/**
 * Compresses an object by converting it to JSON, compressing the JSON string using the lz4 compression algorithm, and encoding it as base64.
 * @param data - The object to compress.
 * @returns The compressed and base64-encoded string.
 */
export function compressObject(data: object): string {
	return compressText(JSON.stringify(data));
}

/**
 * Decompresses a string that was previously compressed and base64-encoded using the lz4 compression algorithm, and parses it as JSON.
 * @param data - The compressed and base64-encoded string.
 * @returns The decompressed object.
 * @template T - The type of the decompressed object.
 */
export function decompressObject<T>(data: string): T {
	return JSON.parse(decompressText(data)) as T;
}
