import express from 'express'
// import { products } from "./productData.mjs"
import cors from "cors"

const app = express()
const port = process.env.port || 3000
const products = []

app.use(cors({origin: ["http://localhost:5173", "http://localhost:3000"]}))
app.use(express.json())

app.get('/', (req, response) => {
  response.send("Hello Abdullah!")
})

app.get('/products', (req, response) => {
  response.send(products)
})

app.get('/product/:id', (req, response) => {
  console.log(req.params.id);
  const index = Number(req.params.id) - 1
  const product = (products[index])
  if (!product) {
    response.status(404).send("Product not found")
  }
  response.status(200).send(product)
})

app.post('/product', (req, response) => {
  console.log("request", req.body);
  const product = req.body
  products.push(product)

  response.status(201).send("product added successfully")
})

app.use((req, response) => {
  response.send("Page not Found")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})