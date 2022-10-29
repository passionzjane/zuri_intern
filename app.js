const express = require('express')
const port = 3000

const app = express()


app.get('/', (req, res) => {
    const person = {
        slackUsername: 'janeStack',
        backend: true,
        age: 3,
        bio: 'love to code'

    }
    res.send(person)
})

app.listen(port, () => console.log(`App is running on port ${port}`))