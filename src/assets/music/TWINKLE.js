const NOTES = {
  C4: 261.6,
  D4: 293.7,
  E4: 329.6,
  F4: 349.2,
  G4: 392.0,
  A4: 440.0,
  B4: 493.9,
  C5: 523.3,
  D5: 587.3,
  E5: 659.3,
  F5: 698.5,
  G5: 784.0,
  A5: 880.0,
  B5: 987.8
};

const TWINKLE = [
  // 1절
  { freq: NOTES.C4, beat: 0.5 },
  { freq: NOTES.C4, beat: 0.5 },
  { freq: NOTES.G4, beat: 0.5 },
  { freq: NOTES.G4, beat: 0.5 },
  { freq: NOTES.A4, beat: 0.5 },
  { freq: NOTES.A4, beat: 0.5 },
  { freq: NOTES.G4, beat: 1 },

  { freq: NOTES.F4, beat: 0.5 },
  { freq: NOTES.F4, beat: 0.5 },
  { freq: NOTES.E4, beat: 0.5 },
  { freq: NOTES.E4, beat: 0.5 },
  { freq: NOTES.D4, beat: 0.5 },
  { freq: NOTES.D4, beat: 0.5 },
  { freq: NOTES.C4, beat: 1 },

  // 2절
  { freq: NOTES.G4, beat: 0.5 },
  { freq: NOTES.G4, beat: 0.5 },
  { freq: NOTES.F4, beat: 0.5 },
  { freq: NOTES.F4, beat: 0.5 },
  { freq: NOTES.E4, beat: 0.5 },
  { freq: NOTES.E4, beat: 0.5 },
  { freq: NOTES.D4, beat: 1 },

  { freq: NOTES.G4, beat: 0.5 },
  { freq: NOTES.G4, beat: 0.5 },
  { freq: NOTES.F4, beat: 0.5 },
  { freq: NOTES.F4, beat: 0.5 },
  { freq: NOTES.E4, beat: 0.5 },
  { freq: NOTES.E4, beat: 0.5 },
  { freq: NOTES.D4, beat: 1 },

  // 3절
  { freq: NOTES.C4, beat: 0.5 },
  { freq: NOTES.C4, beat: 0.5 },
  { freq: NOTES.G4, beat: 0.5 },
  { freq: NOTES.G4, beat: 0.5 },
  { freq: NOTES.A4, beat: 0.5 },
  { freq: NOTES.A4, beat: 0.5 },
  { freq: NOTES.G4, beat: 1 },

  { freq: NOTES.F4, beat: 0.5 },
  { freq: NOTES.F4, beat: 0.5 },
  { freq: NOTES.E4, beat: 0.5 },
  { freq: NOTES.E4, beat: 0.5 },
  { freq: NOTES.D4, beat: 0.5 },
  { freq: NOTES.D4, beat: 0.5 },
  { freq: NOTES.C4, beat: 1 }
];

export default TWINKLE;
