import NavBar from './navbar';
import {inter, playfair_display} from '../pages/fonts';


export default function Layout({ children}) {
    return (
        <div  className={`${playfair_display.variable} font-serif text-zinc-950  flex flex-col h-screen`}>

            <NavBar></NavBar>
            <main className={`flex-grow flex flex-col overflow-auto px-8 bg-zinc-200 bg-[url('../public/noise.png')]`}>
                    {children}
            </main>
            
            
        </div>
    );
}

/*
           <NavBar></NavBar>
            <div className= {`flex-grow flex flex-col bg-zinc-200 bg-[url('../public/noise.png')]`}>
                <main className={`flex-grow flex-col px-8`}>
                    {children}
                </main>
            </div>
*/
