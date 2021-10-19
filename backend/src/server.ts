import express, { Application, Request, Response } from "express";
import axios from "axios";

const app: Application = express();

app.use(express.json());

app.get("/", async (req: Request, res: Response) => {
  try {
    const { data } = await axios.get("http://localhost:5000/posts");

    res.status(200).json({ message: "success", data: data });
  } catch (err) {
    res.send(500).json({ message: "server error" });
  }
});

app.post("/", async (req: Request, res: Response) => {
  try {
    const data = {
      title: req.body.title,
      author: req.body.title,
      dates: req.body.dates,
    };

    const response = await axios.post("http://localhost:5000/posts", {
      data,
    });

    res.status(200).json(response.data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
});

interface IPut {
  data: {
    title: string;
    author: string;
    dates: Array<string | null>;
  };
}

app.put("/:id", async (req: Request, res: Response) => {
  const { data }: IPut = await axios.get(
    `http://localhost:5000/posts/${req.params.id}`
  );

  const newData = data;

  newData.dates.push(req.body.date);

  const request = await axios.put(
    `http://localhost:5000/posts/${req.params.id}`,
    newData
  );

  res.status(200).json({ message: "success", data: request.data });
});

app.listen(4000, () => console.log("Running"));
