'use client';

import { cn } from '@/utils/cn';
import { useEffect, useRef } from 'react';
import { useTab } from '../../../context/TabContext';

interface TabListProps {
  children: React.ReactNode;
  variant?: 'desktop' | 'mobile';
  className?: string;
}

const TabList: React.FC<TabListProps> = ({ children, variant = 'desktop', className = '' }) => {
  const { registerTabBar } = useTab();
  const activeTabBarRef = useRef<HTMLDivElement>(null);
  const tabListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (variant === 'desktop') {
      registerTabBar(activeTabBarRef.current);
    }
  }, [registerTabBar, variant]);

  // Active tab bar positioning is now handled by the TabContext when tabs switch

  const getClassName = (): string => {
    if (variant === 'desktop') {
      return cn(
        'tab-bar border-stroke-2 dark:border-stroke-6 relative mb-14 hidden items-center justify-center border-b lg:mb-[72px] lg:flex',
        className,
      );
    } else {
      return cn(
        'mb-14 flex flex-wrap items-center justify-start gap-4 sm:mx-auto sm:max-w-[500px] lg:mb-[72px] lg:hidden',
        className,
      );
    }
  };

  return (
    <div ref={tabListRef} role="tablist" className={getClassName()}>
      {/* Active tab bar indicator for desktop */}
      {variant === 'desktop' && <div ref={activeTabBarRef} className="active-tab-bar"></div>}

      {children}
    </div>
  );
};

TabList.displayName = 'TabList';
export default TabList;
