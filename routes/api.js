__path = process.cwd()
const favicon = require('serve-favicon');
const express = require('express');
const router = express.Router();
const request = require('request')
const axios = require("axios");
const { query } = require('express');
const { cekKey } = require('../database/db'); 
const fs = require('fs');
const fetch = require('node-fetch');
const mintake = require("mintake");
const cheerio = require('cheerio');
const primbon = require('primbon-saipul')
const translate = require('@saipulanuar/google-translate-api');
const saipulanuar = require("@saipulanuar/open-apis");
const TinyUrl = require('tinyurl');
const nodemailer = require("nodemailer");
const wikipediajs = require('wikipediajs')
const creator = "teamdev-official"
const hdiiofficial = require('hdiiofficial')

//━━━━━━━━━━━━━━━[ FILE SCRAPER ]━━━━━━━━━━━━━━━━━//

var scp1 = require('../lib/api/scp1');
var listapi = require("../lib/listapi");
var attp = require("../lib/api/attp");
var { fetchJson, runtime, getBuffer } = require('../lib/myfunc');

const { TTScraper } = require("tiktok-scraper-ts");
const TikTokScraper = new TTScraper();
const zrapi = require("zrapi");

//━━━━━━━━━━━━━━━[ GAMES ]━━━━━━━━━━━━━━━━━//

var { stalkff, igstalk } = require("./../lib/api/stalker");
var { topupFreeFiree } = require("./../lib/api/topup");
var { mlstalk} = require("./../lib/api/mlstalk");
var { openai } = require("./../lib/api/open-ai");

//━━━━━━━━━━━━━━━[ DOWNLOADER ]━━━━━━━━━━━━━━━━━//

var { musicaldown, tiktokstalk, jadwalmplid, attp, ttp, downvideo, emoji, emojimix, randomtt } = require("./../lib/api/musicaldown");
var { facebook } = require("./../lib/api/facebook");
var { Joox, FB,Tiktok, mediafiredownloader } = require("./../lib/api/downloader");
var { pinterest } = require("./../lib/api/pinterest");
var { tiktokdl, tiktokdlv3, tiktokdlv4 } = require("./../lib/api/tiktokdl");
var { ytDonlodMp3, ytDonlodMp4, ytPlayMp3, ytPlayMp4, ytSearch } = require("./../lib/api/yt");

//━━━━━━━━━━━━━━━[ OTHERS ]━━━━━━━━━━━━━━━━━//

var { KbbiInfo } = require("./../lib/api/kbbi");
var { telesticker, stickersearch, sholat, styletext, linkwa } = require("./../lib/api/scraper");
var { Cuaca, Lirik } = require('./../lib/api/information');
var { Base, WPUser } = require('./../lib/api/tools');

//━━━━━━━━━━━━━━━[ TEBAK-TEBAKAN ]━━━━━━━━━━━━━━━━━//

var tebakGambar = require('./../lib/api/tebakGambar');


//━━━━━━━━━━━━━━━[ MESSAGE EROR ]━━━━━━━━━━━━━━━━━//
loghandler = {
notparam: {
status: false,
creator: `${creator}`,
code: 406,
message: 'masukan parameter apikey'
},
noturl: {
status: false,
creator: `${creator}`,
code: 406,
message: 'masukan parameter url'
},
notquery: {
status: false,
creator: `${creator}`,
code: 406,
result: 'masukkan parameter query'
},
notkata: {
status: false,
creator: `${creator}`,
code: 406,
result: 'masukan parameter kata'
},
nottext: {
status: false,
creator: `${creator}`,
code: 406,
result: 'masukan parameter text'
},
nottext2: {
status: false,
creator: `${creator}`,
code: 406,
message: 'masukan parameter text2'
},
notnabi: {
status: false,
creator: `${creator}`,
code: 406,
message: 'masukan parameter nabi'
},
nottext3: {
status: false,
creator: `${creator}`,
code: 406,
message: 'masukan parameter text3'
},
nottheme: {
status: false,
creator: `${creator}`,
code: 406,
result: 'masukan parameter theme'
},
notusername: {
status: false,
creator: `${creator}`,
code: 406,
message: 'masukan parameter username'
},
notid: {
status: false,
creator: `${creator}`,
code: 406,
message: 'masukan parameter id'
},
notvalue: {
status: false,
creator: `${creator}`,
code: 406,
message: 'masukan parameter value'
},
invalidKey: {
status: false,
creator: `${creator}`,
code: 404,
result: 'APIKEY SALAH, pastikan anda pernah berlangganan di https://saipulanuar.herokuapp.com'
},
invalidlink: {
status: false,
creator: `${creator}`,
result: 'error, mungkin link anda tidak valid.'
},
invalidkata: {
status: false,
creator: `${creator}`,
result: 'error, mungkin kata tidak ada dalam api.'
},
error: {
status: false,
creator: `${creator}`,
result: '500 - internal server error'
}
}

