import express from "express";
import db from "./config/database.js";
import userRouter from "./router/users.js";
import logRequest from "./middleware/logs.js";

const app = express();

try {
    await db.connect();
    console.log("Database connected successfully");
} catch (error) {
    console.error("Error connecting to database:", error);
}

app.use(logRequest);
app.use(express.json());

app.use("/users", userRouter);

app.listen(4000, ()=>{
    console.log("server berjalan di port 4000");
})
