// src/components/RechercheLogement.jsx

import React, { useState } from 'react';
import { Home, MapPin, DollarSign, Users, Heart, Star, Zap } from 'lucide-react';
import './RechercheLogement.css';
import Col1 from '../assets/col1.png';
import Col2 from '../assets/col2.png';
import Col3 from '../assets/col3.png';
import AichaImg from '../assets/pers1.png';
import KhadyImg from '../assets/pers3.png';

function RechercheLogement({ user }) {
  const [budget, setBudget] = useState([0, 100000]);
  const [typeLogement, setTypeLogement] = useState('all');
  const [preferences, setPreferences] = useState({
    fumeur: false,
    animaux: false,
    calme: true,
    etudeMath: false
  });

  const logements = [
    {
      id: 1,
      type: 'Colocation',
      titre: 'Chambre dans Villa à Keur Gorgui',
      prix: 45000,
      pieces: 4,
      colocataires: 2,
      distance: '5km de l\'UCAD',
      disponible: 'Immédiatement',
      image: Col1,
      proprietaire: {
        nom: 'Fatou Sall',
        note: 4.8,
        verifiee: true
      },
      caracteristiques: ['WiFi', 'Cuisine équipée', 'Calme', 'Proche commerce'],
      matchScore: 95
    },
    {
      id: 2,
      type: 'Studio',
      titre: 'Studio meublé Mermoz',
      prix: 80000,
      pieces: 1,
      colocataires: 0,
      distance: '10km de l\'UCAD',
      disponible: '1er Mars',
      image: Col2,
      proprietaire: {
        nom: 'Mamadou Diop',
        note: 4.5,
        verifiee: true
      },
      caracteristiques: ['Meublé', 'Clim', 'Parking', 'Sécurisé'],
      matchScore: 78
    },
    {
      id: 3,
      type: 'Colocation',
      titre: 'Chambre Pavillon Cité Universitaire',
      prix: 25000,
      pieces: 2,
      colocataires: 1,
      distance: 'Sur le campus',
      disponible: 'Immédiatement',
      image: Col3,
      proprietaire: {
        nom: 'Awa Diagne',
        note: 4.9,
        verifiee: true
      },
      caracteristiques: ['Sur campus', 'Économique', 'Bibliothèque proche'],
      matchScore: 88
    }
  ];

  <img src={logements.image} alt={logements.titre} />

  const [savedLogements, setSavedLogements] = useState([]);

  const toggleSave = (id) => {
    setSavedLogements(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="logement-container">
      {/* Hero Section avec recherche intelligente */}
      <div className="logement-hero">
        <div className="hero-content">
          <h1>🏠 Trouve Ton Logement Idéal</h1>
          <p>Colocation intelligente avec matching de compatibilité</p>
        </div>
        
        <div className="search-box-advanced">
          <div className="search-input-wrapper">
            <MapPin size={20} color="#FF9800" />
            <input 
              type="text" 
              placeholder="Quartier ou proximité campus..."
              className="search-input-main"
            />
          </div>
          <button className="btn-search">
            <Zap size={20} />
            Recherche Intelligente
          </button>
        </div>
      </div>

      {/* Filtres avancés */}
      <div className="filters-section">
        <div className="filter-tabs">
          <button 
            className={typeLogement === 'all' ? 'active' : ''}
            onClick={() => setTypeLogement('all')}
          >
            Tous
          </button>
          <button 
            className={typeLogement === 'colocation' ? 'active' : ''}
            onClick={() => setTypeLogement('colocation')}
          >
            Colocation
          </button>
          <button 
            className={typeLogement === 'studio' ? 'active' : ''}
            onClick={() => setTypeLogement('studio')}
          >
            Studio
          </button>
          <button 
            className={typeLogement === 'chambre' ? 'active' : ''}
            onClick={() => setTypeLogement('chambre')}
          >
            Chambre
          </button>
        </div>

        <div className="budget-slider">
          <label>💰 Budget mensuel</label>
          <div className="slider-values">
            <span>{budget[0].toLocaleString()} FCFA</span>
            <span>{budget[1].toLocaleString()} FCFA</span>
          </div>
          <input 
            type="range" 
            min="0" 
            max="150000" 
            step="5000"
            value={budget[1]}
            onChange={(e) => setBudget([budget[0], parseInt(e.target.value)])}
            className="budget-range"
          />
        </div>

        {/* Préférences de colocation */}
        <div className="preferences-section">
          <h3>🎯 Mes préférences de colocation</h3>
          <div className="preferences-grid">
            <label className="preference-item">
              <input 
                type="checkbox" 
                checked={preferences.calme}
                onChange={(e) => setPreferences({...preferences, calme: e.target.checked})}
              />
              <span>🤫 Ambiance calme</span>
            </label>
            <label className="preference-item">
              <input 
                type="checkbox" 
                checked={preferences.etudeMath}
                onChange={(e) => setPreferences({...preferences, etudeMath: e.target.checked})}
              />
              <span>📚 Étudie beaucoup</span>
            </label>
            <label className="preference-item">
              <input 
                type="checkbox" 
                checked={preferences.fumeur}
                onChange={(e) => setPreferences({...preferences, fumeur: e.target.checked})}
              />
              <span>🚭 Non-fumeur</span>
            </label>
            <label className="preference-item">
              <input 
                type="checkbox" 
                checked={preferences.animaux}
                onChange={(e) => setPreferences({...preferences, animaux: e.target.checked})}
              />
              <span>🐱 Accepte animaux</span>
            </label>
          </div>
        </div>
      </div>

      {/* Liste des logements avec match score */}
      <div className="logements-list">
        <h2>
          {logements.length} logements disponibles
          <span className="results-count">Triés par compatibilité</span>
        </h2>

        {logements.map(logement => (
          <div key={logement.id} className="logement-card-advanced">
            {/* Match Score Badge */}
            <div className="match-badge" style={{
              background: logement.matchScore > 90 ? '#4CAF50' : 
                         logement.matchScore > 75 ? '#FF9800' : '#999'
            }}>
              <Zap size={16} />
              {logement.matchScore}% Match
            </div>

            {/* Bouton Favori */}
            <button 
              className={`btn-favorite ${savedLogements.includes(logement.id) ? 'saved' : ''}`}
              onClick={() => toggleSave(logement.id)}
            >
              <Heart 
                size={24} 
                fill={savedLogements.includes(logement.id) ? '#FF4081' : 'none'}
                color={savedLogements.includes(logement.id) ? '#FF4081' : '#999'}
              />
            </button>

        <div className="logement-image">
          <img 
            src={logement.image} 
            alt={logement.titre} 
            className="logement-img"
          />
          <span className="type-badge">{logement.type}</span>
        </div>

            <div className="logement-content">
              <h3>{logement.titre}</h3>
              
              <div className="logement-price">
                <span className="price-amount">{logement.prix.toLocaleString()} FCFA</span>
                <span className="price-period">/mois</span>
              </div>

              <div className="logement-infos">
                <div className="info-item">
                  <Home size={16} />
                  <span>{logement.pieces} pièce(s)</span>
                </div>
                {logement.colocataires > 0 && (
                  <div className="info-item">
                    <Users size={16} />
                    <span>{logement.colocataires} colocataire(s)</span>
                  </div>
                )}
                <div className="info-item">
                  <MapPin size={16} />
                  <span>{logement.distance}</span>
                </div>
              </div>

              {/* Caractéristiques */}
              <div className="caracteristiques">
                {logement.caracteristiques.slice(0, 3).map((carac, index) => (
                  <span key={index} className="carac-tag">
                    {carac}
                  </span>
                ))}
                {logement.caracteristiques.length > 3 && (
                  <span className="carac-tag more">
                    +{logement.caracteristiques.length - 3}
                  </span>
                )}
              </div>

              {/* Propriétaire */}
              <div className="proprietaire-info">
                <div className="proprio-avatar">
                  {logement.proprietaire.nom.charAt(0)}
                </div>
                <div className="proprio-details">
                  <span className="proprio-nom">
                    {logement.proprietaire.nom}
                    {logement.proprietaire.verifiee && (
                      <span className="verified-badge">✓</span>
                    )}
                  </span>
                  <div className="proprio-rating">
                    <Star size={14} fill="#FFB400" color="#FFB400" />
                    <span>{logement.proprietaire.note}</span>
                  </div>
                </div>
              </div>

              <div className="logement-actions">
                <button className="btn-contact-proprio">
                  💬 Contacter
                </button>
                <button className="btn-visite">
                  📅 Visite virtuelle
                </button>
              </div>

              <p className="disponibilite">
                ⏰ Disponible : <strong>{logement.disponible}</strong>
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Section Matching de colocataires */}

      <div className="matching-section">
        <h2>🤝 Trouve Ton Colocataire Idéal</h2>
        <p>Algorithme de matching basé sur vos préférences et compatibilité</p>
        
        <div className="colocataires-suggestions">
          {[
            {
              nom: 'Aïcha Ndiaye',
              filiere: 'Informatique L3',
              budget: '40-50k FCFA',
              match: 92,

              photo: AichaImg,
              traits: ['🤫 Calme', '📚 Studieuse', '🚭 Non-fumeuse', '🍳 Cuisine bien']
            },
            {
              nom: 'Khady Fall',
              filiere: 'Maths L2',
              budget: '35-45k FCFA',
              match: 88,

              photo: KhadyImg,
              traits: ['🎵 Musique soft', '📖 Lecture', '🧘 Yoga', '🌱 Végétarienne']
            }
          ].map((coloc, index) => (
            <div key={index} className="coloc-card">
              <div className="coloc-match-score">
                {coloc.match}% Match
              </div>
              <div className="coloc-avatar-large">
              <img 
                src={coloc.photo} 
                alt={coloc.nom} 
                className="coloc-photo"
              />
            </div>
                          <h4>{coloc.nom}</h4>
              <p className="coloc-filiere">{coloc.filiere}</p>
              <p className="coloc-budget">Budget: {coloc.budget}</p>
              
              <div className="coloc-traits">
                {coloc.traits.map((trait, i) => (
                  <span key={i} className="trait-tag">{trait}</span>
                ))}
              </div>

              <button className="btn-connect-coloc">
                ⚡ Se connecter
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Publier une annonce */}
      <div className="cta-publier-logement">
        <h3>Tu as un logement à proposer ?</h3>
        <p>Publie ton annonce gratuitement et trouve des colocataires compatibles</p>
        <button className="btn-publier-annonce">
          ➕ Publier mon logement
        </button>
      </div>
    </div>
  );
}

export default RechercheLogement;