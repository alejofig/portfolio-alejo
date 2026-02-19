import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Alejofig</GradientText> 👋
        </>
      }
      description={
        <>
          <GradientText>Engineering Manager</GradientText> at Simetrik · AWS
          Community Builder in Data
          <br />
          Building DevTools, AI-powered integrations, and serverless
          architectures with AWS, Python, and LLMs.
          <br />
          Outside work: triathlon training, electronic music production, and
          reading.
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/berlin.png"
          alt="Alejandro Figueroa in Berlin"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="https://www.linkedin.com/in/alejofig/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="LinkedIn icon"
            />
          </a>
          <a href="https://github.com/alejofig">
            <HeroSocial
              src="/assets/images/github-icon.svg"
              alt="GitHub icon"
            />
          </a>
          <a href="https://medium.com/@1alejofig1">
            <HeroSocial src="/assets/images/medium.svg" alt="Medium icon" />
          </a>
          <a href="https://soundcloud.com/alejandro-figueroa-74">
            <HeroSocial
              src="/assets/images/soundcloud.svg"
              alt="SoundCloud icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
