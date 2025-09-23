const NOTES = {
  C4: 261.63,
  'C#4': 277.18,
  Db4: 277.18,
  D4: 293.66,
  'D#4': 311.13,
  Eb4: 311.13,
  E4: 329.63,
  F4: 349.23,
  'F#4': 369.99,
  Gb4: 369.99,
  G4: 392.0,
  'G#4': 415.3,
  Ab4: 415.3,
  A4: 440.0,
  'A#4': 466.16,
  Bb4: 466.16,
  B4: 493.88,

  C5: 523.25,
  'C#5': 554.37,
  Db5: 554.37,
  D5: 587.33,
  'D#5': 622.25,
  Eb5: 622.25,
  E5: 659.25,
  F5: 698.46,
  'F#5': 739.99,
  Gb5: 739.99,
  G5: 783.99,
  'G#5': 830.61,
  Ab5: 830.61,
  A5: 880.0,
  'A#5': 932.33,
  Bb5: 932.33,
  B5: 987.77
};

// 1 = 800
const GHOST_SONG = [
  // 1절
  { freq: NOTES.G4, beat: 0.5 },
  { freq: NOTES.A4, beat: 0.5 },
  { freq: NOTES.E5, beat: 1.5 },
  { freq: null, beat: 0.5 },

  { freq: NOTES.G4, beat: 0.5 },
  { freq: NOTES.A4, beat: 0.5 },
  { freq: NOTES.E5, beat: 1.5 },

  { freq: NOTES.D5, beat: 0.5 },
  { freq: NOTES.E5, beat: 0.5 },
  { freq: NOTES.D5, beat: 0.5 },
  { freq: NOTES['C#5'], beat: 4.5 },
  { freq: null, beat: 0.5 },

  { freq: NOTES.E5, beat: 0.5 },
  { freq: NOTES.E5, beat: 0.5 },
  { freq: NOTES.C5, beat: 0.25 },
  { freq: NOTES.A4, beat: 1.75 },

  { freq: NOTES.E5, beat: 0.5 },
  { freq: NOTES.E5, beat: 0.5 },
  { freq: NOTES.G4, beat: 2 },

  { freq: NOTES.E5, beat: 0.5 },
  { freq: NOTES.E5, beat: 0.5 },
  { freq: NOTES.C5, beat: 4 }
];

export default GHOST_SONG;
