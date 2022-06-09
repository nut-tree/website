import Hero from "../components/hero";
import Features from "../components/features/features";
import Sponsoring from "../components/sponsoring";
import FAQ from "../components/faq/faq";
import Footer from "../components/footer";

export default function HomePage() {
    const docsIndex = '/intro'

    return (
        <main className='w-full h-full'>
            <Hero ctaLink={docsIndex} ctaText="🚀 Let's get started!"/>
            <Features/>
            <Sponsoring/>
            <FAQ/>
            <Footer/>
        </main>
    )
}
