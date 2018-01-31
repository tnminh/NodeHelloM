var fs = require("fs");
var http = require("http");
var url = require("url");
var data = {name: "Minh", age: 22, birthday: "27-08-1995"};

http.createServer(function (request, response) {

    var pathname = url.parse(request.url).pathname;
    response.writeHead(200);
    //plugin
    if (pathname == "/resources/plugin/jquery.min.js") {
        var txt = fs.readFileSync("resources/plugin/jquery.min.js", "utf8");
        response.write(txt);
    }
    //js
    if (pathname == "/resources/js/dashboard.js") {
        var txt = fs.readFileSync("resources/js/dashboard.js", "utf8");
        response.write(txt);
    }
    //html
    if (pathname == "/dashboard") {
        var txt = fs.readFileSync("resources/html/dashboard.html", "utf8");
        response.write(txt);
    }

    if (pathname == "/") {
        response.write("Node Hello Minh");
    }
    if (pathname == "/response/getMinhData") {
        response.write(JSON.stringify(data));
    }
    response.end();
}).listen(8888);