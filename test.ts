import { compressObject, compressText, decompressObject, decompressText } from './mod.ts';
import { expect } from 'jsr:@std/expect@1.0.15';

Deno.test('it should compress text', () => {
	const compressedText = compressText('Hello, world!');

	expect(compressedText).toBe('CwaASGVsbG8sIHdvcmxkIQM=');
});

Deno.test('it should decompress text', () => {
	const decompressedText = decompressText('CwaASGVsbG8sIHdvcmxkIQM=');

	expect(decompressedText).toBe('Hello, world!');
});

Deno.test('it should compress Object', () => {
	const compressedObject = compressObject({ ola: 'mundo' });

	expect(compressedObject).toBe('CweAeyJvbGEiOiJtdW5kbyJ9Aw==');
});

Deno.test('it should decompress Object', () => {
	const decompressedObject: { ola: string } = decompressObject('CweAeyJvbGEiOiJtdW5kbyJ9Aw==');

	expect(decompressedObject).toEqual({ ola: 'mundo' });
	expect(decompressedObject).toHaveProperty('ola');
	expect(decompressedObject.ola).toBe('mundo');
});
