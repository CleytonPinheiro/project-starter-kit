import { useState } from 'react';
import { Users, LayoutDashboard } from 'lucide-react';
import { PrintStyle, SectionHeader, PrintHeader } from '../shared';

interface UseCaseDiagramViewProps {
  onPrint: () => void;
}

export const UseCaseDiagramView = ({ onPrint }: UseCaseDiagramViewProps) => {
  const [isExample, setIsExample] = useState(false);

  return (
    <div className="flex flex-col h-full animate-fadeIn print:block print:h-auto">
      <PrintStyle landscape={true} />

      <SectionHeader
        title="Diagrama de Casos de Uso (UML)"
        description="A ferramenta visual para mapear quem faz o quê no sistema."
        isExample={isExample}
        setIsExample={setIsExample}
        onPrint={onPrint}
      />

      <PrintHeader title="Esboço: Casos de Uso" />

      <div className="flex-1 bg-white dark:bg-slate-800 print:bg-transparent rounded-xl shadow-sm print:shadow-none border border-slate-200 dark:border-slate-700 print:border-none print:p-0 p-8 flex flex-col items-center justify-center overflow-auto print:overflow-visible">
        <div className="w-full max-w-4xl border-2 border-dashed border-slate-300 dark:border-slate-600 print:border-black rounded-xl p-8 print:p-4 min-h-[500px] relative flex bg-slate-50 dark:bg-slate-900/50 print:bg-white">

          {/* Actor Left */}
          <div className="flex flex-col items-center justify-center w-32 shrink-0 z-10">
            <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/50 print:bg-transparent rounded-full flex items-center justify-center border-2 border-indigo-500 dark:border-indigo-400 print:border-black mb-2">
              <Users className="w-6 h-6 text-indigo-600 dark:text-indigo-400 print:text-black" />
            </div>
            <span className="font-bold text-slate-700 dark:text-slate-200 print:text-black">{isExample ? 'Aluno' : 'Ator 1'}</span>
            <span className="text-xs text-slate-500 dark:text-slate-400 print:text-black">{isExample ? '(Ator Principal)' : '________'}</span>
          </div>

          {/* System Boundary */}
          <div className="flex-1 border-2 border-indigo-200 dark:border-indigo-700 print:border-black bg-white dark:bg-slate-800/80 print:bg-transparent rounded-lg p-6 mx-8 relative flex flex-col items-center justify-center gap-6 shadow-sm print:shadow-none">
            <span className="absolute -top-3 bg-white dark:bg-slate-800 print:bg-white px-2 font-bold text-indigo-800 dark:text-indigo-400 print:text-black text-sm border border-indigo-200 dark:border-indigo-700 print:border-black rounded">
              {isExample ? 'Sistema Cantina Express' : 'Fronteira do Sistema'}
            </span>

            {isExample ? (
              <>
                <div className="w-full max-w-sm px-6 py-3 border-2 border-slate-300 dark:border-slate-600 print:border-black rounded-full flex items-center justify-center text-slate-700 dark:text-slate-200 print:text-black font-medium bg-slate-50 dark:bg-slate-800 print:bg-white relative">
                  <div className="absolute -left-16 top-1/2 w-16 h-px bg-slate-400 print:bg-black"></div>Visualizar Ementa
                </div>
                <div className="w-full max-w-sm px-6 py-3 border-2 border-slate-300 dark:border-slate-600 print:border-black rounded-full flex items-center justify-center text-slate-700 dark:text-slate-200 print:text-black font-medium bg-slate-50 dark:bg-slate-800 print:bg-white relative">
                  <div className="absolute -left-16 top-1/2 w-16 h-px bg-slate-400 print:bg-black"></div>
                  <div className="absolute -right-16 top-1/2 w-16 h-px bg-slate-400 print:bg-black border-t border-dashed"></div>Fazer Pedido
                  <span className="absolute -right-24 -top-4 text-[10px] text-slate-500 bg-white dark:bg-slate-800 print:bg-white px-1">&laquo;include&raquo;</span>
                </div>
                <div className="w-full max-w-sm px-6 py-3 border-2 border-emerald-300 dark:border-emerald-700 print:border-black rounded-full flex items-center justify-center text-emerald-800 dark:text-emerald-400 print:text-black font-medium bg-emerald-50 dark:bg-emerald-900/30 print:bg-white relative ml-12">
                  Processar Pagamento<div className="absolute -right-16 top-1/2 w-16 h-px bg-slate-400 print:bg-black"></div>
                </div>
                <div className="w-full max-w-sm px-6 py-3 border-2 border-slate-300 dark:border-slate-600 print:border-black rounded-full flex items-center justify-center text-slate-700 dark:text-slate-200 print:text-black font-medium bg-slate-50 dark:bg-slate-800 print:bg-white relative">
                  <div className="absolute -right-16 top-1/2 w-16 h-px bg-slate-400 print:bg-black"></div>Gerir Pedidos
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center w-full h-full opacity-30 print:opacity-100">
                <span className="text-slate-400 print:text-slate-800 font-medium italic">Desenhe as elipses (ações) e as linhas de interação aqui.</span>
              </div>
            )}
          </div>

          {/* Actor Right */}
          <div className="flex flex-col items-center justify-center w-32 shrink-0 z-10 gap-16">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/50 print:bg-transparent rounded-full flex items-center justify-center border-2 border-amber-500 dark:border-amber-600 print:border-black mb-2">
                <Users className="w-6 h-6 text-amber-600 dark:text-amber-500 print:text-black" />
              </div>
              <span className="font-bold text-slate-700 dark:text-slate-200 print:text-black text-center">{isExample ? 'Cantina' : 'Ator 2'}</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/50 print:bg-transparent rounded-full flex items-center justify-center border-2 border-emerald-500 dark:border-emerald-600 print:border-black mb-2">
                <LayoutDashboard className="w-6 h-6 text-emerald-600 dark:text-emerald-500 print:text-black" />
              </div>
              <span className="font-bold text-slate-700 dark:text-slate-200 print:text-black text-center">{isExample ? 'API MB WAY' : 'Ator 3 / API'}</span>
              <span className="text-xs text-slate-500 dark:text-slate-400 print:text-black">{isExample ? '(Ator Externo)' : '________'}</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
