const express = require('express');
const request = require('request');
const FeedParser = require('feedparser');
const Stringify = require('streaming-json-stringify');

const url = 'http://www.lexpress.fr/rss/:name.xml';

const app = express();

app.get('/:name', (req, res) => request(url.replace(':name', req.params.name))
  .pipe(new FeedParser())
  .pipe(Stringify())
  .pipe(res));

app.listen(5020);
