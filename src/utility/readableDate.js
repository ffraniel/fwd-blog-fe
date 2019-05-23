const readableDate = (mappedItem) => {
  let dateObj = new Date(mappedItem._createdAt);
  mappedItem.dateString = dateObj.toDateString();
  return mappedItem;
};

export default readableDate;
