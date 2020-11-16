import type Rating from "./Rating";

type Monarch = Rating & {
  consorts: Rating[];
  index: number;
};

export default Monarch;
