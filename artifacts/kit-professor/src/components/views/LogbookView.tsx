import { useState } from 'react';
import { WritingLines, PrintStyle, SectionHeader, PrintHeader } from '../shared';
import { LOGBOOK_EXAMPLE_DATA } from '../../data/logbook';

interface LogbookViewProps {
  onPrint: () => void;
}

export const LogbookView = ({ onPrint }: LogbookViewProps) => {
  const [isExample, setIsExample] = useState(false);

  return (
    <div className="flex flex-col h-full animate-fadeIn print:block print:h-auto">
      <PrintStyle landscape={false} />

      <SectionHeader
        title="Diário de Bordo"
        description="Registo contínuo do progresso: compare o que foi planeado com o executado."
        isExample={isExample}
        setIsExample={setIsExample}
        onPrint={onPrint}
      />

      <PrintHeader title="Diário de Bordo do Projeto" />

      <div className="flex-1 bg-white dark:bg-slate-800 print:bg-white rounded-xl shadow-sm print:shadow-none border border-slate-200 dark:border-slate-700 print:border-none p-8 print:p-0 overflow-auto print:overflow-visible text-slate-800 dark:text-slate-200 print:text-black mx-auto w-full max-w-4xl">
        <h1 className="text-3xl font-black mb-8 text-center uppercase border-b-2 border-slate-300 print:border-black pb-4 print:hidden">Acompanhamento das Aulas</h1>

        <div className="space-y-8">
          {isExample ? (
            LOGBOOK_EXAMPLE_DATA.map((entry, idx) => (
              <div key={idx} className="border-2 border-slate-200 dark:border-slate-700 print:border-black rounded-xl p-5 bg-slate-50 dark:bg-slate-900/50 print:bg-transparent">
                <div className="flex justify-between items-center border-b-2 border-slate-200 dark:border-slate-700 print:border-black pb-3 mb-4">
                  <h3 className="text-lg font-bold text-indigo-800 dark:text-indigo-300 print:text-black">Aula / Encontro: {entry.aula}</h3>
                  <span className="font-mono text-sm font-medium">Data: {entry.data}</span>
                </div>
                <div className="space-y-4">
                  <div>
                    <strong className="text-slate-700 dark:text-slate-300 print:text-black block mb-1">🎯 Planeado para hoje:</strong>
                    <p className="text-sm pl-4 border-l-2 border-indigo-200 dark:border-indigo-800">{entry.planejado}</p>
                  </div>
                  <div>
                    <strong className="text-slate-700 dark:text-slate-300 print:text-black block mb-1">✅ O que foi executado (e desafios):</strong>
                    <p className="text-sm pl-4 border-l-2 border-emerald-200 dark:border-emerald-800">{entry.executado}</p>
                  </div>
                  <div>
                    <strong className="text-slate-700 dark:text-slate-300 print:text-black block mb-1">🚀 Próximos passos / Para a próxima aula:</strong>
                    <p className="text-sm pl-4 border-l-2 border-amber-200 dark:border-amber-800">{entry.proximos}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            Array.from({ length: 3 }).map((_, idx) => (
              <div key={idx} className="border-2 border-slate-300 dark:border-slate-600 print:border-black rounded-xl p-5 print:p-4 print:mb-4">
                <div className="flex justify-between items-end border-b-2 border-slate-300 dark:border-slate-600 print:border-black pb-2 mb-4">
                  <div className="flex items-end gap-2 w-1/3">
                    <strong className="text-lg">Aula / Encontro:</strong> <div className="border-b-2 border-dotted border-slate-400 print:border-black flex-1"></div>
                  </div>
                  <div className="flex items-end gap-2 w-1/4">
                    <strong>Data:</strong> <div className="border-b-2 border-dotted border-slate-400 print:border-black flex-1"></div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div><strong className="block mb-1">🎯 Planejado para hoje:</strong><WritingLines count={2} /></div>
                  <div><strong className="block mb-1">✅ O que foi executado (e quais foram os desafios / bloqueios):</strong><WritingLines count={4} /></div>
                  <div><strong className="block mb-1">🚀 Próximos passos / Para a próxima aula:</strong><WritingLines count={2} /></div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
