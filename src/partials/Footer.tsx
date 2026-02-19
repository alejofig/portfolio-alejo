import { Section } from 'astro-boilerplate-components';

const Footer = () => (
  <Section>
    <div className="border-t border-gray-600 pt-5 text-center text-sm text-gray-200">
      <p>
        © {new Date().getFullYear()} Alejandro Figueroa —{' '}
        <a
          href="https://www.linkedin.com/in/alejofig/"
          className="text-cyan-400 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        {' · '}
        <a
          href="https://github.com/alejofig"
          className="text-cyan-400 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </p>
    </div>
  </Section>
);

export { Footer };
