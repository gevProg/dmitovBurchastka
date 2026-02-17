import { Metadata } from 'next';
import ReviewsClient from './ReviewsClient';
import { breadcrumbSchema } from '@/lib/utils/structuredData';

export const metadata: Metadata = {
  title: 'Отзывы клиентов – Дмитров Брусчатка',
  description:
    'Отзывы клиентов о тротуарной плитке и услугах укладки в Дмитрове. Реальные мнения заказчиков из Дмитрова, Дубны, Яхромы. Средняя оценка 4.9 из 5.',
  keywords: [
    'отзывы дмитров брусчатка',
    'тротуарная плитка отзывы',
    'укладка плитки отзывы Дмитров',
    'плитка дмитров отзывы',
  ],
  openGraph: {
    title: 'Отзывы клиентов – Дмитров Брусчатка',
    description: 'Реальные отзывы наших клиентов. Средняя оценка 4.9 из 5 звёзд.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://dmitrov-bruschatka.ru/reviews',
  },
};

// Aggregate Rating Schema for SEO
const aggregateRatingSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Дмитров Брусчатка',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '127',
    bestRating: '5',
    worstRating: '1',
  },
};

const breadcrumbs = [
  { name: 'Главная', url: 'https://dmitrov-bruschatka.ru' },
  { name: 'Отзывы', url: 'https://dmitrov-bruschatka.ru/reviews' },
];

export default function ReviewsPage() {
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
          __html: JSON.stringify(aggregateRatingSchema),
        }}
      />
      
      <ReviewsClient />
    </>
  );
}
