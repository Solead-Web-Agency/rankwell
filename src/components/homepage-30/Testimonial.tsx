'use client';
import { useGSAP } from '@gsap/react';
import avatar10 from '@public/images/avatar/avatar-10.png';
import avatar11 from '@public/images/avatar/avatar-11.png';
import avatar13 from '@public/images/avatar/avatar-13.png';
import avatar14 from '@public/images/avatar/avatar-14.png';
import avatar9 from '@public/images/avatar/avatar-9.png';
import gradient38 from '@public/images/gradient/gradient-38.png';
import { gsap } from 'gsap';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import RevealAnimation from '../animation/RevealAnimation';

const testimonials = [
  {
    name: 'Michael Johnson',
    position: 'Head of customer Success',
    image: avatar9,
    quote:
      "The investment insights are clear, easy to understand and follow. I love the automation and feel like I'm making real progress every day.",
  },
  {
    name: 'Mark Thompson',
    position: 'Marketing Director',
    image: avatar10,
    quote:
      "This platform helps our team move faster, stay aligned, and reduce errors. It's a powerful tool that boosts productivity all around.",
  },
  {
    name: 'David Rodriguez',
    position: 'Product Manager',
    image: avatar11,
    quote:
      'Our planning is finally clear and consistent. I feel more confident in how my team executes tasks and reaches project goals on time.',
  },
  {
    name: 'Leo Chen',
    position: 'Founder, ScaleX',
    image: avatar13,
    quote:
      'The design is clean and the interface is effortless to use. It saves time, improves clarity, and just makes everything run smoother.',
  },
  {
    name: 'John Doe',
    position: 'CEO',
    image: avatar14,
    quote:
      "A great platform for managing projects with clarity and speed. It's intuitive, efficient, and keeps everyone on the same page easily.",
  },
];

