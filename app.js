const express = require('express')
const dotenv = require('dotenv').config()


const port = process.env.PORT

const app = express()


app.get('/', async (req, res) => {
    const person = {
        slackUsername: 'janeStack',
        backend: true,
        age: 3,
        bio: 'love to code'

    }
    res.status(200).json({
        status: true,
        data: person
    })
})

app.listen(port, () => console.log(`App is running on port ${port}`))