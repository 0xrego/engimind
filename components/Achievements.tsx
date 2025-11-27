import React from "react";

const Achievements: React.FC = () => {
    const achievements = [
        {
            title: "PME Líder",
            year: "2023",
            description:
                "Distinção atribuída pelo IAPMEI, reconhecendo o desempenho superior e o contributo para a economia nacional.",
        },
        {
            title: "PME Excelência",
            year: "2022",
            description:
                "Estatuto que distingue as empresas com os melhores desempenhos e indicadores de gestão.",
        },
        {
            title: "ISO 9001",
            year: "Certificado",
            description:
                "Compromisso com a qualidade e a melhoria contínua dos nossos serviços e processos.",
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((item, index) => (
                <div
                    key={index}
                    className="bg-slate-50 p-6 rounded-xl border border-slate-100 text-center hover:bg-white hover:shadow-sm transition-all duration-300"
                >
                    <div className="text-4xl font-bold text-brand-blue mb-2">
                        {item.year}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                        {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                        {item.description}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default Achievements;
