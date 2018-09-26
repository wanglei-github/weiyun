var request = require("request");

var options = { method: 'POST',
  url: 'https://share.weiyun.com/webapp/json/weiyunShareNoLogin/WeiyunShareDirList',
  gzip:true,
  qs: 
   { refer: 'chrome_mac',
     g_tk: '1292479820',
     r: '0.7226731357248972' },
  headers: 
   { 'postman-token': '8a35542a-10a8-be4b-52fe-5fb2b83e7132',
     'cache-control': 'no-cache',
     cookie: 'web_wx_rc=JPCOYRKY; wx_login_ticket=b487a5a8649360433998caa9df4345df82d562a26338227e109af2bc0bd6ef64feaf9c17dde59c8765b1817aa1a8fb6f3615828cefc62836012fdd010927f68b93cd5408828813f8; key_type=1002; wx_uid=504536265; wy_uf=1; access_token=14_l8QRmBiujqdfwtNG9vlbPIF44Lzfg-ofZcO_PLPcDUwVN7Rq1APw2EBNkJ8X6F29hrvzzSeuLjDuUY4TnG7vEQ; refresh_token=14_gN5cKKelsAjPp6XrDHqh1U7CWdbOOlhSLzL_jP7qN3kBLqBTthx4g9ExBGKZhgYYAuyp_1xgVpppS8ZvhGXmww; openid=o8hBstytC3_WkBwzsOKbG-Ns9X_w; wy_appid=wx7d59d32f953438c0; FTN5K=e69e5e66; wyctoken=1223839128; web_wx_rc=JPCOYRKY; refresh_token=14_gN5cKKelsAjPp6XrDHqh1U7CWdbOOlhSLzL_jP7qN3kBLqBTthx4g9ExBGKZhgYYAuyp_1xgVpppS8ZvhGXmww; openid=o8hBstytC3_WkBwzsOKbG-Ns9X_w; wy_appid=wx7d59d32f953438c0; FTN5K=e69e5e66; wyctoken=1292479820',
     'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
     'accept-encoding': 'gzip, deflate, br',
     referer: 'https://share.weiyun.com/5dlR0ug',
     'content-type': 'application/json;charset=UTF-8',
     'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36',
     origin: 'https://share.weiyun.com',
     accept: 'application/json, text/plain, */*' },
  body: '{"req_header":"{\\"seq\\":15379392108058244,\\"type\\":1,\\"cmd\\":12031,\\"appid\\":30113,\\"version\\":3,\\"major_version\\":3,\\"minor_version\\":3,\\"fix_version\\":3,\\"wx_openid\\":\\"o8hBstytC3_WkBwzsOKbG-Ns9X_w\\",\\"user_flag\\":0,\\"device_info\\":\\"{\\\\\\"browser\\\\\\":\\\\\\"chrome\\\\\\"}\\"}","req_body":"{\\"ReqMsg_body\\":{\\"ext_req_head\\":{\\"token_info\\":{\\"token_type\\":0,\\"login_key_type\\":1,\\"login_key_value\\":\\"\\"},\\"language_info\\":{\\"language_type\\":2052}},\\".weiyun.WeiyunShareDirListMsgReq_body\\":{\\"share_key\\":\\"5dlR0ug\\",\\"share_pwd\\":\\"\\",\\"dir_key\\":\\"25dd61234662613d18d989d129798d86\\",\\"dir_name\\":\\"äº¬ä¸æ£çæ´»å¨\\",\\"get_type\\":0,\\"start\\":0,\\"count\\":100,\\"get_abstract_url\\":true}}}"}' };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  var data= JSON.parse(body);
  for(var i=0;i<data.data.rsp_body.RspMsg_body.file_list.length;i++){
     console.log(data.data.rsp_body.RspMsg_body.file_list[i].file_id)
  }

});
