var WXBizDataCrypt = require('./WXBizDataCrypt');

var appId = 'wx49af818df3d44d95';
var sessionKey = 'NdqK15S9KxFEANnbrMjHNQ==';
var encryptedData =
  'aGQYhICKdG7rlSfkO3v+w6x+P94Ecrf4viJH/9UvHxWzNmveq08VAs2qcN+ddPGSfT9G9orsgh4326s5j9s3UxcuJuUKZcw5Byd1svTc6qwhC+Nvvk9xB2XrcsFd+dzKTB/KcQt2YaUeKPqvOzJbdUhsRWKTTzkLbUaLl2ismULF4sCKi0hgFJ1EjWw7UyC3MYa+w3dmXip2bkk0HyyKrw==';
var iv = 'qUq5qrg3cGclmG62EiHeEw==';

var pc = new WXBizDataCrypt(appId, sessionKey);

try {
  var data = pc.decryptData(encryptedData, iv);
} catch (error) {
  console.log(error.message)
}

// 解密后的数据为
//
// data = {
//   "nickName": "Band",
//   "gender": 1,
//   "language": "zh_CN",
//   "city": "Guangzhou",
//   "province": "Guangdong",
//   "country": "CN",
//   "avatarUrl": "http://wx.qlogo.cn/mmopen/vi_32/aSKcBBPpibyKNicHNTMM0qJVh8Kjgiak2AHWr8MHM4WgMEm7GFhsf8OYrySdbvAMvTsw3mo8ibKicsnfN5pRjl1p8HQ/0",
//   "unionId": "ocMvos6NjeKLIBqg5Mr9QjxrP1FA",
//   "watermark": {
//     "timestamp": 1477314187,
//     "appid": "wx4f4bc4dec97d474b"
//   }
// }
