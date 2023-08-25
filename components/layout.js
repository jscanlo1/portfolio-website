import NavBar from './navbar';



export default function Layout({ children}) {
    return (
        <div  className={` font-serif text-zinc-950  flex flex-col h-screen bg-zinc-200 bg-[url('/noise.png')]`}>

            <NavBar></NavBar>
            <main className={`flex-grow flex flex-col overflow-auto px-8 `}>
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
