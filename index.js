const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello!!!')
})

app.listen(process.env.PORT || 3001)