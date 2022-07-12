import express from "express"
import dotenv from "dotenv"
import cors from 'cors'

import router from "./routes/index.js"

dotenv.config();

const app = express()
const PORT = 5000

app.use(cors())
app.use(express.json())

app.use("/", router)

app.use((req, res, next) => {
    res.status(404).send(
        "<h1>Page not found on the server</h1>"
    )
})

app.listen(PORT, () => console.log(`Server Connected to port ${PORT}`))

// Handling Error
process.on("unhandledRejection", err => {
    console.log(`An error occurred: ${err.message}`)
    server.close(() => process.exit(1))
})