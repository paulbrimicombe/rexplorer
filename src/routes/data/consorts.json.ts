import type { ServerResponse } from "http";
import { scores } from "./_consorts.json";

export async function get(_, res: ServerResponse) {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  res.end(JSON.stringify({ scores }));
}
