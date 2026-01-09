import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';
import { GraduationCap } from 'lucide-react';

const Education = () => {
    return (
        <section className="py-12">
            <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] text-[#4A4A4A] mb-16">
                <span className="w-8 h-[1px] bg-[#C5A572]"></span>
                Education
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {resumeData.education.map((edu, idx) => (
                    <motion.div
                        key={idx}
                        className="p-8 border border-[#1A1A1A]/5 bg-white shadow-sm flex gap-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.05)" }}
                    >
                        <div className="p-4 bg-[#F6F5E8] rounded-full h-fit flex items-center justify-center text-[#C5A572]">
                            <GraduationCap size={24} />
                        </div>
                        <div className="space-y-2">
                            <h4 className="text-2xl font-serif-display font-medium text-[#1A1A1A]">
                                {edu.school}
                            </h4>
                            <p className="text-[#C5A572] font-medium tracking-wide">
                                {edu.degree}
                            </p>
                            <p className="text-[#4A4A4A]/70 text-sm italic">
                                {edu.field}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Education;
