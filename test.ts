import { compressObject, compressText, decompressObject, decompressText } from './mod.ts';
import { expect } from 'expect';

Deno.test('it should compress text', () => {
	const compressedText = compressText('Hello, world!');

	expect(compressedText).toBe('DQAAANBIZWxsbywgd29ybGQh');
});

Deno.test('it should decompress text', () => {
	const decompressedText = decompressText('DQAAANBIZWxsbywgd29ybGQh');

	expect(decompressedText).toBe('Hello, world!');
});

Deno.test('it should compress Object', () => {
	const compressedObject = compressObject({ ola: 'mundo' });

	expect(compressedObject).toBe('DwAAAPAAeyJvbGEiOiJtdW5kbyJ9');
});

Deno.test('it should decompress Object', () => {
	const decompressedObject: { ola: string } = decompressObject('DwAAAPAAeyJvbGEiOiJtdW5kbyJ9');

	expect(decompressedObject).toEqual({ ola: 'mundo' });
	expect(decompressedObject).toHaveProperty('ola');
	expect(decompressedObject.ola).toBe('mundo');
});
