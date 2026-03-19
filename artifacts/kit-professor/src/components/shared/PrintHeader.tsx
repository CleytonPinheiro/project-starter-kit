interface PrintHeaderProps {
  title: string;
  subtitle?: string;
  showDate?: boolean;
}

export const PrintHeader = ({ title, subtitle = "", showDate = false }: PrintHeaderProps) => (
  <div className="hidden print:flex justify-between items-center mb-4 border-b-2 border-black pb-2">
    <div>
      <h1 className="text-2xl font-black uppercase">{title}</h1>
      {subtitle && <p className="text-sm italic text-slate-600 mt-1">{subtitle}</p>}
    </div>
    <div className="flex gap-4 text-sm w-1/2 justify-end">
      {showDate ? (
        <div className="flex-1 max-w-[200px]">Data: ___/___/20__</div>
      ) : (
        <div className="flex-1">Projeto/Equipa: <div className="border-b border-black w-full mt-4"></div></div>
      )}
    </div>
  </div>
);
