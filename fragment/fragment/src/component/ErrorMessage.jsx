const ErrorMessage = (foodItems) => {
  // let ErrorMessage = foodItems.length === 0 ? <h3 className="text-center">No items found</h3> : null;
return(
  <>
  {foodItems.length === 0 ? <h3 className="text-center">No items found</h3> : null}
  </>
);
}

export default ErrorMessage;