'use client';

import { useState, useEffect } from 'react';
import { Grid, Heading, Text, Strong } from '@radix-ui/themes';
import { UpdateIcon } from "@radix-ui/react-icons"

import AlertModal from '../components/AlertModal';
import ChanceModal from '../components/ChanceModal';

import getRandomNumber from '../utils/getRandomNumber';
import getRandomOperator from '../utils/getRandomOperator';
import performOperation from '../utils/performOperation';

export default function MultiChoices() {
  const [score, setScore] = useState(0);
  const [chance, setChance] = useState(5);
  const [noChance, setNoChance] = useState(false);

  const generateNewQuestion = () => {
    let randomNumber1, randomNumber2, result: number;
    let uniqueNumbers = new Set<number>();

    randomNumber1 = getRandomNumber(1, 99);
    randomNumber2 = getRandomNumber(1, 99);
    const operator = randomNumber1 < randomNumber2 ? '-' : getRandomOperator();
    result = performOperation(randomNumber1, randomNumber2, operator);
    uniqueNumbers.add(result);

    while (uniqueNumbers.size < 4) {
      const randomNum = getRandomNumber(1, 99);
      if (!uniqueNumbers.has(randomNum)) {
        uniqueNumbers.add(randomNum);
      }
    }
    const numbersArray: number[] = [...uniqueNumbers].sort(() => Math.random() - 0.5);

    return {
      question: `${randomNumber1} ${operator} ${randomNumber2}`,
      answers: numbersArray,
      correctAnswerIndex: numbersArray.indexOf(result),
    };
  };


  const handleAnswerClick = (index: number) => {
    if (index === question?.correctAnswerIndex) {
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
    setChance(5);
    setNoChance(false);
    setQuestion(generateNewQuestion());
  }

  const [question, setQuestion] = useState<{
    question: string;
    answers: number[];
    correctAnswerIndex: number;
  } | undefined>(undefined);



  useEffect(() => {
    setQuestion(generateNewQuestion());
  }, []);

  return (
    <section className='h-screen-header max-w-default m-auto p-4 mx-auto'>
      <h1 className='text-4xl font-bold text-start'>Choix Multiples</h1>
      <div className='flex flex-col items-center justify-center h-full space-y-8'>
        {
          question ? (
            <Heading as='h3' size='9'>
              {question?.question}
            </Heading>
          ) : (
            <Heading as='h3' size='9'>
              Recherche d'un calcul...
            </Heading>
          )
        }

        <ChanceModal chance={chance} noChance={noChance} score={score} setState={handleRestartClick} />

        <Grid columns='2' gap='4' width='auto'>
          {
            question ? (
              question?.answers.map((number, index) => (
                <button
                  key={number}
                  onClick={() => handleAnswerClick(index)}
                  className='p-8 min-w-32 text-2xl lg:text-4xl text-blue-800 dark:text-red-500 border rounded-md bg-blue-100 hover:bg-blue-200 dark:bg-blue-800 dark:hover:bg-blue-900'
                >
                  {number}
                </button>
              ))
            ) : (
              <>
                {
                  Array.from(Array(4), (_, i) => (
                    <div key={i} className='p-8 min-w-32 text-2xl lg:text-4xl text-blue-100 hover:text-blue-200 dark:text-blue-800 dark:hover:text-blue-900 border rounded-md bg-blue-100 hover:bg-blue-200 dark:bg-blue-800 dark:hover:bg-blue-900'>0</div>
                  ))
                }
              </>
            )
          }
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
