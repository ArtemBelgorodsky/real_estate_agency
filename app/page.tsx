import {
  AboutUs,
  Contacts,
  PreviewObjects,
  SearchForm,
  Services,
} from '@/components';

export default function Home() {
  return (
    <div className="bg-gray-100 font-sans">
      <main className="p-8">
        <SearchForm />
        <PreviewObjects />
        <AboutUs />
        <Services />
        <Contacts />
      </main>
    </div>
  );
}
