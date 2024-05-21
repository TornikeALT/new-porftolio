import Banner from "../components/Banner";
import Projects from "../components/Projects";

function WorkPage() {
    return (
        <>
            <section>
                <Projects />
            </section>
            <section style={{ overflow: 'hidden', marginTop: '10rem' }}>
                <Banner />
            </section>
        </>
    );
}

export default WorkPage;