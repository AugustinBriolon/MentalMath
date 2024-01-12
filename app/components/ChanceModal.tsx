import React, { MouseEventHandler } from 'react';
import Link from 'next/link';

type ChanceProps = {
  chance: number;
  noChance: boolean;
  score: number;
  setState: MouseEventHandler<HTMLButtonElement>;
}

const ChanceModal = ({ chance, noChance, score, setState }: ChanceProps) => {
  return (
    <div className='flex flex-row space-x-1'>
      {Array.from(Array(chance), (_, i) => {
        return (
          <div key={i} className='w-4 h-4 rounded-full bg-tertiary dark:bg-primary border border-primary dark:border-tertiary'></div>
        );
      })}
      {noChance &&
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-center">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-tertiary sm:mx-0 sm:h-10 sm:w-10">
                      <p className='text-primary'>:(</p>
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <h3 className="text-base font-semibold leading-6 text-gray-900" id="modal-title">Plus aucune chance...</h3>
                      <div className="mt-2 flex flex-col">
                        <p className="text-sm text-gray-500"> Votre score : {score}</p>
                        <p className="text-sm text-gray-500">Recommencez pour vous améliorer !</p>
                      </div>
                    </div>

                  </div>
                </div>
                <div className=" px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button type="button" className="inline-flex w-full justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto" onClick={setState}>Recommencer</button>
                  <Link href="/" className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Changer de jeu</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
}

export default ChanceModal;
