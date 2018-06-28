const chokidar = require('chokidar');
const fs = require('fs');
const path = require('path');
const moment = require('moment');
const _ = require('lodash');

const filename = path.resolve(__dirname, 'ironman.sav');

const ironmanWatcher = chokidar.watch(filename);

ironmanWatcher.on('add', () => console.info('Start watching ironman.sav changes'));

ironmanWatcher.on('change', _.debounce(function() {
  const newFilename = `ironman-${moment().format('YYYY-MM-DD-hh-mm-ss')}.sav`;
  console.info('Copy ironman.sav to', newFilename);
  fs.createReadStream(filename)
    .pipe(fs.createWriteStream(newFilename));
}, 10000));
