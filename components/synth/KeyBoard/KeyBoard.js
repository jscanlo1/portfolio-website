import KeyBoardNote from './KeyBoardNote/KeyBoardNote';
import WhiteNote from './KeyBoardNote/WhiteNote';
import BlackNote from './KeyBoardNote/BlackNote';

export default function KeyBoard(props) {
    return(

        <div className="flex w-full bg-emerald-500 h-48 border-zinc-800 border-4 py-4 px-8 rounded-md"> 
            {props.children}
        </div>

        
    );
}

/*


*/