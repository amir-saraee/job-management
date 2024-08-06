// app/api/jobs/[id]/route.ts

import { NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  if (!id) {
    return NextResponse.json({ error: "Job ID is required" }, { status: 400 });
  }

  const jsonFilePath = path.join(process.cwd(), "db.json");
  const jsonData = await fs.readFile(jsonFilePath, "utf8");
  const jobs = JSON.parse(jsonData).jobs;

  const job = jobs.find((job: { id: number }) => job.id === parseInt(id, 10));

  if (!job) {
    return NextResponse.json({ error: "Job not found" }, { status: 404 });
  }

  return NextResponse.json(job);
}
