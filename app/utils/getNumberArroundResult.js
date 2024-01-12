export default function getNumberAroundResult(result, range) {
  const min = result - range;
  const max = result + range;
  let final;
  do {
    const randomNumber = Math.random() * 2 - 1; 
    final = Math.floor(randomNumber * (max - min + 1)) + min;
  } while (final === result);
  return final;
}
