import Link from 'next/link';
import { Heading, Text, Avatar, Box, Strong } from "@radix-ui/themes";
import { ArrowTopRightIcon } from '@radix-ui/react-icons';

interface DataItem {
  id: number;
  randomNumber: number;
}

const generateSortedData = (length: number, min: number, max: number): DataItem[] => {
  return Array.from({ length }, (_, i) => ({
    id: i + 1,
    randomNumber: Math.floor(Math.random() * (max - min + 1)) + min,
  })).sort((a, b) => b.randomNumber - a.randomNumber);
};


const getRandomUsername = () => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const length = Math.floor(Math.random() * (15 - 5 + 1)) + 5;
  const usernameArray = Array.from({ length }, () => {
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters.charAt(randomIndex);
  });
  return usernameArray.join('');
};

export default function Home() {
  const sectionIntervals = [
    { min: 210, max: 250, sectionName: 'Choix Multiples' },
    { min: 150, max: 180, sectionName: 'Vrai ou Faux' },
    { min: 45, max: 60, sectionName: 'Contre la Montre' },
  ];

  return (
    <section className=' max-w-default mx-auto h-screen-header-mobile md:h-screen-header m-auto p-4 space-y-8'>

      <div className='space-y-4'>
        <Heading as='h1' size='9' >
          MentalMath
        </Heading>
        <Heading as='h2' size='5'>
          MentalMath ressemble à plusieurs jeux de calculs mentaux.
        </Heading>
      </div>

      <Text as='p' size='5'>
        Essayé de battre les meilleurs joueurs de chaque catégorie ! ⬇️ ⬇️
      </Text>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sectionIntervals.map((interval, sectionIndex) => {
          const sortedData = generateSortedData(5, interval.min, interval.max);

          return (
            <div key={sectionIndex} className="flex flex-col border border-stone-200 divide-y rounded">
              <Link href={`/${interval.sectionName.toLowerCase().replace(/ /g, '-')}`} className="w-full bg-blue-100 text-blue-800 p-4 box">
                Classement <Strong> {interval.sectionName}</Strong> <ArrowTopRightIcon />
              </Link>
              {sortedData.map((item, index) => (
                <div key={item.id} className="grid grid-cols-2 items-center justify-between gap-2 w-full p-2">
                  <div className="grid grid-cols-score gap-2 items-center">
                    <Text>{index + 1}.</Text>
                    <Avatar
                      fallback={
                        <Box width="5" height="5">
                          <svg viewBox="0 0 64 64" fill="currentColor">
                            <path d="M41.5 14c4.687 0 8.5 4.038 8.5 9s-3.813 9-8.5 9S33 27.962 33 23 36.813 14 41.5 14zM56.289 43.609C57.254 46.21 55.3 49 52.506 49c-2.759 0-11.035 0-11.035 0 .689-5.371-4.525-10.747-8.541-13.03 2.388-1.171 5.149-1.834 8.07-1.834C48.044 34.136 54.187 37.944 56.289 43.609zM37.289 46.609C38.254 49.21 36.3 52 33.506 52c-5.753 0-17.259 0-23.012 0-2.782 0-4.753-2.779-3.783-5.392 2.102-5.665 8.245-9.472 15.289-9.472S35.187 40.944 37.289 46.609zM21.5 17c4.687 0 8.5 4.038 8.5 9s-3.813 9-8.5 9S13 30.962 13 26 16.813 17 21.5 17z" />
                          </svg>
                        </Box>
                      }
                    />
                    <Text weight="medium">{getRandomUsername()}</Text>
                  </div>
                  <Text weight="bold" align="right">{item.randomNumber}</Text>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </section>
  );
}
