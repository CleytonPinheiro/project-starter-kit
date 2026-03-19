interface WritingLinesProps {
  count?: number;
  className?: string;
}

export const WritingLines = ({ count = 3, className = "" }: WritingLinesProps) => (
  <div className={`flex flex-col flex-1 w-full justify-evenly mt-3 print:mt-2 gap-4 print:gap-5 opacity-60 dark:opacity-40 print:opacity-100 ${className}`}>
    {Array.from({ length: count }).map((_, i) => (
      <div key={i} className="border-b-2 border-dotted border-slate-400 dark:border-slate-500 print:border-slate-500 w-full" />
    ))}
  </div>
);
