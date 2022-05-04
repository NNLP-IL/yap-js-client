# YAP Client

[![npm package][npm-img]][npm-url]
[![Issues][issues-img]][issues-url]

YAP was implemented to test the hypothesis on Joint Morpho-Syntactic Processing of Morphologically Rich Languages (MRLs) in a Transition Based Framework.

## How to use

* [Run YAP](https://github.com/onlplab/yap/) and  it via API (can run also via Docker)
* [Install](#install) the YAP Client
* [Use](Usage) The YAP Client Feature
## Install

```bash
npm i @nnlp-il/yap-js-client
```

### Running YAP 
The best way to run YAP is by Docker

```docker
docker run --name yap --restart always -d -p 8000:8000 public.ecr.aws/u8w1h2d8/nlp_yap_api:latest
````

## Usage

```js
const { YapClient } = require("@nnlp-il/yap-js-client");
const test = async () => {
    const client = new YapClient('http://localhost:8001');
    const result = await client.jointAnalysis("גנן גידל גנן בגן");
    console.log(result);
}
test();
```

## API

### jointAnalysis(text)

#### text

Type: `string`

Hebrew text to analyze

#### Output

Object containing the following fields:
* [Morphological Analysis](https://en.wikipedia.org/wiki/Morphological_parsing)
Morphological Analysis shows shows all the options of interpretations for each word in the sentence. 
* [Morphological Disambiguation](http://cs.haifa.ac.il/~shuly/publications/danny-thesis.pdf)
Morphological Disambiguation is the next step after a full Morphological Analysis.
Since the Morphological Analysis gave us all the possible options of each word in the sentence Morphological Disambiguation narrows down on the **most viable** option for each woord in the sentence.
* [Dependency Parsing](https://towardsdatascience.com/natural-language-processing-dependency-parsing-cf094bbbe3f7)
Dependency Parsing is the process to analyze the grammatical structure in a sentence and find out related words as well as the type of the relationship between them.
YAP returns a dependency tree of the inputted sentence.

[npm-img]:https://img.shields.io/npm/v/@nnlp-il/yap-js-client
[npm-url]:https://www.npmjs.com/package/@nnlp-il/yap-js-client
[issues-img]:https://img.shields.io/github/issues/nnlp-il/yap-js-client
[issues-url]:https://github.com/nnlp-il/yap-js-client/issues
