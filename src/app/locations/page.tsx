import CallToAction from '@/components/CallToAction/CallToAction';
import CardLocationSection from '@/components/CardLocationSection';
import Separator from '@/components/Separator';

export default function LocationsPage() {
  return (
    <section>
      <CardLocationSection />
      <Separator size="big" />
      <CallToAction />
    </section>
  );
}
