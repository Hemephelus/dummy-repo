const http = require('http')

const server = http.createServer((req, res) =>{
    if(req.url === '/'){
        res.end('Wecome to my home page')
    }
    if(req.url === '/about'){
        res.end('Wecome to my about page')

    }

    res.end('<h1>Ooops! </h1> <p> Do you really like this website, or are you just bored</p> <a href='/'>')

    
})

server.listen(500)
