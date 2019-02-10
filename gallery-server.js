const express = require('express');
const app = express();
const port = 3000;

const fs = require('fs');
let allPhotos = fs.readdirSync('./gallery/');

let sortedPhotos = allPhotos.sort(() => {

})

let gallery = {};

// galleryDir.forEach(file => {
//   let stats = fs.statSync("./gallery/" + file);
//   let mtime = new Date(stats.mtime);
//
//   if (gallery[mtime.getFullYear()] === undefined)
//     gallery[mtime.getFullYear()] = {};
//
//   if (gallery[mtime.getFullYear()][mtime.getMonth()] === undefined)
//     gallery[mtime.getFullYear()][mtime.getMonth()] = [];
//
//   gallery[mtime.getFullYear()][mtime.getMonth()].push(file);
// });

console.log(gallery);

app.get('/get-all-files-yeet', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Gallery server starting ${port}!`));