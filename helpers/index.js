export const getIdFromString = fullString => {
  const split = fullString.split('/');
  const indexOfId = split.length - 2;
  const id = split[indexOfId];
  return parseInt(id);
};
