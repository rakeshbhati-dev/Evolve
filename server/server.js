import express from 'express'
import dotenv from 'dotenv'
const app=express()
dotenv.config()
app.use(express.json())

app.get('/',(req,res)=>{
    res.status(200).json({message:"Hello World"})
})

const port=process.env.PORT
app.listen(port,()=>console.log(`Server running on port ${port}`)
)