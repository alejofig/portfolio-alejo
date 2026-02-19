import { GradientText, Section } from 'astro-boilerplate-components';

const skills = [
  { name: 'AWS', emoji: '☁️' },
  { name: 'Python', emoji: '🐍' },
  { name: 'TypeScript', emoji: '📘' },
  { name: 'AI / LLMs', emoji: '🤖' },
  { name: 'Serverless', emoji: '⚡' },
  { name: 'Terraform', emoji: '🏗️' },
  { name: 'Flutter', emoji: '📱' },
  { name: 'Docker', emoji: '🐳' },
];

const Skills = () => (
  <Section
    title={
      <>
        Tech <GradientText>Stack</GradientText>
      </>
    }
  >
    <div className="flex flex-wrap justify-center gap-4">
      {skills.map((skill) => (
        <div
          key={skill.name}
          className="flex items-center gap-2 rounded-xl border border-gray-600 bg-slate-800 px-5 py-3 text-gray-200 transition hover:border-cyan-400"
        >
          <span className="text-xl">{skill.emoji}</span>
          <span className="font-medium">{skill.name}</span>
        </div>
      ))}
    </div>
  </Section>
);

export { Skills };
