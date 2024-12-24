import express from 'express'
import { products } from "./productData.mjs"
import cors from "cors"

const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, response) => {
  response.send("Hello Abdullah!")
})

// const student = (req, response) => {
//   response.send({ name: "Abdul-Qadir", age: 22 })
// }

app.get('/products', (req, response) => {
  // response.send({ name: "Abdul-Qadir", age: 21 })
  response.send(products)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})