import About from '../components/About'
import Banner from '../components/Banner';
import Projects from '../components/Projects';
import Services from '../components/Services';


function HomePage() {
    return (
        <>
            <section>
                <About />
            </section>
            <section>
                <Services />
            </section>
            <section>
                <Projects />
            </section>
            <section style={{ overflow: 'hidden', marginTop: '15rem' }}>
                <Banner />
            </section>
        </>
    );
}

export default HomePage;