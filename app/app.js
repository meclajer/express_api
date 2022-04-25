// Usando objeto express
const express = require('express')

// App de Express
const app = express()
app.use(express.json()) // Indicamos que usaremos JSON

// Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000

// HTTP Methods
// Get all
app.get('/v1/explorers', (req, res) => {
    console.info(`API explorers GET all request ${new Date()}`)
    const explorer1 = { id: 1, name: "Carlo1" }
    const explorer2 = { id: 1, name: "Carlo2" }
    const explorer3 = { id: 1, name: "Carlo3" }
    const explorer4 = { id: 1, name: "Carlo4" }
    const explorers = [explorer1, explorer2, explorer3, explorer4]
    res.status(200).json(explorers)
})

// Get by id
app.get('/v1/explorers/:id', (req, res) => {
    console.info(`API explorers GET request ${new Date()}`)
    console.info(`Getting explorer whit id: ${req.params.id}`)
    const explorer = { id: 1, name: "Carlo" }
    res.status(200).json(explorer)
})

// Create explorer
app.post('/v1/explorers', (req, res) => {
    console.log(`Api explorers POST request ${new Date()}`)
    const requestBody = req.body //parametros de un cliente
    res.status(201).json({ mesagge: "Created" })
        // status code 201 es: la solicitud fue recibida y entendida y está siendo procesada.
})

app.put('/v1/explorers/:id', (req, res) => {
    console.info(`Api explorers PUT request ${new Date()}`)
    console.info(`Update explorer whit id ${req.params.id}`)
    const requestBody = req.body // parametros de un cliente
    res.status(200).json({ message: "Updated!" })
})


// Con esto inicializamos esta app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})