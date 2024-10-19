import Banner from './Banner';
import Section2 from './Section2';
import Services from './Services';
import "./index.css";
import Testimonial from './Testimonial';
import FAQ from './FAQ';
import Section5 from './Section5';
import Footer from './Footer';

const LandingPage = () => {
    return (
        <div>
            <Banner />
            <div className='w-full px-0 lg:px-[10%] bg-[var(--primary-color)]'>
                <Services />
                <Section2 />
                <Testimonial />
                <FAQ />
                <Section5 />
            </div>
            <Footer />
        </div>
    )
}

export default LandingPage;
