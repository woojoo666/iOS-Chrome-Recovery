var url = 'http%253A%252F%252Fcommunity.pearljam.com%252Fdiscussion%252F219644%252Fthank-you-for-alone-in-hartford%3B450%3B309';

var url_encoding = [
	{character: ':', encoding: '%3A'},
	{character: '/', encoding: '%2F'},
	{character: '#', encoding: '%23'},
	{character: '?', encoding: '%3F'},
	{character: '&', encoding: '%24'},
	{character: '@', encoding: '%40'},
	{character: '+', encoding: '%2B'},
	{character: ';', encoding: '%3B'},
	{character: '=', encoding: '%3D'}
];
/*
var decode = url.replace(new RegExp('%25','g'),'%'); //in case of double encoding
url_encoding.forEach(function (enc) {
	var find = new RegExp(enc.encoding, 'g');
	decode = decode.replace(find, enc.character);
});
decode = decode.split(';')[0]; //ignore anything past a semicolon
console.log(decode);
*/

console.log(decodeURIComponent(decodeURI(url)));
