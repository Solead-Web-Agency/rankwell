'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import RevealAnimation from '../animation/RevealAnimation';

const testimonials = [
  {
    name: 'Jessica Lee',
    position: 'Head of customer Success',
    image: '/images/avatar/avatar-9.png',
    quote:
      "The investment insights are clear, easy to understand and follow. I love the automation and feel like I'm making real progress every day.",
  },
  {
    name: 'Mark Thompson',
    position: 'Marketing Director',
    image: '/images/avatar/avatar-10.png',
    quote:
      "This platform helps our team move faster, stay aligned, and reduce errors. It's a powerful tool that boosts productivity all around.",
  },
  {
    name: 'Amina Yusuf',
    position: 'Product Manager',
    image: '/images/avatar/avatar-11.png',
    quote:
      'Our planning is finally clear and consistent. I feel more confident in how my team executes tasks and reaches project goals on time.',
  },
  {
    name: 'Leo Chen',
    position: 'Founder, ScaleX',
    image: '/images/avatar/avatar-13.png',
    quote:
      'The design is clean and the interface is effortless to use. It saves time, improves clarity, and just makes everything run smoother.',
  },
  {
    name: 'John Doe',
    position: 'CEO',
    image: '/images/avatar/avatar-14.png',
    quote:
      "A great platform for managing projects with clarity and speed. It's intuitive, efficient, and keeps everyone on the same page easily.",
  },
];

