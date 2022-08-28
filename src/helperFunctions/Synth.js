import * as Tone from "tone";

// create a new synth and connect it to the main output (your speakers)
const synth = new Tone.Synth().toDestination();

//Create each of the notes
const A2 = () => {
  synth.triggerAttackRelease("a2", "1");
};
const B2 = () => {
  synth.triggerAttackRelease("b2", "2");
};
const D3 = () => {
  synth.triggerAttackRelease("d3", "3");
};
const E3 = () => {
  synth.triggerAttackRelease("e3", "4");
};
const F3 = () => {
  synth.triggerAttackRelease("f3", "5");
};
const A3 = () => {
  synth.triggerAttackRelease("a3", "6");
};
const B3 = () => {
  synth.triggerAttackRelease("b3", "7");
};
const D4 = () => {
  synth.triggerAttackRelease("d4", "8");
};
const E4 = () => {
  synth.triggerAttackRelease("e4", "9");
};
const F4 = () => {
  synth.triggerAttackRelease("f4", "10");
};
const A4 = () => {
  synth.triggerAttackRelease("a4", "11");
};
const D5 = () => {
  synth.triggerAttackRelease("d5", "12");
};

// Route keybindings to specific notes and play them
export const keybindRouter = (keybind) => {
  switch (keybind) {
    case 49: {
      A2();
    }
    case 50: {
      B2();
    }
    case 51: {
      D3();
    }
    case 52: {
      E3();
    }
    case 53: {
      F3();
    }
    case 54: {
      A3();
    }
    case 55: {
      B3();
    }
    case 56: {
      D4();
    }
    case 57: {
      F4();
    }
    case 58: {
      E4();
    }
  }
};
