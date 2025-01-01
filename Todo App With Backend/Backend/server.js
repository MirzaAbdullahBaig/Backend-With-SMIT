import express from 'express'

const app = express()
const port = 3000

app.use(express.json())

const todos = []

app.get('/get-all-todos', (request, response) => {
  response.send(todos)
})

app.post('/add-todo', (request, response) => {
  todos.push(request.body.todo)
  response.send("Todo added successfully")
})

app.patch('/edit-todo/:id', (request, response) => {})

app.delete('/delete-todo/:id', (request, response) => {})

app.use((request, response) => {
  response.status(404).send("Page not found")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})