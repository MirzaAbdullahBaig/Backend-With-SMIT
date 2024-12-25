import express from 'express'
// import { products } from "./productData.mjs"
import cors from "cors"

const app = express()
const port = process.env.port || 3000
const products = []

app.use(cors())
app.use(express.json())

app.get('/', (req, response) => {
  response.send("Hello Abdullah!")
})

app.get('/products', (req, response) => {
  response.send(products)
})

app.post('/product', (req, response) => {
  console.log("request", req.body);
  const product = req.body
  products.push(product)

  response.send("product added successfully")
})

app.use((req, response) => {
  response.send("Page not Found")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})