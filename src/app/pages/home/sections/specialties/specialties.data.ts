export interface Specialty {
  id: string;
  number: string;
  title: string;
  description: string;
}

export const specialties: Specialty[] = [
  {
    id: 'blackwork',
    number: '01',
    title: 'Blackwork',
    description: 'Contrastes marcantes e áreas de preto sólido criam composições de presença e personalidade.',
  },
  {
    id: 'fine-line',
    number: '02',
    title: 'Fine Line',
    description: 'Linhas delicadas e precisas dão forma a desenhos sutis, leves e cheios de significado.',
  },
  {
    id: 'realismo',
    number: '03',
    title: 'Realismo',
    description: 'Luz, sombra e atenção aos detalhes transformam referências em imagens expressivas na pele.',
  },
  {
    id: 'ornamental',
    number: '04',
    title: 'Ornamental',
    description: 'Simetria, padrões e formas orgânicas se encontram em desenhos que acompanham o corpo.',
  },
];