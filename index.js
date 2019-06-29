const express = require('express')
const app = express()
app.use(express.static('build'))


app.get('/hello', (req, res) => {
    res.send('Hello!!!')
})

app.listen(process.env.PORT || 3001)