<script lang="ts">
  import type Rating from "../routes/Rating";
  export let rating: Rating;
</script>

<card>
  <name>{rating.name}</name>
  <scores>
    <score>Battleyness {rating.battleyness}</score>
    <score>Scandal {rating.scandal}</score>
    <score>Subjectivity {rating.subjectivity}</score>
    <score>Longevity {rating.battleyness}</score>
    <score>Dynasty {rating.battleyness}</score>
  </scores>
  <total>
    Total: {rating.total}
  </total>
</card>
