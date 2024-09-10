"use client"

import React, { useState } from 'react';
import Grid from '../components/Grid';
import Controls from '../components/Controls';
import Clues from '../components/Clues'
import { checkAnswers, clearColors } from '../utils/answerUtils';

const Home: React.FC = () => {
  const [direction, setDirection] = useState<'horizontal' | 'vertical'>('horizontal');

  const handleDirectionChange = (dir: 'horizontal' | 'vertical') => {
    setDirection(dir);
  };

  const handleCheck = () => {
    checkAnswers(); // Directly use the utility function
  };

  const handleClear = () => {
    clearColors(); // Directly use the utility function
  };

  return (
    <div >
      <Controls
        direction={direction}
        onDirectionChange={handleDirectionChange}
        onCheck={handleCheck}
        onClear={handleClear}
      />
      <div className='flex flex-col md:flex-row mx-4 justify-center  py-4 relative'>
        <Grid direction={direction} onCheckAnswers={handleCheck} onClearAnswers={handleClear} />
        <Clues/>
      </div>
    </div>
  );
};

export default Home;




// src/pages/index.tsx

// import React, { useState } from 'react';
// import Grid from './components/Grid';
// import Controls from './components/Controls';
// import { checkAnswers, colorClear } from './utils/answerUtils';

// const Home: React.FC = () => {
//   const [direction, setDirection] = useState<'horizontal' | 'vertical'>('horizontal');

//   const handleDirectionChange = (dir: 'horizontal' | 'vertical') => {
//     setDirection(dir);
//   };

//   const handleCheck = () => {
//     const { correctCells, incorrectCells } = checkAnswers();
//     colorClear(correctCells, incorrectCells);
//   };

//   const handleClear = () => {
//     colorClear([], []); // Clear all user input and background colors
//   };

//   return (
//     <div>
//       <Controls
//         direction={direction}
//         onDirectionChange={handleDirectionChange}
//         onCheck={handleCheck}
//         onClear={handleClear}
//       />
//       <Grid direction={direction} onCheckAnswers={handleCheck} onClearAnswers={handleClear} />
//     </div>
//   );
// };

// export default Home;