const TestimonialV2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(testimonials[0]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const quoteRef = useRef<HTMLHeadingElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const positionRef = useRef<HTMLParagraphElement>(null);

  // Function to get avatar image for a specific position
  const getAvatarImage = (index: number) => {
    const avatarIndex = (currentIndex + index - 2 + testimonials.length) % testimonials.length;
    return testimonials[avatarIndex].image;
  };

  // Function to get avatar alt text for a specific position
  const getAvatarAlt = (index: number) => {
    const avatarIndex = (currentIndex + index - 2 + testimonials.length) % testimonials.length;
    return `${testimonials[avatarIndex].name}'s avatar`;
  };

  // Function to update testimonial content with animation
  const updateTestimonial = useCallback(() => {
    const t = testimonials[currentIndex];
    setCurrentTestimonial(t);

    // Animate quote
    if (quoteRef.current) {
      quoteRef.current.style.opacity = '0';
      quoteRef.current.style.transform = 'translateY(-10px)';
      quoteRef.current.style.transition = 'opacity 0.2s ease-out, transform 0.2s ease-out';

      setTimeout(() => {
        if (quoteRef.current) {
          quoteRef.current.textContent = `"${t.quote}"`;
          quoteRef.current.style.opacity = '1';
          quoteRef.current.style.transform = 'translateY(0)';
          quoteRef.current.style.transition = 'opacity 0.3s ease-out, transform 0.3s ease-out';
        }
      }, 200);
    }

    // Animate name
    if (nameRef.current) {
      nameRef.current.style.opacity = '0';
      nameRef.current.style.transform = 'translateY(5px)';
      nameRef.current.style.transition = 'opacity 0.2s ease-out, transform 0.2s ease-out';

      setTimeout(() => {
        if (nameRef.current) {
          nameRef.current.textContent = t.name;
          nameRef.current.style.opacity = '1';
          nameRef.current.style.transform = 'translateY(0)';
          nameRef.current.style.transition = 'opacity 0.3s ease-out, transform 0.3s ease-out';
        }
      }, 200);
    }

    // Animate position
    if (positionRef.current) {
      positionRef.current.style.opacity = '0';
      positionRef.current.style.transform = 'translateY(5px)';
      positionRef.current.style.transition = 'opacity 0.2s ease-out, transform 0.2s ease-out';

      setTimeout(() => {
        if (positionRef.current) {
          positionRef.current.textContent = t.position;
          positionRef.current.style.opacity = '1';
          positionRef.current.style.transform = 'translateY(0)';
          positionRef.current.style.transition = 'opacity 0.3s ease-out, transform 0.3s ease-out';
        }
      }, 200);
    }
  }, [currentIndex]);

  // Function to handle avatar click
  const handleAvatarClick = (index: number) => {
    const newIndex = (currentIndex + index - 2 + testimonials.length) % testimonials.length;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    // Set initial testimonial
    updateTestimonial();

    // Set up interval for auto-rotation
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);

    // Cleanup interval on unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [updateTestimonial]);

  // Update testimonial when currentIndex changes
  useEffect(() => {
    updateTestimonial();
  }, [currentIndex, updateTestimonial]);

  return (
    <RevealAnimation delay={0.3} offset={100}>
      <div
        id="testimonial"
        className="max-w-[740px] mx-auto px-4 sm:px-8 md:px-11 py-6 sm:py-10 md:py-14 rounded-[20px] bg-white dark:bg-background-6"
        role="region"
        aria-label="Customer testimonial">
        {/* testimonial quote */}
        <blockquote id="testimonial-quote" className="mb-8 sm:mb-12 md:mb-16 text-center">
          <h3
            ref={quoteRef}
            className="text-lg md:text-heading-5 transition-all duration-300"
            style={{ opacity: 1, transform: 'translateY(0)' }}>
            &quot;{currentTestimonial.quote}&quot;
          </h3>
        </blockquote>
        {/* avatar + info */}
        <div className="space-y-2 text-center">
          {/* avatar group */}
          <div className="flex items-center justify-center" id="avatar-group" aria-hidden="true">
            <figure
              className="size-7 sm:size-8 md:size-9 overflow-hidden rounded-full bg-white ring-2 ring-stroke-1 -mr-2 cursor-pointer z-0 transition-all duration-300 hover:scale-110"
              onClick={() => handleAvatarClick(0)}>
              <Image
                src={getAvatarImage(0)}
                alt={getAvatarAlt(0)}
                data-avatar-index={0}
                className="testimonial-avatar size-full object-cover transition-all duration-300"
                width={36}
                height={36}
              />
            </figure>
            <figure
              className="size-8 sm:size-10 md:size-11 overflow-hidden rounded-full bg-white ring-2 ring-stroke-1 -mr-2 cursor-pointer transition-all z-10 hover:scale-110"
              onClick={() => handleAvatarClick(1)}>
              <Image
                src={getAvatarImage(1)}
                alt={getAvatarAlt(1)}
                data-avatar-index={1}
                className="testimonial-avatar size-full object-cover transition-all duration-300"
                width={44}
                height={44}
              />
            </figure>
            <figure
              className="size-12 sm:size-16 md:size-[72px] overflow-hidden rounded-full bg-primary-500 ring-2 ring-white relative z-10 cursor-pointer transition-all hover:scale-110"
              onClick={() => handleAvatarClick(2)}>
              <Image
                src={getAvatarImage(2)}
                alt={getAvatarAlt(2)}
                data-avatar-index={2}
                className="testimonial-avatar size-full object-cover transition-all duration-300"
                width={72}
                height={72}
              />
            </figure>
            <figure
              className="size-8 sm:size-10 md:size-11 overflow-hidden rounded-full bg-white ring-2 ring-stroke-1 -ml-2 z-[2] cursor-pointer transition-all hover:scale-110"
              onClick={() => handleAvatarClick(3)}>
              <Image
                src={getAvatarImage(3)}
                alt={getAvatarAlt(3)}
                data-avatar-index={3}
                className="testimonial-avatar size-full object-cover transition-all duration-300"
                width={44}
                height={44}
              />
            </figure>
            <figure
              className="size-7 sm:size-8 md:size-9 overflow-hidden rounded-full bg-white ring-2 ring-stroke-1 -ml-2 z-0 cursor-pointer transition-all hover:scale-110"
              onClick={() => handleAvatarClick(4)}>
              <Image
                src={getAvatarImage(4)}
                alt={getAvatarAlt(4)}
                data-avatar-index={4}
                className="testimonial-avatar size-full object-cover transition-all duration-300"
                width={36}
                height={36}
              />
            </figure>
          </div>
          {/* name & role */}
          <div id="testimonial-info">
            <h4
              ref={nameRef}
              className="text-tagline-1 font-medium transition-all duration-300"
              style={{ opacity: 1, transform: 'translateY(0)' }}>
              {currentTestimonial.name}
            </h4>
            <p
              ref={positionRef}
              className="text-tagline-2 transition-all duration-300"
              style={{ opacity: 1, transform: 'translateY(0)' }}>
              {currentTestimonial.position}
            </p>
          </div>
        </div>
      </div>
    </RevealAnimation>
  );
};

export default TestimonialV2;
