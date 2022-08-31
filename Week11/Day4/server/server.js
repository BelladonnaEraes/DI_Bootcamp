import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import router from './routs/Customers.js'

const app =express()

app.listen(process.env.PORT||8080, ()=>{
  console.log(`I am listening ${process.env.PORT||8080}`)
})
app.use(cors())
app.use(router)
