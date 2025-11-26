import express from 'express'
import dotenv from 'dotenv'
import itemRouter from './routes/item.routes.js'
const app=express()
dotenv.config()
app.use(express.json())

app.use('/item',itemRouter)

const port=process.env.PORT
app.listen(port,()=>console.log(`Server running on port ${port}`)
)