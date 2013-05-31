# Seekbox

User contributed search redirector. 

![Seekbox](http://f.cl.ly/items/1F461M2J0k1l3z2M2e1N/seekbox.png)

## Usage

Simply enter any search terms and it will use Google by default.

Or search other sites directly using one of the keywords in the supported sites definitions.

Examples:

`imdb iron man 3`

`wiki new york city`

`define polliwog`

## Definitions

##### Search Engines
- google
- bing
- yahoo
- duckduckgo duck ddg
- wolframalpha wolfram

##### Wikis
- wikipedia wiki

##### Entertainment
- imdb

##### Social
- github
- reddit
- hackernews hn

##### Dictionaries
- dictionary define
- thesaurus

##### Programming Documentation
- python python2
- python3
- stackoverflow so



## Contributing

Just follow the same convention as on https://github.com/alfg/seekbox/blob/master/js/app.js

Example:
```javascript
case "wiki":
case "wikipedia":
  location.href = "http://en.wikipedia.org/w/index.php?search=" + query;
  break
```

- Use multiple cases only if necessary.
- `query` is the inputted search query.
- Place the case statement in the appropriate category. If the category is not listed, create one.

## Install your own

As of now, everything is just a bunch of static files. Clone and deploy on any static server.

## License

The MIT License (MIT)

Copyright (c) <year> <copyright holders>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
