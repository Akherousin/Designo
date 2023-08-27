import CallToAction from '@/components/CallToAction/CallToAction';

export default function LayoutWithCTA({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <CallToAction />
    </>
  );
}
