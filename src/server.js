import express from 'express'

const app=express()
import IndexRoutes from './routes/index.routes'
import TaskRoutes from './routes/task.routes'

//Middlewares
app.use(express.json())

//Routes
app.use(IndexRoutes)
app.use('/task',TaskRoutes)
 
export default app