function startHttpServer(req, res) {
  if (req.url == "/loginfail") {
            fs.readFile("./../loginfail.html", function (err, data2) {
                if (err) {
                    res.writehead(404);
                    res.write(err);
                    res.end();
                } else {
                    res.writeHead(200, {'Content-Type': 'text/html'});
                    res.write(data2);
                    res.end();
                }
            });
         } else {
            fs.readFile("./../console.html", function(error, data) {
                if (error) {  
                        res.writeHead(404);  
                        res.write(error);  
                        res.end();  
                    } else {  
                        res.writeHead(200, {  
                            'Content-Type': 'text/html'  
                        });  
                        res.write(data);  
                        res.end();  
                    } 
            });
         }
}
