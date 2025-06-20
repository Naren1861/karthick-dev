import Head from 'next/head';
import { Linkedin } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <Head>
        <title>Karthick T K | Portfolio</title>
      </Head>
      <header className="text-center p-10">
        <h1 className="text-4xl font-bold text-violet-400">Karthick T K</h1>
        <p className="text-lg mt-2">Fresher | Web Developer | Data Scientist</p>
        <div className="flex justify-center mt-4">
          <a
            href="https://www.linkedin.com/in/karthick-t-k"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-400 hover:underline"
          >
            <Linkedin className="mr-2" /> LinkedIn
          </a>
        </div>
      </header>

      <section className="px-6 md:px-20 py-10">
        <h2 className="text-3xl font-semibold text-violet-300 mb-6">About Me</h2>
        <p className="text-lg leading-relaxed text-gray-300">
          Enthusiastic and dedicated, I am currently honing my skills in web development and data science.
          I'm seeking opportunities where I can grow professionally and contribute to impactful projects.
        </p>
      </section>

      <section className="px-6 md:px-20 py-10 bg-gray-800">
        <h2 className="text-3xl font-semibold text-violet-300 mb-6">Project</h2>
        <div className="bg-gray-700 p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-white mb-2">Early Detection of Forest Fire</h3>
          <p className="text-gray-300">
            Deep learning model using CNNs and AI to detect forest fires from live footage efficiently and accurately.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-20 py-10">
        <h2 className="text-3xl font-semibold text-violet-300 mb-6">Skills</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>HTML, CSS, JavaScript, React</li>
          <li>Python, Pandas, NumPy, Scikit-learn</li>
          <li>Data Visualization: Matplotlib, Seaborn</li>
          <li>Design Thinking, Problem Solving, Communication</li>
        </ul>
        <a href="/resume.pdf" download className="inline-block mt-6 bg-violet-500 hover:bg-violet-600 text-white font-bold py-2 px-4 rounded">
          Download Resume
        </a>
      </section>

      <footer className="text-center py-6 bg-gray-800 text-gray-400">
        © 2025 Karthick T K. All rights reserved.
      </footer>
    </div>
  );
}
