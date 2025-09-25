import React from 'react';

interface TranslatedImageOverlayProps {
  descriptions: {
    title: string;
    items: string[];
  };
  position?: 'top-right' | 'bottom-right' | 'top-left' | 'bottom-left';
}

export default function TranslatedImageOverlay({
  descriptions,
  position = 'top-right'
}: TranslatedImageOverlayProps) {

  const positionClasses = {
    'top-right': 'top-4 right-4',
    'bottom-right': 'bottom-4 right-4',
    'top-left': 'top-4 left-4',
    'bottom-left': 'bottom-4 left-4',
  };

  return (
    <div className={`absolute ${positionClasses[position]} z-10 bg-blue-600/90 text-white p-3 rounded-lg shadow-lg max-w-xs md:block hidden`}>
      <h4 className="font-bold text-sm mb-2">{descriptions.title}</h4>
      <ul className="text-xs space-y-1">
        {descriptions.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
