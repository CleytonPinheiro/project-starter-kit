import { LayoutDashboard, ListTodo, Users, FileText, Moon, Sun, Network, BookOpen, Layers, ChevronRight } from 'lucide-react';

export type TabId = 'teamorg' | 'leancanvas' | 'backlog' | 'logbook' | 'usecase' | 'visiondoc';

export const menuItems: { id: TabId; label: string; icon: React.ElementType; desc: string }[] = [
  { id: 'teamorg', label: '1. Organização da Equipa', icon: Users, desc: 'Formação e Papéis' },
  { id: 'leancanvas', label: '2. Lean Canvas', icon: LayoutDashboard, desc: 'Ideação e Negócio' },
  { id: 'backlog', label: '3. Product Backlog', icon: ListTodo, desc: 'Mapeamento Ágil' },
  { id: 'logbook', label: '4. Diário de Bordo', icon: BookOpen, desc: 'Registo de Aulas e Evolução' },
  { id: 'usecase', label: '5. Casos de Uso', icon: Network, desc: 'Interações Visuais (UML)' },
  { id: 'visiondoc', label: '6. Documento de Visão', icon: FileText, desc: 'Especificação Formal' },
];

interface SidebarProps {
  activeTab: TabId;
  setActiveTab: (tab: TabId) => void;
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
  onPrintAll: () => void;
}

export const Sidebar = ({ activeTab, setActiveTab, isDarkMode, setIsDarkMode, onPrintAll }: SidebarProps) => (
  <aside className="w-80 bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700 flex flex-col shadow-sm z-10 transition-colors duration-200 print:hidden shrink-0">
    <div className="p-6 border-b border-slate-100 dark:border-slate-700">
      <h1 className="text-xl font-black text-indigo-900 dark:text-indigo-300 tracking-tight leading-tight">
        Kit do Professor<br />
        <span className="text-sm font-medium text-indigo-500 dark:text-indigo-400 tracking-normal">Engenharia de Requisitos</span>
      </h1>
    </div>

    <div className="flex-1 py-4 px-3 space-y-2 overflow-y-auto">
      {menuItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeTab === item.id;
        return (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full text-left flex items-start gap-3 p-3 rounded-xl transition-all ${
              isActive
                ? 'bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800 shadow-sm'
                : 'hover:bg-slate-50 dark:hover:bg-slate-700/50 border border-transparent'
            }`}
          >
            <div className={`mt-0.5 p-2 rounded-lg ${isActive ? 'bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300' : 'bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400'}`}>
              <Icon className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <div className={`font-semibold ${isActive ? 'text-indigo-900 dark:text-indigo-300' : 'text-slate-700 dark:text-slate-300'}`}>{item.label}</div>
              <div className={`text-xs mt-0.5 ${isActive ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-500 dark:text-slate-400'}`}>{item.desc}</div>
            </div>
            {isActive && <ChevronRight className="w-4 h-4 text-indigo-400 self-center" />}
          </button>
        );
      })}
    </div>

    <div className="p-4 border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
      <button
        onClick={onPrintAll}
        className="w-full flex items-center justify-center gap-2 p-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-bold transition-colors shadow-md shadow-indigo-600/20"
      >
        <Layers className="w-5 h-5" /> Imprimir Projeto Completo
      </button>
    </div>

    <div className="p-4 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between">
      <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Tema do Sistema</div>
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="flex items-center gap-2 p-2 rounded-lg bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
        title="Alternar Tema Escuro/Claro"
      >
        {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
      </button>
    </div>
  </aside>
);
