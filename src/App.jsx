import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-pure-white text-old-glory-blue flex flex-col">
      <header className="bg-old-glory-blue text-pure-white py-6 shadow-subtle rounded-b-md">
        <h1 className="text-3xl font-extrabold text-center tracking-wide">Cricket, Coast-to-Coast</h1>
        <p className="text-center mt-2 text-old-glory-red font-semibold">Your one-stop hub for USA cricket</p>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center p-8">
        <h2 className="text-xl font-bold mb-4">Welcome to USA Cricket Hub!</h2>
        <p className="mb-6 text-lg max-w-xl text-center">Live scores, news, fixtures, and more—all in one place. Use the navigation bar to explore scores, news, play maps, and community features.</p>
        <div className="flex gap-4 justify-center">
          <button className="bg-old-glory-red hover:bg-red-700 text-pure-white font-bold py-2 px-6 rounded-md shadow-subtle transition">View Scores</button>
          <button className="bg-old-glory-blue hover:bg-blue-900 text-pure-white font-bold py-2 px-6 rounded-md shadow-subtle transition">Play Near You</button>
        </div>
      </main>
      <footer className="bg-old-glory-blue text-pure-white py-4 text-center rounded-t-md mt-8">
        <span>&copy; {new Date().getFullYear()} USA Cricket Hub</span>
      </footer>
    </div>
  );
}

export default App;
