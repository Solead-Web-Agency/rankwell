'use client';

import React from 'react';
import { useStackCards, type UseStackCardsOptions } from '../../../hooks/useStackCards';
import { cn } from '../../../utils/cn';

export interface StackCardsProps extends UseStackCardsOptions {
  children: React.ReactNode;
  className?: string;
}

const StackCardWrapper: React.FC<StackCardsProps> = ({ children, className, topOffset, gap, initDelay, disabled }) => {
  const { stackCardsProps } = useStackCards({
    topOffset,
    gap,
    initDelay,
    disabled,
  });

  return (
    <div {...stackCardsProps} className={cn(stackCardsProps.className, className)}>
      {children}
    </div>
  );
};

StackCardWrapper.displayName = 'StackCardWrapper';
export default StackCardWrapper;