const Testimonial = () => {
  const avatar1Ref = useRef<HTMLImageElement>(null);
  const avatar2Ref = useRef<HTMLImageElement>(null);
  const avatar3Ref = useRef<HTMLImageElement>(null);
  const avatar4Ref = useRef<HTMLImageElement>(null);
  const avatar5Ref = useRef<HTMLImageElement>(null);
  const quoteRef = useRef<HTMLHeadingElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const positionRef = useRef<HTMLParagraphElement>(null);

  const [currentTestimonial, setCurrentTestimonial] = useState(testimonials[0]);
  const [avatarImages, setAvatarImages] = useState([
    testimonials[3], // -2
    testimonials[4], // -1
    testimonials[0], // center
    testimonials[1], // +1
    testimonials[2], // +2
  ]);
  const [animationTrigger, setAnimationTrigger] = useState(0);

  useEffect(() => {
    if (animationTrigger > 0) {
      const avatarRefs = [avatar1Ref, avatar2Ref, avatar3Ref, avatar4Ref, avatar5Ref];
      setTimeout(() => {
        avatarRefs.forEach((ref, i) => {
          if (ref.current) {
            gsap.fromTo(
              ref.current,
              {
                opacity: 0.7,
                scale: 1.1,
              },
              {
                opacity: 1,
                scale: 1,
                duration: 0.4,
                delay: i * 0.05,
                ease: 'power2.out',
              },
            );
          }
        });
      }, 50);
    }
  }, [animationTrigger]);

  useGSAP(() => {
    let currentIndex = 0;

    function updateAvatarImages() {
      // Update state for avatar images
      const newAvatarImages = [];
      for (let i = 0; i < 5; i++) {
        const avatarIndex = (currentIndex + i - 2 + testimonials.length) % testimonials.length;
        newAvatarImages.push(testimonials[avatarIndex]);
      }
      setAvatarImages(newAvatarImages);

      setAnimationTrigger((prev) => prev + 1);
    }

    function updateTextContent() {
      const t = testimonials[currentIndex];

      setCurrentTestimonial(t);

      if (quoteRef.current) {
        gsap.to(quoteRef.current, {
          opacity: 0,
          y: -10,
          duration: 0.2,
          onComplete: () => {
            gsap.to(quoteRef.current, {
              opacity: 1,
              y: 0,
              duration: 0.3,
              ease: 'power2.out',
            });
          },
        });
      }

      if (nameRef.current) {
        gsap.to(nameRef.current, {
          opacity: 0,
          y: 5,
          duration: 0.2,
          onComplete: () => {
            gsap.to(nameRef.current, {
              opacity: 1,
              y: 0,
              duration: 0.3,
              ease: 'power2.out',
            });
          },
        });
      }

      if (positionRef.current) {
        gsap.to(positionRef.current, {
          opacity: 0,
          y: 5,
          duration: 0.2,
          onComplete: () => {
            gsap.to(positionRef.current, {
              opacity: 1,
              y: 0,
              duration: 0.3,
              ease: 'power2.out',
            });
          },
        });
      }
    }

    function updateTestimonial() {
      updateAvatarImages();
      updateTextContent();
    }

    updateTestimonial();

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % testimonials.length;
      updateTestimonial();
    }, 3000);

    return () => clearInterval(interval);
  });

  return (
    <section className="lg:py-[150px] md:py-[100px] py-[75px]">
      <div className="main-container">
        <div className="md:py-20 sm:py-14 py-10 md:px-0 sm:px-10 px-5 rounded-[20px] bg-secondary relative overflow-hidden">
          <RevealAnimation delay={0.3} offset={100} direction="up">
            <figure className="absolute top-[-300px] right-[-486px] overflow-hidden size-[850px] rotate-[-58deg] select-none pointer-events-none">
              <Image src={gradient38} alt="how-to-work" className="size-full object-cover" width={850} height={850} />
            </figure>
          </RevealAnimation>
          <div className="text-center space-y-2 mb-14 relative z-10">
            <RevealAnimation delay={0.2}>
              <h2 className="text-accent lg:text-heading-3 sm:text-heading-4 text-heading-5">
                Trusted by thousands worldwide
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="md:max-w-[648px] max-w-[500px] mx-auto text-accent/60">
                Join a growing community of professionals, gamers, and businesses who rely on NextSaaS for superior
                security and system performance.
              </p>
            </RevealAnimation>
          </div>
          <div className="max-w-[740px] mx-auto space-y-8" role="region" aria-label="Customer testimonial">
            {/* avatar + info */}
            <div className="space-y-2 text-center">
              {/* avatar group */}
              <div className="flex items-center justify-center" aria-hidden="true">
                <figure className="size-7 sm:size-8 md:size-9 overflow-hidden rounded-full bg-white ring-2 ring-stroke-1 -mr-2 cursor-pointer z-0">
                  <Image
                    ref={avatar1Ref}
                    src={avatarImages[0].image}
                    alt={`${avatarImages[0].name}'s avatar`}
                    data-avatar-index={0}
                    className="size-full object-cover transition-opacity duration-300"
                    width={36}
                    height={36}
                  />
                </figure>
                <figure className="size-8 sm:size-10 md:size-11 overflow-hidden rounded-full bg-white ring-2 ring-stroke-1 -mr-2 cursor-pointer z-10">
                  <Image
                    ref={avatar2Ref}
                    src={avatarImages[1].image}
                    alt={`${avatarImages[1].name}'s avatar`}
                    data-avatar-index={1}
                    className="size-full object-cover transition-opacity duration-300"
                    width={44}
                    height={44}
                  />
                </figure>
                <figure className="size-12 sm:size-16 md:size-[72px] overflow-hidden rounded-full bg-primary-500 ring-2 ring-white relative z-10 cursor-pointer">
                  <Image
                    ref={avatar3Ref}
                    src={avatarImages[2].image}
                    alt={`${avatarImages[2].name}'s avatar`}
                    data-avatar-index={2}
                    className="size-full object-cover transition-opacity duration-300"
                    width={72}
                    height={72}
                  />
                </figure>
                <figure className="size-8 sm:size-10 md:size-11 overflow-hidden rounded-full bg-white ring-2 ring-stroke-1 -ml-2 z-[2] cursor-pointer transition-all">
                  <Image
                    ref={avatar4Ref}
                    src={avatarImages[3].image}
                    alt={`${avatarImages[3].name}'s avatar`}
                    data-avatar-index={3}
                    className="size-full object-cover transition-opacity duration-300"
                    width={44}
                    height={44}
                  />
                </figure>
                <figure className="size-7 sm:size-8 md:size-9 overflow-hidden rounded-full bg-white ring-2 ring-stroke-1 -ml-2 cursor-pointer z-0">
                  <Image
                    ref={avatar5Ref}
                    src={avatarImages[4].image}
                    alt={`${avatarImages[4].name}'s avatar`}
                    data-avatar-index={4}
                    className="size-full object-cover transition-opacity duration-300"
                    width={36}
                    height={36}
                  />
                </figure>
              </div>
              {/* name & role */}
              <div>
                <h4 ref={nameRef} className="text-tagline-1 font-medium text-accent">
                  {currentTestimonial.name}
                </h4>
                <p ref={positionRef} className="text-tagline-2 text-accent/60">
                  {currentTestimonial.position}
                </p>
              </div>
            </div>
            {/* testimonial quote */}
            <blockquote className="text-center md:max-w-[652px] max-w-[500px] mx-auto">
              <h3 ref={quoteRef} className="text-heading-6 md:text-heading-5 text-accent">
                {currentTestimonial.quote}
              </h3>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
