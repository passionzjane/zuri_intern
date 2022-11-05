const express = require('express')
const dotenv = require('dotenv').config()


const port = process.env.PORT

const app = express()
app.use(express.json())


app.get('/', async (req, res) => {
    const person = {
        slackUsername: 'janeStack',
        backend: true,
        age: 3,
        bio: 'love to code'

    }
    res.status(200).json(person)
})


app.post('/', async (req, res) => {
    const Enum = {
        addition: "addition",
        subtraction: "subtraction",
        multiplication: "multiplication"
    }
    
    
    var {operation_type, x, y } = req.body;
    operation_type = operation_type.toLowerCase();

    if(operation_type === 'addition') {

        return res.status(200)
        .json({
            slackUsername: "janeStack",
            result: x + y,
            operation_type: Enum.addition
        })
    }

    if(operation_type === 'subtraction') {

        return res.status(200)
        .json({
            slackUsername: "janeStack",
            result: x - y,
            operation_type: Enum.subtraction
        })
    }

    if(operation_type === 'multiplication') {

        return res.status(200)
        .json({
            slackUsername: "janeStack",
            result: x * y,
            operation_type: Enum.multiplication
        })
    }
})

app.listen(port, () => console.log(`App is running on port ${port}`))