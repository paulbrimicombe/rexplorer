import type Rating from "./Rating";

type Consort = Rating & {
  monarchs: Rating[];
  index: number;
};

export default Consort;