//━━━━━━━━━━━━━━━[ CEK APIKEY ]━━━━━━━━━━━━━━━━━//
router.get('/cekKey', async (req, res, next) => {
var Apikey = req.query.apikey;
let pemilik = '<%= username %>'

if(!Apikey) return res.json(loghandler.notparam)
if (Apikey === undefined) return res.status(404).send({
status: 404,
creator: `${creator}`,
message: `Input Parameter apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.status(404).send({
status: 404,
result: {
apikey: `${Apikey}`,
status:`apikey ${Apikey} not found, please register first!`
}
});
res.status(200).send({
status: 200, 
result: {
apikey: `${Apikey}`,
status: 'Active'
}
})
})

//━━━━━━━━━━━━━━━[ DOWNLOADER ]━━━━━━━━━━━━━━━━━//
router.get('/download/fb', async (req, res, next) => {
var Apikey = req.query.apikey;
var url = req.query.url
const kimak = `https://facebook-reel-and-video-downloader.p.rapidapi.com/app/main.php?url=${url}`;

if(!Apikey) return res.json(loghandler.notparam)
if (url === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter url & apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
const options = {
method: 'GET',
headers: {
'X-RapidAPI-Key': '7217cae559msh07020e10a271501p16760bjsn382d94ffbbbc',
'X-RapidAPI-Host': 'facebook-reel-and-video-downloader.p.rapidapi.com'
}
};
fetch(kimak, options).then(data => {
var result = data
res.status(200).send({
status: 200, 
creator: `${creator}`,
result: result
})
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

router.get('/download/instagram', async (req, res, next) => {
var Apikey = req.query.apikey;
var url = req.query.url

if(!Apikey) return res.json(loghandler.notparam)
if (url === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter url & apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
saipulanuar
.insta_post(url).then(data => {
res.status(200).send({
status: 200, 
creator: `${creator}`,
result: data
})
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

router.get('/download/allvideo', async (req, res, next) => {
var Apikey = req.query.apikey;
var url = req.query.url

if(!Apikey) return res.json(loghandler.notparam)
if (url === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter url & apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
downvideo(url).then(data => {
var result = data.medias
res.status(200).send({
status: 200, 
creator: `${creator}`,
result: result
})
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

router.get('/download/mediafire', async (req, res, next) => {
var Apikey = req.query.apikey;
var url = req.query.url

if(!Apikey) return res.json(loghandler.notparam)
if (url === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter url & apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
mediafiredownloader(url).then(data => {
var result = data
res.status(200).send({
status: 200, 
creator: `${creator}`,
result: result
})
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

router.get('/download/happymod', async (req, res, next) => {
var Apikey = req.query.apikey;
var query = req.query.query

if(!Apikey) return res.json(loghandler.notparam)
if (query === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter query & apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
scp1.happymod(query).then(data => {
var result = data
res.status(200).send({
status: 200, 
creator: `${creator}`,
result: result
})
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

router.get('/download/pinterest', async (req, res, next) => {
var Apikey = req.query.apikey;
var query = req.query.query

if(!Apikey) return res.json(loghandler.notparam)
if (query === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter query & apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
pinterest(query).then(result => {
const url_download = result[Math.floor(Math.random() * result.length)];
res.status(200).send({
status: 200, 
creator: `${creator}`,
result: {
url: url_download
}
})
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

router.get('/download/soundcloud', async (req, res, next) => {
var Apikey = req.query.apikey;
var url = req.query.url

if(!Apikey) return res.json(loghandler.notparam)
if (url === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter url & apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
listapi.soundcloud(url).then(data => {
res.status(200).send({
status: 200, 
creator: `${creator}`,
result: data
})
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

router.get('/download/tiktokview', async (req, res, next) => {
var Apikey = req.query.apikey;
var url = req.query.url

if(!Apikey) return res.json(loghandler.notparam)
if (url === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter url & apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
TikTokScraper.video(url).then(data => {
res.status(200).send({
status: 200, 
creator: `${creator}`,
result: data
})
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

router.get('/download/stickersearch', async (req, res, next) => {
var Apikey = req.query.apikey;
var text = req.query.text

if(!Apikey) return res.json(loghandler.notparam)
if (text === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter text & apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
stickersearch(text).then(data => {
const url_download = data.sticker_url[Math.floor(Math.random() * data.sticker_url.length)];
const title = result.title
res.status(200).send({
status: 200, 
creator: `${creator}`,
result: {
title: title,
url: url_download
}
})
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

router.get('/download/telesticker', async (req, res, next) => {
var Apikey = req.query.apikey;
var url = req.query.url

if(!Apikey) return res.json(loghandler.notparam)
if (url === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter url & apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
telesticker(url).then(data => {
const url_download = data[Math.floor(Math.random() * data.length)];
res.status(200).send({
status: 200, 
creator: `${creator}`,
result: url_download
})
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

router.get('/download/tiktok', async (req, res, next) => {
var Apikey = req.query.apikey;
var url = req.query.url

if(!Apikey) return res.json(loghandler.notparam)
if (url === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter url & apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
listapi.ttdl(url).then(data => {
res.status(200).send({
status: 200, 
creator: `${creator}`,
result: data
})
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

router.get('/download/ytmp4', async (req, res, next) => {
var Apikey = req.query.apikey;
var url = req.query.url

if(!Apikey) return res.json(loghandler.notparam)
if (url === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter url & apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
ytDonlodMp4(url).then(data => {
res.status(200).send({
status: 200, 
creator: `${creator}`,
result: data
})
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

router.get('/download/ytmp3', async (req, res, next) => {
var Apikey = req.query.apikey;
var url = req.query.url

if(!Apikey) return res.json(loghandler.notparam)
if (url === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter url & apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
ytDonlodMp3(url).then(data => {
res.status(200).send({
status: 200, 
creator: `${creator}`,
result: data
})
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

router.get('/download/playmp3', async (req, res, next) => {
var Apikey = req.query.apikey;
var query = req.query.query

if(!Apikey) return res.json(loghandler.notparam)
if (query === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter query & apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
ytPlayMp3(query).then(data => {
res.status(200).send({
status: 200, 
creator: `${creator}`,
result: data
})
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

router.get('/download/playmp4', async (req, res, next) => {
var Apikey = req.query.apikey;
var query = req.query.query

if(!Apikey) return res.json(loghandler.notparam)
if (query === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter query & apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
ytPlayMp4(query).then(data => {
res.status(200).send({
status: 200, 
creator: `${creator}`,
result: data
})
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

router.get('/download/ytsearch', async (req, res, next) => {
var Apikey = req.query.apikey;
var query = req.query.query

if(!Apikey) return res.json(loghandler.notparam)
if (query === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter query & apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
ytSearch(query).then(data => {
res.status(200).send({
status: 200, 
creator: `${creator}`,
result: data
})
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
})
})

//━━━━━━━━━━━━━━━[ SEARCH ]━━━━━━━━━━━━━━━━━//
router.get('/search/pinterest', async (req, res, next) => {
var Apikey = req.query.apikey;
var query = req.query.query

if(!Apikey) return res.json(loghandler.notparam)
if (query === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter query & apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
listapi.pinterest(query).then(data => {
res.status(200).send({
status: 200, 
creator: `${creator}`,
result: data
})
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

router.get('/search/wikimedia', async (req, res, next) => {
var Apikey = req.query.apikey;
var query = req.query.query

if(!Apikey) return res.json(loghandler.notparam)
if (query === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter query & apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
listapi.wikimedia(query).then(data => {
const wiki = data[Math.floor(Math.random() * data.length)];
res.status(200).send({
status: 200, 
creator: `${creator}`,
result: wiki
})
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

router.get('/search/ssweb', async (req, res, next) => {
var Apikey = req.query.apikey;
var url = req.query.url;

if(!Apikey) return res.json(loghandler.notparam)
if (url === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter url & apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
listapi.ssweb(url).then(data => {
res.set({'Content-Type': 'image/png'})
res.status(200).send(data)
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

router.get('/search/ssweb2', async (req, res, next) => {
var Apikey = req.query.apikey;
var url = req.query.url;

if(!Apikey) return res.json(loghandler.notparam)
if (url === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter url & apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');

await getBuffer(`https://image.thum.io/get/width/1900/crop/1000/fullpage/${url}`).then(data => {
res.set({'Content-Type': 'image/png'})
res.status(200).send(data)
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

router.get('/search/linkwa', async (req, res, next) => {
var Apikey = req.query.apikey;
var query = req.query.query;

if(!Apikey) return res.json(loghandler.notparam)
if (query === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter query & apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
linkwa(query).then(data => {
res.status(200).send({
status: 200, 
creator: `${creator}`,
result: data
})
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

//━━━━━━━━━━━━━━━[ OTHERS ]━━━━━━━━━━━━━━━━━//
router.get('/other/ppcouple', async (req, res, next) => {
var Apikey = req.query.apikey;
var query = req.query.query;

if(!Apikey) return res.json(loghandler.notparam)
if (query === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter query & apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
var gis = require('g-i-s')
gis(query, logResults)

async function logResults(error, results) {
if (error) {
res.json(loghandler.notfound)
}
else {
if (!results[0]) return res.json(loghandler.notfound)
const ppcp = results[Math.floor(Math.random() * results.length)];
var kimak = ppcp.url
const data = await getBuffer(kimak)
 await fs.writeFileSync(__path +'/tmp/gimage.jpeg', data)
res.sendFile(__path+'/tmp/gimage.jpeg')
}
}
})

//━━━━━━━━━━━━━━━[ STALKER ]━━━━━━━━━━━━━━━━━//
router.get('/stalker/tiktokstalk', async (req, res, next) => {
var Apikey = req.query.apikey;
var username = req.query.username

if(!Apikey) return res.json(loghandler.notparam)
if (username === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter username & apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
tiktokstalk(username).then(data => {
res.status(200).send({
status: 200, 
creator: `${creator}`,
result: data
})
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

router.get('/stalker/npm', async (req, res, next) => {
var Apikey = req.query.apikey;
var username = req.query.username

if(!Apikey) return res.json(loghandler.notparam)
if (username === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter username & apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
fetchJson(`https://registry.npmjs.org/${username}`).then(data => {
res.status(200).send({
status: 200, 
creator: `${creator}`,
result: data
})
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

router.get('/stalker/epep', async (req, res, next) => {
var Apikey = req.query.apikey;
var id = req.query.id

if(!Apikey) return res.json(loghandler.notparam)
if (id === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter id & apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
stalkff(id).then(data => {
res.status(200).send({
status: 200, 
creator: `${creator}`,
result: data
})
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

router.get('/stalker/ml', async (req, res, next) => {
var Apikey = req.query.apikey;
var id = req.query.id
var server = req.query.server

if(!Apikey) return res.json(loghandler.notparam)
if (id === undefined || server === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter id, server & apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
mlstalk(id, server).then(data => {
res.status(200).send({
status: 200, 
creator: `${creator}`,
result: {
Id: id,
Server: server,
Username: data.userName
}
})
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

router.get('/stalker/higgs', async (req, res, next) => {
var Apikey = req.query.apikey;
var id = req.query.id
var signature = '798e4a62e37692f3d3696c4020c7b0b0'

if(!Apikey) return res.json(loghandler.notparam)
if (id === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter id & apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
fetchJson(`https://v1.apigames.id/merchant/M221008ISFN1832UF/cek-username/higgs?user_id=${id}&signature=${signature}`).then(data => {
res.status(200).send({
status: 200, 
creator: `${creator}`,
result: data
})
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

router.get('/stalker/aov', async (req, res, next) => {
var Apikey = req.query.apikey;
var id = req.query.id

if(!Apikey) return res.json(loghandler.notparam)
if (id === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter id & apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
const options = {
method: 'GET',
headers: {
'X-RapidAPI-Key': 'eba684a286msh8f9c9a40acf9d21p110bcfjsn9f04d418e8da',
'X-RapidAPI-Host': 'check-username-games.p.rapidapi.com'
}
};
fetchJson(`https://check-username-games.p.rapidapi.com/check-username/aov?userId=${id}`, options).then(data => {
res.status(200).send({
status: 200, 
creator: `${creator}`,
result: {
NamaGame: 'AOV',
Id: `${id}`,
Username: `${data}`
}
})
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

router.get('/stalker/codm', async (req, res, next) => {
var Apikey = req.query.apikey;
var id = req.query.id

if(!Apikey) return res.json(loghandler.notparam)
if (id === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter id & apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
const options = {
method: 'GET',
headers: {
'X-RapidAPI-Key': 'eba684a286msh8f9c9a40acf9d21p110bcfjsn9f04d418e8da',
'X-RapidAPI-Host': 'check-username-games.p.rapidapi.com'
}
};
fetchJson(`https://check-username-games.p.rapidapi.com/check-username/codm?userId=${id}`, options).then(data => {
res.status(200).send({
status: 200, 
creator: `${creator}`,
result: {
NamaGame: 'CODM',
Id: `${id}`,
Username: `${data}`
}
})
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

router.get('/stalker/speed-drifters', async (req, res, next) => {
var Apikey = req.query.apikey;
var id = req.query.id

if(!Apikey) return res.json(loghandler.notparam)
if (id === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter id & apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
const options = {
method: 'GET',
headers: {
'X-RapidAPI-Key': 'eba684a286msh8f9c9a40acf9d21p110bcfjsn9f04d418e8da',
'X-RapidAPI-Host': 'check-username-games.p.rapidapi.com'
}
};
fetchJson(`https://check-username-games.p.rapidapi.com/check-username/speed-drifters?userId=${id}`, options).then(data => {
res.status(200).send({
status: 200, 
creator: `${creator}`,
result: {
NamaGame: 'Speed Drifters',
Id: `${id}`,
Username: `${data}`
}
})
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

router.get('/stalker/life-after', async (req, res, next) => {
var Apikey = req.query.apikey;
var id = req.query.id

if(!Apikey) return res.json(loghandler.notparam)
if (id === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter id & apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
const options = {
method: 'GET',
headers: {
'X-RapidAPI-Key': 'eba684a286msh8f9c9a40acf9d21p110bcfjsn9f04d418e8da',
'X-RapidAPI-Host': 'check-username-games.p.rapidapi.com'
}
};
fetchJson(`https://check-username-games.p.rapidapi.com/check-username/life-after?userId=${id}&server=SandCastle`, options).then(data => {
res.status(200).send({
status: 200, 
creator: `${creator}`,
result: {
NamaGame: 'Life After',
Id: `${id}`,
Username: `${data}`
}
})
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

//━━━━━━━━━━━━━━━[ MUSIC/LIRIK ]━━━━━━━━━━━━━━━━━//
router.get('/music/joox', async (req, res, next) => {
var Apikey = req.query.apikey;
var query = req.query.query

if(!Apikey) return res.json(loghandler.notparam)
if (query === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter query & apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
Joox(query).then(data => {
res.status(200).send(data)
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

router.get('/music/liriklagu', async (req, res, next) => {
var Apikey = req.query.apikey;
var query = req.query.query

if(!Apikey) return res.json(loghandler.notparam)
if (query === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter query & apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
Lirik(query).then(data => {
res.status(200).send({
status: 200, 
creator: `${creator}`,
result: data.data
})
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

//━━━━━━━━━━━━━━━[ ISLAMIC ]━━━━━━━━━━━━━━━━━//
router.get('/muslim/hadits', async (req, res, next) => {
var Apikey = req.query.apikey;
var kitab = req.query.kitab
var nomor = req.query.nomor

if(!Apikey) return res.json(loghandler.notparam)
if (kitab === undefined || nomor === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter kitab, nomor & apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
fetchJson(`https://hadits-api-zhirrr.vercel.app/books/${kitab}/${nomor}`).then(data => {
res.status(200).send({
status: 200, 
creator: `${creator}`,
result: data.data
})
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

router.get('/muslim/quran', async (req, res, next) => {
var Apikey = req.query.apikey;
var surah = req.query.surah
var ayat = req.query.ayat

if(!Apikey) return res.json(loghandler.notparam)
if (surah === undefined || ayat === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter surah, ayat & apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
fetchJson(`https://alquran-apiii.vercel.app/surah/${surah}/${ayat}`).then(data => {
res.status(200).send({
status: 200, 
creator: `${creator}`,
result: data.data
})
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

router.get('/muslim/tafsirsurah', async (req, res, next) => {
var Apikey = req.query.apikey;
var surah = req.query.surah

if(!Apikey) return res.json(loghandler.notparam)
if (surah === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter surah & apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
listapi.tafsirsurah(surah).then(data => {
const tafsirsurah = data[Math.floor(Math.random() * data.length)];
res.status(200).send({
status: 200, 
creator: `${creator}`,
result: tafsirsurah
})
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

router.get('/muslim/tahlil', async (req, res, next) => {
var Apikey = req.query.apikey;

if(!Apikey) return res.json(loghandler.notparam)
if (Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
var tahlil = JSON.parse(
fs.readFileSync(__path + '/lib/data/tahlil.json')
)
res
.status(200)
.json({
code: 200,
success: true,
creator: `${creator}`,
result: tahlil
})
})

router.get('/muslim/wirid', async (req, res, next) => {
var Apikey = req.query.apikey;

if(!Apikey) return res.json(loghandler.notparam)
if (Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
var wirid = JSON.parse(
fs.readFileSync(__path + '/lib/data/tahlil.json')
)
res
.status(200)
.json({
code: 200,
success: true,
creator: `${creator}`,
result: wirid
})
})

router.get('/muslim/asmaulhusna', async (req, res, next) => {
var Apikey = req.query.apikey;

if(!Apikey) return res.json(loghandler.notparam)
if (Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
var asmaulhusna = JSON.parse(
fs.readFileSync(__path + '/lib/data/islamic/asmaul_husna.json')
)
res
.status(200)
.json({
code: 200,
success: true,
creator: `${creator}`,
result: asmaulhusna
})
})

router.get('/muslim/ayatkursi', async (req, res, next) => {
var Apikey = req.query.apikey;

if(!Apikey) return res.json(loghandler.notparam)
if (Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter apikey`
});
var ayatkursi = JSON.parse(
fs.readFileSync(__path + '/lib/data/islamic/ayatkursi.json')
)
res
.status(200)
.json({
code: 200,
success: true,
creator: `${creator}`,
result: ayatkursi.data
})
})

router.get('/muslim/kisahnabi', async (req, res, next) => {
var Apikey = req.query.apikey;
var nabi = req.query.nabi;

if(!Apikey) return res.json(loghandler.notparam)
if (nabi === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter nabi & apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
var kisahNabi = JSON.parse(
fs.readFileSync(__path + `/lib/data/kisahnabi/${nabi}.json`)
)
res
.status(200)
.json({
code: 200,
success: true,
creator: `${creator}`,
result: kisahNabi
})
})

router.get('/muslim/niatshalat', async (req, res, next) => {
var Apikey = req.query.apikey;

if(!Apikey) return res.json(loghandler.notparam)
if (Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
var niatshalat = JSON.parse(
fs.readFileSync(__path + '/lib/data/islamic/niatsholat.json')
)
res
.status(200)
.json({
code: 200,
success: true,
creator: `${creator}`,
result: niatshalat
})
})

router.get('/muslim/doaharian', async (req, res, next) => {
var Apikey = req.query.apikey;

if(!Apikey) return res.json(loghandler.notparam)
if (Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
var doaharian = JSON.parse(
fs.readFileSync(__path + '/lib/data/islamic/doaharian.json')
)
res
.status(200)
.json({
code: 200,
success: true,
creator: `${creator}`,
result: doaharian
})
})

router.get('/muslim/bacaanshalat', async (req, res, next) => {
var Apikey = req.query.apikey;

if(!Apikey) return res.json(loghandler.notparam)
if (Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
var bacaanshalat = JSON.parse(
fs.readFileSync(__path + '/lib/data/islamic/niatsholat.json')
)
res
.status(200)
.json({
code: 200,
success: true,
creator: `${creator}`,
result: bacaanshalat
})
})

router.get('/muslim/jadwalshalat', async (req, res, next) => {
var Apikey = req.query.apikey;
var kota = req.query.kota;

if(!Apikey) return res.json(loghandler.notparam)
if (kota === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter kota & apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
sholat(kota).then(data => {
res.status(200).send({
status: 200, 
creator: `${creator}`,
result: data
})
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

//━━━━━━━━━━━━━━━[ GAMES ]━━━━━━━━━━━━━━━━━//
router.get('/kuis/caklontong', async (req, res, next) => {
var Apikey = req.query.apikey;

if(!Apikey) return res.json(loghandler.notparam)
if (Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
fetchJson(`https://raw.githubusercontent.com/saipulanuar/Api-Github/main/random/caklontong.json`).then(data => {
var result = data[Math.floor(Math.random() * data.length)];
res.status(200).send({
status: 200, 
creator: `${creator}`,
result: result
})
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

router.get('/kuis/asahotak', async (req, res, next) => {
var Apikey = req.query.apikey;

if(!Apikey) return res.json(loghandler.notparam)
if (Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
fetchJson(`https://raw.githubusercontent.com/saipulanuar/Api-Github/main/random/asahotak.json`).then(data => {
var result = data[Math.floor(Math.random() * data.length)];
res.status(200).send({
status: 200, 
creator: `${creator}`,
result: result
})
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

router.get('/kuis/family100', async (req, res, next) => {
var Apikey = req.query.apikey;

if(!Apikey) return res.json(loghandler.notparam)
if (Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
fetchJson(`https://raw.githubusercontent.com/saipulanuar/Api-Github/main/random/family100.json`).then(data => {
var result = data[Math.floor(Math.random() * data.length)];
res.status(200).send({
status: 200, 
creator: `${creator}`,
result: result
})
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

router.get('/kuis/siapakahaku', async (req, res, next) => {
var Apikey = req.query.apikey;

if(!Apikey) return res.json(loghandler.notparam)
if (Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
fetchJson(`https://raw.githubusercontent.com/saipulanuar/Api-Github/main/random/siapakahaku.json`).then(data => {
var result = data[Math.floor(Math.random() * data.length)];
res.status(200).send({
status: 200, 
creator: `${creator}`,
result: result
})
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

router.get('/kuis/susunkata', async (req, res, next) => {
var Apikey = req.query.apikey;

if(!Apikey) return res.json(loghandler.notparam)
if (Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
fetchJson(`https://raw.githubusercontent.com/saipulanuar/Api-Github/main/random/susunkata.json`).then(data => {
var result = data[Math.floor(Math.random() * data.length)];
res.status(200).send({
status: 200, 
creator: `${creator}`,
result: result
})
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

router.get('/kuis/tebaktebakan', async (req, res, next) => {
var Apikey = req.query.apikey;

if(!Apikey) return res.json(loghandler.notparam)
if (Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
var soal = JSON.parse(
fs.readFileSync(__path + '/lib/api/games/tebaktebakan.json')
)
res.status(200).send({
status: 200, 
creator: `${creator}`,
result: {
...soal[~~(Math.random() * soal.length)] 
 }
})
})

router.get('/kuis/tebaklirik', async (req, res, next) => {
var Apikey = req.query.apikey;

if(!Apikey) return res.json(loghandler.notparam)
if (Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
var soal = JSON.parse(
fs.readFileSync(__path + '/lib/api/games/tebaklirik.json')
)
res.status(200).send({
status: 200, 
creator: `${creator}`,
result: {
...soal[~~(Math.random() * soal.length)] 
 }
})
})

router.get('/kuis/tekateki', async (req, res, next) => {
var Apikey = req.query.apikey;

if(!Apikey) return res.json(loghandler.notparam)
if (Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
var soal = JSON.parse(
fs.readFileSync(__path + '/lib/api/games/tekateki.json')
)
res.status(200).send({
status: 200, 
creator: `${creator}`,
result: {
...soal[~~(Math.random() * soal.length)] 
 }
})
})

router.get('/kuis/tebakjenaka', async (req, res, next) => {
var Apikey = req.query.apikey;

if(!Apikey) return res.json(loghandler.notparam)
if (Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
var soal = JSON.parse(
fs.readFileSync(__path + '/lib/api/games/tebakjenaka.json')
)
res.status(200).send({
status: 200, 
creator: `${creator}`,
result: {
...soal[~~(Math.random() * soal.length)] 
 }
})
})

router.get('/kuis/tebakGambar', async (req, res, next) => {
var Apikey = req.query.apikey;

if(!Apikey) return res.json(loghandler.notparam)
if (Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
var soal = JSON.parse(
fs.readFileSync(__path + '/lib/api/games/tebakGambar.json')
)
res.status(200).send({
status: 200, 
creator: `${creator}`,
result: {
...soal[~~(Math.random() * soal.length)] 
 }
})
})

router.get('/kuis/tebakGambar', async (req, res, next) => {
var Apikey = req.query.apikey;

if(!Apikey) return res.json(loghandler.notparam)
if (Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
var soal = JSON.parse(
fs.readFileSync(__path + '/lib/api/games/tebakGambar.json')
)
res.status(200).send({
status: 200, 
creator: `${creator}`,
result: {
...soal[~~(Math.random() * soal.length)] 
}
})
})

 router.get('/kuis/tebakbendera', async (req, res, next) => {
var Apikey = req.query.apikey;

if(!Apikey) return res.json(loghandler.notparam)
if (Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
var soal = JSON.parse(
fs.readFileSync(__path + '/lib/api/games/tebakbendera.json')
)
res.status(200).send({
status: 200, 
creator: `${creator}`,
result: {
...soal[~~(Math.random() * soal.length)] 
}
})
})

//━━━━━━━━━━━━━━━[ PRIMBON ]━━━━━━━━━━━━━━━━━//
router.get('/random/artinama', async (req, res, next) => {
var Apikey = req.query.apikey;
var name = req.query.name;

if(!Apikey) return res.json(loghandler.notparam)
if (name === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter nama & apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
primbon.artiNama(name).then(data => {
res.status(200).send({
status: 200, 
creator: `${creator}`,
result: data
})
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

//━━━━━━━━━━━━━━━[ TOOLS ]━━━━━━━━━━━━━━━━━//
router.get('/tools/sms', async (req, res, next) => {
var Apikey = req.query.apikey;
var query = req.query.query;

if(!Apikey) return res.json(loghandler.notparam)
if (query === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter query & apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
fetchJson(`https://id.jagreward.com/member/verify-mobile/${query}`).then(data => {
res.status(200).send({
status: 200, 
creator: `${creator}`,
result: data.message
})
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

router.get('/tools/tlpn', async (req, res, next) => {
var Apikey = req.query.apikey;
var query = req.query.query;

if(!Apikey) return res.json(loghandler.notparam)
if (query === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter query & apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
fetchJson(`https://id.jagreward.com/member/verify-mobile/` + query).then(data => {
res.status(200).send({
status: 200, 
creator: `${creator}`,
result: data.message
})
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

router.get('/text-to-audio/tts', async (req, res, next) => {
var Apikey = req.query.apikey;
var text = req.query.text;
var idbahasa = req.query.idbahasa;

if (text === undefined || idbahasa === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter text, idbahasa dan apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
var data = `https://salism3api.pythonanywhere.com/text2sound/?text=${text}&languageCode=${idbahasa}`
const bear2 = await fetch(data).then(v => v.buffer())
 await fs.writeFileSync(__path +'/tmp/tts.mp3', bear2)
res.sendFile(__path+'/tmp/tts.mp3')
})

router.get('/tools/fakedata', async (req, res, next) => {
var Apikey = req.query.apikey;

if(!Apikey) return res.json(loghandler.notparam)
if (Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
fetchJson(`https://random-data-api.com/api/address/random_address?size=3`).then(data => {
var result = data[Math.floor(Math.random() * data.length)];
res.status(200).send({
status: 200, 
creator: `${creator}`,
result: result
})
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

router.get('/tools/tinyurl', async (req, res, next) => {
var Apikey = req.query.apikey;
var url = req.query.url;

if(!Apikey) return res.json(loghandler.notparam)
if (url === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter url & apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
TinyUrl.shorten(url).then(data => {
res.status(200).send({
status: 200, 
creator: `${creator}`,
result: data
})
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

router.get('/tools/wpuser', async (req, res, next) => {
var Apikey = req.query.apikey;
var url = req.query.url;

if(!Apikey) return res.json(loghandler.notparam)
if (url === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter url & apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
WPUser(url).then(data => {
res.status(200).send({
status: 200, 
creator: `${creator}`,
result: data
})
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

router.get('/tools/sendmailCareer', async (req, res, next) => {
var Apikey = req.query.apikey;
var from= req.query.from;
var to= req.query.to;
var subject= req.query.subject;
var text= req.query.text;

if(!Apikey) return res.json(loghandler.notparam)
if (from === undefined || to === undefined || subject === undefined || text === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter from, to, subject, text & apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
var transporter = nodemailer.createTransport({
service: 'mailgun',
auth: {
user: 'postmaster@sandbox239bdf0c53e34161ba6e31f1c2bbb7eb.mailgun.org',
pass: 'd3e5519dcbedaa5f07f7ce5961a81e11-2de3d545-cf61b8df'
}
});
var mailOptions = {
from: `${creator} SEND MAIL <${from}>`,
to: `${to}`,
subject: `${subject}`,
text: `${text}`
}
transporter.sendMail(mailOptions).then(data => {
res.status(200).send({
status: 200, 
creator: `${creator}`,
result: {
From: `${mailOptions.from}`,
To: `${mailOptions.to}`,
Subject: `${mailOptions.subject}`,
Text: `${mailOptions.text}`,
Emailsent: `${data.response}`
}
})
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

//━━━━━━━━━━━━━━━[ INFORMATION ]━━━━━━━━━━━━━━━━━//
router.get('/informasi/translate', async (req, res, next) => {
var Apikey = req.query.apikey;
var text = req.query.text;
var dari = req.query.from;
var lang = req.query.to;

if(!Apikey) return res.json(loghandler.notparam)
if (text === undefined || dari === undefined || lang === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter text, from, to & apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
translate(`${text}`, {from: `${dari}`, to: `${lang}`}).then(data => {
res.status(200).send({
status: 200, 
creator: `${creator}`,
result: {
from: `${dari}`,
to: `${lang}`,
hasil: `${data.text}`
}
})
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

router.get('/informasi/wikipedia', async (req, res, next) => {
var Apikey = req.query.apikey;
var search = req.query.search;

if(!Apikey) return res.json(loghandler.notparam)
if (search === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter search & apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
wikipediajs.search(search).then(data => {
var bear = data.query
res.status(200).send({
status: 200, 
creator: `${creator}`,
result: bear
})
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

router.get('/informasi/covidworld', async (req, res, next) => {
var Apikey = req.query.apikey;

if(!Apikey) return res.json(loghandler.notparam)
if (Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
fetchJson(`https://api-covid19-indonesia-saipulanuar.vercel.app/api/indonesia/provinsi`).then(data => {
res.status(200).send({
status: 200, 
creator: `${creator}`,
result: data
})
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

router.get('/informasi/covidindo', async (req, res, next) => {
var Apikey = req.query.apikey;
var provinsi = req.query.provinsi

if(!Apikey) return res.json(loghandler.notparam)
if (provinsi === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter provinsi & apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
fetchJson(`https://api-covid19-indonesia-saipulanuar.vercel.app/api/indonesia/provinsi?name=${provinsi}`).then(data => {
res.status(200).send({
status: 200, 
creator: `${creator}`,
result: data
})
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

router.get('/informasi/cuaca', async (req, res, next) => {
var Apikey = req.query.apikey;
var provinsi = req.query.provinsi
var kota = req.query.kota

if(!Apikey) return res.json(loghandler.notparam)
if (provinsi === undefined || kota === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter provinsi, kota & apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
fetchJson(`https://cuaca-gempa-rest-api-saipulanuar.vercel.app/weather/${provinsi}/${kota}`).then(data => {
res.status(200).send({
status: 200, 
creator: `${creator}`,
result: data.data
})
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

router.get('/informasi/gempa', async (req, res, next) => {
var Apikey = req.query.apikey;

if(!Apikey) return res.json(loghandler.notparam)
if (Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
fetchJson(`https://cuaca-gempa-rest-api-saipulanuar.vercel.app/quake`).then(data => {
res.status(200).send({
status: 200, 
creator: `${creator}`,
result: data.data
})
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

//━━━━━━━━━━━━━━━[ TEXT PRO ]━━━━━━━━━━━━━━━━━//
router.get('/textpro/natural-leaves', async (req, res, next) => {
var Apikey = req.query.apikey;
var text = req.query.text

if(!Apikey) return res.json(loghandler.notparam)
if (text === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter text & apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
listapi.textpro("https://textpro.me/natural-leaves-text-effect-931.html", [text])
.then(data => {
res.set({'Content-Type': 'image/png'})
res.status(200).send(data)
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

router.get('/textpro/black-pink', async (req, res, next) => {
var Apikey = req.query.apikey;
var text = req.query.text

if(!Apikey) return res.json(loghandler.notparam)
if (text === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter text & apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
listapi.textpro("https://textpro.me/create-blackpink-logo-style-online-1001.html", [text])
.then(data => {
res.set({'Content-Type': 'image/png'})
res.status(200).send(data)
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

router.get('/textpro/blackpink', async (req, res, next) => {
var Apikey = req.query.apikey;
var text = req.query.text;

if (text === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter text dan apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
mintake 
.ephoto3("https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html", [text])
.then((data) => {
var result = data.image
var bear = `https://s1.ephoto360.com${result}`
res.status(200).send({
status: 200, 
creator: `${creator}`,
result: bear
})
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

router.get('/textpro/horrorblood', async (req, res, next) => {
var Apikey = req.query.apikey;
var text = req.query.text

if(!Apikey) return res.json(loghandler.notparam)
if (text === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter text & apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
listapi.textpro("https://textpro.me/horror-blood-text-effect-online-883.html", [text])
.then(data => {
res.set({'Content-Type': 'image/png'})
res.status(200).send(data)
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

router.get('/textpro/drop-water', async (req, res, next) => {
var Apikey = req.query.apikey;
var text = req.query.text

if(!Apikey) return res.json(loghandler.notparam)
if (text === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter text & apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
listapi.textpro("https://textpro.me/dropwater-text-effect-872.html", [text])
.then(data => {
res.set({'Content-Type': 'image/png'})
res.status(200).send(data)
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

  router.get('/creator/gfx5', async (req, res) => {
  var Apikey = req.query.apikey;
  var text = req.query.text
  if(!text) return res.json(loghandler.nottext)
  if(!Apikey) return res.json(loghandler.notparam)
  if(listkey.includes(Apikey)){
const gfx5 = await new ch.Gfx5()
    .setText(text) 
    .toAttachment();
    
  data = gfx5.toBuffer();
  await fs.writeFileSync(__path +'/tmp/goodbye.png', data)
  res.sendFile(__path+'/tmp/goodbye.png')
 } else {
    res.sendFile(__path + '/views/apikey-not-found.html');
  }
});

router.get('/textpro/logo-wolf', async (req, res, next) => {
var Apikey = req.query.apikey;
var text = req.query.text
var text2 = req.query.text2

if(!Apikey) return res.json(loghandler.notparam)
if (text === undefined || text2 === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter text, text2 & apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
listapi.textpro("https://textpro.me/create-wolf-logo-black-white-937.html", [text, text2])
.then(data => {
res.set({'Content-Type': 'image/png'})
res.status(200).send(data)
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

router.get('/textpro/logo-wolf2', async (req, res, next) => {
var Apikey = req.query.apikey;
var text = req.query.text
var text2 = req.query.text2

if(!Apikey) return res.json(loghandler.notparam)
if (text === undefined || text2 === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter text, text2 & apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
listapi.textpro("https://textpro.me/create-wolf-logo-galaxy-online-936.html", [text, text2])
.then(data => {
res.set({'Content-Type': 'image/png'})
res.status(200).send(data)
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

router.get('/textpro/logo-wolf2', async (req, res, next) => {
var Apikey = req.query.apikey;
var text = req.query.text

if(!Apikey) return res.json(loghandler.notparam)
if (text === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter text & apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
listapi.textpro("https://textpro.me/3d-christmas-text-effect-by-name-1055.html", [text])
.then(data => {
res.set({'Content-Type': 'image/png'})
res.status(200).send(data)
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

router.get('/textpro/3d-gradient', async (req, res, next) => {
var Apikey = req.query.apikey;
var text = req.query.text

if(!Apikey) return res.json(loghandler.notparam)
if (text === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter text & apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
listapi.textpro("https://textpro.me/3d-gradient-text-effect-online-free-1002.html", [text])
.then(data => {
res.set({'Content-Type': 'image/png'})
res.status(200).send(data)
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

router.get('/textpro/christmas', async (req, res, next) => {
var Apikey = req.query.apikey;
var text = req.query.text

if(!Apikey) return res.json(loghandler.notparam)
if (text === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter text & apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
listapi.textpro("https://textpro.me/3d-christmas-text-effect-by-name-1055.html", [text])
.then(data => {
res.set({'Content-Type': 'image/png'})
res.status(200).send(data)
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

router.get('/textpro/logo-wolf2', async (req, res, next) => {
var Apikey = req.query.apikey;
var text = req.query.text1
var text2 = req.query.text2

if(!Apikey) return res.json(loghandler.notparam)
if (text === undefined || text2 === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter text, text2 & apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
listapi.textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [
text, text2
])
.then(data => {
res.set({'Content-Type': 'image/png'})
res.status(200).send(data)
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

router.get('/textpro/matrix', async (req, res, next) => {
var Apikey = req.query.apikey;
var text = req.query.text

if(!Apikey) return res.json(loghandler.notparam)
if (text === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter text & apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
listapi.textpro("https://textpro.me/matrix-style-text-effect-online-884.html", [text])
.then(data => {
res.set({'Content-Type': 'image/png'})
res.status(200).send(data)
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

router.get('/textpro/harry-potter', async (req, res, next) => {
var Apikey = req.query.apikey;
var text = req.query.text

if(!Apikey) return res.json(loghandler.notparam)
if (text === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter text & apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
listapi.textpro("https://photooxy.com/logo-and-text-effects/create-harry-potter-text-on-horror-background-178.html", [text])
.then(data => {
res.set({'Content-Type': 'image/png'})
res.status(200).send(data)
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

router.get('/textpro/neondevil', async (req, res, next) => {
var Apikey = req.query.apikey;
var text = req.query.text

if(!Apikey) return res.json(loghandler.notparam)
if (text === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter text & apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
listapi.textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html", [text])
.then(data => {
res.set({'Content-Type': 'image/png'})
res.status(200).send(data)
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

router.get('/textpro/neon', async (req, res, next) => {
var Apikey = req.query.apikey;
var text = req.query.text

if(!Apikey) return res.json(loghandler.notparam)
if (text === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter text & apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
listapi.textpro("https://textpro.me/neon-light-text-effect-online-882.html", [text])
.then(data => {
res.set({'Content-Type': 'image/png'})
res.status(200).send(data)
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

router.get('/textpro/marvel', async (req, res, next) => {
var Apikey = req.query.apikey;
var text1 = req.query.text1
var text2 = req.query.text2

if(!Apikey) return res.json(loghandler.notparam)
if (text1 === undefined || text2 === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter text1, text2 & apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
listapi.textpro("https://textpro.me/create-logo-style-marvel-studios-online-971.html", [text1,text2])
.then(data => {
res.set({'Content-Type': 'image/png'})
res.status(200).send(data)
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

router.get('/textpro/glitch2', async (req, res, next) => {
var Apikey = req.query.apikey;
var text1 = req.query.text1
var text2 = req.query.text2

if(!Apikey) return res.json(loghandler.notparam)
if (text1 === undefined || text2 === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter text1, text2 & apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
listapi.textpro("https://textpro.me/create-a-glitch-text-effect-online-free-1026.html", [text1,text2])
.then(data => {
res.set({'Content-Type': 'image/png'})
res.status(200).send(data)
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

router.get('/textpro/silvermetal', async (req, res, next) => {
var Apikey = req.query.apikey;
var text1 = req.query.text1
var text2 = req.query.text2

if(!Apikey) return res.json(loghandler.notparam)
if (text1 === undefined || text2 === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter text1, text2 & apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
listapi.textpro("https://textpro.me/text-logo-3d-metal-silver-946.html", [text1, text2])
.then(data => {
res.set({'Content-Type': 'image/png'})
res.status(200).send(data)
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

router.get('/textpro/transfomer', async (req, res, next) => {
var Apikey = req.query.apikey;
var text = req.query.text

if(!Apikey) return res.json(loghandler.notparam)
if (text === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter text & apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
listapi.textpro("https://textpro.me/create-a-transformer-text-effect-online-1035.html", [text])
.then(data => {
res.set({'Content-Type': 'image/png'})
res.status(200).send(data)
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

router.get('/textpro/sketsa', async (req, res, next) => {
var Apikey = req.query.apikey;
var text = req.query.text

if(!Apikey) return res.json(loghandler.notparam)
if (text === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter text & apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
listapi.textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html", [text])
.then(data => {
res.set({'Content-Type': 'image/png'})
res.status(200).send(data)
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

router.get('/textpro/styletext', async (req, res, next) => {
var Apikey = req.query.apikey;
var teks = req.query.teks

if(!Apikey) return res.json(loghandler.notparam)
if (teks === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter teks & apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
styletext(teks).then(data => {
res.status(200).send({
status: 200, 
creator: `${creator}`,
result: data
})
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

router.get('/textpro/candy', async (req, res, next) => {
var Apikey = req.query.apikey;
var text = req.query.text

if(!Apikey) return res.json(loghandler.notparam)
if (text === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter text & apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
listapi.textpro("https://textpro.me/create-christmas-candy-cane-text-effect-1056.html", [text])
.then(data => {
res.set({'Content-Type': 'image/png'})
res.status(200).send(data)
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

router.get('/textpro/christmas', async (req, res, next) => {
var Apikey = req.query.apikey;
var text = req.query.text

if(!Apikey) return res.json(loghandler.notparam)
if (text === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter text & apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
listapi.textpro("https://textpro.me/christmas-tree-text-effect-online-free-1057.html", [text])
.then(data => {
res.set({'Content-Type': 'image/png'})
res.status(200).send(data)
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

router.get('/textpro/3dchristmas', async (req, res, next) => {
var Apikey = req.query.apikey;
var text = req.query.text

if(!Apikey) return res.json(loghandler.notparam)
if (text === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter text & apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
listapi.textpro("https://textpro.me/3d-christmas-text-effect-by-name-1055.html", [text])
.then(data => {
res.set({'Content-Type': 'image/png'})
res.status(200).send(data)
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

router.get('/textpro/sparklechristmas', async (req, res, next) => {
var Apikey = req.query.apikey;
var text = req.query.text

if(!Apikey) return res.json(loghandler.notparam)
if (text === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter text & apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
listapi.textpro("https://textpro.me/sparkles-merry-christmas-text-effect-1054.html", [text])
.then(data => {
res.set({'Content-Type': 'image/png'})
res.status(200).send(data)
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

router.get('/textpro/deepsea', async (req, res, next) => {
var Apikey = req.query.apikey;
var text = req.query.text

if(!Apikey) return res.json(loghandler.notparam)
if (text === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter text & apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
listapi.textpro("https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html", [text])
.then(data => {
res.set({'Content-Type': 'image/png'})
res.status(200).send(data)
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

router.get('/textpro/scifi', async (req, res, next) => {
var Apikey = req.query.apikey;
var text = req.query.text

if(!Apikey) return res.json(loghandler.notparam)
if (text === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter text & apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
listapi.textpro("https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html", [text])
.then(data => {
res.set({'Content-Type': 'image/png'})
res.status(200).send(data)
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

router.get('/textpro/rainbow', async (req, res, next) => {
var Apikey = req.query.apikey;
var text = req.query.text

if(!Apikey) return res.json(loghandler.notparam)
if (text === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter text & apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
listapi.textpro("https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html", [text])
.then(data => {
res.set({'Content-Type': 'image/png'})
res.status(200).send(data)
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

router.get('/textpro/waterpipe', async (req, res, next) => {
var Apikey = req.query.apikey;
var text = req.query.text

if(!Apikey) return res.json(loghandler.notparam)
if (text === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter text & apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
listapi.textpro("https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html", [text])
.then(data => {
res.set({'Content-Type': 'image/png'})
res.status(200).send(data)
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

router.get('/textpro/spooky', async (req, res, next) => {
var Apikey = req.query.apikey;
var text = req.query.text

if(!Apikey) return res.json(loghandler.notparam)
if (text === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter text & apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
listapi.textpro("https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html", [text])
.then(data => {
res.set({'Content-Type': 'image/png'})
res.status(200).send(data)
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

router.get('/maker/ttp', async (req, res, next) => {
var Apikey = req.query.apikey;
var text = req.query.text;

if (text === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter text dan apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
var data = await fetchJson(`https://salism3api.pythonanywhere.com/text2img/?text=${text}`)
bear = data.image
const bear2 = await fetch(bear).then(v => v.buffer())
await fs.writeFileSync(__path +'/tmp/ttp.png', bear2)
res.sendFile(__path+'/tmp/ttp.png')
  })

router.get('/maker/ttp2', async (req, res, next) => {
var Apikey = req.query.apikey;
var text = req.query.text;

if (text === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter text dan apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
ttp(text).then(async data => {
var buffer = data.result;
data = await fetch(buffer).then(v => v.buffer())
await fs.writeFileSync(__path +'/tmp/ttp2.png', data)
res.sendFile(__path+'/tmp/ttp2.png')
})
.catch(e => {
console.log(e);
res.json(loghandler.error)
})
})

  router.get('/maker/attp', async (req, res, next) => {
var Apikey = req.query.apikey;
var text = req.query.text;

if (text === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter text dan apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
var data = await fetchJson(`https://salism3api.pythonanywhere.com/text2gif/?text=${text}`)
bear = data.image
const bear2 = await fetch(bear).then(v => v.buffer())
await fs.writeFileSync(__path +'/tmp/attp.png', bear2)
res.sendFile(__path+'/tmp/attp.png')
  })

router.get('/maker/attp2', async (req, res, next) => {
var Apikey = req.query.apikey;
var text = req.query.text;

if (text === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter text dan apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
attp(text).then(async data => {
var buffer = data.url;
data = await fetch(buffer).then(v => v.buffer())
await fs.writeFileSync(__path +'/tmp/attp2.png', data)
res.sendFile(__path+'/tmp/attp2.png')
})
.catch(e => {
console.log(e);
res.json(loghandler.error)
})
})

router.get('/maker/attp3', async (req, res, next) => {
var Apikey = req.query.apikey;
var text = req.query.text;

if (text === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter text dan apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
attp2(text).then(async data => {
var buffer = data.url;
data = await fetch(buffer).then(v => v.buffer())
await fs.writeFileSync(__path +'/tmp/attp2.png', data)
res.sendFile(__path+'/tmp/attp2.png')
})
.catch(e => {
console.log(e);
res.json(loghandler.error)
})
})

router.get('/maker/sertitolol', async (req, res, next) => {
var Apikey = req.query.apikey;
var text = req.query.text;

if (text === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter text dan apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
var data = await fetchJson(`https://tolol.ibnux.com/img.php?nama=${text}`)
await fs.writeFileSync(__path +'/tmp/sertitolol.png', anu)
res.sendFile(__path+'/tmp/sertitolol.png')
})
//━━━━━━━━━━━━━━━[ COUPLE ]━━━━━━━━━━━━━━━━━//
router.get('/random/couple', async (req, res, next) => {
var Apikey = req.query.apikey;

if(!Apikey) return res.json(loghandler.notparam)
if (Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
var couple = JSON.parse(
fs.readFileSync(__path + '/lib/data/random/couple.json')
)
var ppcp = couple[Math.floor(Math.random() * couple.length)]
res
.status(200)
.json({
code: 200,
success: true,
creator: `${creator}`,
result: ppcp
})
})

router.get('/maker/pubg', async (req, res, next) => {
var Apikey = req.query.apikey;
var text1 = req.query.text;
var text2 = req.query.text2;

if (text1 === undefined || text2 === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter text, text2 dan apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
listapi.photooxy("https://photooxy.com/battlegrounds/make-wallpaper-battlegrounds-logo-text-146.html", [text1,text2])
.then(data => {
res.set({'Content-Type': 'image/png'})
res.status(200).send(data)
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

//━━━━━━━━━━━━━━━[ PHOTOOXY ]━━━━━━━━━━━━━━━━━//
router.get('/photooxy/shadow', async (req, res, next) => {
var Apikey = req.query.apikey;
var text = req.query.text;

if (text === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter text dan apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
listapi.photooxy("https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html", [text])
.then(data => {
res.set({'Content-Type': 'image/png'})
res.status(200).send(data)
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

router.get('/photooxy/romantic', async (req, res, next) => {
var Apikey = req.query.apikey;
var text = req.query.text;

if (text === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter text dan apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
listapi.photooxy("https://photooxy.com/logo-and-text-effects/romantic-messages-for-your-loved-one-391.html", [text])
.then(data => {
res.set({'Content-Type': 'image/png'})
res.status(200).send(data)
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

router.get('/photooxy/smoke', async (req, res, next) => {
var Apikey = req.query.apikey;
var text = req.query.text;

if (text === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter text dan apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
listapi.photooxy("https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html", [text])
.then(data => {
res.set({'Content-Type': 'image/png'})
res.status(200).send(data)
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

router.get('/photooxy/burn-paper', async (req, res, next) => {
var Apikey = req.query.apikey;
var text = req.query.text;

if (text === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter text dan apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
listapi.photooxy("https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html", [text])
.then(data => {
res.set({'Content-Type': 'image/png'})
res.status(200).send(data)
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

router.get('/photooxy/naruto', async (req, res, next) => {
var Apikey = req.query.apikey;
var text = req.query.text;

if (text === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter text dan apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
listapi.photooxy("https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html", [text])
.then(data => {
res.set({'Content-Type': 'image/png'})
res.status(200).send(data)
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

router.get('/photooxy/love-message', async (req, res, next) => {
var Apikey = req.query.apikey;
var text = req.query.text;

if (text === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter text dan apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
listapi.photooxy("https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html", [text])
.then(data => {
res.set({'Content-Type': 'image/png'})
res.status(200).send(data)
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

router.get('/photooxy/message-under-grass', async (req, res, next) => {
var Apikey = req.query.apikey;
var text = req.query.text;

if (text === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter text dan apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
listapi.photooxy("https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html", [text])
.then(data => {
res.set({'Content-Type': 'image/png'})
res.status(200).send(data)
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

router.get('/photooxy/double-heart', async (req, res, next) => {
var Apikey = req.query.apikey;
var text = req.query.text;

if (text === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter text dan apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
listapi.photooxy("https://photooxy.com/logo-and-text-effects/love-text-effect-372.html", [text])
.then(data => {
res.set({'Content-Type': 'image/png'})
res.status(200).send(data)
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

router.get('/photooxy/coffe-cup', async (req, res, next) => {
var Apikey = req.query.apikey;
var text = req.query.text;

if (text === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter text dan apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
listapi.photooxy("https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html", [text])
.then(data => {
res.set({'Content-Type': 'image/png'})
res.status(200).send(data)
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

router.get('/photooxy/love-text', async (req, res, next) => {
var Apikey = req.query.apikey;
var text = req.query.text;

if (text === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter text dan apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
listapi.photooxy("https://photooxy.com/logo-and-text-effects/love-text-effect-372.html", [text])
.then(data => {
res.set({'Content-Type': 'image/png'})
res.status(200).send(data)
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

router.get('/photooxy/butterfly', async (req, res, next) => {
var Apikey = req.query.apikey;
var text = req.query.text;

if (text === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter text dan apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
listapi.photooxy("https://photooxy.com/logo-and-text-effects/butterfly-text-with-reflection-effect-183.html", [text])
.then(data => {
res.set({'Content-Type': 'image/png'})
res.status(200).send(data)
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

router.get('/canvas/welcome', async (req, res, next) => {
var Apikey = req.query.apikey;
var name = req.query.name;
var pp = req.query.pp;
var bg = req.query.bg;
var gcname = req.query.gcname;
var gcicon = req.query.gcicon;
var membercount = req.query.membercount;

if(!Apikey) return res.json(loghandler.notparam)
if (name === undefined || pp === undefined || bg === undefined || gcname === undefined || gcicon === undefined || membercount === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter name, pp, bg, gcname, gcicon, membercount dan apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
var requestSettings = {
url: `https://avm.rafazahendra.repl.co/api/canvas/welcome2?avatar=${pp}&groupname=${gcname}&username=${name}&membercount=${membercount}&groupicon=${gcicon}&bg=${bg}`, method: 'GET', encoding: null };
request(requestSettings, function(error, response, body) {
res.set('Content-Type', 'image/png');
res.status(200).send(body)
})
})

router.get('/canvas/welcome2', async (req, res, next) => {
var Apikey = req.query.apikey;
var name = req.query.name;
var pp = req.query.pp;
var bg = req.query.bg;
var gcname = req.query.gcname;
var membercount = req.query.membercount;

if(!Apikey) return res.json(loghandler.notparam)
if (name === undefined || pp === undefined || bg === undefined || gcname === undefined || membercount === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter name, pp, bg, gcname, membercount dan apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
var requestSettings = {
url: `https://avm.rafazahendra.repl.co/api/canvas/welcome3?avatar=${pp}&groupname=${gcname}&username=${name}&membercount=${membercount}&bg=${bg}`, method: 'GET', encoding: null };
request(requestSettings, function(error, response, body) {
res.set('Content-Type', 'image/png');
res.status(200).send(body)
})
})

router.get('/canvas/welcome4', async (req, res, next) => {
var Apikey = req.query.apikey;
var name = req.query.name;
var pp = req.query.pp;
var bg = req.query.bg;
var gcname = req.query.gcname;
var to = 'to '

if(!Apikey) return res.json(loghandler.notparam)
if (name === undefined || pp === undefined || bg === undefined || gcname === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter name, pp, bg, gcname dan apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
var requestSettings = {
url: `https://api.saipulanuar.repl.co/card?avatar=${pp}&middle=${name}&name=Welcome&bottom=${to}${gcname}&avatarborder=0&avatarbg=220,20,60,1&background=${bg}`, method: 'GET', encoding: null };
request(requestSettings, function(error, response, body) {
res.set('Content-Type', 'image/png');
res.status(200).send(body)
})
})

router.get('/canvas/goodbye', async (req, res, next) => {
var Apikey = req.query.apikey;
var desk = req.query.desk;
var pp = req.query.pp;
var bg = req.query.bg;
var name = req.query.name;

if(!Apikey) return res.json(loghandler.notparam)
if (desk === undefined || pp === undefined || bg === undefined || name === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter name, pp, bg, desk dan apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
var requestSettings = {
url: `https://avm.rafazahendra.repl.co/api/canvas/leave?avatar=${pp}&name=${name}&desk=${desk}&bg=${bg}`, method: 'GET', encoding: null };
request(requestSettings, function(error, response, body) {
res.set('Content-Type', 'image/png');
res.status(200).send(body)
})
})

router.get('/canvas/goodbye4', async (req, res, next) => {
var Apikey = req.query.apikey;
var name = req.query.name;
var pp = req.query.pp;
var bg = req.query.bg;
var gcname = req.query.gcname;

if(!Apikey) return res.json(loghandler.notparam)
if (name === undefined || pp === undefined || bg === undefined || gcname === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter name, pp, bg, gcname dan apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
var requestSettings = {
url: `https://api.saipulanuar.repl.co/card?avatar=${pp}&middle=${name}&name=Out Of&bottom=${gcname}&avatarborder=0&avatarbg=220,20,60,1&background=${bg}`, method: 'GET', encoding: null };
request(requestSettings, function(error, response, body) {
res.set('Content-Type', 'image/png');
res.status(200).send(body)
})
})

router.get('/creator/verifikasi', async(req, res, next) => {
const Apikey = req.query.apikey;
  const name = req.query.name;
  const gcname = req.query.gcname;
  const bg = req.query.bg;
  const membercount = req.query.membercount;
  const ppuser = req.query.ppuser;
  const bege = req.query.bege;
  if(!name) return res.json(loghandler.notnama)
  if(!membercount) return res.json(loghandler.membercount)
  if(!gcname) return res.json(loghandler.gcname)
  if(!bege) return res.json(loghandler.bege)
  if(!pp) return res.json(loghandler.pp)
  if(!bg) return res.json(loghandler.bg)
  if(!Apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  const verification = await new ch.Verification()
    .setUsername(name)
    .setGuildName(gcname)
    .setGuildIcon(bg)
    .setMemberCount(membercount)
    .setAvatar(ppuser)
    .setBackground(bege)
    .toAttachment();
  
  data = verification.toBuffer();
  await fs.writeFileSync(__path +'/tmp/verification.png', data)
  res.sendFile(__path+'/tmp/verification.png')
 } else {
    res.sendFile(__path + '/views/apikey-not-found.html');
  }
    })

router.get('/anime/waifu', async (req, res, next) => {
var Apikey = req.query.apikey
            
	if(!Apikey) return res.json(loghandler.notparam)

  const Wai = JSON.parse(fs.readFileSync(__path +'/anime/waifu.json'));
  const randWai = Wai[Math.floor(Math.random() * Wai.length)];
  data = await fetch(randWai).then(v => v.buffer());
  await fs.writeFileSync(__path +'/tmp/wibu.jpeg', data)
  res.sendFile(__path+ '/tmp/wibu.jpeg');
res.sendFile(__path + '/views/apikey-not-found.html');
})

router.get('/nsfw/ahegao', async (req, res, next) => {
var Apikey = req.query.apikey
            
if(!Apikey) return res.json(loghandler.notparam)

const ahegao = JSON.parse(fs.readFileSync(__path +'/data/ahegao.json'));
const randahegao = ahegao[Math.floor(Math.random() * ahegao.length)];
data = await fetch(randahegao).then(v => v.buffer())
await fs.writeFileSync(__path +'/tmp/ahegao.jpeg', data)
res.sendFile(__path +'/tmp/ahegao.jpeg')
res.sendFile(__path + '/views/apikey-not-found.html');
}
})

router.get('/textpro/candy', async (req, res, next) => {
var Apikey = req.query.apikey;
var text = req.query.text

if(!Apikey) return res.json(loghandler.notparam)
if (text === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter text & apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
listapi.textpro("https://textpro.me/create-christmas-candy-cane-text-effect-1056.html", [text])
.then(data => {
res.set({'Content-Type': 'image/png'})
res.status(200).send(data)
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})


//━━━━━━━━━━━━━━━[ OPEN AI ]━━━━━━━━━━━━━━━━━//
router.get('/openai/buatcode', async (req, res, next) => {
var Apikey = req.query.apikey;
var text = req.query.text

if(!Apikey) return res.json(loghandler.notparam)
if (text === undefined || Apikey === undefined) return res.status(404).send({
status: 404,
message: `Input Parameter text & apikey`
});
const check = await cekKey(Apikey);
if (!check) return res.sendFile(__path + '/views/apikey-not-found.html');
openai(text).then(data => { 
res.status(200).send({
status: 200, 
creator: `${creator}`,
result: data
})
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Internal Server Error'
})
});
})

module.exports = router;
  