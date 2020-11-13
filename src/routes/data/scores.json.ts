import type { ServerResponse } from 'http';
import { monarchs } from "./_scores.json";

const contents = JSON.stringify(
  { monarchs }
);

export function get(_, res: ServerResponse) {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  res.end(contents);
}
