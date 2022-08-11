const express = require('express')
const axios = require('axios')
const cors = require('cors')
const polygon = require('./constants')

const {polygon8} = polygon

const app = express()
app.use(cors())

app.get('/', (req, res) => {
    console.log("SERVER")
    axios.get(`https://www.waze.com/partnerhub-api/waze-feed-access-token/${polygon8}?format=1`)
      .then(({data}) => {
        res.send(data)
      }).catch((err) => {
        console.log(err)
      });
})




app.listen(3000)


