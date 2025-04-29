import { compressObject, compressText, decompressObject, decompressText } from './mod.ts';
import { expect } from 'expect';

Deno.test('it should compress text', () => {
	const compressedText = compressText('Hello, world!');

	expect(compressedText).toBe('0EhlbGxvLCB3b3JsZCE=');
});

Deno.test('it should decompress text', () => {
	const decompressedText = decompressText('0EhlbGxvLCB3b3JsZCE=');

	expect(decompressedText).toBe('Hello, world!');
});

Deno.test('it should compress Object', () => {
	const compressedObject = compressObject({ ola: 'mundo' });

	expect(compressedObject).toBe('8AB7Im9sYSI6Im11bmRvIn0=');
});

Deno.test('it should decompress Object', () => {
	const decompressedObject: { ola: string } = decompressObject('8AB7Im9sYSI6Im11bmRvIn0=');

	expect(decompressedObject).toEqual({ ola: 'mundo' });
	expect(decompressedObject).toHaveProperty('ola');
	expect(decompressedObject.ola).toBe('mundo');
});
