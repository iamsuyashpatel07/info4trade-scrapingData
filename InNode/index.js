const request = require("request-promise");
const cheerio = require("cheerio");
const fs = require("fs");
const json2csv = require("json2csv").Parser;
const { gzip } = require("zlib");

const company = "https://en.wikipedia.org/wiki/Tesla,_Inc.";


(async() => {

    let companydata = [];
    const response = await request({
        uri: company,
        header: {
            accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "en-IN,en-GB;q=0.9,en-US;q=0.8,en;q=0.7,hi;q=0.6"

        },
        gzip: true
    });

    let $ = cheerio.load(response)
    let companyname = $('div[class="page-heading"] > h1').text()

    let TypeOfCompany = $('td[class="infobox-data category"] > a').text()

    let tradedAs = $('td[class="infobox-data"] > div[class="plainlist"]').text()

    companydata.push({
        companyname,
        TypeOfCompany,
        tradedAs,

    })

    const j2cp = new json2csv()
    const csv = j2cp.parse(companydata)
    fs.writeFileSync("./company.csv", csv, "utf-8")
})();