import { MainLayout } from '../components/layout/MainLayout';
import { Heading } from '../components/ui/Heading';
import { Button } from '../components/ui/Button';

export default function Home() {
  return (
    <MainLayout>
      <section className="text-center my-16">
        <Heading level={1} className="mb-4 text-usaRed">Welcome to USA Cricket Hub</Heading>
        <p className="text-lg mb-6">Your home for US cricket news, live scores, resources, and community.</p>
        <Button variant="secondary" size="lg" className="mb-8" as="a" href="#signup">Join the Community</Button>
      </section>
      <section id="news" className="mb-12">
        <Heading level={2} className="text-usaBlue mb-2">Latest News</Heading>
        <div className="bg-usaWhite border border-usaBlue rounded-lg p-4 shadow-sm">
          <p className="italic text-gray-500">(News feed coming soon)</p>
        </div>
      </section>
      <section id="scores" className="mb-12">
        <Heading level={2} className="text-usaBlue mb-2">Live Scores</Heading>
        <div className="bg-usaWhite border border-usaBlue rounded-lg p-4 shadow-sm">
          <p className="italic text-gray-500">(Live scores coming soon)</p>
        </div>
      </section>
      <section id="resources" className="mb-12">
        <Heading level={2} className="text-usaBlue mb-2">Resources</Heading>
        <div className="bg-usaWhite border border-usaBlue rounded-lg p-4 shadow-sm">
          <ul className="list-disc list-inside text-left">
            <li>Rules of Cricket</li>
            <li>Club Directory</li>
            <li>Upcoming Tournaments</li>
          </ul>
        </div>
      </section>
      <section id="signup" className="mb-12">
        <Heading level={2} className="text-usaBlue mb-2">Sign Up for Updates</Heading>
        <form className="flex flex-col items-center gap-4 max-w-sm mx-auto">
          <input type="email" placeholder="Your email" className="px-4 py-2 border rounded w-full" required />
          <Button type="submit" variant="primary" size="md">Sign Up</Button>
        </form>
      </section>
    </MainLayout>
  );
}
