import Content from "@/components/content";
import PageTitle from "@/components/page-title";



export default function Thesis(){
    return(
        <>
        <PageTitle>My Thesis</PageTitle>
        <object data="/MAI_dissertation.pdf" type="application/pdf" width="100%" height="100%" className="mt-12">
            <p><p>My Thesis - Sorry it isnt loaded but it is available on my LinkedIn!</p></p>
        </object>
        </>
    );
}