export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    id: 'first-contact',
    number: '01',
    title: 'Primeiro contato',
    description: 'Compartilhe sua ideia, referências e o que gostaria de expressar. A partir disso, conversamos sobre as possibilidades para o projeto.',
  },
  {
    id: 'project-creation',
    number: '02',
    title: 'Criação do projeto',
    description: 'Definimos o desenho, o tamanho e a região do corpo, alinhando cada detalhe às suas expectativas.',
  },
  {
    id: 'scheduling',
    number: '03',
    title: 'Agendamento',
    description: 'Com o projeto alinhado, combinamos o orçamento, a data da sessão e as orientações para chegar preparado.',
  },
  {
    id: 'session-and-care',
    number: '04',
    title: 'Sessão e cuidados',
    description: 'Realizamos a tatuagem com atenção a cada etapa e compartilhamos as recomendações para cuidar bem dela depois.',
  },
];