import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    Credential: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


// routes import  // imported after middlewares
import userRouter from './routes./user.routes.js'


// routes declaration
app.use("/users", userRouter) // middleware ro get router "userRouter when route "/users"called

export { app }