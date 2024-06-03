import express, { json, urlencoded } from "express";
import userRouter from './router/userRoutes.js'
import cors from 'cors';
const app = express();

app.use(cors({
    origin: 'https://665de3366c2fed0a14c6aad0--userdashboard20.netlify.app'
}));
app.use(json());
app.use(urlencoded({ extended: true }));


app.use("/api/v1/users", userRouter);


app.get("/", (req, res) => {
    res.json({
        status: "running",
    });
});


export default app;