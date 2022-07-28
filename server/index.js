const express = require('express');
const cors = require('cors');
const path = require('path');

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: 'd4f11e1dcac747d28d22c351e415c8ef',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

const app = express()

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '../public/index.html'))
})


app.use(express.static(path.join(__dirname, "../public")))

    const port = process.env.PORT || 4005

app.listen(port, () => {console.log(`Listening on port ${port}`)})

