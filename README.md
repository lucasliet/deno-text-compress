# Usage Examples

This module provides functions for compressing and decompressing text and objects using the lz4 compression algorithm and base64 encoding.

## compressText

This function compresses a text string using the lz4 compression algorithm and encodes it as base64.

```typescript
import { compressText } from 'https://deno.land/x/textcompress/mod.ts';

const text = 'Hello, world!';
const compressedText = compressText(text);

console.log(compressedText);
```

## decompressText

This function decompresses a text string that was previously compressed and encoded in base64 using the lz4 compression algorithm.

```typescript
import { decompressText } from 'https://deno.land/x/textcompress/mod.ts';

const compressedText = 'CwaASGVsbG8sIFdvcmxkIQM=';
const decompressedText = decompressText(compressedText);

console.log(decompressedText);
```

## compressObject

This function compresses an object by converting it to JSON, compressing the JSON string using the lz4 compression algorithm, and encoding it as base64.

```typescript
import { compressObject } from 'https://deno.land/x/textcompress/mod.ts';

const obj = { ola: 'mundo' };
const compressedObj = compressObject(obj);

console.log(compressedObj);
```

## decompressObject

This function decompresses a string that was previously compressed and encoded in base64 using the lz4 compression algorithm, and parses it as JSON.

```typescript
import { decompressObject } from 'https://deno.land/x/textcompress/mod.ts';

const compressedObj = 'CweAeyJvbGEiOiJtdW5kbyJ9Aw=='; // Insert a compressed and base64-encoded string here.
const decompressedObj = decompressObject(compressedObj);

console.log(decompressedObj);
```
