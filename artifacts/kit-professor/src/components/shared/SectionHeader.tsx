import { Printer } from 'lucide-react';

interface SectionHeaderProps {
  title: string;
  description: string;
  isExample: boolean;
  setIsExample: (value: boolean) => void;
  onPrint: () => void;
}

export const SectionHeader = ({ title, description, isExample, setIsExample, onPrint }: SectionHeaderProps) => (
  <div className="flex justify-between items-center mb-6 print:hidden">
    <div>
      <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">{title}</h2>
      <p className="text-slate-600 dark:text-slate-400">{description}</p>
    </div>
    <div className="flex gap-4">
      <div className="flex bg-slate-200 dark:bg-slate-700 rounded-lg p-1">
        <button
          onClick={() => setIsExample(false)}
          className={`px-4 py-2 rounded-md font-medium transition-all ${!isExample ? 'bg-white dark:bg-slate-600 text-indigo-600 dark:text-indigo-300 shadow-sm' : 'text-slate-600 dark:text-slate-300'}`}
        >
          Modelo em Branco
        </button>
        <button
          onClick={() => setIsExample(true)}
          className={`px-4 py-2 rounded-md font-medium transition-all ${isExample ? 'bg-white dark:bg-slate-600 text-indigo-600 dark:text-indigo-300 shadow-sm' : 'text-slate-600 dark:text-slate-300'}`}
        >
          Exemplo Prático
        </button>
      </div>
      <button
        onClick={onPrint}
        className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white rounded-lg font-medium transition-colors shadow-sm"
      >
        <Printer className="w-4 h-4" /> Imprimir
      </button>
    </div>
  </div>
);
