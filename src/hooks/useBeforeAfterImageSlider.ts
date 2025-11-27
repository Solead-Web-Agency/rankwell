'use client';

import { useEffect, useRef } from 'react';

interface UseBeforeAfterImageSliderOptions {
  // Optional callback when slider position changes
  onPositionChange?: (percentage: number) => void;
  // Initial position (0-100)
  initialPosition?: number;
  // Enable/disable keyboard navigation
  enableKeyboard?: boolean;
  // Enable/disable click to position
  enableClickToPosition?: boolean;
}

export const useBeforeAfterImageSlider = (options: UseBeforeAfterImageSliderOptions = {}) => {
  const { onPositionChange, initialPosition = 50, enableKeyboard = true, enableClickToPosition = true } = options;

  // Refs for DOM elements
  const sliderRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);
  const afterImageRef = useRef<HTMLImageElement>(null);

  // State refs for dragging
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const startLeftRef = useRef(0);

  useEffect(() => {
    const slider = sliderRef.current;
    const handle = handleRef.current;
    const afterImg = afterImageRef.current;

    if (!slider || !handle || !afterImg) {
      return;
    }

    // Initialize slider position
    const initSlider = () => {
      const sliderRect = slider.getBoundingClientRect();
      const position = (initialPosition / 100) * sliderRect.width;
      handle.style.left = `${position}px`;
      updateClipPath(position);
    };

    // Update the clip path for the after image
    const updateClipPath = (position: number) => {
      const sliderRect = slider.getBoundingClientRect();
      const percentage = (position / sliderRect.width) * 100;
      afterImg.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;

      // Call the callback if provided
      if (onPositionChange) {
        onPositionChange(percentage);
      }
    };

    // Handle mouse down
    const handleMouseDown = (e: MouseEvent) => {
      e.preventDefault();
      isDraggingRef.current = true;
      startXRef.current = e.clientX;
      startLeftRef.current = parseInt(handle.style.left) || slider.offsetWidth / 2;

      // Disable transitions during dragging for instant movement
      handle.classList.add('no-transition');

      // Change cursor to ew-resize during dragging
      document.body.style.cursor = 'ew-resize';
      document.body.style.userSelect = 'none';
      handle.style.cursor = 'ew-resize';

      // Add active class for visual feedback
      handle.classList.add('active');
    };

    // Handle mouse up
    const handleMouseUp = () => {
      if (isDraggingRef.current) {
        isDraggingRef.current = false;

        // Re-enable transitions after dragging stops
        handle.classList.remove('no-transition');

        // Reset cursor to default when dragging stops
        document.body.style.cursor = 'default';
        document.body.style.userSelect = '';
        handle.style.cursor = 'ew-resize';
        handle.classList.remove('active');
      }
    };

    // Handle mouse move
    const handleMouseMove = (e: MouseEvent) => {
      if (isDraggingRef.current) {
        const sliderRect = slider.getBoundingClientRect();
        const deltaX = e.clientX - startXRef.current;
        const newPosition = startLeftRef.current + deltaX;

        // Constrain to slider bounds
        const constrainedPosition = Math.max(0, Math.min(sliderRect.width, newPosition));

        handle.style.left = `${constrainedPosition}px`;
        updateClipPath(constrainedPosition);

        // Ensure cursor stays ew-resize during movement
        document.body.style.cursor = 'ew-resize';
        handle.style.cursor = 'ew-resize';
      }
    };

    // Handle touch events for mobile
    const handleTouchStart = (e: TouchEvent) => {
      e.preventDefault();
      isDraggingRef.current = true;
      startXRef.current = e.touches[0].clientX;
      startLeftRef.current = parseInt(handle.style.left) || slider.offsetWidth / 2;

      // Disable transitions during dragging for instant movement
      handle.classList.add('no-transition');

      // Change cursor for touch devices
      handle.style.cursor = 'ew-resize';
      handle.classList.add('active');
    };

    const handleTouchEnd = () => {
      if (isDraggingRef.current) {
        isDraggingRef.current = false;

        // Re-enable transitions after dragging stops
        handle.classList.remove('no-transition');

        // Reset cursor after touch drag
        handle.style.cursor = 'ew-resize';
        handle.classList.remove('active');
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isDraggingRef.current) {
        e.preventDefault();
        const sliderRect = slider.getBoundingClientRect();
        const deltaX = e.touches[0].clientX - startXRef.current;
        const newPosition = startLeftRef.current + deltaX;

        const constrainedPosition = Math.max(0, Math.min(sliderRect.width, newPosition));

        handle.style.left = `${constrainedPosition}px`;
        updateClipPath(constrainedPosition);

        // Ensure cursor stays ew-resize during touch movement
        handle.style.cursor = 'ew-resize';
      }
    };

    // Handle click on slider to move handle
    const handleSliderClick = (e: MouseEvent) => {
      if (!isDraggingRef.current && enableClickToPosition) {
        const sliderRect = slider.getBoundingClientRect();
        const clickX = e.clientX - sliderRect.left;
        const constrainedPosition = Math.max(0, Math.min(sliderRect.width, clickX));

        handle.style.left = `${constrainedPosition}px`;
        updateClipPath(constrainedPosition);
      }
    };

    // Handle keyboard support
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!enableKeyboard) return;

      const sliderRect = slider.getBoundingClientRect();
      const currentPosition = parseInt(handle.style.left) || sliderRect.width / 2;
      const step = sliderRect.width / 20; // 5% steps

      let newPosition = currentPosition;

      switch (e.key) {
        case 'ArrowLeft':
          newPosition = Math.max(0, currentPosition - step);
          break;
        case 'ArrowRight':
          newPosition = Math.min(sliderRect.width, currentPosition + step);
          break;
        case 'Home':
          newPosition = 0;
          break;
        case 'End':
          newPosition = sliderRect.width;
          break;
        default:
          return;
      }

      e.preventDefault();
      handle.style.left = `${newPosition}px`;
      updateClipPath(newPosition);
    };

    // Handle window resize
    const handleResize = () => {
      initSlider();
    };

    // Add event listeners
    handle.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mousemove', handleMouseMove);
    handle.addEventListener('touchstart', handleTouchStart, { passive: false });
    document.addEventListener('touchend', handleTouchEnd);
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    slider.addEventListener('click', handleSliderClick);
    handle.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);

    // Make handle focusable for keyboard navigation
    handle.setAttribute('tabindex', '0');
    handle.setAttribute('role', 'slider');
    handle.setAttribute('aria-label', 'Before and after image slider');
    handle.setAttribute('aria-valuemin', '0');
    handle.setAttribute('aria-valuemax', '100');
    handle.setAttribute('aria-valuenow', initialPosition.toString());

    // Initialize slider
    initSlider();

    // Cleanup event listeners on unmount
    return () => {
      handle.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mousemove', handleMouseMove);
      handle.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
      document.removeEventListener('touchmove', handleTouchMove);
      slider.removeEventListener('click', handleSliderClick);
      handle.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, [initialPosition, onPositionChange, enableKeyboard, enableClickToPosition]);

  // Return refs and utility functions
  return {
    sliderRef,
    handleRef,
    afterImageRef,
    // Utility function to programmatically set position (0-100)
    setPosition: (percentage: number) => {
      const slider = sliderRef.current;
      const handle = handleRef.current;
      const afterImg = afterImageRef.current;

      if (slider && handle && afterImg) {
        const sliderRect = slider.getBoundingClientRect();
        const position = (percentage / 100) * sliderRect.width;
        handle.style.left = `${position}px`;
        afterImg.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
      }
    },
    // Reset to initial position
    reset: () => {
      const slider = sliderRef.current;
      const handle = handleRef.current;
      const afterImg = afterImageRef.current;

      if (slider && handle && afterImg) {
        const sliderRect = slider.getBoundingClientRect();
        const position = (initialPosition / 100) * sliderRect.width;
        handle.style.left = `${position}px`;
        afterImg.style.clipPath = `inset(0 ${100 - initialPosition}% 0 0)`;
      }
    },
  };
};
