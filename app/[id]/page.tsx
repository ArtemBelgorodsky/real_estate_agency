import { OfferInformation } from '@/components';

export default async function Offer({ params }: { params: { id: string } }) {
  const item = await fetch(
    `https://b580138023681732.mokky.dev/items/${params.id}`
  ).then((res) => res.json());

  return <OfferInformation item={item} />;
}
