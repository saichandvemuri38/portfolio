import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { resumeData } from '../data/resumeData';
import { ArrowUpRight } from 'lucide-react';

const ProjectShowcase = () => {
    return (
        <section className="py-12">
            <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] text-[#4A4A4A] mb-16">
                <span className="w-8 h-[1px] bg-[#C5A572]"></span>
                Selected Work
            </div>

            <div className="grid grid-cols-1 gap-20">
                {resumeData.projects.map((project, idx) => (
                    <ProjectCard key={idx} project={project} />
                ))}
            </div>
        </section>
    );
};

const ProjectCard = ({ project }: { project: any }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            className="perspective-1000 w-full"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: 1000 }}
        >
            <motion.div
                className="bg-white p-8 md:p-14 border border-[#1A1A1A]/5 relative overflow-hidden group cursor-pointer"
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
                {/* Background Element */}
                <div
                    className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500 transform translate-x-1/3 -translate-y-1/3"
                    style={{ transform: "translateZ(20px)" }}
                >
                    {React.cloneElement(project.icon as any, { size: 400, strokeWidth: 0.5 })}
                </div>

                <div className="relative z-10 space-y-8" style={{ transform: "translateZ(50px)" }}>
                    <div className="flex justify-between items-start">
                        <div>
                            <span className="inline-block px-4 py-1.5 bg-[#C5A572] text-[#FDFCF0] text-xs font-bold uppercase tracking-widest mb-6 rounded-full">
                                Case Study
                            </span>
                            <h3 className="text-4xl md:text-6xl font-serif-display font-medium text-[#1A1A1A] leading-tight">
                                {project.title}
                            </h3>
                        </div>
                        <motion.div
                            className="p-4 rounded-full border border-[#1A1A1A]/20 group-hover:bg-[#1A1A1A] group-hover:text-[#FDFCF0] transition-colors"
                            whileHover={{ rotate: 45 }}
                        >
                            <ArrowUpRight size={24} />
                        </motion.div>
                    </div>

                    <p className="text-xl text-[#C5A572] font-mono border-l-2 border-[#C5A572] pl-6 py-2">
                        {project.tech}
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 pt-6">
                        {project.details.map((detail: string, idx: number) => (
                            <div key={idx} className="flex gap-4 items-start text-lg text-[#1A1A1A]/80 font-light leading-relaxed">
                                <span className="text-[#C5A572] font-serif-display text-2xl italic">0{idx + 1}</span>
                                <p>{detail}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default ProjectShowcase;
