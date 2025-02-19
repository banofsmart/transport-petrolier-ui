import { camions } from "@/app/data";

export async function GET() {
  return Response.json(camions);
}
