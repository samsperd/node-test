const http = require('http')

const fs = require('fs')

const port = 3000

const server = http.createServer(function (req, res) {
    console.log('Request was made: ' + req.url);

    res.writeHead(200, {
        'Content-Type': 'application/json'
    })

    const myObj = {
        slackUsername: "slickstubborn",
        backend: true,
        age: 25,
        bio: "I'm a software engineer who has a passion for using algorithms to solve problems"
    }


    res.end(JSON.stringify(myObj))
})

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})