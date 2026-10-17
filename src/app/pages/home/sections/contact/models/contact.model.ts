export type ContactMethodType = 'whatsapp' | 'email' | 'location';

export interface ContactMethod {
  id: string;
  type: ContactMethodType;
  label: string;
  value: string;
  href: string;
  enabled: boolean;
  primary?: boolean;
}

export interface SocialLink {
  id: string;
  platform: string;
  label: string;
  href: string;
  enabled: boolean;
}

export interface BusinessLocation {
  enabled: boolean;
  establishmentName: string;
  address: string;
  mapEmbedUrl: string;
  directionsUrl: string;
}

export interface ContactData {
  eyebrow: string;
  title: string;
  description: string;
  methods: readonly ContactMethod[];
  socialLinks: readonly SocialLink[];
  location: BusinessLocation;
}