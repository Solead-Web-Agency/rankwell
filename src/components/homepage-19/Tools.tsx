import toolsImg01Dark from '@public/images/home-page-19/tools-img-01-dark.png';
import toolsImg01 from '@public/images/home-page-19/tools-img-01.png';
import toolsImg02Dark from '@public/images/home-page-19/tools-img-02-dark.png';
import toolsImg02 from '@public/images/home-page-19/tools-img-02.png';
import toolsImg03Dark from '@public/images/home-page-19/tools-img-03-dark.png';
import toolsImg03 from '@public/images/home-page-19/tools-img-03.png';
import toolsImg04Dark from '@public/images/home-page-19/tools-img-04-dark.png';
import toolsImg04 from '@public/images/home-page-19/tools-img-04.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const toolsData = [
  {
    title: 'Creative automation',
    description: 'Get instant insights with integrated analytics for better decision-making.',
    image: toolsImg01,
    imageDark: toolsImg01Dark,
  },
  {
    title: 'Powerful integrations',
    description: 'Boost your workflow and productivity with seamless integrations!',
    image: toolsImg04,
    imageDark: toolsImg04Dark,
  },
  {
    title: 'Advanced user permissions',
    description: 'Easily monitor activities with intuitive dashboards.',
    image: toolsImg02,
    imageDark: toolsImg02Dark,
  },
  {
    title: 'Real-time notifications',
    description: 'Stay updated with real-time notifications on what matters most.',
    image: toolsImg03,
    imageDark: toolsImg03Dark,
  },
];

const Tools = () => {
  return (
    <section className="py-[50px] md:py-[80px] lg:py-[100px]">
      <div className="main-container">
        <div className="space-y-[35px] md:space-y-[70px]">
          {/* heading */}
          <div className="space-y-3 text-center">
            <RevealAnimation delay={0.2}>
              <h2 id="tools-heading">Smart features. smarter growth.</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p>Visualized in a sleek, easy-to-understand layout.</p>
            </RevealAnimation>
          </div>

          <div className="space-y-14">
            <div className="grid grid-cols-12 items-center justify-center gap-y-8 xl:gap-8">
              {toolsData.map((tool, index) => (
                <RevealAnimation key={index} delay={0.4 + index * 0.1}>
                  <div
                    className={`${index === 0 || index === 3 ? 'col-span-12 xl:col-span-8' : 'col-span-12 md:col-span-6 xl:col-span-4'} w-full p-8 rounded-[20px] bg-background-2 dark:bg-background-5 space-y-6`}>
                    {/* card text */}
                    <div className="space-y-2">
                      <h3 className="text-heading-5">{tool.title}</h3>
                      <p className="max-w-[352px] w-full">{tool.description}</p>
                    </div>
                    {/* card image */}
                    <figure className="overflow-hidden rounded-2xl">
                      <Image
                        src={tool.image}
                        alt={`${tool.title} interface`}
                        className="size-full object-cover dark:hidden"
                      />
                      <Image
                        src={tool.imageDark}
                        alt={`${tool.title} interface`}
                        className="size-full object-cover hidden dark:block"
                      />
                    </figure>
                  </div>
                </RevealAnimation>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;
