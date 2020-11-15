import type Rating from "./Rating";

type Monarch = Rating & {
  consorts: Rating[];
};

export default Monarch;
