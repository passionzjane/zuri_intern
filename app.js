const express = require('express')
const port = 3000

const app = express()


app.get('/', async (req, res) => {
    const person = {
        slackUsername: 'janeStack',
        backend: true,
        age: 3,
        bio: 'love to code'

    }
    res.status(200).json({
        data: person
    })
})

app.listen(port, () => console.log(`App is running on port ${port}`))