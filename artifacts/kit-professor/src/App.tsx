import { useState } from 'react';
import { Sidebar, type TabId } from './components/layout/Sidebar';
import {
  TeamOrgView,
  LeanCanvasView,
  ProductBacklogView,
  LogbookView,
  UseCaseDiagramView,
  VisionDocView,
} from './components/views';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>('teamorg');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [printMode, setPrintMode] = useState<'single' | 'all'>('single');

  const handlePrintSingle = () => {
    setPrintMode('single');
    setTimeout(() => window.print(), 100);
  };

  const handlePrintAll = () => {
    setPrintMode('all');
    setTimeout(() => {
      window.print();
      setPrintMode('single');
    }, 200);
  };

  const displayClass = (tabId: TabId) => {
    if (activeTab === tabId) return 'block h-full';
    if (printMode === 'all') return 'hidden print:block print:h-auto';
    return 'hidden';
  };

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <style>{`
        @media print {
          @page portrait_page { size: portrait; margin: 10mm; }
          @page landscape_page { size: landscape; margin: 10mm; }
          .page-portrait { page: portrait_page; width: 100%; page-break-after: always; }
          .page-landscape { page: landscape_page; width: 100%; page-break-after: always; }
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; background: white !important; }
          .print-hidden, aside { display: none !important; }
        }
      `}</style>

      <div className="flex h-screen bg-slate-50 dark:bg-slate-900 print:bg-white font-sans text-slate-900 dark:text-slate-100 transition-colors duration-200">
        <Sidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
          onPrintAll={handlePrintAll}
        />

        <main className="flex-1 p-8 print:p-0 overflow-auto print:overflow-visible flex flex-col print:block w-full">
          <div className={displayClass('teamorg')}>
            <div className="page-portrait h-full print:h-auto"><TeamOrgView onPrint={handlePrintSingle} /></div>
          </div>
          <div className={displayClass('leancanvas')}>
            <div className="page-landscape h-full print:h-auto"><LeanCanvasView onPrint={handlePrintSingle} /></div>
          </div>
          <div className={displayClass('backlog')}>
            <div className="page-landscape h-full print:h-auto"><ProductBacklogView onPrint={handlePrintSingle} /></div>
          </div>
          <div className={displayClass('logbook')}>
            <div className="page-portrait h-full print:h-auto"><LogbookView onPrint={handlePrintSingle} /></div>
          </div>
          <div className={displayClass('usecase')}>
            <div className="page-landscape h-full print:h-auto"><UseCaseDiagramView onPrint={handlePrintSingle} /></div>
          </div>
          <div className={displayClass('visiondoc')}>
            <div className="page-portrait h-full print:h-auto"><VisionDocView onPrint={handlePrintSingle} /></div>
          </div>
        </main>
      </div>
    </div>
  );
}
