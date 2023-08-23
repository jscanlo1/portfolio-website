import PageTitle from "@/components/page-title";



export default function CV(){
    return(
        <>
        <PageTitle>My CV</PageTitle>
        <div className="w-4/5 min-h-screen mx-auto pb-8">
            <object data="/CV_Johnny_Scanlon.pdf" type="application/pdf" width="100%" height="100%" >
                <p>My CV - Sorry it isnt loaded but it is available on my LinkedIn!</p>
            </object>
        </div>
        
        </>
    );
}