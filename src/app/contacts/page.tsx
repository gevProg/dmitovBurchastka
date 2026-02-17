import { Metadata } from 'next';
import ContactsClient from './ContactsClient';
import { breadcrumbSchema, localBusinessSchema } from '@/lib/utils/structuredData';

export const metadata: Metadata = {
  title: 'Контакты – Дмитров Брусчатка | Тротуарная плитка в Дмитрове',
  description:
    'Контакты компании Дмитров Брусчатка. Адрес: Московская обл., Дмитровский р-н, д. Гришино. ☎ 8 (929) 510-03-61, 8 (925) 201-82-86. Работаем без выходных 08:00-20:00.',
  keywords: [
    'контакты дмитров брусчатка',
    'тротуарная плитка дмитров адрес',
    'плитка дмитровский район',
    'заказать плитку дмитров',
    'укладка плитки дмитров телефон',
  ],
  openGraph: {
    title: 'Контакты – Дмитров Брусчатка',
    description: 'Свяжитесь с нами: 8 (929) 510-03-61. Работаем по Дмитровскому району без выходных.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://dmitrov-bruschatka.ru/contacts',
  },
};

const breadcrumbs = [
  { name: 'Главная', url: 'https://dmitrov-bruschatka.ru' },
  { name: 'Контакты', url: 'https://dmitrov-bruschatka.ru/contacts' },
];

export default function ContactsPage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema(breadcrumbs)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      
      <ContactsClient />
    </>
  );
}
