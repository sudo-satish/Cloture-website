import React, { createContext, useContext, useState } from 'react';

const translations = {
  EN: {
    // Header
    home: 'Home',
    services: 'Services',
    gallery: 'Gallery',
    contact: 'Contact',
    appointment: 'Appointment',
    fence_installation: 'Fence installation',
    fence_straightening_repair: 'Fence straightening and repair',
    temporary_fence_rental: 'Temporary fence rental',
    custom_agricultural_fencing: 'Custom-made agricultural fencing',
    fencing_railings: 'Fencing and railings',
    
    // Hero Section
    plant_fence: 'PLANT FENCE',
    hero_title: 'Professional Fencing Solutions',
    hero_subtitle: 'Quality & Reliability',
    hero_description: 'Expert fence installation and repair services in Ottawa-Gatineau. From residential to commercial projects, we deliver exceptional results with premium materials and craftsmanship.',
    get_free_quote: 'Get Free Quote',
    contact_us: 'CONTACT US',
    
    // Features Section
    features_title: 'Why Choose Us',
    features_subtitle: 'Excellence in Every Detail',
    art_of_enclosing: 'THE ART OF ENCLOSING YOUR SPACES',
    elegance_touch: 'Looking for a touch of elegance to frame your home?',
    cloture_plante_desc: 'At Clôture Plante, we understand the importance of selecting an outdoor space that reflects your personality. Specializing in the installation of high-end fences in Ottawa and Gatineau, we offer a diverse range of solutions, designed to transform your property into a haven of peace.',
    vision_expertise: 'YOUR VISION, OUR EXPERTISE.\nTOGETHER, LET\'S CREATE THE EXCEPTIONAL.',
    contact_us_lower: 'Contact us',
    
    // About Section
    about_title: 'Your Trusted Fencing Partner',
    about_subtitle: 'Experience & Excellence',
    about_description: 'With years of experience in the Ottawa-Gatineau region, we specialize in custom fence installations, repairs, and maintenance.',
    for_four_years: 'For four years,',
    choice_of_choice: 'Clôture Plante has established itself as the choice of choice.',
    since_then: 'Since then, with the support of our customers and dedicated staff, we have continued to grow and innovate, always putting quality and customer satisfaction first.',
    
    // Services Section
    services_title: 'Our Services',
    services_subtitle: 'Comprehensive Fencing Solutions',
    residential_commercial: 'Residential and commercial',
    fence_repair: 'Fence straightening and repair',
    temporary_rental: 'Temporary fence rental',
    custom_agricultural: 'Custom-made agricultural fencing',
    
    // Discover Section
    discover_title: 'Discover Our Work',
    discover_subtitle: 'Quality Projects',
    discover_ideal: 'DISCOVER THE<br />IDEAL FENCE FOR YOUR SPACE!',
    
    // Secure Section
    secure_title: 'Secure Your Property',
    secure_subtitle: 'Professional Security Solutions',
    secure_beautify: 'Secure and beautify your land',
    secure_desc: 'At Clôture Plante, we aim to secure homes, yards, and businesses with style and reliability. Our team is dedicated to bringing you a sturdy and aesthetic fence solution.',
    let_us_help: 'Let us help transform your property!',
    project_passion: 'Your project, our passion. Together, let\'s shape your space.',
    
    // Testimonials Section
    testimonials_title: 'What Our Clients Say',
    testimonials_subtitle: 'Customer Satisfaction',
    customers_opinions: 'OUR CUSTOMERS\' OPINIONS',
    read_more: 'Read more',
    read_less: 'Read less',
    
    // Service Areas Section
    service_areas_title: 'Service Areas',
    service_areas_subtitle: 'Ottawa-Gatineau Region',
    service: 'Service',
    areas: 'areas',
    expertise_desc: 'Our expertise extends to the Ottawa and Gatineau regions, ensuring complete coverage for all your fence installation needs.',
    
    // Fences and Railings Section
    fences_railings_title: 'Fences and Railings',
    fences_railings_subtitle: 'Custom Solutions',
    fences_railings: 'FENCES AND RAILINGS',
    fences: 'Fences',
    fences_desc: 'Ornamental, Privacy, Pool, Chain Link, Custom (Commercial/Residential)',
    ramps: 'Ramps',
    ramps_desc: 'Custom ramps and accessibility solutions',
    fencing_and_railings: 'Fencing and railings',
    organization_equipment: 'Impeccable organization and state-of-the-art equipment for rapid installation.',
    warranty_materials: '15-year warranty on materials, for lasting peace of mind.',
    wide_range_styles: 'A wide range of styles to satisfy all aesthetic preferences.',
    expert_advice: 'Expert advice for harmonizing safety and design.',
    best_choice: 'PLANT FENCE: YOUR BEST CHOICE',
    more_than_installation: 'We offer more than just installation.',
    close_style: 'CLOSE IN STYLE',
    first_step: 'Take the first step towards transformation',
    ready_transform: 'Ready to transform your outdoor space?',
    cloture_dream: 'Clôture Plante in Ottawa and Gatineau is here to create the space you\'ve always dreamed of. Contact us now for a free quote!',
    thank_you: 'Thank you for contacting us!<br />We will get back to you soon.',
    name: 'Name : *',
    email: 'E-mail : *',
    phone: 'Phone : *',
    message: 'Message:',
    send: 'Send',
    make_appointment: 'Make an appointment',
    expertise_delivered: 'EXPERTISE DELIVERED STRAIGHT TO YOUR DOOR',
    free_service: 'Take advantage of this free, personalized service to bring your projects to life with precision and creativity. Our expert will visit your home to assess your needs, at your convenience, lasting approximately one hour.',
    book_consultation: 'Book your free consultation now!',
    ramp: 'RAMP',
    contour_title: 'Contour (for patio and terrace)',
    contour_desc: 'Safety and aesthetics at every step. These railings not only enhance the safety of your outdoor spaces, but also add considerable aesthetic value, blending perfectly with the architecture of your home.',
    aluminum_title: 'Aluminum ramp',
    aluminum_desc: 'Lightweight and durable for your comfort. The perfect combination of strength and lightness, these railings are designed to last without requiring intensive maintenance, while offering a stylish finish that complements any exterior design.',
    custom_agriculture: 'Custom Agriculture Fencing',
    agriculture_desc: 'Professional fencing solutions designed specifically for agricultural needs',
    security_tailor: 'WHEN SECURITY MEETS TAILOR-MADE',
    located_heart: 'Located in the heart of Ottawa and Gatineau, Clôture Plante stands out for its expertise in custom agricultural fencing.',
    whether_need: 'Whether you need to protect your crops, safely raise your livestock, or delineate your property, our customized solutions meet every specific need.',
    external_signature: 'YOUR EXTERNAL SIGNATURE',
    hiring_expert: 'Hiring an expert for your fences and railings guarantees compliance with safety standards and harmony with the aesthetics of your property.',
    cloture_enhances: 'Clôture Plante in Ottawa and Gatineau enhances your spaces with custom fences and railings, combining safety and aesthetics.',
    fences: 'FENCES',
    ornamental: 'Ornamental',
    ornamental_desc: 'Elegance at the service of your privacy. Perfect for those looking to add a distinct touch of elegance to their outdoor space, while preserving their privacy in style.',
    composite: 'Composite',
    composite_desc: 'Robustness and design for a contemporary exterior. Ideal for lovers of modernity, this fence combines exceptional durability and modern aesthetics, withstanding the harshest weather conditions.',
    panoramic: 'Panoramic with Spigot',
    panoramic_desc: 'Luxury and clarity for an uninterrupted panorama. Designed for those who don\'t want to compromise on views, this fence adds a touch of luxury to your property while ensuring security.',
    mesh: 'Mesh',
    mesh_desc: 'Discreet security for every space. The ideal solution for securing without adding visual clutter. This fence is perfect for gardens, playgrounds, or around pools, providing protection while remaining virtually invisible.',
    crystal: 'Crystal/Contour Crystal',
    crystal_desc: 'Transparency and brightness, a cutting edge choice. Offers an unobstructed view of your garden or landscape, bringing a bright and airy look to your space, while ensuring optimal security.',
    farmland_excellence: 'YOUR FARMLAND DESERVES EXCELLENCE.',
    
    // Gallery Section
    portfolio_perfection: 'A PORTFOLIO OF PERFECTION',
    gallery_desc: 'Explore Clôture Plante\'s gallery to get inspired by the most beautiful fence and railing installations in Ottawa and Gatineau. Each project reflects our commitment to excellence!',
    see_expertise: 'See the extent of our expertise.',
    click_to_close: 'Click to close',
    
    // Fence Installation Service
    fenceInstallationHeroSubtitle: 'PLANT FENCE',
    fenceInstallationHeroTitle: 'Professional Fence Installation',
    closeInStyleTitle: 'Close in Style',
    closeInStyleDescription1: 'Transform your property with our professional fence installation services. We specialize in creating beautiful, durable fences that enhance your home\'s security and curb appeal.',
    closeInStyleDescription2: 'Our expert team uses premium materials and proven techniques to ensure your fence stands the test of time while providing the protection and privacy you deserve.',
    fortressTitle: 'Your Fortress',
    plantFencePromiseTitle: 'The Plant Fence Promise',
    temperedGlassExpertise: 'Tempered Glass Expertise',
    varietyProducts: 'Variety of Products',
    experiencedTeam: 'Experienced Team',
    qualityCommitment: 'Quality Commitment',
    customSolutions: 'Custom Solutions',
    get_started: 'Get Started',
    commitmentTitle: 'Our Commitment',
    commitmentDescription1: 'At Plant Fence, we are committed to delivering exceptional fence installation services that exceed your expectations. Our team of skilled professionals brings years of experience and dedication to every project.',
    commitmentDescription2: 'We use only the highest quality materials and follow industry best practices to ensure your fence is not only beautiful but also built to last. Your satisfaction is our top priority.',
    projectShowcaseTitle: 'Project Showcase',
    
    // Fence Straightening and Repair Service
    fenceStraighteningHeroSubtitle: 'PLANT FENCE',
    fenceStraighteningHeroTitle: 'Fence Straightening and Repair',
    restoreStrengthTitle: 'Restore Strength and Beauty',
    restoreStrengthDescription1: 'Our expert team specializes in restoring damaged and leaning fences to their original strength and beauty. We use advanced techniques and quality materials to ensure your fence stands tall and secure.',
    restoreStrengthDescription2: 'Whether your fence has been damaged by weather, age, or accidents, our comprehensive repair services will bring it back to life with enhanced durability and aesthetic appeal.',
    fenceLikeNewTitle: 'A Fence Like New',
    choosingTeamTitle: 'Why Choose Our Team',
    executionSpeed: 'Execution Speed',
    expertTeam: 'Expert Team',
    organizedStructure: 'Organized Structure',
    fastDelivery: 'Fast Delivery',
    fifteenYearGuarantee: '15-Year Guarantee',
    unrivaledServiceTitle: 'Unrivaled Service',
    unrivaledServiceDescription1: 'At Plant Fence, we pride ourselves on providing unrivaled fence straightening and repair services. Our team combines years of experience with cutting-edge techniques to deliver results that exceed expectations.',
    unrivaledServiceDescription2: 'We understand that a damaged fence can compromise your property\'s security and curb appeal. That\'s why we work diligently to restore your fence to its optimal condition, ensuring it provides the protection and beauty your property deserves.',
    
    // Temporary Fence Rental Service
    temporaryFenceRentalHeroSubtitle: 'PLANT FENCE',
    temporaryFenceRentalHeroTitle: 'Temporary Fence Rental',
    solutionAdaptedTitle: 'Our Solution Adapted to Your Project',
    solutionAdaptedDescription1: 'We provide flexible temporary fence rental solutions tailored to your specific project needs. Whether you need security for a construction site, event venue, or temporary property protection, our fences are designed to meet your requirements.',
    solutionAdaptedDescription2: 'Our temporary fences are built with durability and ease of installation in mind. We offer quick setup and removal services, ensuring your project timeline is never compromised while maintaining the highest standards of security and safety.',
    contactInfoMessage: 'Ready to secure your project? Contact us today for a customized temporary fence rental solution that fits your needs and budget.',
    
    // Footer
    footer_description: 'Professional fencing services in Ottawa-Gatineau.',
    service_areas: 'Service Areas',
    ottawa: 'Ottawa',
    gatineau: 'Gatineau',
    business_hours: 'Business Hours',
    monday_friday: 'Monday - Friday: 8:00 AM - 6:00 PM',
    saturday: 'Saturday: 9:00 AM - 4:00 PM',
    sunday: 'Sunday: Closed',
    follow_us: 'Follow Us',
    all_rights_reserved: 'All rights reserved.',
    privacy_policy: 'Privacy Policy',
    terms_of_service: 'Terms of Service',
    opening_hours: 'Opening hours',
    address_value: '456, 1st Saint Street<br />Ottawa, ON K1A 2B3',
    phone_value: '+1 514 123 4567',
    email_value: 'info@clotureplante.com',
    areas_value: 'Ottawa, Gatineau',
    hours_value: 'Mon-Fri: 8am - 6pm<br />Sat: 9am - 2pm',
    copyright: '© 2025 All rights reserved | Privacy Policy | Plan | Web: Created by ABCD Agency'
  },
  FR: {
    // Header
    home: 'Accueil',
    services: 'Services',
    gallery: 'Galerie',
    contact: 'Contact',
    appointment: 'Rendez-vous',
    fence_installation: 'Installation de clôture',
    fence_straightening_repair: 'Redressement et réparation de clôture',
    temporary_fence_rental: 'Location de clôture temporaire',
    custom_agricultural_fencing: 'Clôtures agricoles personnalisées',
    fencing_railings: 'Clôtures et garde-corps',
    
    // Hero Section
    plant_fence: 'CLÔTURE PLANTE',
    hero_title: 'Solutions de Clôture Professionnelles',
    hero_subtitle: 'Qualité et Fiabilité',
    hero_description: 'Services d\'installation et de réparation de clôtures experts à Ottawa-Gatineau.',
    get_free_quote: 'Obtenir un Devis Gratuit',
    contact_us: 'CONTACTEZ-NOUS',
    
    // Features Section
    features_title: 'Pourquoi Nous Choisir',
    features_subtitle: 'Excellence dans Chaque Détail',
    art_of_enclosing: 'L\'ART D\'ENCLORE VOS ESPACES',
    elegance_touch: 'Vous cherchez une touche d\'élégance pour encadrer votre maison ?',
    cloture_plante_desc: 'Chez Clôture Plante, nous comprenons l\'importance de sélectionner un espace extérieur qui reflète votre personnalité. Spécialisés dans l\'installation de clôtures haut de gamme à Ottawa et Gatineau, nous offrons une gamme diversifiée de solutions, conçues pour transformer votre propriété en un havre de paix.',
    vision_expertise: 'VOTRE VISION, NOTRE EXPERTISE.\nENSEMBLE, CRÉONS L\'EXCEPTIONNEL.',
    contact_us_lower: 'Contactez-nous',
    
    // About Section
    about_title: 'Votre Partenaire de Confiance',
    about_subtitle: 'Expérience et Excellence',
    about_description: 'Avec des années d\'expérience dans la région d\'Ottawa-Gatineau.',
    for_four_years: 'Depuis quatre ans,',
    choice_of_choice: 'Clôture Plante s\'est établie comme le choix de prédilection.',
    since_then: 'Depuis lors, avec le soutien de nos clients et de notre personnel dévoué, nous avons continué à grandir et à innover, en mettant toujours la qualité et la satisfaction client en premier.',
    
    // Services Section
    services_title: 'Nos Services',
    services_subtitle: 'Solutions de Clôture Complètes',
    residential_commercial: 'Résidentiel et commercial',
    fence_repair: 'Redressement et réparation de clôtures',
    temporary_rental: 'Location de clôtures temporaires',
    custom_agricultural: 'Clôtures agricoles personnalisées',
    
    // Discover Section
    discover_title: 'Découvrez Notre Travail',
    discover_subtitle: 'Projets de Qualité',
    discover_ideal: 'DÉCOUVREZ LA<br />CLÔTURE IDÉALE POUR VOTRE ESPACE !',
    
    // Secure Section
    secure_title: 'Sécurisez Votre Propriété',
    secure_subtitle: 'Solutions de Sécurité Professionnelles',
    secure_beautify: 'Sécurisez et embellissez votre terrain',
    secure_desc: 'Chez Clôture Plante, nous visons à sécuriser les maisons, les cours et les entreprises avec style et fiabilité. Notre équipe se consacre à vous apporter une solution de clôture robuste et esthétique.',
    let_us_help: 'Laissez-nous vous aider à transformer votre propriété !',
    project_passion: 'Votre projet, notre passion. Ensemble, façonnons votre espace.',
    
    // Testimonials Section
    testimonials_title: 'Ce que Disent Nos Clients',
    testimonials_subtitle: 'Satisfaction Client',
    customers_opinions: 'AVIS DE NOS CLIENTS',
    read_more: 'Lire plus',
    read_less: 'Lire moins',
    
    // Service Areas Section
    service_areas_title: 'Zones de Service',
    service_areas_subtitle: 'Région d\'Ottawa-Gatineau',
    service: 'Zones de',
    areas: 'service',
    expertise_desc: 'Notre expertise s\'étend aux régions d\'Ottawa et de Gatineau, assurant une couverture complète pour tous vos besoins d\'installation de clôtures.',
    
    // Fences and Railings Section
    fences_railings_title: 'Clôtures et Garde-corps',
    fences_railings_subtitle: 'Solutions Personnalisées',
    fences_railings: 'CLÔTURES ET GARDE-CORPS',
    fences: 'Clôtures',
    fences_desc: 'Ornementales, Intimité, Piscine, Mailles de chaîne, Personnalisées (Commercial/Résidentiel)',
    ramps: 'Rampes',
    ramps_desc: 'Rampes personnalisées et solutions d\'accessibilité',
    fencing_and_railings: 'Clôtures et garde-corps',
    organization_equipment: 'Organisation impeccable et équipement de pointe pour une installation rapide.',
    warranty_materials: 'Garantie de 15 ans sur les matériaux, pour une tranquillité d\'esprit durable.',
    wide_range_styles: 'Une large gamme de styles pour satisfaire toutes les préférences esthétiques.',
    expert_advice: 'Conseils d\'experts pour harmoniser sécurité et design.',
    best_choice: 'CLÔTURE PLANTE : VOTRE MEILLEUR CHOIX',
    more_than_installation: 'Nous offrons plus que l\'installation.',
    close_style: 'FERMEZ EN STYLE',
    first_step: 'Faites le premier pas vers la transformation',
    ready_transform: 'Prêt à transformer votre espace extérieur ?',
    cloture_dream: 'Clôture Plante à Ottawa et Gatineau est là pour créer l\'espace dont vous avez toujours rêvé. Contactez-nous maintenant pour un devis gratuit !',
    make_appointment: 'Prendre un rendez-vous',
    expertise_delivered: 'EXPERTISE LIVRÉE DIRECTEMENT À VOTRE PORTE',
    free_service: 'Profitez de ce service gratuit et personnalisé pour donner vie à vos projets avec précision et créativité. Notre expert se rendra chez vous pour évaluer vos besoins, à votre convenance, d\'une durée d\'environ une heure.',
    book_consultation: 'Réservez votre consultation gratuite maintenant !',
    ramp: 'RAMPE',
    contour_title: 'Contour (pour patio et terrasse)',
    contour_desc: 'Sécurité et esthétique à chaque pas. Ces garde-corps n\'améliorent pas seulement la sécurité de vos espaces extérieurs, mais ajoutent aussi une valeur esthétique considérable, s\'intégrant parfaitement à l\'architecture de votre maison.',
    aluminum_title: 'Rampe en aluminium',
    aluminum_desc: 'Légère et durable pour votre confort. La combinaison parfaite de solidité et de légèreté, ces garde-corps sont conçus pour durer sans nécessiter d\'entretien intensif, tout en offrant une finition élégante qui complète n\'importe quel design extérieur.',
    custom_agriculture: 'Clôtures Agricoles Personnalisées',
    agriculture_desc: 'Solutions de clôtures professionnelles conçues spécifiquement pour les besoins agricoles',
    security_tailor: 'QUAND LA SÉCURITÉ RENCONTRE LE SUR-MESURE',
    located_heart: 'Située au cœur d\'Ottawa et de Gatineau, Clôture Plante se distingue par son expertise en clôtures agricoles personnalisées.',
    whether_need: 'Que vous ayez besoin de protéger vos cultures, d\'élever en toute sécurité votre bétail ou de délimiter votre propriété, nos solutions personnalisées répondent à chaque besoin spécifique.',
    external_signature: 'VOTRE SIGNATURE EXTÉRIEURE',
    hiring_expert: 'Engager un expert pour vos clôtures et garde-corps garantit le respect des normes de sécurité et l\'harmonie avec l\'esthétique de votre propriété.',
    cloture_enhances: 'Clôture Plante à Ottawa et Gatineau améliore vos espaces avec des clôtures et garde-corps personnalisés, combinant sécurité et esthétique.',
    fences: 'CLÔTURES',
    ornamental: 'Ornementale',
    ornamental_desc: 'L\'élégance au service de votre intimité. Parfaite pour ceux qui cherchent à ajouter une touche d\'élégance distincte à leur espace extérieur, tout en préservant leur intimité avec style.',
    composite: 'Composite',
    composite_desc: 'Robustesse et design pour un extérieur contemporain. Idéale pour les amateurs de modernité, cette clôture combine durabilité exceptionnelle et esthétique moderne, résistant aux conditions météorologiques les plus difficiles.',
    panoramic: 'Panoramique avec Gouttière',
    panoramic_desc: 'Luxe et clarté pour un panorama ininterrompu. Conçue pour ceux qui ne veulent pas compromettre les vues, cette clôture ajoute une touche de luxe à votre propriété tout en assurant la sécurité.',
    mesh: 'Mailles',
    mesh_desc: 'Sécurité discrète pour chaque espace. La solution idéale pour sécuriser sans ajouter d\'encombrement visuel. Cette clôture est parfaite pour les jardins, terrains de jeux ou autour des piscines, offrant une protection tout en restant pratiquement invisible.',
    crystal: 'Cristal/Contour Cristal',
    crystal_desc: 'Transparence et luminosité, un choix de pointe. Offre une vue dégagée de votre jardin ou paysage, apportant un look lumineux et aéré à votre espace, tout en assurant une sécurité optimale.',
    farmland_excellence: 'VOTRE TERRAIN AGRICOLE MÉRITE L\'EXCELLENCE.',
    
    // Gallery Section
    portfolio_perfection: 'UN PORTEFEUILLE DE PERFECTION',
    gallery_desc: 'Explorez la galerie de Clôture Plante pour vous inspirer des plus belles installations de clôtures et garde-corps à Ottawa et Gatineau. Chaque projet reflète notre engagement envers l\'excellence !',
    see_expertise: 'Voyez l\'étendue de notre expertise.',
    click_to_close: 'Cliquez pour fermer',
    
    // Fence Installation Service
    fenceInstallationHeroSubtitle: 'CLÔTURE PLANTE',
    fenceInstallationHeroTitle: 'Installation de Clôture Professionnelle',
    closeInStyleTitle: 'Clôturez avec Style',
    closeInStyleDescription1: 'Transformez votre propriété avec nos services d\'installation de clôtures professionnelles. Nous nous spécialisons dans la création de clôtures belles et durables qui améliorent la sécurité et l\'apparence de votre maison.',
    closeInStyleDescription2: 'Notre équipe d\'experts utilise des matériaux de première qualité et des techniques éprouvées pour garantir que votre clôture résiste à l\'épreuve du temps tout en offrant la protection et l\'intimité que vous méritez.',
    fortressTitle: 'Votre Forteresse',
    plantFencePromiseTitle: 'La Promesse de Clôture Plante',
    temperedGlassExpertise: 'Expertise en Verre Trempé',
    varietyProducts: 'Variété de Produits',
    experiencedTeam: 'Équipe Expérimentée',
    qualityCommitment: 'Engagement Qualité',
    customSolutions: 'Solutions Personnalisées',
    get_started: 'Commencer',
    commitmentTitle: 'Notre Engagement',
    commitmentDescription1: 'Chez Clôture Plante, nous nous engageons à fournir des services d\'installation de clôtures exceptionnels qui dépassent vos attentes. Notre équipe de professionnels qualifiés apporte des années d\'expérience et de dévouement à chaque projet.',
    commitmentDescription2: 'Nous utilisons uniquement les matériaux de la plus haute qualité et suivons les meilleures pratiques de l\'industrie pour garantir que votre clôture est non seulement belle mais aussi construite pour durer. Votre satisfaction est notre priorité absolue.',
    projectShowcaseTitle: 'Galerie de Projets',
    
    // Fence Straightening and Repair Service
    fenceStraighteningHeroSubtitle: 'CLÔTURE PLANTE',
    fenceStraighteningHeroTitle: 'Redressement et Réparation de Clôture',
    restoreStrengthTitle: 'Restaurer la Force et la Beauté',
    restoreStrengthDescription1: 'Notre équipe d\'experts se spécialise dans la restauration des clôtures endommagées et penchées à leur force et beauté originales. Nous utilisons des techniques avancées et des matériaux de qualité pour garantir que votre clôture reste droite et sécurisée.',
    restoreStrengthDescription2: 'Que votre clôture ait été endommagée par la météo, l\'âge ou des accidents, nos services de réparation complets la ramèneront à la vie avec une durabilité et un attrait esthétique améliorés.',
    fenceLikeNewTitle: 'Une Clôture Comme Neuve',
    choosingTeamTitle: 'Pourquoi Choisir Notre Équipe',
    executionSpeed: 'Vitesse d\'Exécution',
    expertTeam: 'Équipe d\'Experts',
    organizedStructure: 'Structure Organisée',
    fastDelivery: 'Livraison Rapide',
    fifteenYearGuarantee: 'Garantie de 15 Ans',
    unrivaledServiceTitle: 'Service Inégalé',
    unrivaledServiceDescription1: 'Chez Clôture Plante, nous sommes fiers de fournir des services de redressement et de réparation de clôtures inégalés. Notre équipe combine des années d\'expérience avec des techniques de pointe pour livrer des résultats qui dépassent les attentes.',
    unrivaledServiceDescription2: 'Nous comprenons qu\'une clôture endommagée peut compromettre la sécurité et l\'apparence de votre propriété. C\'est pourquoi nous travaillons diligemment pour restaurer votre clôture à son état optimal, garantissant qu\'elle offre la protection et la beauté que votre propriété mérite.',
    
    // Temporary Fence Rental Service
    temporaryFenceRentalHeroSubtitle: 'CLÔTURE PLANTE',
    temporaryFenceRentalHeroTitle: 'Location de Clôture Temporaire',
    solutionAdaptedTitle: 'Notre Solution Adaptée à Votre Projet',
    solutionAdaptedDescription1: 'Nous fournissons des solutions de location de clôtures temporaires flexibles adaptées à vos besoins de projet spécifiques. Que vous ayez besoin de sécurité pour un chantier de construction, un lieu d\'événement ou une protection temporaire de propriété, nos clôtures sont conçues pour répondre à vos exigences.',
    solutionAdaptedDescription2: 'Nos clôtures temporaires sont construites avec la durabilité et la facilité d\'installation à l\'esprit. Nous offrons des services d\'installation et de retrait rapides, garantissant que votre calendrier de projet n\'est jamais compromis tout en maintenant les plus hauts standards de sécurité et de sûreté.',
    contactInfoMessage: 'Prêt à sécuriser votre projet? Contactez-nous aujourd\'hui pour une solution de location de clôture temporaire personnalisée qui correspond à vos besoins et à votre budget.',
    
    // Footer
    footer_description: 'Services de clôture professionnels à Ottawa-Gatineau.',
    service_areas: 'Zones de Service',
    ottawa: 'Ottawa',
    gatineau: 'Gatineau',
    business_hours: 'Heures d\'Ouverture',
    monday_friday: 'Lundi - Vendredi: 8h00 - 18h00',
    saturday: 'Samedi: 9h00 - 16h00',
    sunday: 'Dimanche: Fermé',
    follow_us: 'Suivez-nous',
    all_rights_reserved: 'Tous droits réservés.',
    privacy_policy: 'Politique de Confidentialité',
    terms_of_service: 'Conditions d\'Utilisation',
    phone: 'Téléphone',
    email: 'E-mail',
    opening_hours: 'Heures d\'ouverture',
    address_value: '456, 1re Rue Saint<br />Ottawa, ON K1A 2B3',
    phone_value: '+1 514 123 4567',
    email_value: 'info@clotureplante.com',
    areas_value: 'Ottawa, Gatineau',
    hours_value: 'Lun-Ven: 8h - 18h<br />Sam: 9h - 14h',
    copyright: '© 2025 Tous droits réservés | Politique de confidentialité | Plan | Web: Créé par ABCD Agency'
  }
};

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('language') || 'EN';
  });

  const t = (key) => {
    return translations[language]?.[key] || key;
  };

  const value = {
    language,
    setLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}; 