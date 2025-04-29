# Usage Examples
[![JSR @lucasliet](https://jsr.io/badges/@lucasliet)](https://jsr.io/@lucasliet)
[![Coverage Status](https://coveralls.io/repos/github/lucasliet/deno-text-compress/badge.svg?branch=main)](https://coveralls.io/github/lucasliet/deno-text-compress?branch=main)
[![publish](https://github.com/lucasliet/deno-text-compress/actions/workflows/publish.yml/badge.svg)](https://github.com/lucasliet/deno-text-compress/actions/workflows/publish.yml)

This module provides functions for compressing and decompressing text and objects using the lz4 compression algorithm and base64 encoding.

## compressText

This function compresses a text string using the lz4 compression algorithm and encodes it as base64.

```typescript
import { compressText } from 'jsr:@lucasliet/textcompress';

const text = 'Hello, world!';
const compressedText = compressText(text);

console.log(compressedText);
```

## decompressText

This function decompresses a text string that was previously compressed and encoded in base64 using the lz4 compression algorithm.

```typescript
import { decompressText } from 'jsr:@lucasliet/textcompress';

const compressedText = '0EhlbGxvLCB3b3JsZCE=';
const decompressedText = decompressText(compressedText);

console.log(decompressedText);
```

## compressObject

This function compresses an object by converting it to JSON, compressing the JSON string using the lz4 compression algorithm, and encoding it as base64.

```typescript
import { compressObject } from 'jsr:@lucasliet/textcompress';

const obj = { ola: 'mundo' };
const compressedObj = compressObject(obj);

console.log(compressedObj);
```

## decompressObject

This function decompresses a string that was previously compressed and encoded in base64 using the lz4 compression algorithm, and parses it as JSON.

```typescript
import { decompressObject } from 'jsr:@lucasliet/textcompress';

const compressedObj = '8AB7Im9sYSI6Im11bmRvIn0='; // Insert a lz4 compressed and base64-encoded string here.
const decompressedObj = decompressObject(compressedObj);

console.log(decompressedObj);
```
---
## Cloudflare Workers
compatible with Cloudflare Workers, using [denoflare](https://docs.deno.com/examples/cloudflare_workers_tutorial/)