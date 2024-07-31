export const generateRandomNumbers = (min: number, max: number, count: number): number[] => {
  const randomNumbers = [];
  for (let i = 0; i < count; i++) {
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    randomNumbers.push(randomNum);
  }
  return randomNumbers;
}


export const getRandomInt = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
