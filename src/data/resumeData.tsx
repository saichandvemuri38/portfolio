import { Server, Brain, Globe, Shield, Zap, Code, Database } from 'lucide-react';

export const resumeData = {
    header: {
        name: "Saichand Vemuri",
        title: "Full Stack Software Engineer & AI Specialist",
        summary: "I am a Software Engineer passionate about transforming healthcare through technology. From migrating legacy monoliths to Spring Boot Microservices to building Generative AI Agents that automate clinical workflows, I specialize in high-impact modernization. With deep expertise in the Java ecosystem, Angular/React, and AWS EKS, I build secure, scalable systems that solve real-world problems. My goal is to continue pushing the limits of AI Orchestration and Cloud-Native Architecture to create a more efficient, automated future.",
        contact: {
            email: "saisxv@gmail.com",
            location: "Mechanicsburg, PA",
            linkedin: "https://www.linkedin.com/in/vemuri-saichand",
            github: "https://www.github.com/saichandvemuri38",
            resume: "/Profile.pdf",
            coverLetter: "#"
        }
    },
    skills: [
        { category: "Languages", icon: <Code size={18} />, items: ["Java (v8+)", "Rust", "TypeScript", "JavaScript", "SQL", "HTML5/CSS3"] },
        { category: "Backend", icon: <Server size={18} />, items: ["Spring Boot", "Spring MVC", "Hibernate/JPA", "WebAssembly (Wasm)"] },
        { category: "Frontend", icon: <Globe size={18} />, items: ["React", "Angular (v2+)", "Next.js", "Redux", "RxJS"] },
        { category: "Data & Messaging", icon: <Database size={18} />, items: ["Oracle DB", "PostgreSQL", "Vector DBs", "Apache Kafka", "Redis"] },
        { category: "Cloud & DevOps", icon: <Shield size={18} />, items: ["AWS (EKS/Bedrock/S3)", "Azure", "Docker", "Kubernetes", "Jenkins"] },
        { category: "AI & ML", icon: <Brain size={18} />, items: ["OpenAI API", "Agentic Workflows", "RAG", "Prompt Engineering"] }
    ],
    experience: [
        {
            company: "CVS Health",
            role: "Software Engineer",
            period: "Sep 2023 - Present",
            description: "Modernizing critical healthcare infrastructure and integrating advanced AI solutions.",
            achievements: [
                "Orchestrated 'Digital Scribe' agents using OpenAI APIs to automate medical record documentation, significantly reducing clinician administrative overhead.",
                "Spearheaded the migration of legacy immunization and medication modules to a modern React architecture and Java/Spring Boot microservices.",
                "Engineered a high-performance client-side data parser using Rust and WebAssembly to process 50,000+ records in milliseconds, eliminating server bottlenecks.",
                "Architected high-availability systems using PostgreSQL, Apache Kafka, and Redis, deployed on Azure Kubernetes Service (AKS).",
                "Streamlined delivery lifecycles via Jenkins CI/CD pipelines while maintaining 90%+ test coverage across the full stack."
            ]
        },
        {
            company: "Ahex Technologies",
            role: "Associate Software Engineer",
            period: "Jan 2020 - May 2023",
            description: "Led the end-to-end modernization of legacy hospital systems and automated critical data pipelines.",
            achievements: [
                "Transformed a Spring Servlet monolith into scalable Spring Boot microservices, reducing deployment cycles by 50%.",
                "Migrated outdated JSP interfaces to a responsive Angular SPA, significantly enhancing user accessibility.",
                "Engineered an automated data pipeline using Apache Kafka and Spring Scheduler, eliminating 80% of manual prescription entry.",
                "Architected a dynamic caregiver scheduling algorithm for 1,000+ daily visits, optimized with Redis and Oracle DB.",
                "Secured sensitive healthcare data through containerized AWS EKS deployments while improving system reliability."
            ]
        }
    ],
    education: [
        {
            school: "University of Central Missouri",
            degree: "Master's degree",
            field: "Computer Science"
        },
        {
            school: "Jawaharlal Nehru Technological University",
            degree: "Bachelor of Technology - BTech",
            field: "Computer Science and Engineering"
        }
    ],
    projects: [
        {
            title: "Conversational Law Enforcement Agent",
            tech: "AWS Bedrock • Java • Spring Boot",
            icon: <Brain size={24} />,
            details: [
                "Architected a 'Hub-and-Spoke' multi-agent ecosystem on AWS Bedrock where a lead agent coordinates 6 specialized child agents to resolve complex queries.",
                "Engineered a hybrid integration layer using AWS Lambda to bridge GraphQL APIs with legacy SOAP/REST endpoints and SQL databases.",
                "Implemented Enterprise-Grade RAG using AWS Bedrock Knowledge Bases and strict Guardrails for protocol compliance.",
                "Designed a context-aware Memory Management system to retain investigation details across long threads and chain logic between services."
            ]
        },
        {
            title: "High-Performance Data Parser",
            tech: "Rust • WebAssembly (Wasm) • React",
            icon: <Zap size={24} />,
            details: [
                "Engineered an HFT-style data parser to solve client-side bottlenecks, processing 50,000+ CSV rows without degrading UI responsiveness.",
                "Integrated Rust and WebAssembly into React, offloading CPU-intensive tasks from the JavaScript main thread to a compiled Wasm module.",
                "Achieved a 100x performance increase, reducing processing time from system-freezing lags to just 340 milliseconds.",
                "Demonstrated the viability of systems programming in frontend performance critical applications."
            ]
        }
    ]
};
