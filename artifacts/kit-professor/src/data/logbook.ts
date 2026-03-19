export interface LogbookEntry {
  aula: string;
  data: string;
  planejado: string;
  executado: string;
  proximos: string;
}

export const LOGBOOK_EXAMPLE_DATA: LogbookEntry[] = [
  {
    aula: '01', data: '10/03/2026',
    planejado: 'Formação das equipas, escolha do tema e início da ideação.',
    executado: 'Equipa SnackOverflow formada. Escolhemos o problema das filas na cantina e preenchemos 80% do Lean Canvas. Tivemos dificuldade em definir os custos.',
    proximos: 'Finalizar os custos no Lean Canvas e listar as primeiras necessidades (Épicos).'
  },
  {
    aula: '02', data: '17/03/2026',
    planejado: 'Finalizar Lean Canvas e iniciar a criação do Product Backlog.',
    executado: 'Lean Canvas finalizado e validado com o professor. Começámos o Backlog e conseguimos escrever 6 Histórias de Utilizador focadas no Aluno.',
    proximos: 'Escrever as Histórias do perfil "Responsável da Cantina" e definir a prioridade (Alta, Média, Baixa) de todas elas.'
  },
  {
    aula: '03', data: '24/03/2026',
    planejado: 'Priorizar o Backlog e desenhar o Diagrama de Casos de Uso.',
    executado: 'Priorizámos o Backlog para a Sprint 1. Desenhámos o diagrama no quadro, identificando o Aluno, Cantina e a API de pagamento como atores.',
    proximos: 'Passar o diagrama a limpo e começar o Documento de Visão para formalizar o âmbito.'
  }
];
