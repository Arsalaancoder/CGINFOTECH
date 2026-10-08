import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  theme?: 'light' | 'dark';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  heading,
  description,
  align = 'left',
  theme = 'light',
  className = ''
}) => {
  const alignClass = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto'
  }[align];

  const headingColor = theme === 'dark' ? 'text-white' : 'text-[#1D2522]';
  const descColor = theme === 'dark' ? 'text-[#9FC3B6]' : 'text-[#68716D]';

  return (
    <div className={`flex flex-col max-w-3xl ${alignClass} ${className}`}>
      {eyebrow && (
        <span className={`cg-badge ${theme === 'dark' ? 'cg-badge-dark' : ''} mb-4`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`text-section-heading font-extrabold tracking-tight ${headingColor}`}>
        {heading}
      </h2>
      {description && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed ${descColor}`}>
          {description}
        </p>
      )}
    </div>
  );
};
