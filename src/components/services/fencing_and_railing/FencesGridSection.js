import React from 'react';
import { useLanguage } from '../../../contexts/LanguageContext';
// Replace with actual images when provided
import img1 from '../../../assets/fencing_and_railing/fence_1.jpeg';
import img2 from '../../../assets/fencing_and_railing/fence_2.jpg';
import img3 from '../../../assets/fencing_and_railing/fence_3.jpeg';
import img4 from '../../../assets/fencing_and_railing/fence_4.jpg';
import img5 from '../../../assets/fencing_and_railing/fence_5.webp';

const fences = [
  {
    img: img1,
    title: 'Ornamental',
    desc: 'Elegance at the service of your privacy. Perfect for those looking to add a distinct touch of elegance to their outdoor space, while preserving their privacy in style.'
  },
  {
    img: img2,
    title: 'Composite',
    desc: 'Robustness and design for a contemporary exterior. Ideal for lovers of modernity, this fence combines exceptional durability and modern aesthetics, withstanding the harshest weather conditions.'
  },
  {
    img: img3,
    title: 'Panoramic with Spigot',
    desc: 'Luxury and clarity for an uninterrupted panorama. Designed for those who don’t want to compromise on views, this fence adds a touch of luxury to your property while ensuring security.'
  },
  {
    img: img4,
    title: 'Mesh',
    desc: 'Discreet security for every space. The ideal solution for securing without adding visual clutter. This fence is perfect for gardens, playgrounds, or around pools, providing protection while remaining virtually invisible.'
  },
  {
    img: img5,
    title: 'Crystal/Contour Crystal',
    desc: 'Transparency and brightness, a cutting edge choice. Offers an unobstructed view of your garden or landscape, bringing a bright and airy look to your space, while ensuring optimal security.'
  },
  
];

const FencesGridSection = () => {
  const { t } = useLanguage();
  
  const fences = [
    {
      img: img1,
      title: t('ornamental'),
      desc: t('ornamental_desc')
    },
    {
      img: img2,
      title: t('composite'),
      desc: t('composite_desc')
    },
    {
      img: img3,
      title: t('panoramic'),
      desc: t('panoramic_desc')
    },
    {
      img: img4,
      title: t('mesh'),
      desc: t('mesh_desc')
    },
    {
      img: img5,
      title: t('crystal'),
      desc: t('crystal_desc')
    },
  ];
  
  return (
  <section className="w-full bg-[#333] py-12 px-4">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-white text-3xl font-bold mb-8">{t('fences')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {fences.map((f, i) => (
          <div key={i} className="bg-white rounded shadow flex flex-col h-full">
            <img src={f.img} alt={f.title} className="w-full h-48 object-cover rounded-t" />
            <div className="p-4 flex-1 flex flex-col">
              <h3 className="font-bold text-lg mb-2">{f.title}</h3>
              <p className="text-gray-700 text-sm flex-1">{f.desc}</p>
            </div>
          </div>
        ))}
              </div>
      </div>
    </section>
    );
  };

export default FencesGridSection; 