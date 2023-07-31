import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";

const app = express();
const PORT = Number(process.env.PORT) || 8000;

app.get("/", (req, res) => {
  res.json({ message: "Server is running 🚀" });
});

app.listen(PORT, () => console.log(`Served started at PORT: ${PORT} 🎉`));
