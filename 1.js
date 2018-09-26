var Request = require( 'request' ),
    Fs = require( 'fs' );

// RegExp to extract the filename from Content-Disposition
var regexp = /filename=\"(.*)\"/gi;
console.log("Hello World");
// initiate the download

var options = { method: 'GET',
  url: 'https://tj-cabbage-yun-ftn.weiyun.com/ftn_handler/c4ddcb7f91c2d661a6b72879016e5a3d4aefbbe22c26f63ea8fdc806f1244b9710d799eb2b6d962572e35151ec1dfa14e15d5b272bddce25c3efdfce9699946f/6E6A0008.JPG',
  qs: 
   { fname: '6E6A0008.JPG',
     from: '30113',
     version: '3.3.3.3',
     uin: '504536265' },
  headers: 
   { 'postman-token': '636fad7a-7838-bf70-ecd1-c37441e072cd',
     'cache-control': 'no-cache',
     cookie: 'web_wx_rc=JPCOYRKY; wx_login_ticket=b487a5a8649360433998caa9df4345df82d562a26338227e109af2bc0bd6ef64feaf9c17dde59c8765b1817aa1a8fb6f3615828cefc62836012fdd010927f68b93cd5408828813f8; key_type=1002; wx_uid=504536265; wy_uf=1; access_token=14_l8QRmBiujqdfwtNG9vlbPIF44Lzfg-ofZcO_PLPcDUwVN7Rq1APw2EBNkJ8X6F29hrvzzSeuLjDuUY4TnG7vEQ; refresh_token=14_gN5cKKelsAjPp6XrDHqh1U7CWdbOOlhSLzL_jP7qN3kBLqBTthx4g9ExBGKZhgYYAuyp_1xgVpppS8ZvhGXmww; openid=o8hBstytC3_WkBwzsOKbG-Ns9X_w; wy_appid=wx7d59d32f953438c0; wyctoken=418227304; FTN5K=9f392131',
     'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
     'accept-encoding': 'gzip, deflate, br',
     referer: 'https://share.weiyun.com/5dlR0ug',
     accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
     'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36',
     'upgrade-insecure-requests': '1' } };




var req = Request.get(options)
                 .on( 'response', function( res ){

                    // extract filename
                    var filename = regexp.exec( res.headers['content-disposition'] )[1];

                    // create file write stream
                    var fws = Fs.createWriteStream( '/Users/wanglei98/Desktop/' +filename);

                    // setup piping
                    res.pipe( fws );

                    res.on( 'end', function(){
                      // go on with processing
                    });
                 });