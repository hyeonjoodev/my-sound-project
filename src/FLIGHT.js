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
  E5: 659.3
};

const FLIGHT = [
  { freq: NOTES.E4, beat: 0.75 },
  { freq: NOTES.D4, beat: 0.25 },
  { freq: NOTES.C4, beat: 0.5 },
  { freq: NOTES.D4, beat: 0.5 },

  { freq: NOTES.E4, beat: 0.5 },
  { freq: NOTES.E4, beat: 0.5 },
  { freq: NOTES.E4, beat: 1 },

  { freq: NOTES.D4, beat: 0.5 },
  { freq: NOTES.D4, beat: 0.5 },
  { freq: NOTES.D4, beat: 1 },

  { freq: NOTES.E4, beat: 0.5 },
  { freq: NOTES.G4, beat: 0.5 },
  { freq: NOTES.G4, beat: 1 },

  { freq: NOTES.E4, beat: 0.75 },
  { freq: NOTES.D4, beat: 0.25 },
  { freq: NOTES.C4, beat: 0.5 },
  { freq: NOTES.D4, beat: 0.5 },

  { freq: NOTES.E4, beat: 0.5 },
  { freq: NOTES.E4, beat: 0.5 },
  { freq: NOTES.E4, beat: 1 },

  { freq: NOTES.D4, beat: 0.5 },
  { freq: NOTES.D4, beat: 0.5 },
  { freq: NOTES.E4, beat: 0.75 },
  { freq: NOTES.D4, beat: 0.25 },
  { freq: NOTES.C4, beat: 1 }
];

export default FLIGHT;
