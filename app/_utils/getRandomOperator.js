export default function getRandomOperator() {
  const operators = ['+', '-'];
  const randomIndex = Math.floor(Math.random() * operators.length);
  return operators[randomIndex];
}