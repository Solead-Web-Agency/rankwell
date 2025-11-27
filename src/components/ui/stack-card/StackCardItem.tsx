'use client';

import React from 'react';
import { cn } from '../../../utils/cn';

export interface StackCardItemProps {
  children: React.ReactElement<{ className?: string; style?: React.CSSProperties }>;
  className?: string;
}

const StackCardItem: React.FC<StackCardItemProps> = ({ children, className }) => {
  if (!children || !children.props) {
    return null;
  }

  return React.cloneElement(children, {
    className: cn('js-stack-cards__item', children.props.className || '', className),
  });
};

StackCardItem.displayName = 'StackCardItem';
export default StackCardItem;
