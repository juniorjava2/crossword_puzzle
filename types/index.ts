
export type CellType = 'w' | 'b';
export interface SpanValue {
  [key: string]: string;
}

// export const values: CellType[][] = [
//   ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'b', 'w', 'w', 'w', 'w', 'w'],
//   ['w', 'b', 'w', 'b', 'w', 'b', 'w', 'b', 'w', 'b', 'w', 'b', 'w', 'b', 'w'],
//   ['w', 'w', 'w', 'w', 'w', 'b', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w'],
//   ['w', 'b', 'b', 'b', 'b', 'w', 'b', 'b', 'b', 'b', 'b', 'w', 'b', 'b', 'w'],
//   ['b', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'b', 'w', 'w', 'w', 'w', 'w', 'w'],
//   ['w', 'b', 'w', 'b', 'b', 'b', 'w', 'b', 'b', 'b', 'b', 'w', 'b', 'b', 'w'],
//   ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'b', 'w', 'w', 'w', 'w', 'w', 'w', 'w'],
//   ['w', 'b', 'w', 'b', 'w', 'b', 'b', 'b', 'b', 'w', 'b', 'w', 'b', 'w', 'b'],
//   ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'b', 'w', 'w', 'w', 'w', 'w', 'w'],
//   ['w', 'b', 'b', 'b', 'b', 'w', 'b', 'w', 'b', 'w', 'b', 'b', 'b', 'w', 'b'],
//   ['w', 'w', 'w', 'w', 'w', 'b', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'b', 'w'],
//   ['w', 'b', 'w', 'b', 'b', 'b', 'b', 'b', 'w', 'b', 'b', 'w', 'b', 'b', 'w'],
//   ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'b', 'w', 'w', 'w', 'w', 'w'],
//   ['w', 'b', 'w', 'b', 'b', 'w', 'b', 'b', 'w', 'b', 'b', 'b', 'b', 'b', 'w'],
//   ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'b', 'w', 'w', 'w', 'w', 'w', 'w', 'w']
// ];

export const values: CellType[][] =[
   ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'b', 'w', 'w', 'w', 'w'],
   ['w', 'b', 'w', 'b', 'w', 'b', 'w', 'b', 'w', 'b', 'w', 'b', 'w', 'b', 'w'], 
   ['w', 'w', 'w', 'w', 'w', 'b', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w'],
   ['w', 'b', 'b', 'b', 'w', 'b', 'w', 'b', 'w', 'b', 'w', 'b', 'w', 'b', 'w'],
   ['b', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'b', 'w', 'w', 'w', 'w', 'w'],
   ['w', 'b', 'w', 'b', 'b', 'b', 'w', 'b', 'w', 'b', 'w', 'b', 'b', 'b', 'w'],
   ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'b', 'w', 'w', 'w', 'w', 'w', 'w', 'w'],
   ['w', 'b', 'w', 'b', 'w', 'b', 'b', 'b', 'b', 'b', 'w', 'b', 'w', 'b', 'w'],
   ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'b', 'w', 'w', 'w', 'w', 'w', 'w', 'w'],
   ['w', 'b', 'b', 'b', 'w', 'b', 'w', 'b', 'w', 'b', 'b', 'b', 'w', 'b', 'w'],
   ['w', 'w', 'w', 'w', 'w', 'b', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'b'],
   ['w', 'b', 'w', 'b', 'w', 'b', 'w', 'b', 'w', 'b', 'w', 'b', 'b', 'b', 'w'],
   ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'b', 'w', 'w', 'w', 'w', 'w'],
   ['w', 'b', 'w', 'b', 'w', 'b', 'w', 'b', 'w', 'b', 'w', 'b', 'w', 'b', 'w'],
   ['w', 'w', 'w', 'w', 'b', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w']
  ];


export const spansValue: SpanValue = {
  "0,0": "1", "0,2": "2", "0,4": "3", "0,6": "4", "0,8": "5", "0,11": "6", "0,12": "7", "0,14": "8",
  "1,10": "9",
  "2,0": "10", "2,6": "11",
  "4,1": "12", "4,2": "13", "4,10": "14",
  "5,0": "15",
  "6,0": "16", "6,4": "17", "6,8": "18", "6,12": "19",
  "8,0": "20", "8,6": "21", "8,8": "22",
  "10,0": "23", "10,2": "24", "10,6": "25", "10,10": "26",
  "11,14": "27",
  "12,0": "28", "12,10": "29", "12,12": "30",
  "14,0": "31", "14,5": "32"
};

export const ansKey = [
  "CHATTERBOX-EXIT",
  "E-P-H-I-N-C-R-E",
  "NOTRE-DIAGONALS",
  "T---R-D-N-N-Y-T",
  "-REPELLED-SUSHI",
  "O-X---E-O-I---F",
  "PRICKED-NIGHTLY",
  "E-S-I-----N-A-I",
  "NETTLED-FISSION",
  "M---O-E-L---N-G",
  "ICING-VIADUCTS-",
  "N-S-R-O-R-N---E",
  "DISMANTLE-MOPED",
  "E-U-M-E-U-E-E-G",
  "DUEL-PERPETRATE"
];

// Create a function to convert ansKey to match the grid structure
export const formattedAnsKey = ansKey.map(row => 
  row.split('').map(char => char === '-' ? 'b' : char).join('')
);
