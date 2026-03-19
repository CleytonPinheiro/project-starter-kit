import { useState } from 'react';
import { WritingLines, PrintStyle, SectionHeader, PrintHeader } from '../shared';

interface TeamOrgViewProps {
  onPrint: () => void;
}

export const TeamOrgView = ({ onPrint }: TeamOrgViewProps) => {
  const [isExample, setIsExample] = useState(false);

  return (
    <div className="flex flex-col h-full animate-fadeIn print:block print:h-auto">
      <PrintStyle landscape={false} />

      <SectionHeader
        title="Organização da Equipa"
        description="Identificação do grupo, integrantes e distribuição de papéis estratégicos."
        isExample={isExample}
        setIsExample={setIsExample}
        onPrint={onPrint}
      />

      <PrintHeader title="Organização da Equipa" showDate={true} />

      <div className="flex-1 bg-white dark:bg-slate-800 print:bg-white rounded-xl shadow-sm print:shadow-none border border-slate-200 dark:border-slate-700 print:border-none p-10 print:p-0 overflow-auto print:overflow-visible text-slate-800 dark:text-slate-200 print:text-black max-w-4xl mx-auto w-full">
        <h1 className="text-3xl font-black mb-8 text-center uppercase border-b-2 border-slate-300 print:border-black pb-4 print:hidden">Setup Inicial do Projeto</h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-bold mb-2">1. Identificação do Grupo</h2>
            <p className="text-sm italic text-slate-500 mb-4">Defina o número e o nome escolhido para a sua equipa.</p>
            {isExample ? (
              <div className="pl-4 bg-slate-50 dark:bg-slate-900/50 print:bg-transparent p-4 rounded-lg flex gap-8 border border-slate-200 dark:border-slate-700 print:border-black">
                <p><strong>Nº do Grupo:</strong> 04</p>
                <p><strong>Nome da Equipa:</strong> SnackOverflow</p>
              </div>
            ) : (
              <div className="pl-4 flex gap-8 w-full border border-slate-200 dark:border-slate-700 print:border-black rounded-lg p-4">
                <div className="flex items-end gap-2 w-1/4"><strong>Nº do Grupo:</strong> <div className="border-b-2 border-dotted border-slate-400 print:border-black flex-1"></div></div>
                <div className="flex items-end gap-2 flex-1"><strong>Nome da Equipa:</strong><div className="border-b-2 border-dotted border-slate-400 print:border-black flex-1"></div></div>
              </div>
            )}
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2">2. Integrantes da Equipa</h2>
            <p className="text-sm italic text-slate-500 mb-4">Liste o nome de todos os membros do grupo e os seus respetivos números da chamada.</p>
            {isExample ? (
              <ul className="list-disc pl-8 space-y-2">
                <li><strong>João Silva</strong> - Nº Chamada: 12</li>
                <li><strong>Maria Sousa</strong> - Nº Chamada: 25</li>
                <li><strong>Carlos Almeida</strong> - Nº Chamada: 07</li>
                <li><strong>Ana Costa</strong> - Nº Chamada: 03</li>
              </ul>
            ) : (
              <div className="pl-4 space-y-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex items-end gap-2 flex-1"><strong>Integrante {i + 1}:</strong> <div className="border-b-2 border-dotted border-slate-400 print:border-slate-500 flex-1"></div></div>
                    <div className="flex items-end gap-2 w-1/3"><strong>Nº da Chamada:</strong> <div className="border-b-2 border-dotted border-slate-400 print:border-slate-500 flex-1"></div></div>
                  </div>
                ))}
              </div>
            )}
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2">3. Organização e Frentes de Trabalho</h2>
            <p className="text-sm italic text-slate-500 mb-4">O trabalho de levantamento de requisitos precisa de estratégia. Defina quem irá liderar as principais frentes de ideação e divisão das tarefas ágeis.</p>
            {isExample ? (
              <div className="pl-4 space-y-4">
                <div className="bg-indigo-50 dark:bg-indigo-900/20 print:bg-transparent p-4 rounded-lg border border-indigo-100 dark:border-indigo-800 print:border-slate-300">
                  <p className="font-bold text-indigo-800 dark:text-indigo-300 print:text-black">Product Owner / Líder de Backlog: <span className="font-normal text-slate-700 dark:text-slate-300">João Silva</span></p>
                  <p className="text-sm mt-1">Garante que o grupo não foge do âmbito. É responsável por dividir a solução em partes e organizar as prioridades no <strong>Product Backlog</strong>.</p>
                </div>
                <div className="bg-emerald-50 dark:bg-emerald-900/20 print:bg-transparent p-4 rounded-lg border border-emerald-100 dark:border-emerald-800 print:border-slate-300">
                  <p className="font-bold text-emerald-800 dark:text-emerald-300 print:text-black">Analista de Negócios / Requisitos: <span className="font-normal text-slate-700 dark:text-slate-300">Maria Sousa</span></p>
                  <p className="text-sm mt-1">Conduz a pesquisa de campo na cantina e foca-se em traduzir os problemas nos blocos estratégicos do <strong>Lean Canvas</strong>.</p>
                </div>
                <div className="bg-amber-50 dark:bg-amber-900/20 print:bg-transparent p-4 rounded-lg border border-amber-100 dark:border-amber-800 print:border-slate-300">
                  <p className="font-bold text-amber-800 dark:text-amber-300 print:text-black">Líder Técnico / Arquitetura: <span className="font-normal text-slate-700 dark:text-slate-300">Carlos Almeida</span></p>
                  <p className="text-sm mt-1">Avalia a viabilidade técnica das ideias e ajuda a redigir os Requisitos Não-Funcionais no <strong>Documento de Visão</strong>.</p>
                </div>
                <div className="bg-rose-50 dark:bg-rose-900/20 print:bg-transparent p-4 rounded-lg border border-rose-100 dark:border-rose-800 print:border-slate-300">
                  <p className="font-bold text-rose-800 dark:text-rose-300 print:text-black">UX/UI Designer e Interação: <span className="font-normal text-slate-700 dark:text-slate-300">Ana Costa</span></p>
                  <p className="text-sm mt-1">Transforma as "User Stories" em rascunhos de ecrã e estrutura visualmente os fluxos no <strong>Diagrama de Casos de Uso</strong>.</p>
                </div>
              </div>
            ) : (
              <div className="pl-4 space-y-6">
                <div><div className="font-bold flex gap-2 w-full max-w-lg border-b border-black mb-2 pb-1">Responsável pela Ideação (Foco no Lean Canvas):</div><WritingLines count={2} /></div>
                <div><div className="font-bold flex gap-2 w-full max-w-lg border-b border-black mb-2 pb-1">Responsável pela Priorização (Foco no Product Backlog):</div><WritingLines count={2} /></div>
                <div><div className="font-bold flex gap-2 w-full max-w-lg border-b border-black mb-2 pb-1">Responsável pelo Diagrama de Casos de Uso / Fluxos:</div><WritingLines count={2} /></div>
                <div><div className="font-bold flex gap-2 w-full max-w-lg border-b border-black mb-2 pb-1">Responsável pelo Documento de Visão (Técnico / Restrições):</div><WritingLines count={2} /></div>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};
