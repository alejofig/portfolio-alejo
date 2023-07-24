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
        name="Design, Construction, and Automation of a Closed System for Organic Home Farming."
        description="In order to present solutions for food production problems, besides reducing the environmental impact inflicted by such action, it is presented the design of a closed device for organic crops without soil within cities, capable of automating the care work of the sheltered plants with minimum human intervention, controlling the relevant variables (light, pH, temperature, humidity and electric conductivity) to improve the performance of this techniques. The device will have an informative communication user interface which will show the status of the crop."
        link="http://repository.unipiloto.edu.co/bitstream/handle/20.500.12277/10016/00004859%20Figueroa.pdf?sequence=1&isAllowed=y"
        img={{
          src: '/assets/images/project-web-design.png',
          alt: 'Project Web Design',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Firebase</Tags>
            <Tags color={ColorTags.LIME}>Python</Tags>
            <Tags color={ColorTags.SKY}>IOT</Tags>
            <Tags color={ColorTags.ROSE}>Robotics</Tags>
          </>
        }
      />
      <Project
        name="Daily expenses: Serverless with AWS."
        description="Automated my expense tracking with AWS: Extracted, transformed, and sent transactions from emails to a Google Sheet using SES, Lambda, and Zapier. Cost-effective and efficient!"
        link="https://medium.com/@1alejofig1/daily-expenses-serverless-with-aws-a48a4ef92886"
        img={{ src: '/assets/images/project-fire.png', alt: 'Project Fire' }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>AWS</Tags>
            <Tags color={ColorTags.EMERALD}>Python</Tags>
            <Tags color={ColorTags.YELLOW}>Serverless</Tags>
          </>
        }
      />
      <Project
        name="Hydroponics: A Journey from Lettuce to Marijuana"
        description="Join our exciting hydroponic journey, where mechatronics meets agriculture! Explore our automated home cultivation device and the success of growing lettuces. Discover how we ventured into cultivating marijuana for its medicinal benefits and thriving global market. Witness the challenges we overcame and our future plans for precision agriculture in urban environments. Experience the cutting-edge of sustainable farming from Boyacá, Colombia!"
        link="/posts/sixth-post/"
        img={{ src: '/assets/images/project-maps.png', alt: 'Project Maps' }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Precision farming</Tags>
            <Tags color={ColorTags.INDIGO}>Sensors</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
