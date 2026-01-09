import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Github, Linkedin, Mail, Download, FileText } from 'lucide-react';
import { resumeData } from '../data/resumeData';

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
};

const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0, rotate: 2 },
    visible: {
        y: 0,
        opacity: 1,
        rotate: 0,
        transition: { type: "spring", stiffness: 50, damping: 20 }
    }
};

const Hero = () => {
    return (
        <motion.section
            className=" flex flex-col justify-center relative mb-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.2, ease: "circOut" }}
                className="absolute top-0 left-0 w-32 h-1.5 bg-[#C5A572] mb-12"
            />

            <div className="space-y-4">
                <motion.h1 className="text-6xl md:text-6xl font-serif-display font-light tracking-tighter leading-tight text-[#1A1A1A] pt-2">
                    <motion.span variants={itemVariants} className="inline-block">Saichand</motion.span>{" "}
                    <motion.span variants={itemVariants} className="inline-block italic text-[#C5A572]">Vemuri</motion.span>
                </motion.h1>

                <motion.div variants={itemVariants} className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12 mt-12 pl-2">
                    <h2 className="text-xl md:text-2xl text-[#4A4A4A] tracking-wider uppercase border-l-2 border-[#C5A572] pl-6 py-1 font-light">
                        {resumeData.header.title}
                    </h2>

                    <div className="flex flex-wrap gap-4">
                        <MagneticButton icon={<Mail size={20} />} href={`mailto:${resumeData.header.contact.email}`} />
                        <MagneticButton icon={<Linkedin size={20} />} href={`${resumeData.header.contact.linkedin}`} />
                        <MagneticButton icon={<Github size={20} />} href={`${resumeData.header.contact.github}`} />

                        {/* Enhanced Visibility Buttons */}
                        <motion.a
                            href={resumeData.header.contact.resume}
                            download
                            className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#1A1A1A] text-[#FDFCF0] hover:bg-[#C5A572] transition-colors duration-300 font-mono text-xs uppercase tracking-widest"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Download size={18} />
                            Resume
                        </motion.a>

                        <motion.a
                            href={resumeData.header.contact.coverLetter}
                            className="flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#FDFCF0] transition-colors duration-300 font-mono text-xs uppercase tracking-widest"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FileText size={18} />
                            Cover Letter
                        </motion.a>
                    </div>
                </motion.div>
            </div>

            <motion.p
                variants={itemVariants}
                className="text-2xl leading-snug font-serif-display text-[#1A1A1A]/90"
            >
                {resumeData.header.summary}
            </motion.p>

            <motion.div
                className="absolute bottom-10 right-0 hidden md:block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
            >
                {/* <p className="text-xs font-mono uppercase tracking-widest text-[#4A4A4A] rotate-90 origin-right">
                    Scroll to Explore
                </p> */}
            </motion.div>
        </motion.section>
    );
};

const MagneticButton = ({ icon, href }: { icon: React.ReactNode, href: string }) => {
    return (
        <motion.a
            href={href}
            className="p-4 rounded-full border border-[#1A1A1A]/10 text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#FDFCF0] hover:border-[#1A1A1A] transition-colors duration-300 flex items-center justify-center"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
        >
            {icon}
        </motion.a>
    );
}

export default Hero;
