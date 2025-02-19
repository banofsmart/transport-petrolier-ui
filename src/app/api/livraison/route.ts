import { livraisons } from "../../data";

// livraisons
export async function GET() {
  return Response.json(livraisons);
}
