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


app.post('/operations', (req, res) => {
    var {operation_type, x, y} = req.body;
    operation_type = operation_type.toLowerCase()
    
    const Enum = {
        addition: 'addition',
        subtraction: 'subtraction',
        multiplication: 'multiplication'
    }
                                            
            if(operation_type === Enum.addition){
                res.status(200).json({
                    slackUsername: "janeStack",
                    result: x + y,
                    operation_type: Enum.addition
                    
                })
            }
            else if(operation_type === Enum.subtraction){
                res.status(200).json({
                    slackUsername: "janeStack ",
                    result: x - y,
                    operation_type: Enum.subtraction
                })
            }
            else if(operation_type === Enum.multiplication){
                res.status(200).json({
                    slackUsername: "janeStack",
                    result: x * y,
                    operation_type: Enum.multiplication
                })
            }
            else{
                return res.status(400).json({
                    slackUsername: "janeStack",
                    result: null,
                    operation_type: "operation not found"
                })
            }








   
})

app.listen(port, () => console.log(`App is running on port ${port}`))