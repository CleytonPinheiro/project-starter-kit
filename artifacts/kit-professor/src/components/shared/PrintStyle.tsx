interface PrintStyleProps {
  landscape?: boolean;
}

export const PrintStyle = ({ landscape = false }: PrintStyleProps) => (
  <style>{`
    @media print {
      @page { size: ${landscape ? 'landscape' : 'portrait'}; margin: 1cm; }
      body { -webkit-print-color-adjust: exact; print-color-adjust: exact; background: white !important; }
      .print-hidden { display: none !important; }
    }
  `}</style>
);
