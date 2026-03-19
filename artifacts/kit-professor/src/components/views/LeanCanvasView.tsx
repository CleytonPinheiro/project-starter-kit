import { useState } from 'react';
import { WritingLines, PrintStyle, SectionHeader, PrintHeader } from '../shared';
import { LEAN_CANVAS_DATA } from '../../data/leanCanvas';

interface LeanCanvasViewProps {
  onPrint: () => void;
}

type LeanCanvasKey = keyof typeof LEAN_CANVAS_DATA;

export const LeanCanvasView = ({ onPrint }: LeanCanvasViewProps) => {
  const [isExample, setIsExample] = useState(false);

  const renderCard = (key: LeanCanvasKey, colSpan: string, rowSpan: string, customColors = "") => {
    const section = LEAN_CANVAS_DATA[key];
    return (
      <div className={`border-2 border-slate-200 dark:border-slate-600 print:border-slate-800 rounded-lg p-3 print:p-2 flex flex-col hover:border-indigo-300 transition-colors ${colSpan} ${rowSpan} ${customColors}`}>
        <h3 className="font-bold text-slate-800 dark:text-slate-200 print:text-black print:text-sm mb-1">{section.title}</h3>
        {isExample ? (
          <p className="text-sm text-slate-600 dark:text-slate-400 print:text-black print:text-xs whitespace-pre-wrap">{section.example}</p>
        ) : (
          <>
            <p className="text-xs text-slate-500 dark:text-slate-400 print:text-slate-600 mb-2 italic">{section.instruction}</p>
            <WritingLines count={section.lines} />
          </>
        )}
      </div>
    );
  };

  return (
    <div className="flex flex-col h-full animate-fadeIn print:block print:h-auto">
      <PrintStyle landscape={true} />

      <SectionHeader
        title="Lean Canvas"
        description="Ideal para a Fase de Ideação. Valida a ideia de negócio antes de programar."
        isExample={isExample}
        setIsExample={setIsExample}
        onPrint={onPrint}
      />

      <PrintHeader title="Lean Canvas" />

      <div className="flex-1 overflow-auto print:overflow-visible bg-white dark:bg-slate-800 print:bg-white rounded-xl shadow-sm print:shadow-none border border-slate-200 dark:border-slate-700 print:border-none p-6 print:p-0 min-w-[800px] print:min-w-0 print:w-full">
        <div className="grid grid-cols-5 grid-rows-3 h-full gap-4 print:gap-2 min-h-[500px] print:min-h-[170mm]">
          {renderCard('problem', 'col-span-1', 'row-span-2')}
          <div className="flex flex-col gap-4 print:gap-2 col-span-1 row-span-2">
            {renderCard('solution', 'flex-1', '')}
            {renderCard('metrics', 'flex-1', '')}
          </div>
          {renderCard('valueProp', 'col-span-1', 'row-span-2', 'bg-indigo-50/30 dark:bg-indigo-900/20 print:bg-slate-50')}
          <div className="flex flex-col gap-4 print:gap-2 col-span-1 row-span-2">
            {renderCard('unfairAdvantage', 'flex-1', '')}
            {renderCard('channels', 'flex-1', '')}
          </div>
          {renderCard('segments', 'col-span-1', 'row-span-2')}
          {renderCard('costs', 'col-span-2', '')}
          {renderCard('revenue', 'col-span-3', '')}
        </div>
      </div>
    </div>
  );
};
