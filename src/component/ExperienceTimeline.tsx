import { useRef } from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';

const ExperienceTimeline = () => {
    const ref = useRef(null);

    return (
        <section ref={ref} className="py-12 relative">
            <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] text-[#4A4A4A] mb-16">
                <span className="w-8 h-[1px] bg-[#C5A572]"></span>
                Experience
            </div>

            <div className="relative border-l border-[#1A1A1A]/10 ml-3 md:ml-0 space-y-8 pl-8 md:pl-16 py-4">
                {/* Scroll Indicator Line */}
                <motion.div
                    className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#C5A572] origin-top"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                />

                {resumeData.experience.map((job, idx) => (
                    <TimelineItem key={idx} job={job} />
                ))}
            </div>
        </section>
    );
};

const TimelineItem = ({ job }: { job: any }) => {
    return (
        <motion.div
            className="relative group"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <motion.div
                className="absolute -left-[41px] md:-left-[71px] top-3 w-4 h-4 rounded-full bg-[#fdfcf0] border-2 border-[#C5A572] z-10"
                whileInView={{ scale: [1, 1.5, 1], backgroundColor: "#C5A572" }}
                transition={{ duration: 0.5, delay: 0.2 }}
            />
            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-6">
                <h4 className="text-4xl font-serif-display font-medium text-[#1A1A1A] group-hover:text-[#C5A572] transition-colors duration-300">
                    {job.company}
                </h4>
                <span className="text-sm font-mono text-[#4A4A4A]/60 mt-2 md:mt-0 tracking-widest uppercase">
                    {job.period}
                </span>
            </div>

            <h5 className="text-xl text-[#C5A572] italic mb-6 font-medium font-serif-display">
                {job.role}
            </h5>

            <p className="text-[#1A1A1A]/80 mb-8 text-2xl font-light leading-relaxed">
                {job.description}
            </p>

            <ul className="space-y-4">
                {job.achievements.map((point: string, idx: number) => (
                    <motion.li
                        key={idx}
                        className="text-[#4A4A4A] text-lg leading-relaxed flex items-start gap-4"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * idx }}
                    >
                        <span className="text-[#C5A572] text-xs mt-2">◆</span>
                        {point}
                    </motion.li>
                ))}
            </ul>
        </motion.div>
    );
}

export default ExperienceTimeline;
