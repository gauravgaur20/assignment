var http = require('http');
var data =require("./data.json");
// Create web server

var server = http.createServer(function (req, res) {  
    if (req.url == '/') {
        res.writeHead(200, { 'Content-Type': 'application/json' }); 
        var story=[];
        for(var i=0;i<6;i++){
            story.push(data.stories[i]);
        }
        res.write(JSON.stringify(story));
        // res.end();//end the response
        res.end();
    }

}).listen(8000, ()=>console.log('Server running on port 8000'));