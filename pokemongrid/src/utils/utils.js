// Returns a random number between min and max
export const randomNumberGenerator = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
