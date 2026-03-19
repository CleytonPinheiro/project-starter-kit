import { useState } from 'react';
import { WritingLines, PrintStyle, SectionHeader } from '../shared';

interface VisionDocViewProps {
  onPrint: () => void;
}

export const VisionDocView = ({ onPrint }: VisionDocViewProps) => {
  const [isExample, setIsExample] = useState(false);

  return (
    <div className="flex flex-col h-full animate-fadeIn print:block print:h-auto">
      <PrintStyle landscape={false} />

      <SectionHeader
        title="Documento de Visão"
        description="Especificação formal em formato de texto. Define as bases e os limites do software."
        isExample={isExample}
        setIsExample={setIsExample}
        onPrint={onPrint}
      />

      <div className="flex-1 bg-white dark:bg-slate-800 print:bg-white rounded-xl shadow-sm print:shadow-none border border-slate-200 dark:border-slate-700 print:border-none p-10 print:p-0 overflow-auto print:overflow-visible text-slate-800 dark:text-slate-200 print:text-black max-w-4xl mx-auto w-full">
        <h1 className="text-3xl font-black mb-8 text-center uppercase border-b-2 border-slate-300 print:border-black pb-4">Documento de Visão</h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-bold mb-2">1. Informações do Projeto</h2>
            {isExample ? (
              <p className="pl-4"><strong>Nome do Projeto:</strong> Sistema Cantina Express<br /><strong>Equipa:</strong> Turma 302 Info</p>
            ) : (
              <div className="pl-4 space-y-4 w-full">
                <div className="flex items-end gap-2"><strong>Nome do Projeto:</strong> <div className="border-b border-dotted border-slate-400 print:border-black flex-1"></div></div>
                <div className="flex items-end gap-2"><strong>Equipa:</strong> <div className="border-b border-dotted border-slate-400 print:border-black flex-1"></div></div>
              </div>
            )}
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2">2. O Problema e a Solução</h2>
            <p className="text-sm italic text-slate-500 mb-2">Descreva a dor principal e o que o software fará para resolver.</p>
            {isExample ? (
              <div className="pl-4 bg-slate-50 dark:bg-slate-900/50 print:bg-transparent p-4 rounded-lg">
                <p><strong>Problema:</strong> Filas longas e tempo de espera excessivo na hora do intervalo escolar.</p>
                <p className="mt-2"><strong>A Solução:</strong> Uma aplicação móvel que permite aos alunos visualizarem a ementa, fazerem pedidos antecipados e pagarem via MB WAY/PIX, gerando uma fila exclusiva de levantamento rápido na cantina.</p>
              </div>
            ) : (
              <WritingLines count={4} className="pl-4" />
            )}
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2">3. Perfis de Utilizadores (Atores)</h2>
            <p className="text-sm italic text-slate-500 mb-2">Liste os tipos de utilizadores e o que eles farão no sistema.</p>
            {isExample ? (
              <ul className="list-disc pl-8 space-y-2">
                <li><strong>Aluno:</strong> Acede à app, vê produtos, adiciona ao carrinho, paga e acompanha o estado.</li>
                <li><strong>Responsável da Cantina (Admin):</strong> Acede ao painel web, recebe pedidos em tempo real e muda o estado para "Pronto".</li>
              </ul>
            ) : (
              <div className="pl-4 space-y-6">
                <div><div className="font-bold flex gap-2 w-1/3 border-b border-black mb-2 pb-1">Perfil 1:</div><WritingLines count={2} /></div>
                <div><div className="font-bold flex gap-2 w-1/3 border-b border-black mb-2 pb-1">Perfil 2:</div><WritingLines count={2} /></div>
              </div>
            )}
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2">4. Visão Geral do Produto (Âmbito / O que FAZ)</h2>
            <p className="text-sm italic text-slate-500 mb-2">Liste as 3 a 5 funcionalidades essenciais.</p>
            {isExample ? (
              <ul className="list-disc pl-8 space-y-2">
                <li>Catálogo digital de produtos com imagens e preços.</li>
                <li>Carrinho de compras e integração com gateway de pagamento.</li>
                <li>Painel administrativo com fila de pedidos (A Fazer, A Preparar, Pronto).</li>
              </ul>
            ) : (
              <WritingLines count={5} className="pl-4" />
            )}
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2">5. Restrições e Requisitos Não-Funcionais (Como É)</h2>
            <p className="text-sm italic text-slate-500 mb-2">Plataformas, desempenho, segurança, etc.</p>
            {isExample ? (
              <ul className="list-disc pl-8 space-y-2">
                <li>O sistema para o aluno deve ser responsivo (focado em telemóvel).</li>
                <li>O painel da cantina deve correr no browser do PC.</li>
                <li>Os dados de pagamento não serão guardados na base de dados local por segurança.</li>
              </ul>
            ) : (
              <WritingLines count={4} className="pl-4" />
            )}
          </section>
        </div>
      </div>
    </div>
  );
};
