type Rating = Readonly<{
  name: string[];
  battleyness: number;
  scandal: number;
  subjectivity: number;
  longevity: number;
  dynasty: number;
  total: number;
  rexFactor: boolean[];
}>;

export default Rating;
