'use client';

import { useState, useEffect } from 'react';
import { Grid, Heading, Button, Text, Strong } from '@radix-ui/themes';
import { UpdateIcon } from "@radix-ui/react-icons"

  import getRandomNumber from '../utils/getRandomNumber';
import getRandomOperator from '../utils/getRandomOperator';
import performOperation from '../utils/performOperation';

export default function MultiChoices() {
  const [score, setScore] = useState(0);

  const generateNewQuestion = () => {
    const randomNumber1 = getRandomNumber(1, 99);
    const randomNumber2 = getRandomNumber(1, 99);
    const randomOperator = getRandomOperator();
    const result = performOperation(randomNumber1, randomNumber2, randomOperator);
    const numbersArray = [
      getRandomNumber(1, 99),
      getRandomNumber(1, 99),
      getRandomNumber(1, 99),
      result,
    ].sort(() => Math.random() - 0.5);

    return {
      question: `${randomNumber1} ${randomOperator} ${randomNumber2}`,
      answers: numbersArray,
      correctAnswerIndex: numbersArray.indexOf(result),
    };
  };

  const handleAnswerClick = (index: number) => {
    if (index === question.correctAnswerIndex) {
      setScore(score + 1);
      setQuestion(generateNewQuestion());
    }
  };

  const [question, setQuestion] = useState<{
    question: string;
    answers: number[];
    correctAnswerIndex: number;
  }>({
    question: '',
    answers: [],
    correctAnswerIndex: 0,
  });


  useEffect(() => {
    setQuestion(generateNewQuestion());
  }, []);

  return (
    <section className='h-screen-header max-w-default m-auto p-4'>
      <div className='flex flex-col items-center justify-center h-full space-y-8'>
        <Heading as='h3' size='9'>
          {question.question}
        </Heading>
        <Grid columns='2' gap='4' width='auto'>
          {question.answers.map((number, index) => (
            <button
              key={number}
              onClick={() => handleAnswerClick(index)}
              className='p-8 text-2xl lg:text-4xl text-blue-800 dark:text-red-500 border rounded-md bg-blue-100 hover:bg-blue-200 dark:bg-blue-800 dark:hover:bg-blue-900'
            >
              {number}
            </button>
          ))}
        </Grid>
        <Text as="p" size="4">Scrore :  <Strong> {score}</Strong></Text>
        <Button onClick={() => setScore(0)}>
          <UpdateIcon width="16" height="16" /> Reset Score
        </Button>
      </div>
    </section>
  );
}
