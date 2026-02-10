import React, { useState } from 'react';
import { Zap, Clock } from 'lucide-react';
import './BoostVisibilite.css';

function BoostVisibilite({ user, onPayer }) {
  const [selectedBoost, setSelectedBoost] = useState(null);

  const boostOptions = [
    {
      id: 1,
      icon: '⚡',
      title: 'Boost 24h',
      price: '500 FCFA',
      amount: 500,
      description: 'Annonce en top pendant 24h',
      duration: '24h',
      color: '#FFB400'
    },
    {
      id: 2,
      icon: '🔥',
      title: 'Boost 7 Jours',
      price: '2 000 FCFA',
      amount: 2000,
      description: 'Visibilité maximum 7 jours',
      duration: '7 jours',
      color: '#FF9800',
      popular: true
    },
    {
      id: 3,
      icon: '💎',
      title: 'Abonnement Mensuel',
      price: '5 000 FCFA',
      amount: 5000,
      description: 'Boost illimité pendant 30 jours',
      duration: '30 jours',
      color: '#2E7D32'
    }
  ];

  return (
    <div className="boost-container">
      <div className="boost-header">
        <Zap size={40} color="#FF9800" />
        <h2>Booster Ma Visibilité</h2>
        <p>Mets ton annonce en avant et touche plus d'étudiants</p>
      </div>

      <div className="boost-options">
        {boostOptions.map(boost => (
          <div 
            key={boost.id} 
            className={`boost-card ${selectedBoost === boost.id ? 'selected' : ''}`}
            onClick={() => setSelectedBoost(boost.id)}
          >
            {boost.popular && <div className="popular-badge">Plus Populaire</div>}
            
            <div className="boost-icon" style={{ color: boost.color }}>
              {boost.icon}
            </div>
            
            <h3>{boost.title}</h3>
            <p className="boost-price">{boost.price}</p>
            <p className="boost-description">{boost.description}</p>
            
            <div className="boost-duration">
              <Clock size={16} />
              <span>{boost.duration}</span>
            </div>
          </div>
        ))}
      </div>

      {selectedBoost && (
        <button
          className="btn-confirm-boost"
          onClick={() => {
            const boost = boostOptions.find(b => b.id === selectedBoost);
            onPayer(boost.amount);
          }}
        >
          Choisir ce boost
        </button>
      )}

      <div className="boost-benefits">
        <h3>✨ Avantages du Boost</h3>
        <ul>
          <li>📍 Position prioritaire dans le fil</li>
          <li>👀 +300% de visibilité moyenne</li>
          <li>⚡ Réponses plus rapides</li>
          <li>📊 Statistiques détaillées</li>
        </ul>
      </div>
    </div>
  );
}

export default BoostVisibilite;