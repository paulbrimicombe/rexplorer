import { scores as monarchScores } from "./_monarchs.json";
import { scores as consortScores } from "./_consorts.json";
import { scores as teamScores } from "./_teams.json";
import type Rating from "../../types/Rating";

const scoresMap = new Map<RatingType, Rating[]>([
  ["monarchs", monarchScores],
  ["consorts", consortScores],
  ["teams", teamScores],
]);

export type RatingType = "monarchs" | "consorts" | "teams";

type LoadRequest = {
  type: RatingType;
};

const load = async ({ type }: LoadRequest): Promise<unknown> => {
  const scores = scoresMap.get(type);
  return { scores };
};

export default {
  load,
};
