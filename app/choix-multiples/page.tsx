'use client';

import { useState, useEffect } from 'react';
import { Grid, Heading, Text, Strong } from '@radix-ui/themes';
import { UpdateIcon } from "@radix-ui/react-icons"

import AlertModal from '../components/AlertModal';
import Chance from '../components/Chance';

import getRandomNumber from '../utils/getRandomNumber';
import getRandomOperator from '../utils/getRandomOperator';
import performOperation from '../utils/performOperation';
import { log } from 'console';

export default function MultiChoices() {
  const [score, setScore] = useState(0);
  const [chance, setChance] = useState(3);
  const [noChance, setNoChance] = useState(false);

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
    } else {
      if (chance === 1) {
        setNoChance(true);
      }
      setChance(chance - 1);
    }
  };

  const handleRestartClick = () => {
    
    setScore(0);
    setChance(3);
    setNoChance(false);
    setQuestion(generateNewQuestion());
  }

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
    <section className='h-screen-header max-w-default m-auto p-4 mx-auto'>
      <div className='flex flex-col items-center justify-center h-full space-y-8'>
        <Heading as='h3' size='9'>
          {question.question}
        </Heading>
        <Chance chance={chance} noChance={noChance} score={score} setState={handleRestartClick}/>
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
        <AlertModal
          buttonName='Recommencer'
          buttonIcon={<UpdateIcon />}
          modalTitle='Recommencer'
          modalText='Êtes-vous sûr de vouloir recommencer ?'
          modalButtonName='Recommencer'
          setState={() => handleRestartClick()}
          state={0}
        />
      </div>
    </section>
  );
}
