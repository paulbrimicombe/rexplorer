import type Rating from "./Rating";

type RatedPerson = Rating & {
  linkedRatings: Rating[];
};

export default RatedPerson;
