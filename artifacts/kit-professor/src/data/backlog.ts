export interface BacklogItem {
  id: string;
  role: string;
  action: string;
  reason: string;
  priority: string;
  epic: string;
}

export const BACKLOG_EXAMPLE_DATA: BacklogItem[] = [
  { id: 'US01', role: 'Aluno', action: 'visualizar a ementa do dia na app', reason: 'para escolher o meu lanche com calma antes do intervalo', priority: 'Alta (Sprint 1)', epic: 'Gestão de Pedidos' },
  { id: 'US02', role: 'Aluno', action: 'fazer o pagamento integrado', reason: 'para não precisar de carregar dinheiro físico na escola', priority: 'Alta (Sprint 1)', epic: 'Pagamentos' },
  { id: 'US03', role: 'Responsável da Cantina', action: 'receber uma lista consolidada dos pedidos', reason: 'para preparar os lanches com antecedência', priority: 'Alta (Sprint 1)', epic: 'Painel Administrativo' },
  { id: 'US04', role: 'Responsável da Cantina', action: 'marcar um pedido como "Pronto para Levantamento"', reason: 'para avisar o aluno e organizar a fila', priority: 'Média (Sprint 2)', epic: 'Painel Administrativo' },
  { id: 'US05', role: 'Aluno', action: 'receber notificação push quando o lanche estiver pronto', reason: 'para descer para a cantina no momento exato', priority: 'Média (Sprint 2)', epic: 'Notificações' },
  { id: 'US06', role: 'Aluno', action: 'avaliar o lanche de 1 a 5 estrelas', reason: 'para dar feedback sobre a qualidade', priority: 'Baixa (Sprint 3)', epic: 'Avaliações' },
];
