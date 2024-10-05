function DisplayPrice(discountPrice, price) {
  const priceDifference = price - discountPrice;

  return (
    <>
      {discountPrice === price ? (
        <p className="bold">{discountPrice}KR</p>
      ) : (
        <div className="bold">
          <p>
            <span className="warn">{discountPrice}KR</span>{" "}
            <span className="oldPrice">{price}KR</span>
          </p>
          <p>Save {priceDifference.toFixed(2)}KR</p>
        </div>
      )}
    </>
  );
}

export { DisplayPrice };
