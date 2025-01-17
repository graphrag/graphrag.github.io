import { expect, test } from 'vitest';

import { Effect, Either } from "effect"
import { FetchHttpClient } from "@effect/platform"

import { getArxivDetails } from './arxiv'

test('arxiv fetch well-known entry', async () => {
	const arxivid = '2402.07630';

	const program = getArxivDetails(arxivid).pipe(
    Effect.scoped,
    Effect.provide(FetchHttpClient.layer) // provide a real implementation of fetch() 
  );

  const result = await Effect.runPromise(program)

  expect(Either.isRight(result))

  expect(Either.getOrThrow(result).title).toBe("G-Retriever: Retrieval-Augmented Generation for Textual Graph Understanding and Question Answering")

  // DEBUG
  // Either.match(result,
  //   {
  //     onLeft: (e) => console.error(e),
  //     onRight: (result) => console.log(result.feed.entry[0])
  //   }
  // )

});

test('arxiv get many entries', async () => {
	const arxivids = ['2402.07630', '2311.07509', '2306.08302'];

  const program = Effect.forEach(arxivids, (arxivid) =>
    getArxivDetails(arxivid)
  ).pipe(
    Effect.map( Either.all ), // gather all the successes into one array
    Effect.scoped,
    Effect.provide(FetchHttpClient.layer)
  )

  const result = await Effect.runPromise(program)

  expect(Either.isRight(result))

})