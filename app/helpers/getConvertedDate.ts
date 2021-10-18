const getConvertedDate = (date: Date | undefined): string => {
  if (date) {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  } else {
    return '';
  }
};

export default getConvertedDate;
