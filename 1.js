var Request = require( 'request' ),
    Fs = require( 'fs' );

// RegExp to extract the filename from Content-Disposition
var regexp = /filename=\"(.*)\"/gi;
console.log("Hello World");
// initiate the download

var options = { method: 'GET',
  url: 'https://tj-cabbage-yun-ftn.weiyun.com/ftn_handler/d0e8e171e368b1a03964de167bd3373f06079353f046e01a47d285cc5c28cafc67880c7a5b08dbb43d5ebdd46850f31bf1c71a7f29c4c11d94936c5ea2f95a82/6E6A0001.JPG?fname=6E6A0001.JPG&from=30113&version=3.3.3.3&uin=504536265',
  headers: 
   { 'postman-token': '79ffad1c-0dd2-e785-e195-bfd37204cd1a',
     'cache-control': 'no-cache',
     cookie: 'openid=o8hBstytC3_WkBwzsOKbG-Ns9X_w; wy_appid=wx7d59d32f953438c0; web_wx_rc=QSCDOURFVYIA; pgv_pvi=3479828480; pgv_si=s5493289984; wx_login_ticket=88ccabb17dd22e115f1523788d07d5355bf98694fb9e6c49ec380d04fbe14b76d92d57c79d1cf428c16c686b682f03ec46fb6e4c6837b72670d747c46c1b317d7da6968332a1894d; key_type=1002; wx_uid=504536265; wy_uf=1; access_token=14_5bivWRtVq-pHRAYLyyujuwkr0qRcAr9xRhglrsIjQDrrKsuFGWJZBbJoAnJOSmmWV2g4FWWAUWN3opFlcCL5AA; refresh_token=14_xryMlShnIHmWvvWUNY1Qk1iZGBmCEGtb3W_9E0GsXf90OVwHqlxxggsEenWgsG-QlsS8YQeQ5DpyslXvwCltSA; wyctoken=979761039; FTN5K=7d56ae89',
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