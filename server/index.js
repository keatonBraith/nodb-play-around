const express = require('express')
const app = express()
const ctrl = require("./controller")
const port = 4006

app.use(express.json())

app.get("/api/memories", )
app.post("/api/memories", )
app.put("/api/memories/edit/:id", )
app.delete("/api/memories/:id" )

app.listen(port, () => console.log(`We've landed on the moon at port ${port}`))