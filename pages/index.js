import Head from 'next/head';

export default function Home() {
  return (
    <>
      <main className="bg-yellow-400 text-white min-h-screen flex items-center justify-center">
        <div className="text-center p-6 max-w-md w-full">
          <img
            src="icon.png"
            alt="koneko"
            className="mx-auto rounded-full w-32 h-32 mb-4 border-4 border-white"
          />
          <h1 className="text-3xl font-bold mb-2">koneko</h1>
          <p className="text-white-400 font-bold mb-6">さえないこねこが好きなエンジニア</p>
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/saenaikoneko"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white-400"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 008.21 11.44c.6.11.82-.26.82-.58v-2.2c-3.34.73-4.04-1.6-4.04-1.6-.55-1.4-1.34-1.78-1.34-1.78-1.09-.76.08-.74.08-.74 1.21.09 1.85 1.25 1.85 1.25 1.07 1.84 2.8 1.31 3.48 1 .11-.78.42-1.3.76-1.6-2.66-.31-5.46-1.34-5.46-5.97 0-1.32.47-2.39 1.24-3.23-.12-.3-.54-1.55.12-3.23 0 0 1-.33 3.3 1.23A11.42 11.42 0 0112 5.8c1.01.01 2.02.14 2.97.41 2.3-1.56 3.3-1.23 3.3-1.23.66 1.68.24 2.93.12 3.23.77.84 1.24 1.91 1.24 3.23 0 4.64-2.8 5.66-5.48 5.97.43.37.81 1.1.81 2.22v3.3c0 .32.21.7.83.58A12.01 12.01 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}