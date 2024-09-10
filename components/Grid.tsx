import React, { useEffect, useState } from 'react';
import { values, spansValue } from '../types/index';


interface GridProps {
  direction: 'horizontal' | 'vertical';
  onCheckAnswers: () => void;
  onClearAnswers: () => void;
}



const Grid: React.FC<GridProps> = ({ direction, onCheckAnswers, onClearAnswers }) => {
  const [current, setCurrent] = useState<HTMLElement | null>(null);

  const handleCellClick = (e: React.MouseEvent<HTMLTableCellElement>) => {
    const target = e.currentTarget;
    if (target.classList.contains('w')) {
      if (current) {
        (current as HTMLElement).style.backgroundColor = 'transparent';
      }
      (target as HTMLElement).style.backgroundColor = 'orange';
      setCurrent(target as HTMLElement);
    }
  };

  const handleKeyUp = (e: KeyboardEvent) => {
    if (current) {
      const row = parseInt(current.getAttribute('data-row') || '0');
      const col = parseInt(current.getAttribute('data-col') || '0');

      switch (e.key) {
        case 'ArrowLeft':
          moveFocus(row, col - 1);
          break;
        case 'ArrowUp':
          moveFocus(row - 1, col);
          break;
        case 'ArrowRight':
          moveFocus(row, col + 1);
          break;
        case 'ArrowDown':
          moveFocus(row + 1, col);
          break;
        default:
          if (e.key.length === 1 && /^[a-zA-Z]$/.test(e.key)) {
            (current.querySelector('b') as HTMLElement).textContent = e.key.toUpperCase();
            moveFocus(direction === 'horizontal' ? row : row + 1, direction === 'horizontal' ? col + 1 : col);
          }
          if (e.key === 'Backspace' || e.key === 'Delete') {
            (current.querySelector('b') as HTMLElement).textContent = '';
          }
          break;
      }
    }
  };

  const moveFocus = (row: number, col: number) => {
    if (row < 0 || col < 0 || row >= values.length || col >= values[0].length) return;
    const newCell = document.querySelector(`.grid-row:nth-child(${row + 1}) .grid-cell:nth-child(${col + 1})`) as HTMLElement;
    if (newCell && newCell.classList.contains('w')) {
      if (current) {
        (current as HTMLElement).style.backgroundColor = 'transparent';
      }
      (newCell as HTMLElement).style.backgroundColor = 'orange';
      setCurrent(newCell);
    }
  };

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [current]);

  return (
    <table>
      <tbody className='bg-white'>
        {values.map((row, rowIndex) => (
          <tr key={rowIndex} className="grid-row">
            {row.map((cell, colIndex) => (
              <td
                key={colIndex}
                className={`grid-cell ${cell}`}
                data-row={rowIndex}
                data-col={colIndex}
                onClick={handleCellClick}
              >
                <span>{spansValue[`${rowIndex},${colIndex}`]}</span>
                <b></b>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Grid;
