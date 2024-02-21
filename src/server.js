import express, { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collections } from "./services/database.service.ts";

export const usersRouter = express.Router();
const app = express();
const PORT = process.env.PORT || 3000;

usersRouter.use(express.json());

usersRouter.get("/auth/signin", async (_req, res) => {
  try {
    const users = await collections.users.find({}).toArray();

    res.status(200).send(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

usersRouter.post("/auth/signup", async (req, res) => {
  try {
    const newGame = req.body;
    const result = await collections.users.insertOne(newGame);

    result
      ? res
          .status(201)
          .send(`Successfully created a new user with id ${result.insertedId}`)
      : res.status(500).send("Failed to create a new user.");
  } catch (error) {
    console.error(error);
    res.status(400).send(error.message);
  }
});

app.use(usersRouter);

app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT", PORT);
});
