


export default function BlackNote(props) {
	return (
		<div onClick={props.onClick} style={{ right: -5 }} className="z-10 absolute bg-black h-32 right-0">
			<p className="">{props.note}</p>
		</div>
	)
}