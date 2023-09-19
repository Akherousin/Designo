import CardLocationSection from '@/components/CardLocationSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Locations - Designo',
};

export default function LocationsPage() {
  return (
    <div className="stack max-width-container">
      <CardLocationSection />
    </div>
  );
}
