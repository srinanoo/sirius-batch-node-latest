let http = require('http');
let url = require('url');

let port = 4001;
http.createServer((req, res, err) => {
    if(err) throw err;

    if(req.url != "/favicon.ico") {

        console.log(req.method);
        let urlPath = req.url;
        if(req.method == "GET") {
            if(urlPath == "/read") {
                // login logic here..
            }
            if(urlPath == "/write") {
                // register logic here..
            }
            console.log(urlPath);
        }
        if(req.method == "PUT") {
            if(urlPath == "update") {
                //
            }
        }
        if(req.method == "DELETE") {
            if(urlPath == "delete") {
                //
            }
        }
        // console.log(req.url);
        // console.log("Server is running");
        // console.log(req.form);
        // console.log(url.parse(req.url));
        // let qry = url.parse(req.url, true).query;
        // console.log(qry);
        // console.log(qry.hfSub);
        // console.log(qry.username);

        /////// ONLY FOR QUERYSTRING PARAMETER Eg: http://localhost:4000/?username=Dinesh
        // let qry = url.parse(req.url, true).query;
        // console.log(qry);

        ////// FOR FORM BODY (both for QUERYSTRING and FORM DATA) Eg: http://locahost:4000 (push the data inside the "Form Encode" in API Client's body)
        const chunks = [];
        req.on('data', chunk => chunks.push(chunk));
        req.on('end', () => {
            const data = Buffer.concat(chunks);
            // console.log('Data: ', data);
            const stringData = data.toString();
            // console.log("stringData: ", stringData);
            const parsedData = new URLSearchParams(stringData);
            console.log("parsedData: ", parsedData);
            const dataObj = {};
            for (let pair of parsedData.entries()) {
                dataObj[pair[0]] = pair[1];
            }
            console.log("DataObj: ", dataObj);
            let {username, hfSub, password} = dataObj;
            console.log("DataObj: ", dataObj.username);
            console.log("DataObj: ", dataObj.hfSub);
            console.log("DataObj: ", dataObj.password);
        });

        ////// FOR JSON BODY Eg: http://locahost:4000 (push the data inside the "JSON" in API Client's body)
        // let json = '';
        // req.on('data', chunk => json += chunk.toString('utf8'));
        // req.on('end', () => {
        //     const dataObj = JSON.parse(json);
        //     console.log("DataObj: ", dataObj);
        //     console.log("DataObj: ", dataObj.username);
        //     console.log("DataObj: ", dataObj.hfSub);
        //     console.log("DataObj: ", dataObj.password);
        // });

        res.write("Server is running");
        res.end();
    }
}).listen(port, () => {
    console.log("Server has started in port: "+port);
});