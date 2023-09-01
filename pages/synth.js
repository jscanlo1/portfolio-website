import PageTitle from "@/components/page-title";
import SynthControlPanel from "@/components/synth/SynthControlPanel/SynthControlPanel";
import WaveControls from "@/components/synth/WaveControls/WaveControls";
import WaveButton from "@/components/synth/WaveButton/WaveButton"
import { useEffect, useRef, useState } from "react";
import EnvelopeControls from "@/components/synth/EnvelopeControls/EnvelopeControls";
import { Knob } from "@/components/synth/Knob";
import * as Tone from 'tone';
import KeyBoard from "@/components/synth/KeyBoard/KeyBoard";
import KeyBoardNote from "@/components/synth/KeyBoard/KeyBoardNote/KeyBoardNote";
import WhiteNote from "@/components/synth/KeyBoard/KeyBoardNote/WhiteNote";
import BlackNote from "@/components/synth/KeyBoard/KeyBoardNote/BlackNote";


export default function Synth(){
    const [wave, setWave] = useState('square');
    const [attack, setAttack] = useState(0);
    const [decay, setDecay] = useState(0);
    const [sustain, setSustain] = useState(0);
    const [release, setRelease] = useState(0);
    const synth = useRef(null);



    useEffect(() => {
        synth.current = new Tone.Synth({
            oscillator: {
                type: wave,
                // modulationFrequency: 0.2
            },
            envelope : {
                attack : attack / 1000 ,
                decay : decay / 100,
                sustain : sustain / 100 ,
                release : release
                }
        }).toDestination();
    }, [wave,attack, decay, sustain, release]);


    const playSynth = () => {
        Tone.start();
        synth.current.triggerAttackRelease("C3", "8n"); 
    };

    function onPlay (note){
        const now = Tone.now()
        Tone.start();
        console.log("Playing: " + note)
        synth.current.triggerAttackRelease(note, "8n", now); 
    }

    function startSynth() {
        Tone.start();
    };

    return(
        <>
        <PageTitle >My Synth</PageTitle>

        <div className="inline-block w-min mx-auto">

        
        <SynthControlPanel>
            <WaveControls wave={wave} >
                <WaveButton curr={wave} form='square' handleOnClick={() => {setWave('square')}}/>
                <WaveButton curr={wave} form='sawtooth' handleOnClick={() => {setWave('sawtooth')}}/>
                <WaveButton curr={wave} form='triangle' handleOnClick={ () => {setWave('triangle')}}/>
            </WaveControls>


            <EnvelopeControls className='m-4'>

                <Knob name='Attack' value={attack / 1000} setValue={(val) => {setAttack(val)}} min={0} max={100} setStep={1}/>
                <Knob name='Decay' value={decay / 100} setValue={(val) => {setDecay(val)}} min={0} max={100} setStep={1}/>
                <Knob name='Sustain' value={sustain / 100} setValue={(val) => {setSustain(val)}} min={0} max={100} setStep={1}/>
                <Knob name='Release' value={release} setValue={(val) => {setRelease(val)}} min={0} max={100} setStep={1}/>
            </EnvelopeControls>
        </SynthControlPanel>


        <div className="flex">
            <div className="flex-grow basis-0">
                <KeyBoard>
                    <KeyBoardNote>
                        <WhiteNote note="C"  onClick={() => onPlay('D4')}/>
                        <BlackNote note="C#" onClick={() => onPlay('D4')}/>
                    </KeyBoardNote>
                    <KeyBoardNote>
                        <WhiteNote note="D" onClick={() => onPlay('D4')} />
                        <BlackNote note="D#" onClick={() => onPlay('D#4')} />
                    </KeyBoardNote>
                    <KeyBoardNote>
                        <WhiteNote note="E" onClick={() => onPlay('E4')} />
                    </KeyBoardNote>
                    <KeyBoardNote>
                        <WhiteNote note="F" onClick={() => onPlay('F4')} />
                        <BlackNote note="F#" onClick={() => onPlay('F#4')} />
                    </KeyBoardNote>
                    <KeyBoardNote>
                        <WhiteNote note="G" onClick={() => onPlay('G4')} />
                        <BlackNote note="G#" onClick={() => onPlay('G#4')} />
                    </KeyBoardNote>
                    <KeyBoardNote>
                        <WhiteNote note="A" onClick={() => onPlay('A4')} />
                        <BlackNote note="A#" onClick={() => onPlay('A#4')} />
                    </KeyBoardNote>
                    <KeyBoardNote>
                        <WhiteNote note="B" onClick={() => onPlay('B4')} />
                    </KeyBoardNote>
                </KeyBoard>
            </div>
        </div>
        </div>
        

        </>
    );
}

/*
<div className="mx-auto m-4 w-2/3">
            <KeyBoard />
        </div>
*/