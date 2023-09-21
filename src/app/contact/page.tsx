import CardCountriesSection from '@/components/CardCountriesSection';
import Decoration from '@/components/Decoration';
import FormSection from '@/components/FormSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacts - Designo',
};

export default function ContactPage() {
  return (
    <>
      <Decoration
        style={{
          bottom: '10%',
          right: '0',
        }}
      />
      <div className="stack max-width-container">
        <FormSection />
        <CardCountriesSection />
      </div>
    </>
  );
}
