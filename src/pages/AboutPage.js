import About from "../components/About";
import Banner from "../components/Banner";


function AboutPage() {
    return (
        <>
            <section>
                <About />
            </section>
            <section style={{ overflow: 'hidden', marginTop: '10rem' }}>
                <Banner />
            </section>
        </>
    );
}

export default AboutPage;