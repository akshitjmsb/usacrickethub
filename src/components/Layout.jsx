import { Outlet, Link } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 bg-usa-blue text-white shadow-md">
        <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">USA Cricket Hub</Link>
          <div className="space-x-6">
            <Link to="/scores" className="hover:opacity-80">Scores</Link>
            <Link to="/grounds" className="hover:opacity-80">Grounds</Link>
            <Link to="/news" className="hover:opacity-80">News</Link>
            <Link to="/about" className="hover:opacity-80">About</Link>
          </div>
        </nav>
      </header>
      <main className="flex-grow">
        <Outlet />
      </main>
      <footer className="bg-usa-blue text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} USA Cricket Hub</p>
        </div>
      </footer>
    </div>
  );
}
