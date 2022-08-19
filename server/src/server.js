const express = require('express')
const axios = require('axios')
const cors = require('cors')
const polygon = require('./constants')

const {polygon8 : polygn} = polygon

const app = express()
app.use(cors())
// app.use(express.json())

app.get('/', (req, res) => {
    console.log("SERVER")
    axios.get(`https://www.waze.com/partnerhub-api/waze-feed-access-token/${polygn}?format=1`)
      .then(({data}) => {
        res.send(data)
      }).catch((err) => {
        console.log(err)
      });
})




app.listen(3000)


