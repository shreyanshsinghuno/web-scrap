const request = require("request");
const cheerio = require("cheerio");
request(
  "https://www.espncricinfo.com/series/ipl-2021-1249214/mumbai-indians-vs-chennai-super-kings-27th-match-1254084/full-scorecard",
  cb
);

function cb(err, code, html) {
  if (err) {
    console.log(err);
  } else {
    handleHtml(html);
  }
}

function handleHtml(html) {
  let selTool = cheerio.load(html);
  let contentArr = selTool(".best-player-name");
  // [i] -> wrap selTool
  // for (let i = 0; i < contentArr.length; i++) {
  //     let data = selTool(contentArr[i]).text();
  //     console.log("data",data);
  // }
  let total = selTool(contentArr).text();
  console.log(total);
}
