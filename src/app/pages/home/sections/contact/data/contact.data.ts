import type { ContactData } from '../models/contact.model';

const whatsappNumber = '5548999999999';
const whatsappMessage = 'Olá! Gostaria de conversar sobre uma ideia de tatuagem.';

export const contactData: ContactData = {
  eyebrow: 'CONTATO',
  title: 'Sua próxima ideia começa por aqui.',
  description: 'Conte um pouco sobre o que você imaginou. Vamos conversar sobre as possibilidades para o seu projeto.',
  methods: [
    {
      id: 'whatsapp',
      type: 'whatsapp',
      label: 'WhatsApp',
      value: '+55 (48) 99999-9999',
      href: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
      enabled: true,
      primary: true,
    },
    {
      id: 'email',
      type: 'email',
      label: 'E-mail',
      value: '',
      href: '',
      enabled: false,
    },
    {
      id: 'location',
      type: 'location',
      label: 'Localização',
      value: '',
      href: '',
      enabled: false,
    },
  ],
  socialLinks: [
    {
      id: 'instagram-demo',
      platform: 'instagram',
      label: 'Instagram (demonstração)',
      href: 'https://example.invalid/demo/instagram',
      enabled: true,
    },
    {
      id: 'tiktok-demo',
      platform: 'tiktok',
      label: 'TikTok (demonstração)',
      href: 'https://example.invalid/demo/tiktok',
      enabled: true,
    },
    {
      id: 'facebook-demo',
      platform: 'facebook',
      label: 'Facebook (demonstração)',
      href: 'https://example.invalid/demo/facebook',
      enabled: true,
    },
  ],
  location: {
    enabled: true,
    establishmentName: 'Local de demonstração: Mercado Público de Florianópolis',
    address: 'Largo da Alfândega, Centro, Florianópolis - SC. Referência geográfica demonstrativa; o TRAÇO Studio não está localizado aqui.',
    mapEmbedUrl: 'https://www.google.com/maps/embed?origin=mfe&pb=!1m10!1m8!1m3!1d7071.751001723338!2d-48.552643!3d-27.597386!3m2!1i1024!2i768!4f13.1!6i16',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=-27.597386%2C-48.552643',
  },
};