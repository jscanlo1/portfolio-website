import { Synth, start } from "tone";

const synth = new Synth({
	oscillator: {
		type: "sawtooth",
		// modulationFrequency: 0.2
	},
	envelope : {
		attack : 0.005 ,
		decay : 0.1 ,
		sustain : 0.3 ,
		release : 1
		}
}).toDestination();

export { synth, start }