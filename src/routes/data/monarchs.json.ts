import type { ServerResponse } from "http";
import RatingsLoader from "./_RatingsLoader";

export async function get(_, res: ServerResponse) {
  const data = await RatingsLoader.load({ type: "monarchs" });
  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  res.end(JSON.stringify(data));
}
