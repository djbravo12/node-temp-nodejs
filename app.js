const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        // res.write("this my page")
        res.end("this home page NOW")

    }
    else if (req.url === '/about') {
        res.end("this about page")
    }

    else (res.end(`<h1> Opps! </h1>
    <p>Not here bro</p>
    <a href="/"> back </a>
    `))
})

// server.listen(5000)