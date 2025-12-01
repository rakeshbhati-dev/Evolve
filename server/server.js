import express from 'express'
import dotenv from 'dotenv'
import itemRouter from './routes/item.routes.js'
import userRouter from './routes/user.routes.js'
import databaseConnect from './config/db.js'
const app = express()
dotenv.config()
app.use(express.json())

app.use('/item', itemRouter)
app.use('/user',userRouter)

const port = process.env.PORT
app.listen(port, async () => {
    await databaseConnect()
    console.log(`Server running on port ${port}`)
}
)