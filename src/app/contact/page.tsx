import CardCountriesSection from '@/components/CardCountriesSection';
import FormSection from '@/components/FormSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacts - Designo',
};

export default function ContactPage() {
  return (
    <>
      <div className="stack max-width-container">
        <FormSection />
        <CardCountriesSection />
      </div>
    </>
  );
}
