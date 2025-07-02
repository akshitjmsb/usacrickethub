import type { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { getProviders, signIn } from 'next-auth/react';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../api/auth/[...nextauth]';
import { MainLayout } from '../../components/layout/MainLayout';
import { Button } from '../../components/ui/Button';
import { Heading } from '../../components/ui/Heading';

export default function SignIn({ providers }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <MainLayout title="Sign In">
      <div className="flex flex-col items-center justify-center py-12">
        <Heading level={1} className="mb-8 text-usaBlue">
          Sign In
        </Heading>
        {Object.values(providers).map((provider) => (
          <div key={provider.name} className="w-full max-w-sm">
            {provider.name === 'Credentials' ? (
              <form method="post" action="/api/auth/callback/credentials" className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input name="email" id="email" type="email" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-usaBlue focus:ring-usaBlue sm:text-sm" />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                  <input name="password" id="password" type="password" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-usaBlue focus:ring-usaBlue sm:text-sm" />
                </div>
                <Button type="submit" className="w-full">Sign in with {provider.name}</Button>
              </form>
            ) : (
              <Button onClick={() => signIn(provider.id)} className="w-full">
                Sign in with {provider.name}
              </Button>
            )}
          </div>
        ))}
      </div>
    </MainLayout>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);

  // If the user is already logged in, redirect.
  if (session) {
    return { redirect: { destination: '/' } };
  }

  const providers = await getProviders();

  return {
    props: { providers: providers ?? [] },
  };
}
