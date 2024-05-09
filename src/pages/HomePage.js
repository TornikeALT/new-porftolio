import About from '../components/About'
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
        </>
    );
}

export default HomePage;