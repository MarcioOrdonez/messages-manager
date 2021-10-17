import * as socketIo from "socket.io";
import express from "express";
import cors from "cors";
import { socketOnConnection } from "./controllers/sockets";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

const server = app.listen(process.env.SERVER_PORT);

const io = new socketIo.Server(server, { cors: { origin: process.env.CLIENT } });

io.on("connection", socketOnConnection);
