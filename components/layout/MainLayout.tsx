import React from 'react';
import Head from 'next/head';
import { useSession, signIn, signOut } from 'next-auth/react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export const MainLayout: React.FC<React.PropsWithChildren<{ title?: string }>> = ({ title, children }) => {
  const { data: session } = useSession();

  return (
    <>
      <Head>
        <title>{title ? `${title} | USA Cricket Hub` : 'USA Cricket Hub'}</title>
        <meta name="description" content="Connecting, informing, and empowering the US cricket community." />
      </Head>
      <div className="min-h-screen flex flex-col bg-usaWhite text-usaBlue">
        <header className="w-full flex items-center justify-between p-4 bg-usaBlue text-usaWhite shadow-md">
          <h1 className="text-3xl font-bold tracking-tight">USA Cricket Hub</h1>
          <nav>
            <ul className="flex gap-6 items-center">
              <li><a href="/#news" className="hover:underline">News</a></li>
              <li><a href="/#scores" className="hover:underline">Scores</a></li>
              <li><a href="/#resources" className="hover:underline">Resources</a></li>
              {session ? (
                <>
                  <li><p>Signed in as {session.user?.email}</p></li>
                  <li>
                    <Button variant="secondary" size="sm" onClick={() => signOut()}>
                      Sign Out
                    </Button>
                  </li>
                </>
              ) : (
                <li>
                  <Button variant="secondary" size="sm" onClick={() => signIn()}>
                    Sign In
                  </Button>
                </li>
              )}
            </ul>
          </nav>
        </header>
        <main className="flex-1 w-full">
          <Container>{children}</Container>
        </main>
        <footer className="w-full text-center p-4 bg-usaBlue text-usaWhite">
          &copy; {new Date().getFullYear()} USA Cricket Hub. All rights reserved.
        </footer>
      </div>
    </>
  );
};
