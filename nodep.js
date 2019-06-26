var http=require("http");
var fs=require("fs");
var url=require("url");
var query=require("querystring");

function process_request(req,resp)
{
   var u=url.parse(req.url);
   resp.writeHead(200,{'Content-Type':'text/html'});
   switch(u.pathname){
    case '/':
		console.log("CAlling rest api");
	   resp.end();
    break;
	case '/customers':
		 var customers=//[
            {firstName:'Dipesh',lastName:'Mundra',contact:'9898985756'};
            // {firstName:'King',lastName:'Patel',contact:9898985757},
            // {firstName:'Rohit',lastName:'Rathi',contact:9898985858},
      // ];
      console.log(customers);
  	resp.write("Hello")
   }

}
var server=http.createServer(process_request);
server.listen(3000);
