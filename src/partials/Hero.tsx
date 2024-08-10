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
          <GradientText>My mindset:</GradientText> Help people by solving their
          problems with tech. I love to tackle any kind of problem with tech. I
          am a Python developer and a Integrations Engineering Manager. I use
          AWS to develop automation pipelines in the cloud. Additionally, I am{' '}
          <GradientText>
            honored to be recognized as an AWS Community Builder in Data.
          </GradientText>{' '}
          In my free time, I enjoy mixing music, attending concerts (especially
          electronic music events), staying active with regular exercise,{' '}
          <GradientText>indulging in a good read</GradientText>, and{' '}
          <GradientText>
            sharing my passion for food through reviews on Google Maps.
          </GradientText>
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/berlin.png"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="https://www.linkedin.com/in/alejofig/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="https://medium.com/@1alejofig1">
            <HeroSocial src="/assets/images/medium.svg" alt="Medium icon" />
          </a>
          <a href="https://soundcloud.com/alejandro-figueroa-74">
            <HeroSocial
              src="/assets/images/soundcloud.svg"
              alt="soundcloud icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
