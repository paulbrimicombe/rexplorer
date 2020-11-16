import type { ServerResponse } from 'http';
import { scores } from "./_consorts.json";

const contents = JSON.stringify(
  { scores }
);

export function get(_, res: ServerResponse) {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  res.end(contents);
}
