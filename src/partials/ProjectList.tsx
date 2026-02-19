import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="FitAgent Mobile MVP"
        description="AI-powered fitness coach app with Garmin integration. Tracks workouts, body measurements, and adapts training plans based on recovery data. Built with Flutter, AWS Lambda, DynamoDB, and Amazon Bedrock for AI coaching."
        link="https://github.com/alejofig"
        img={{
          src: '/assets/images/project-fitagent.png',
          alt: 'FitAgent Mobile',
        }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>AWS</Tags>
            <Tags color={ColorTags.FUCHSIA}>AI</Tags>
            <Tags color={ColorTags.SKY}>Flutter</Tags>
            <Tags color={ColorTags.EMERALD}>Python</Tags>
          </>
        }
      />
      <Project
        name="fig.alejofig.com - Personal Finance Tracker"
        description="Automated expense tracking with LLM-powered email parsing. Receives bank transaction emails, extracts data using Amazon Bedrock, and stores in DynamoDB. Serverless architecture with SES, Lambda, and EventBridge."
        link="https://fig.alejofig.com"
        img={{ src: '/assets/images/project-fire.png', alt: 'Finance Tracker' }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>AWS</Tags>
            <Tags color={ColorTags.EMERALD}>Python</Tags>
            <Tags color={ColorTags.YELLOW}>Serverless</Tags>
            <Tags color={ColorTags.FUCHSIA}>LLM</Tags>
          </>
        }
      />
      <Project
        name="lolwrapped.com - League of Legends Analytics"
        description="Data analytics platform for League of Legends players. Provides personalized stats, match history analysis, and performance insights. Built with Python, AWS, and data visualization tools."
        link="https://lolwrapped.com"
        img={{ src: '/assets/images/project-lol.png', alt: 'LOL Wrapped' }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>AWS</Tags>
            <Tags color={ColorTags.LIME}>Data</Tags>
            <Tags color={ColorTags.EMERALD}>Python</Tags>
          </>
        }
      />
      <Project
        name="berghain.alejofig.com - Berghain Analysis"
        description="Data-driven analysis of Berlin's iconic Berghain club. Explores event patterns, artist lineups, and music trends using web scraping, data processing, and interactive visualizations."
        link="https://berghain.alejofig.com"
        img={{ src: '/assets/images/ber.png', alt: 'Berghain Analysis' }}
        category={
          <>
            <Tags color={ColorTags.EMERALD}>Python</Tags>
            <Tags color={ColorTags.LIME}>Data</Tags>
            <Tags color={ColorTags.SKY}>Visualization</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
