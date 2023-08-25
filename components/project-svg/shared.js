



export default function SVGWrapper({children}){
    return (
        <div className="relative  ">
            <Background />

            {children}
            
                
     
        </div>

    );
}

function Background() {
    return(
        <div className=" absolute inset-6  rounded-full b border-2 border-zinc-300 bg-zinc-200 bg-[url('/grid.svg')] bg-[length:40px_40px]">
          
        </div>
    )

}

//Position must be absolute

