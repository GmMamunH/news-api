import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

// নিউজের ধরন (Type)
type News = {
  id: number;
  title: string;
  category: string;
};

// API Handler
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<News[]>
) {
  const filePath = path.join(process.cwd(), "public", "news.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const news: News[] = JSON.parse(jsonData);

  res.status(200).json(news);
}
