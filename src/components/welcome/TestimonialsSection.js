import React, { useState, useEffect, useRef } from 'react';

const testimonials = [
  {
    name: 'Serge Labelle',
    date: '2025-01-31',
    img: 'https://lh3.googleusercontent.com/a/ACg8ocKmKGSZd8yuy5or-F_HoLEcnCqReKg-XBrB5WVs2UYywlajJw=w64-h64-c-rp-mo-br100',
    text: `Merci à Clôture Plante pour l’installation de nos 2 clôtures.  Nous avons fait remplacer une clôture en chaine de maille, installation sans problème.  La seconde clôture est une clôture ornementale servant à restreindre l’accès à la piscine. Le résultat final est bien mais il y a eu quelques problèmes : disponibilité de pièce, ouverture entre les poteaux trop petite pour une porte et ajustement mineurs sur 3 sections (trop basse).  Les problèmes ont été réglé rapidement par Samuel.  Pour la porte on espère que ça va tenir, actuellement à cause du gel la porte ne ferme plus, on verra au printemps si après le dégel la porte va se replacer.  L’équipe d’installation (2 hommes) était efficace et a travaillé rapidement.  Le seul commentaire négatif… l’un des installateurs étaient très professionnel et très courtois, le second beaucoup moins à cause de son caractères ‘bouillant’ qui n’a pas sa place chez un client. Nous recommandons Cloture Plante sans hésitation.`
  },
  {
    name: 'Anthony Roy',
    date: '2024-12-27',
    img: 'https://lh3.googleusercontent.com/a/ACg8ocJCKw_eE5Y0Y76GfFbCOPqo_7TPTWGGnkRz_jHEj1uDphT7CA=w64-h64-c-rp-mo-br100',
    text: `Personnel courtois et très grande expertise dans le domaine! Je recommande pour tout projet!💯`
  },
  {
    
    name: 'Roxana Orué',
    date: '2024-11-09',
    img: 'https://lh3.googleusercontent.com/a/ACg8ocL7dcUhvIwMi20-SyJmrEdFKulv-fweGnCOzN4RtStfIOb1QAI=w64-h64-c-rp-mo-ba2-br100',
    text: `J'ai eu une excellente expérience avec Clôture Plante. M. Plante est un véritable ‘gentleman’ avec une grande capacité de communication et beaucoup de patience, répondant avec précision à toutes mes questions. Il aussi répond rapidement aux appels téléphoniques. Le personnel qui a travaillé dans notre cour a été très efficace et courtois, et ils sont pris attention à l’esthétique. Et les prix  : les meilleurs du marché! Merci pour ce service de qualité!`
  },
  {
    name: 'roxane trottier',
    date: '2024-10-01',
    img: 'https://lh3.googleusercontent.com/a-/ALV-UjV2SmRAZmLFi6rrTLN0OQ6CbmuOqMVCLIjkS0vm7QxybmE3Ikhg=w64-h64-c-rp-mo-br100',
    text: `Installation rapide , propre quand les travaux sont complétés et un rabais quand tu vas en boutique. Moins cher de 3 soumissions à Gatineau. Recommande fortement 👍`
  },
  {
    name: 'Yves St-Pierre',
    date: '2024-09-26',
    img: 'https://lh3.googleusercontent.com/a/ACg8ocKjMHTSMYxu2WE5njwItZvCJclzJqZdsDUk8sloOoAdzL67bQ=w64-h64-c-rp-mo-br100',
    text: `Merci à Samuel et son équipe d’installateur, je suis très satisfait de ma clôture. Prix compétitif et délai respecté. Je recommande.`
  },
  {
    name: 'Danny Bedard',
    date: '2024-09-25',
    img: 'https://lh3.googleusercontent.com/a-/ALV-UjUvkeKmi3NpSyE4_N11EqJc_Mnv-i7VvC6LUYSGZ56rTiFruHM=w64-h64-c-rp-mo-br100',
    text: `Un gros merci Clôture Plante pour l’installation de notre clôture. Excellent service. Nous sommes très satisfaits de la qualité et du prix. On vous recommande à 100%.`
  },
  {
    name: 'Max Sim',
    date: '2024-09-16',
    img: 'https://lh3.googleusercontent.com/a/ACg8ocIrnraz7r2blgx8ULYjJLfLvZrGUMJikUYmAO_boMgCkUBiWw=w64-h64-c-rp-mo-br100',
    text: `Bon prix, courtoisie, bon produit et installé tel que demandé! Merci Samuel et à ton équipe pour l'excellent travail! je suis très satisfait!`
  },
  {
    name: 'Megann Plante',
    date: '2024-08-31',
    img: 'https://lh3.googleusercontent.com/a/ACg8ocIsSdjOhzKXvCoGJr8iLSwFDPPW_97Y1e0WLI3tIyNv3SyEcQ=w64-h64-c-rp-mo-br100',
    text: `J'ai récemment fait installer une clôture chez clôture plante à Gatineau et je suis très satisfait du résultat.Le service a été professionnel et le travail a été réalisé dans les délais prévus. Je recommande vivement cette entreprise pour leur expertise et la qualité de leur service. Merci à Samuel, Arielle et sont équipes qui se donne corps et âme pour nous satisfaire.`
  },
  {
    name: 'Suzanne Proulx',
    date: '2024-06-04',
    img: 'https://lh3.googleusercontent.com/a/ACg8ocKq5A7b48hIHe399yCnVq4fhQXbjDlzS4y_ZU014s9DP6beWQ=w64-h64-c-rp-mo-br100',
    text: `Un gros merci à Samuel et son équipe pour l’installation de ma clôture au mois de mai. Très bon service de leur part. Nous sommes très satisfaits de la job, de la qualité et du prix. On vous recommande à 100%.`
  },
  {
    name: 'Richard Guilbeault',
    date: '2024-05-16',
    img: 'https://lh3.googleusercontent.com/a-/ALV-UjV7Gw-1pXAxMFFx-23ET4nwEZ7kujpFAxvLofpTEbzUS94jnv0=w64-h64-c-rp-mo-br100',
    text: `J'ai gagné un concours à 104.7 et je peux vous dire c'est une excellente compagnie, très professionnel avec d'excellent employés très travaillant et ils ont fait une très belle job je suis super satisfait des travaux effectués par cette compagnie et de ses employés. En plus il était sensé venir effectué les travaux dans la semaine du 20 mai 2024 et ils ont commencé une semaine avant qui est dans la semaine du 13 mai 2024. Je les recommandes fortement pour faire vos travaux de clôture. Un gros merci à Samuel et au gars avec le pinch et le reste de leur équipe pour leur excellent travail.`
  },
];

