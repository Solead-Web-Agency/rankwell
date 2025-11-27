import RevealAnimation from '../animation/RevealAnimation';

export default function AboutFeaturesList() {
  const features = [{ label: 'On demand support' }, { label: 'Information Sharing' }, { label: 'Cloud Technology' }];

  const SimpleCheckIcon = () => (
    <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15.1875 5.0625L7.3125 12.9371L3.375 9"
        stroke=""
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="stroke-secondary dark:stroke-accent"
      />
    </svg>
  );
  return (
    <ul className="list-none max-sm:flex-col flex sm:items-center gap-6 mb-14">
      {features.map((item, idx) => (
        <RevealAnimation key={idx} delay={0.4 + idx * 0.1}>
          <li className="flex items-center justify-center sm:justify-start gap-2">
            <SimpleCheckIcon />
            <span className="text-secondary dark:text-accent font-medium text-tagline-1">{item.label}</span>
          </li>
        </RevealAnimation>
      ))}
    </ul>
  );
}
