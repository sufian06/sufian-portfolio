import React from 'react';

const SectionTitle = ({title, subTitle}) => {
  return (
    <div>
      <h2 className="text-5xl font-bold uppercase mb-2">{title}</h2>
        <span className="capitalize">{subTitle}</span>
    </div>
  );
};

export default SectionTitle;