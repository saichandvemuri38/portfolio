import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';

const SkillsArsenal = () => {
    return (
        <section className="py-12 bg-[#1A1A1A] text-[#FDFCF0] -mx-6 md:-mx-20 px-6 md:px-20 mt-20">
            <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] text-[#C5A572] mb-16">
                <span className="w-8 h-[1px] bg-[#C5A572]"></span>
                Technical Arsenal
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                {resumeData.skills.map((skillGroup, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="space-y-6"
                    >
                        <div className="flex items-center gap-3 text-[#C5A572] mb-2 border-b border-[#FDFCF0]/10 pb-4">
                            {skillGroup.icon}
                            <h4 className="font-serif-display text-2xl">{skillGroup.category}</h4>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            {skillGroup.items.map((skill, sIdx) => (
                                <motion.span
                                    key={sIdx}
                                    className="text-[#FDFCF0]/90 text-sm border border-[#FDFCF0]/20 px-4 py-2 rounded-full cursor-default"
                                    whileHover={{
                                        scale: 1.1,
                                        backgroundColor: "#C5A572",
                                        color: "#1A1A1A",
                                        borderColor: "#C5A572"
                                    }}
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default SkillsArsenal;
