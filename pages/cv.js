import PageTitle from "@/components/page-title";



export default function CV(){
    return(
        <>
        <PageTitle>My CV</PageTitle>
        <object data="/CV_2023_Johnny_Scanlon.pdf" type="application/pdf" width="100%" height="100%" className="mt-12">
            <p>My CV - Sorry it isnt loaded but it is available on my LinkedIn!</p>
        </object>
        </>
    );
}