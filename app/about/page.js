import Services from "@/components/Home/Services";
import Teams from "@/components/Home/Teams";
import WhyChoose from "@/components/Home/WhyChoose";
import Mission from "@/components/Mission";
import PageHeader from "@/components/PageHeader";

const About = () => {
    return (
        <>
           <PageHeader name="About us" />
           <WhyChoose/>
           <Mission/>
           <Services/>
           <Teams/>
        </>
    );
};

export default About;