import { cn } from '@/utils/cn';
import Link from 'next/link';
import { AnchorHTMLAttributes } from 'react';

interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  href: string;
  className?: string;
  insideSpan?: boolean;
}

const LinkButton = ({ children, href, className, insideSpan = true, ...props }: LinkButtonProps) => {
  return (
    <Link href={href} className={cn('btn btn-md', className)} {...props}>
      {insideSpan ? <span>{children}</span> : children}
    </Link>
  );
};

LinkButton.displayName = 'LinkButton';
export default LinkButton;
