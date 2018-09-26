var request = require("request");
var sleep = require('thread-sleep');
    Fs = require( 'fs' );

var regexp = /filename=\"(.*)\"/gi;

var file_id= ["099437d7-5fa9-47ff-86d5-29ef7d13c438",
"3f4ed80e-0cd9-400d-ae1c-737f067317d3",
"2fdf6241-7eda-4d88-953a-c226b100d61f",
"11588d05-2199-4d9d-8af8-ab79af5f6f2e",
"c904606f-9dfb-41fa-9a08-0243cdb54a20",
"0400b70c-8c08-470e-a1dc-4bf680dcf29d",
"2f86eab6-643b-4875-b48f-70fdff0651de",
"5e33deb7-021f-4dd1-a057-eb27891cca05",
"e1e47fa6-a1cd-49a5-a804-17e9d545d1eb",
"ba32feaf-ca64-485e-bcc3-d854ac0fe147",
"ed209a9a-b168-4de9-a2ca-2621b4667933",
"f5d7c207-4041-45e2-a1fb-039750b8ef72",
"7d393285-646f-479d-98f9-47c186b2116e",
"1eb7d563-856e-4259-97df-4faea04b49a7",
"7d02fd89-77da-46f0-99c6-29b790000954",
"8388784f-6202-41e1-bbb4-f9a89e02dbee",
"20c737be-2fee-45d2-9571-5ebd18aff674",
"6f8528d6-23de-4119-91f7-de73bc5f4907",
"94c72d03-bd5f-44d1-8a99-e8e765a5c491",
"03df57ee-c507-4c14-98cc-36491a9d496e",
"ddcf1b4a-aaa1-46cc-aea4-d74c2f399cfd",
"aac8c800-81c9-432f-8067-9de8eb0e4270",
"5f5ff084-ca1f-442a-aa42-45d25416d4bd",
"2e0c4b26-b211-4438-8ec5-6b18e99fd2d5",
"ebe6ea4d-a1e7-4fe9-b70d-824c01608966",
"7e35ef56-4ca3-4348-99ec-4da27d5d1ac7",
"f431e62b-37c2-4265-bf9c-87c8eaf14e67",
"bbc2b7d9-e5ae-4e48-8313-af3179780067",
"e941c973-f557-4a9e-9762-a1413efbdfd7",
"87266bce-77fa-46da-bf4e-c9740ab64fd9",
"30b8305e-e673-4206-b240-1767dc65ddd3",
"7eb7c1be-0310-4057-bef1-934f12d71924",
"c843f972-bfeb-40f2-aa46-9da20dec4dc1",
"b185bf32-bb89-4cbb-9028-84e3c53e4394",
"7e4ef780-39f6-479c-88ee-9ffbe445896a",
"857850a0-676c-4804-9b8b-26bdb122c036",
"5ba8d0da-19a8-4ef9-90b3-18e7df3062c1",
"c127d5a5-01d2-4c9c-bda0-c3741696ffb9",
"941f0cbb-5e17-465b-9fee-e98d909b3455",
"4d910e73-6d34-43ac-b4dc-a901cbba6286",
"71346445-4189-4dfc-81d2-3e05987f8225",
"aa6732a3-ef81-40b8-a582-b84a168eab58",
"acb6db8c-e927-4647-9d6a-db6078a2a9fc",
"f3fe9c24-06a7-47f4-82eb-3511ca478e4d",
"d1b8acb7-596b-4ce2-a72e-581d4b862535",
"7d0706b3-2c12-412a-9e3d-c6d6ebb79ba6",
"647e53db-e765-4f3b-a814-3bfffb27159e",
"23da2061-8a58-4014-9f3d-1f42bca8733d",
"858d1ea1-5c2f-4e82-9fdc-f0b5c941a415",
"459dd70e-f678-40cd-9214-60023874610a",
"433565e3-a8b9-4383-8a46-dadb3d3fca84",
"90738bd9-0a80-4903-8c0c-255678b5bb74",
"e8d1327c-afa5-44a1-95f7-ea61e7021936",
"d149c09e-1946-4b1f-8631-6fc76cdf3a1c",
"c8a0ac41-43d9-419b-b0fe-a4f9266a8b5c",
"9de51084-bd33-4775-8a3b-67c390f4d347",
"ab0c2da0-a9c9-4534-a737-f12d0f798f02",
"01051fa5-08a5-4ff6-90b2-9518d327cae5",
"978de6d1-e216-4cd5-beaf-13b5ef1fd6fc",
"a0b36af4-9118-42a2-819f-e8650368956a",
"35cf17ef-2706-4d01-b145-d8eb2a0f204b",
"3f3bea73-8049-4da1-a5ff-49a7874c2d9c",
"51086e47-8ea4-49cb-a58f-9540d28f2f00",
"8de55439-d170-4500-a227-9aebadc4a25a",
"a7ba9c65-fb8a-4ce0-ac6f-2c9ab6f56d31",
"3d7da0ce-ff6f-46d1-ba78-4fd48da74adf",
"d41d0671-07bb-43a1-8366-8e5b42ef013d",
"bd5bc6b8-4b73-482c-8751-c75156f3f2b7",
"22b0b301-fc4a-4c13-9dfe-68abeca87e95",
"a0adc75d-d043-4091-aa1f-58007d3b4c74",
"932abc84-cc5b-4ce6-bbad-51316aa8fce1",
"972a3131-d8ff-4b44-b462-799e52a5e47f",
"12841f62-1713-47cc-8b97-ff3a7426198f",
"2af8d3d5-12ad-4fc1-a26d-03e64cece4de",
"ea4d3058-a53c-4998-8a96-b8bde49bcb87",
"8c2bc59b-f931-4f0d-8cc5-532ea293ace7",
"59d47efb-bfb0-4e14-aab7-9878a8acca29",
"86ab3708-b7a3-45e2-8640-9aab614d7ae9",
"92a1125c-c08e-4040-bc49-9f79c1e84dff",
"44f32e8b-b873-41f6-bb51-94b1605bd59e",
"1153255a-041a-4f82-b05a-9ca8f5c0b554",
"31bd8351-116c-4f42-b2f5-f711d0ef2f66",
"3d84b581-bb8e-40f7-93bb-20625856239a",
"1e838fdb-fa2d-4576-9dd0-53f2e0400d9b",
"be4d57cb-5df7-4533-954b-f214a0c6849d",
"88c671d2-4223-440e-ae03-cf102088471e",
"e0860400-f39a-4971-a321-888a1e3e4bb5",
"a2bce02c-fe19-4b0a-aef8-0ad10f0ecc7c",
"b437342b-0c73-4f86-a605-a5292def9c46",
"ee376db6-0550-4f68-bac7-43617fe996f8",
"89daac5c-9671-41bc-8665-1abf37321466",
"fd5d7a70-d6f4-4189-8d1f-c7a0a0c5bc76",
"05601b4b-bf8f-4c50-9e0d-e84720050c4b",
"77efaafd-ea28-4505-ba6e-2cb104694579",
"e1adaef2-c70a-40e3-acb9-cb380b299f1d",
"96cbeffa-e55c-4387-9c16-d3cc8ebc5c66",
"5feb29a5-f37b-4aca-8302-f820184cff1b",
"387e0b0c-3b4d-4903-9c42-ea796901d29c",
"a3ed959c-1e43-4da3-834d-4a086df661d7",
"deb12267-c3e8-4268-ba0f-e29a16d0c610"]

