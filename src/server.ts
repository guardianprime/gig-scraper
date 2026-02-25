import express, { Request, Response, NextFunction } from "express";
const PORT = 8000;

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("this is the API route");
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

app.listen(PORT, () => {
  console.log("server is working");
});
