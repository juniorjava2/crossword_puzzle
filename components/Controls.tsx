

import React from 'react';
import Timer from './Timer';

interface ControlsProps {
  direction: "horizontal" | "vertical";
  onDirectionChange: (dir: "horizontal" | "vertical") => void;
  onCheck: () => void;
  onClear: () => void;
}

const Controls: React.FC<ControlsProps> = ({ direction, onDirectionChange, onCheck, onClear }) => {
  return (
    <div className="relative controls mx-4">
      <div className="direction">
        <h3 className="text-2xl font-bold text-gray-900">Direction for Writing...</h3>
        <div>
          <label htmlFor="horizontal">
            <input
              id="horizontal"
              type="radio"
              name="orientation"
              value="horizontal"
              checked={direction === 'horizontal'}
              onChange={() => onDirectionChange('horizontal')}
            />
            Horizontal
          </label>
          <label htmlFor="vertical">
            <input
              id="vertical"
              type="radio"
              name="orientation"
              value="vertical"
              checked={direction === 'vertical'}
              onChange={() => onDirectionChange('vertical')}
            />
            Vertical
          </label>
        </div>  
      </div>
      <div className="buttons">
        <button type="button" onClick={onCheck}>CHECK</button>
        <button type="button" onClick={onClear}>WRONG CLEAR</button>
      </div>
      <div>
        <Timer/>
      </div>
    </div>
  );
};

export default Controls;