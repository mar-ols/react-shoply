import { StyledStarContainer } from "../../../styles/styled-components/review-stars";
import StarFilled from "../../../assets/images/star-filled.png";
import StarBlank from "../../../assets/images/star-blank.png";

function DisplayStars(rating) {
  const totalStars = 5;
  const filledStars = Math.floor(rating);
  const unfilledStars = totalStars - filledStars;

  const filledStarsArray = Array(filledStars).fill(StarFilled);

  const unfilledStarsArray = Array(unfilledStars).fill(StarBlank);

  return (
    <StyledStarContainer>
      {filledStarsArray.map((star, index) => (
        <img key={`filled-${index}`} src={star} alt="Filled star icon" />
      ))}
      {unfilledStarsArray.map((star, index) => (
        <img key={`unfilled-${index}`} src={star} alt="Unfilled star icon" />
      ))}
    </StyledStarContainer>
  );
}

export { DisplayStars };