const Star = () => (
  <svg className="inline-block w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" /></svg>
);

const CARDS_TO_SHOW = 3;
const AUTO_SCROLL_INTERVAL = 10000;

const TestimonialsSection = () => {
  const [start, setStart] = useState(0);
  const [expanded, setExpanded] = useState(Array(testimonials.length).fill(false));
  const intervalRef = useRef();

  const scrollRight = () => setStart((prev) => (prev + 1) % testimonials.length);
  const scrollLeft = () => setStart((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    intervalRef.current = setInterval(scrollRight, AUTO_SCROLL_INTERVAL);
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleReadMore = (idx) => {
    setExpanded((exp) => {
      const copy = [...exp];
      copy[idx] = !copy[idx];
      return copy;
    });
  };

  // Get the visible testimonials (wrap around)
  const visible = [];
  for (let i = 0; i < CARDS_TO_SHOW; i++) {
    visible.push(testimonials[(start + i) % testimonials.length]);
  }

  return (
    <section className="bg-gray-100 py-16">
      <h3 className="text-center text-lg md:text-xl font-semibold mb-8 text-gray-700">OUR CUSTOMERS' OPINIONS</h3>
      <div className="max-w-6xl mx-auto flex items-center justify-center gap-2">
        <button onClick={scrollLeft} aria-label="Previous" className="p-2 rounded-full bg-white shadow hover:bg-orange-200 transition border border-orange-500 flex-shrink-0">
          <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
        </button>
        <div className="flex gap-8 overflow-x-hidden transition-all duration-700 ease-in-out">
          {visible.map((t, idx) => {
            const realIdx = (start + idx) % testimonials.length;
            const isLong = t.text.length > 200;
            const displayText = expanded[realIdx] || !isLong ? t.text : t.text.slice(0, 200) + '...';
            return (
              <div key={realIdx} className="bg-white rounded shadow p-6 flex flex-col items-center text-center w-full min-w-[320px] max-w-[400px] transition-all duration-700 ease-in-out">
                <img src={t.img} alt={t.name} className="w-16 h-16 rounded-full object-cover mb-2 border-2 border-orange-400" />
                <div className="flex items-center justify-center mb-1">
                  {[...Array(5)].map((_, i) => <Star key={i} />)}
                </div>
                <p className="text-gray-600 text-sm mb-2">
                  {displayText}
                  {isLong && (
                    <button className="ml-2 text-orange-500 underline text-xs hover:text-orange-700 transition" onClick={() => handleReadMore(realIdx)}>
                      {expanded[realIdx] ? 'Read less' : 'Read more'}
                    </button>
                  )}
                </p>
                <span className="text-gray-800 font-semibold text-sm">{t.name}</span>
                <span className="text-gray-400 text-xs mt-1">{t.date}</span>
              </div>
            );
          })}
        </div>
        <button onClick={scrollRight} aria-label="Next" className="p-2 rounded-full bg-white shadow hover:bg-orange-200 transition border border-orange-500 flex-shrink-0">
          <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
    </section>
  );
};

export default TestimonialsSection; 