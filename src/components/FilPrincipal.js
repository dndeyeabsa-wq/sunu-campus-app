import React, { useState } from 'react';
import './FilPrincipal.css';
import DonCoursImg1 from '../assets/illustrations/don_cours_1.png';
import VenteEtudiantImg from '../assets/illustrations/vente_prix_1.png';
import ServiceCompetenceImg from '../assets/illustrations/service_competence_1.png';
import VenteFoodImg from '../assets/illustrations/nike.png';
import VenteSacImg from '../assets/illustrations/sac.png';

function FilPrincipal({ user }) {
  const [activeFilter, setActiveFilter] = useState('all');

  // Association catégorie → image
  const categoryImages = {
    don: DonCoursImg1,
    vente: VenteEtudiantImg,
    service: ServiceCompetenceImg,
    ventsac: VenteSacImg,
    ventfood: VenteFoodImg
  };

  const annonces = [
    {
      id: 1,
      type: 'don',
      title: 'Livre Analyse Mathématique L2',
      price: 'GRATUIT',
      user: 'Fatou D.',
      location: 'Pavillon A',
      distance: '200m',
      time: '2h',
      category: 'don'
    },
    {
      id: 2,
      type: 'vente',
      title: 'Mini Frigo',
      price: '15 000 FCFA',
      user: 'Moussa S.',
      location: 'Campus',
      distance: '500m',
      time: '5h',
      category: 'vente'
    },
    {
      id: 3,
      type: 'don',
      title: 'Sac à dos Eastpak',
      price: 'GRATUIT',
      user: 'Awa M.',
      location: 'Pavillon B',
      distance: '300m',
      time: '1h',
      category: 'ventsac'
    },
    {
      id: 4,
      type: 'vente',
      title: 'Baskets Nike (Taille 42)',
      price: '5 000 FCFA',
      user: 'Ibrahima K.',
      location: 'Résidence',
      distance: '1km',
      time: '3h',
      category: 'ventfood'
    },
    {
      id: 5,
      type: 'service',
      title: 'Cours de programmation JS',
      price: '5 000 FCFA / h',
      user: 'Seynabou T.',
      location: 'Campus',
      distance: '100m',
      time: '30min',
      category: 'service'
    }
  ];

  const filteredAnnonces = activeFilter === 'all'
    ? annonces
    : annonces.filter(a => a.category === activeFilter);

  return (
    <div className="fil-principal">
      <div className="welcome-banner">
        <h2>Bienvenue sur SUNU CAMPUS</h2>
        <p>Découvre ce que ton campus a à offrir</p>
      </div>

      <div className="category-filters">
        {['don', 'vente', 'service'].map(cat => (
          <div 
            key={cat}
            className={`filter-card ${activeFilter === cat ? 'active ' + cat : ''}`}
            onClick={() => setActiveFilter(cat)}
          >
            <h3>
              {cat === 'don' ? 'Dons de Cours & Livres' :
               cat === 'vente' ? 'Ventes à prix étudiant' :
               'Services & Compétences'}
            </h3>
            <div className="filter-illustration">
              <img src={categoryImages[cat]} alt={cat} />
            </div>
          </div>
        ))}
      </div>

      {activeFilter !== 'all' && (
        <button 
          className="clear-filter"
          onClick={() => setActiveFilter('all')}
        >
          ✕ Voir tout
        </button>
      )}

      <div className="annonces-list">
        <h3 className="section-title">
          {activeFilter === 'all' ? 'Toutes les annonces' : 
           activeFilter === 'don' ? 'Dons disponibles' :
           activeFilter === 'vente' ? 'À vendre' : 'Services'}
        </h3>
        
        {filteredAnnonces.map(annonce => (
          <div key={annonce.id} className="annonce-card">
            <div className="annonce-image">
              <img src={categoryImages[annonce.category]} alt={annonce.title} />
            </div>
            <div className="annonce-content">
              <h4>{annonce.title}</h4>
              <p className={`annonce-price ${annonce.type}`}>
                {annonce.price} • {annonce.type === 'don' ? 'Don' : annonce.type === 'vente' ? 'Vente' : 'Service'}
              </p>
              <div className="annonce-meta">
                <span>👤 {annonce.user}</span>
                <span>📍 {annonce.distance}</span>
                <span>🕐 {annonce.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilPrincipal;