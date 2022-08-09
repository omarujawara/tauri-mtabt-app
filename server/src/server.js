const express = require('express')
const axios = require('axios')
const cors = require('cors')

const app = express()
app.use(cors())


app.get('/', (req, res) => {
    console.log("SERVER")
    axios.get("https://www.waze.com/partnerhub-api/waze-feed-access-token/e4d80438-9dc1-4588-8e3a-93cddf1bb913?format=1")
      .then(({data}) => {
        res.send(data)
      }).catch((err) => {
        console.log(err)
      });
})




app.listen(3000)


