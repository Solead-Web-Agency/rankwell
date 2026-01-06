/**
 * ICON - Composant wrapper pour Lucide Icons
 * Permet d'utiliser les icônes Lucide dynamiquement via leur nom en string
 *
 * Usage:
 *   <Icon name="Search" className="w-6 h-6" />
 *   <Icon name="BarChart3" size={24} />
 */

import { icons, LucideProps } from 'lucide-react';

export interface IconProps extends Omit<LucideProps, 'ref'> {
  name: keyof typeof icons | any;
}

const Icon = ({ name, strokeWidth = 1.5, ...props }: IconProps) => {
  // Gérer le cas où name n'est pas une string (erreur de type dans les données)
  if (typeof name !== 'string') {
    if (process.env.NODE_ENV !== 'production') {
      console.warn(`Icon name must be a string, received:`, typeof name);
    }
    return null;
  }

  const LucideIcon = icons[name as keyof typeof icons];

  if (!LucideIcon) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn(`Icon "${name}" not found in Lucide icons`);
    }
    return null;
  }

  return <LucideIcon strokeWidth={strokeWidth} {...props} />;
};

Icon.displayName = 'Icon';
export default Icon;
