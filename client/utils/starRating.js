const StarRating = ({ rating }) => {
  const filledStars = Array.from({ length: rating }, (_, index) => (
    <span key={index} className="text-yellow-500">
      ★
    </span>
  ));

  const emptyStars = Array.from({ length: 5 - rating }, (_, index) => (
    <span key={index} className="text-gray-300">
      ★
    </span>
  ));

  return (
    <div className="text-sm text-gray-700 font-bold mb-1">
      <div className="flex">
        {filledStars}
        {emptyStars}
      </div>
    </div>
  );
};

export default StarRating;
