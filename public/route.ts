import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// নিউজ টাইপ ডিফাইন
type News = {
  id: number;
  title: string;
  category: string;
};

// GET API
export async function GET() {
  const filePath = path.join(process.cwd(), "public", "news.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const news: News[] = JSON.parse(jsonData);

  return NextResponse.json(news, { status: 200 });
}
