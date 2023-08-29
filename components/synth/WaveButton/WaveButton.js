

export default function WaveButton({form, handleOnClick, curr}) {
    let colour
    if(form === curr){
        colour='bg-red-100';
    } else {
        colour='bg-gray-100';
    }
    return(
        <button className={`${colour} p-2 rounded-lg border-2 border-zinc-600`} onClick={handleOnClick}>
            {form}
        </button>
    )
}