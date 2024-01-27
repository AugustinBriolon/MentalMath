'use client';

import React, { useState, useEffect } from 'react';
import { Grid, Heading, Text, Strong } from '@radix-ui/themes';
import { UpdateIcon } from "@radix-ui/react-icons"

import AlertModal from '../components/AlertModal';
import ChanceModal from '../components/ChanceModal';

import getNumberArroundResult from '../utils/getNumberArroundResult';
import getRandomNumber from '../utils/getRandomNumber';
import getRandomOperator from '../utils/getRandomOperator';
import performOperation from '../utils/performOperation';

type QuestionType = {
  question: string;
  answer: number;
  falseAnswer: number;
  answerType: 'Vrai' | 'Faux';
};

export default function VraiFaux() {
  const [score, setScore] = useState(0);
  const [chance, setChance] = useState(5);
  const [noChance, setNoChance] = useState(false);
  const [question, setQuestion] = useState<QuestionType | undefined>(undefined);

  const generateMathQuestion = () => {
    const randomNumber1 = getRandomNumber(1, 99);
    const randomNumber2 = getRandomNumber(1, 99);
    const operator = getRandomOperator();
    const result = performOperation(randomNumber1, randomNumber2, operator);
    const falseResult = getNumberArroundResult(result, 5);
    const answerType: 'Vrai' | 'Faux' = Math.random() < 0.5 ? 'Vrai' : 'Faux';

    return {
      question: `${randomNumber1} ${operator} ${randomNumber2}`,
      answer: answerType === 'Vrai' ? result : falseResult,
      falseAnswer: answerType === 'Vrai' ? falseResult : result,
      answerType,
    };
  };

  const handleAnswer = (userAnswer: boolean) => {
    const isCorrect = userAnswer === (question?.answerType === 'Vrai');
    if (isCorrect) {
      setScore(score + 1);
    } else {
      setChance(chance - 1);
      if (chance === 1) {
        setNoChance(true);
      }
    }
    setQuestion(generateMathQuestion());
  };

  const handleRestartClick = () => {
    setScore(0);
    setChance(5);
    setNoChance(false);
    setQuestion(generateMathQuestion());
  }

  useEffect(() => {
    setQuestion(generateMathQuestion());
  }, []);

  return (
    <section className='h-screen-header max-w-default m-auto p-4 mx-auto space-y-12'>
      <h1 className='text-4xl font-bold text-start'>Vrai ou Faux</h1>
      <div className='flex flex-col items-center justify-center space-y-8'>
        {
          question ? (
            <Heading as='h3' size='9' className='text-center'>
              {question?.question} = {question?.answer}
            </Heading>
          ) : (
            <Heading as='h3' size='9'>
              Recherche du calcul...
            </Heading>
          )
        }

        <ChanceModal chance={chance} noChance={noChance} score={score} setState={handleRestartClick} />

        <Grid columns='2' gap='4' width='auto'>
          {
            question ? (
              <>
                <button
                  className='p-8 min-w-32 text-2xl lg:text-4xl text-blue-800 dark:text-red-500 border rounded-md bg-blue-100 hover:bg-blue-200 dark:bg-blue-800 dark:hover:bg-blue-900'
                  onClick={() => handleAnswer(true)}
                >
                  Vrai
                </button>
                <button
                  className='p-8 min-w-32 text-2xl lg:text-4xl text-blue-800 dark:text-red-500 border rounded-md bg-blue-100 hover:bg-blue-200 dark:bg-blue-800 dark:hover:bg-blue-900'
                  onClick={() => handleAnswer(false)}
                >
                  Faux
                </button>
              </>
            ) : (
              <>
                {
                  Array.from(Array(2), (_, i) => (
                    <div key={i} className='py-8 px-12 min-w-32 text-2xl lg:text-4xl text-blue-100 hover:text-blue-200 dark:text-blue-800 dark:hover:text-blue-900 border rounded-md bg-blue-100 hover:bg-blue-200 dark:bg-blue-800 dark:hover:bg-blue-900'>0</div>
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
