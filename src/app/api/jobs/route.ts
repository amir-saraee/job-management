// app/api/jobs/route.ts

import { NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";

export async function GET() {
  const jsonFilePath = path.join(process.cwd(), "db.json");
  const jsonData = await fs.readFile(jsonFilePath, "utf8");
  const jobs = JSON.parse(jsonData);

  return NextResponse.json(jobs);
}
