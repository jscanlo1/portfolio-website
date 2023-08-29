import PageTitle from "@/components/page-title";
import SynthControlPanel from "@/components/synth/SynthControlPanel/SynthControlPanel";
import WaveControls from "@/components/synth/WaveControls/WaveControls";
import WaveButton from "@/components/synth/WaveButton/WaveButton"
import { useEffect, useRef, useState } from "react";
import EnvelopeControls from "@/components/synth/EnvelopeControls/EnvelopeControls";
import { Knob } from "@/components/synth/Knob";
import dynamic from 'next/dynamic';
//import {synth, start } from '@/lib/ToneSynth';
import * as Tone from 'tone';





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
        synth.current.triggerAttackRelease("C3", "8n"); 
    };

    function startSynth() {
        Tone.start();
    };

    return(
        <>
        <PageTitle >My Synth</PageTitle>

        
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

        <button onClick={startSynth} >Turn Synth On</button>
        <button onClick={playSynth}>CLICK ME TO PLAY</button>

        </>
    );
}