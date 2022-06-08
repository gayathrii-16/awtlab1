
var http=require('http');
var fs=require('fs');
var server=http.createServer(function(req,res){
    if(req.url=='/'){
        res.write("Welcome");
        res.end();
    }    
    if (req.url=='/itcc'){
    res.write("Welcome to itC");
    res.end();
    }
   if(req.url=='/admin')
    {
    res.write("Welcome to Admin");
    res.end();
    }
    if(req.url=='/home'){
       fs.readFile("demo.txt",function(err,data){
        if(err)
        {
            console.log("no file");
            res.write(err);
            res.end();
        }
        else{
               res.write(data);
               res.end();
           }
})
    }
})
server.listen(3000);