down(7)

function down (i){

  if(i<file_id.length){
    var options = { method: 'POST',
    url: 'https://share.weiyun.com/webapp/json/weiyunShareNoLogin/WeiyunShareBatchDownload',
    gzip:true,
    qs: 
   { refer: 'chrome_mac',
     g_tk: '1848770158',
     r: '0.4441255185721389' },
  headers: 
   { 'postman-token': '664b33a2-0cbd-d745-61b8-56fa5d97c0d4',
     'cache-control': 'no-cache',
     cookie: 'web_wx_rc=JPCOYRKY; wx_login_ticket=b487a5a8649360433998caa9df4345df82d562a26338227e109af2bc0bd6ef64feaf9c17dde59c8765b1817aa1a8fb6f3615828cefc62836012fdd010927f68b93cd5408828813f8; key_type=1002; wx_uid=504536265; wy_uf=1; access_token=14_l8QRmBiujqdfwtNG9vlbPIF44Lzfg-ofZcO_PLPcDUwVN7Rq1APw2EBNkJ8X6F29hrvzzSeuLjDuUY4TnG7vEQ; refresh_token=14_gN5cKKelsAjPp6XrDHqh1U7CWdbOOlhSLzL_jP7qN3kBLqBTthx4g9ExBGKZhgYYAuyp_1xgVpppS8ZvhGXmww; openid=o8hBstytC3_WkBwzsOKbG-Ns9X_w; wy_appid=wx7d59d32f953438c0; FTN5K=7d56ae89; wyctoken=473102985; openid=o8hBstytC3_WkBwzsOKbG-Ns9X_w; wy_appid=wx7d59d32f953438c0; FTN5K=7d56ae89; wyctoken=1848770158; web_wx_rc=QSCDOURFVYIA; pgv_pvi=3479828480; pgv_si=s5493289984; wx_login_ticket=88ccabb17dd22e115f1523788d07d5355bf98694fb9e6c49ec380d04fbe14b76d92d57c79d1cf428c16c686b682f03ec46fb6e4c6837b72670d747c46c1b317d7da6968332a1894d; key_type=1002; wx_uid=504536265; wy_uf=1; access_token=14_5bivWRtVq-pHRAYLyyujuwkr0qRcAr9xRhglrsIjQDrrKsuFGWJZBbJoAnJOSmmWV2g4FWWAUWN3opFlcCL5AA; refresh_token=14_xryMlShnIHmWvvWUNY1Qk1iZGBmCEGtb3W_9E0GsXf90OVwHqlxxggsEenWgsG-QlsS8YQeQ5DpyslXvwCltSA',
     'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
     'accept-encoding': 'gzip, deflate, br',
     referer: 'https://share.weiyun.com/5dlR0ug',
     'content-type': 'application/json;charset=UTF-8',
     'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36',
     origin: 'https://share.weiyun.com',
     accept: 'application/json, text/plain, */*' },
     body: '{"req_header":"{\\"seq\\":15379434673407492,\\"type\\":1,\\"cmd\\":12024,\\"appid\\":30113,\\"version\\":3,\\"major_version\\":3,\\"minor_version\\":3,\\"fix_version\\":3,\\"wx_openid\\":\\"o8hBstytC3_WkBwzsOKbG-Ns9X_w\\",\\"user_flag\\":1,\\"device_info\\":\\"{\\\\\\"browser\\\\\\":\\\\\\"chrome\\\\\\"}\\"}","req_body":"{\\"ReqMsg_body\\":{\\"ext_req_head\\":{\\"token_info\\":{\\"token_type\\":1,\\"openid\\":\\"o8hBstytC3_WkBwzsOKbG-Ns9X_w\\",\\"access_token\\":\\"14_5bivWRtVq-pHRAYLyyujuwkr0qRcAr9xRhglrsIjQDrrKsuFGWJZBbJoAnJOSmmWV2g4FWWAUWN3opFlcCL5AA\\",\\"login_key_type\\":192,\\"login_key_value\\":\\"14_5bivWRtVq-pHRAYLyyujuwkr0qRcAr9xRhglrsIjQDrrKsuFGWJZBbJoAnJOSmmWV2g4FWWAUWN3opFlcCL5AA\\"},\\"language_info\\":{\\"language_type\\":2052}},\\".weiyun.WeiyunShareBatchDownloadMsgReq_body\\":{\\"share_key\\":\\"5dlR0ug\\",\\"pwd\\":\\"\\",\\"file_owner\\":null,\\"download_type\\":0,\\"file_list\\":[{\\"pdir_key\\":\\"25dd61234662613d18d989d129798d86\\",\\"file_id\\":\\"'+file_id[i]+'\\",\\"filename\\":\\"6E6A0001.JPG\\",\\"file_size\\":12054370}]}}}"}' };

     request(options, function (error, response, body) {
   
      if (error) {throw new Error(error)
        console.log(index);
      };

      var data = JSON.parse(body);
      console.log("https_download_url is :#### "+data.data.rsp_body.RspMsg_body.file_list[0].https_download_url);
      console.log("cookie_value is :#### "+data.data.rsp_body.RspMsg_body.file_list[0].cookie_value);

      (function(ddd){
          console.log("ddd ====="+JSON.stringify(ddd));

          var options2 = { method: 'GET',
              url: ddd.data.rsp_body.RspMsg_body.file_list[0].https_download_url,
              headers: 
               { 'postman-token': '79ffad1c-0dd2-e785-e195-bfd37204cd1a',
                 'cache-control': 'no-cache',
                 cookie: 'openid=o8hBstytC3_WkBwzsOKbG-Ns9X_w; wy_appid=wx7d59d32f953438c0; web_wx_rc=QSCDOURFVYIA; pgv_pvi=3479828480; pgv_si=s5493289984; wx_login_ticket=88ccabb17dd22e115f1523788d07d5355bf98694fb9e6c49ec380d04fbe14b76d92d57c79d1cf428c16c686b682f03ec46fb6e4c6837b72670d747c46c1b317d7da6968332a1894d; key_type=1002; wx_uid=504536265; wy_uf=1; access_token=14_5bivWRtVq-pHRAYLyyujuwkr0qRcAr9xRhglrsIjQDrrKsuFGWJZBbJoAnJOSmmWV2g4FWWAUWN3opFlcCL5AA; refresh_token=14_xryMlShnIHmWvvWUNY1Qk1iZGBmCEGtb3W_9E0GsXf90OVwHqlxxggsEenWgsG-QlsS8YQeQ5DpyslXvwCltSA; wyctoken=979761039; FTN5K='+ddd.data.rsp_body.RspMsg_body.file_list[0].cookie_value,
                 'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
                 'accept-encoding': 'gzip, deflate, br',
                 referer: 'https://share.weiyun.com/5dlR0ug',
                 accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
                 'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36',
                 'upgrade-insecure-requests': '1' } };
                  var req = request.get(options2)
                             .on( 'response', function( res ){

                              console.log("res is========="+JSON.stringify(res));
                                // extract filename
                               

                                // create file write stream
                                var fws = Fs.createWriteStream( '/Users/wanglei98/Desktop/photo/' +i+".JPG");

                                // setup piping
                                res.pipe( fws );

                                res.on( 'end', function(){
                                   i++;
                                   down(i);
                                });
                             });
               })(data);

      })
  }

  if(i==file_id.length){
    return;
  }
}