import { motion, useScroll, useSpring } from 'framer-motion';
import Hero from './Hero';
import ExperienceTimeline from './ExperienceTimeline';
import Education from './Education';
import ProjectShowcase from './ProjectShowcase';
import SkillsArsenal from './SkillsArsenal';
import { resumeData } from '../data/resumeData';


const Portfolio = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div className="min-h-screen bg-[#FDFCF0] text-[#1A1A1A] font-serif-body selection:bg-[#C5A572] selection:text-white overflow-hidden">
            {/* Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-[#C5A572] origin-left z-50"
                style={{ scaleX }}
            />

            <main className="max-w-9xl mx-auto px-6 md:px-12 lg:px-20 py-8 md:py-12">
                <Hero />
                <ExperienceTimeline />
                <Education />
                <ProjectShowcase />
                <SkillsArsenal />

                <footer className="mt-20 pt-8 border-t border-[#1A1A1A]/10 flex flex-col md:flex-row justify-between items-center text-xs text-[#4A4A4A]/50 font-mono uppercase gap-4">
                    <span>© 2024 Saichand Vemuri</span>
                    <a href={`mailto:${resumeData.header.contact.email}`} className="hover:text-[#C5A572] transition-colors">
                        {resumeData.header.contact.email}
                    </a>
                </footer>
            </main>
        </div>
    );
};

export default Portfolio;