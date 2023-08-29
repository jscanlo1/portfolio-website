import { CircleSlider } from "react-circle-slider";


export default function Knob ({name, value, setValue, min, max, setStep}) {

    
    return (
        <div className='relative w-20  mx-auto place-content-center'>

			<p className="font-bold text-center">{name}</p>

			<p className=" bg-slate-100 text-center px-2">{value}</p>

            <CircleSlider
				size={80}
				knobRadius={9}
                min={min}
                max={max}
                stepSize={setStep}
				knobColor={'#feebc8'}
				circleColor={'#f6ad55'}
				circleWidth={5}
				progressWidth={10}
				progressColor={'#feebc8'}
				value={value}
				onChange={value => setValue(value)}
			/>
        </div>
    )
}