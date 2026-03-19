import { useState } from 'react';
import { Info } from 'lucide-react';
import { PrintStyle, SectionHeader, PrintHeader } from '../shared';
import { BACKLOG_EXAMPLE_DATA } from '../../data/backlog';

interface ProductBacklogViewProps {
  onPrint: () => void;
}

export const ProductBacklogView = ({ onPrint }: ProductBacklogViewProps) => {
  const [isExample, setIsExample] = useState(false);

  const emptyRows = Array.from({ length: 12 }).map((_, i) => ({
    id: `US${(i + 1).toString().padStart(2, '0')}`,
    role: '', action: '', reason: '', priority: '', epic: ''
  }));
  const backlogData = isExample ? BACKLOG_EXAMPLE_DATA : emptyRows;

  return (
    <div className="flex flex-col h-full animate-fadeIn print:block print:h-auto">
      <PrintStyle landscape={true} />

      <SectionHeader
        title="Product Backlog"
        description="Transforma requisitos em tarefas focadas no utilizador (User Stories)."
        isExample={isExample}
        setIsExample={setIsExample}
        onPrint={onPrint}
      />

      <PrintHeader title="Product Backlog" subtitle='Fórmula: "Como [ator], eu quero [ação] para que [motivo]."' />

      <div className="bg-white dark:bg-slate-800 print:bg-transparent rounded-xl shadow-sm print:shadow-none border border-slate-200 dark:border-slate-700 print:border-none overflow-hidden flex-1 flex flex-col">
        <div className="p-4 bg-slate-50 dark:bg-slate-800/50 print:hidden border-b border-slate-200 dark:border-slate-700">
          <p className="text-sm font-medium text-slate-700 dark:text-slate-300 flex items-center gap-2">
            <Info className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
            Fórmula: "Como [ator], eu quero [ação] para que [motivo]."
          </p>
        </div>
        <div className="overflow-x-auto print:overflow-visible">
          <table className="w-full text-left border-collapse print:border print:border-black">
            <thead>
              <tr className="bg-slate-100/50 dark:bg-slate-700/50 print:bg-slate-200">
                <th className="p-3 border border-slate-200 print:border-black text-sm font-semibold text-slate-600 dark:text-slate-300 print:text-black w-16 text-center">ID</th>
                <th className="p-3 border border-slate-200 print:border-black text-sm font-semibold text-slate-600 dark:text-slate-300 print:text-black w-48">Módulo/Épico</th>
                <th className="p-3 border border-slate-200 print:border-black text-sm font-semibold text-slate-600 dark:text-slate-300 print:text-black">História de Utilizador (Quem? O quê? Por quê?)</th>
                <th className="p-3 border border-slate-200 print:border-black text-sm font-semibold text-slate-600 dark:text-slate-300 print:text-black w-32">Prioridade</th>
              </tr>
            </thead>
            <tbody>
              {backlogData.map((item, idx) => (
                <tr key={item.id || idx} className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                  <td className="p-3 border border-slate-200 print:border-black font-mono text-sm text-slate-500 print:text-black text-center">{item.id}</td>
                  <td className="p-3 border border-slate-200 print:border-black">
                    {isExample ? (
                      <span className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 print:bg-transparent print:border print:border-slate-400 rounded-md text-xs font-medium">{item.epic}</span>
                    ) : (
                      <div className="w-full h-8 border-b border-dotted border-slate-400 print:border-slate-500 mt-2"></div>
                    )}
                  </td>
                  <td className="p-3 border border-slate-200 print:border-black">
                    {isExample ? (
                      <div className="text-sm text-slate-800 dark:text-slate-200 print:text-black">
                        Como <span className="font-bold text-indigo-600 dark:text-indigo-400 print:text-black">{item.role}</span>, eu quero <span className="font-bold text-emerald-600 dark:text-emerald-400 print:text-black">{item.action}</span> para que <span className="italic text-slate-600 dark:text-slate-400 print:text-black">{item.reason}</span>.
                      </div>
                    ) : (
                      <div className="w-full h-8 border-b border-dotted border-slate-400 print:border-slate-500 mt-2"></div>
                    )}
                  </td>
                  <td className="p-3 border border-slate-200 print:border-black text-sm font-medium text-slate-700 dark:text-slate-300 print:text-black">
                    {isExample ? item.priority : <div className="w-full h-8 border-b border-dotted border-slate-400 print:border-slate-500 mt-2"></div>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
