var fs = require('fs');
var constants = require('constants');
var filepath = "session.bak";

fs.open(filepath, 'r', function(err, fd) {
	fs.fstat(fd, function(err, stats) {
		var bufferSize = stats.size,
			chunkSize = 512,
			buffer = new Buffer(bufferSize),
			bytesRead = 0;

		while (bytesRead < bufferSize) {
			if ((bytesRead + chunkSize) > bufferSize) {
				chunkSize = (bufferSize - bytesRead);
			}
			fs.readSync(fd, buffer, bytesRead, chunkSize, bytesRead);
			bytesRead += chunkSize;
		}
		var urlbuffer = "";
		var start = "http";
		var end = "@";
		var urls = [];
		for (var i = 0; i < buffer.length - start.length; i++) {
			if (urlbuffer) {
				if (buffer[i] < 32 || buffer[i] > 126) {
					//reached non-printable char during url read, exit
					urlbuffer = "";
					continue;
				}
				if (buffer.toString('utf-8', i, i + 1) == end) {
					//reached end expression
					urls.push(urlbuffer);
					urlbuffer = "";
					continue;
				}
				urlbuffer += buffer.toString('utf-8', i, i + 1);
			}
			if (buffer.toString('utf-8', i, i + start.length) == start) {
				//reached start expression
				urlbuffer = buffer.toString('utf-8', i, i + 1);
			}
		}
		urls.map(function (url) {
			//sometimes urls show up url-encoded, so decode them
			var decode = decodeURIComponent(decodeURI(url));
			decode = decode.split(" ").join("%20"); //encode spaces back
			decode = decode.split(';')[0]; //ignore anything past a semicolon
			console.log(decode);
			return decode;
		});
		//console.log(urls);
		fs.close(fd);
	});
});
