import Content from "@/components/content";
import PageTitle from "@/components/page-title";



export default function Thesis(){
    return(
        <>
        <PageTitle>My Thesis</PageTitle>
        <div className="w-4/5 min-h-screen mx-auto pb-8">
            <object data="/MAI_dissertation.pdf" type="application/pdf" width="100%" height="100%" >
                <p>My Thesis - Sorry it isnt loaded but it is available on my LinkedIn!</p>
            </object>
        </div>
        
        </>
    );
}