const fs = require('fs');
const path = require('path');
const { Marp } = require('@marp-team/marp-core');
const markdownItMark = require('markdown-it-mark');
const markdownItAbbr = require('@gerhobbelt/markdown-it-abbr');
const markdownItAttrs = require('@gerhobbelt/markdown-it-attrs');
const markdownItContainer = require('markdown-it-container');
const { Theme } = require('@marp-team/marpit');

module.exports = (opts) => {
  const marp = new Marp(opts);
  marp.use(markdownItMark)
  marp.use(markdownItAbbr)
  marp.use(markdownItAttrs)
  marp.use(markdownItContainer, 'warning')
  marp.use(markdownItContainer, 'columns')
  marp.themeSet.addTheme(Theme.fromCSS(fs.readFileSync(path.resolve('./marp/theme.css'), { encoding: 'utf-8' })));

  return marp;
}
