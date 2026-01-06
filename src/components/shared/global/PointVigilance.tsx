/**
 * POINTVIGILANCE - Encart d'alerte/conseil
 * Composant global utilisable sur toutes les pages
 *
 * Props:
 * - label: Titre du callout
 * - text: Texte du callout
 * - icon: Nom de l'icône Lucide (optionnel, défaut: TriangleAlert)
 */

'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import Icon from '@/components/ui/Icon';
import { icons } from 'lucide-react';

interface PointVigilanceProps {
  label: string;
  text: string;
  icon?: keyof typeof icons;
}

const PointVigilance = ({ label, text, icon = 'TriangleAlert' }: PointVigilanceProps) => {
  return (
    <RevealAnimation delay={0.1}>
      <section className="pt-16 md:pt-20 lg:pt-[90px] xl:pt-[100px] pb-16 md:pb-20 lg:pb-[90px] xl:pb-[100px]">
        <div className="main-container">
          <div className="py-10 md:py-12 px-8 md:px-12 bg-secondary dark:bg-[#0E0E0E] rounded-[20px]">
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
              {/* Left: Icon + Label */}
              <div className="md:w-[35%] md:border-r md:border-white/20 md:pr-8 flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-rw-coral rounded-full flex items-center justify-center shrink-0">
                  <Icon name={icon} className="w-6 h-6 text-white" />
                </div>
                <span className="text-white text-center" style={{ fontSize: '1.7rem', fontWeight: 400 }}>
                  {label}
                </span>
              </div>
              {/* Right: Text */}
              <div className="md:w-[65%] flex items-center">
                <p className="text-white/80 text-center md:text-left text-lg">
                  {text}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </RevealAnimation>
  );
};

PointVigilance.displayName = 'PointVigilance';
export default PointVigilance;
