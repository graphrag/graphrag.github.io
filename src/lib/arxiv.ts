import {
  HttpClient
} from "@effect/platform"
import { Effect, Either } from "effect"
import * as convert from 'xml-js';

import { Schema } from "effect"

import papers from '../data/papers.json';

const XmlText = Schema.transform(
  Schema.Struct({text:Schema.String}),
  Schema.String,
  {
    strict: true,
    decode: (element) => element.text,
    encode: (s) => ({ text: s })
  }
)

const XmlTextDate = Schema.transform(
  Schema.Struct({text:Schema.String}),
  Schema.Date,
  {
    strict: true,
    decode: (element) => element.text,
    encode: (d) => ({ text: d })
  }
)

const ArxivLink = Schema.Struct({
  href: Schema.String,
  rel: Schema.String,
  type: Schema.optional(Schema.String)
})

const XmlLink = Schema.transform(
  Schema.Struct({
    _attributes: ArxivLink
  }),
  ArxivLink,
  {
    strict: true,
    decode: (element) => element._attributes,
    encode: (attrs) => ({ _attributes: attrs })
  }  
)

const XmlCategory = Schema.transform(
  Schema.Struct({
    _attributes: Schema.Struct({ term: Schema.String })
  }),
  Schema.String,
  {
    strict: true,
    decode: (element) => element._attributes.term,
    encode: (category) => ({_attributes: { term: category, scheme: ""}})
  }
)

export const ArxivEntry = Schema.Struct({
  id: XmlText,
  updated: XmlTextDate,
  published: XmlTextDate,
  title: XmlText,
  summary: XmlText,
  author: Schema.Array(
    Schema.Struct({
      name: XmlText
    })
  ),
  link: Schema.Array(XmlLink),
  category: Schema.Array(XmlCategory)
})

export type ArxivEntry = Schema.Schema.Type<typeof ArxivEntry>

export const ArxivFeed = Schema.Struct({
  feed: Schema.Struct({
    entry: Schema.Array(ArxivEntry)
  })
})

export type ArxivFeed = Schema.Schema.Type<typeof ArxivFeed>

const decodeArxivFeed = Schema.decodeUnknownEither(ArxivFeed)

export const getArxivDetails = (
  arxivid: string
) =>
  HttpClient.get(`http://export.arxiv.org/api/query?id_list=${arxivid}`).pipe(
    Effect.flatMap( (response) => response.text),
    Effect.map( xml => convert.xml2js(xml, {compact:true, textKey:"text", alwaysArray:["entry","author", "category"]})),
    // Effect.tap( raw => Effect.log(raw)),
    Effect.map(decodeArxivFeed),
    Effect.map(Either.map( r => r.feed.entry[0]))
  ) 

  export const extractArxivID = (url:string) => {
    const arxividRE = /.+\/([0-9\.]+)/g;
    const matches = arxividRE.exec(url);
    return (matches !== null) ? matches[1] : '.'
  }
  
export const getPaper = (paper:string) => papers.find( p => (p.arxivid === paper))

