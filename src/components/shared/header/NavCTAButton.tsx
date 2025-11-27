import LinkButton from '@/components/ui/button/LinkButton';
import { cn } from '@/utils/cn';

interface NavCTAButtonProps {
  btnClassName?: string;
  href: string;
  label: string;
  className?: string;
}

const NavCTAButton = ({ btnClassName, href = '/', label, className }: NavCTAButtonProps) => {
  return (
    <div className={cn('hidden items-center justify-center xl:flex', className)}>
      <LinkButton href={href} className={cn('btn btn-md', btnClassName)}>
        {label}
      </LinkButton>
    </div>
  );
};

export default NavCTAButton;
