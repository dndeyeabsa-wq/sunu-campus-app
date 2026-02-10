import React from 'react';
import { Star, Heart, TrendingUp, Award } from 'lucide-react';
import './ProfilEtudiant.css';
import ProfilImg from '../assets/pers2.png';

function ProfilEtudiant({ user }) {
  return (
    <div className="profil-container">
      <div className="profil-header">
        <div className="profil-avatar">
              <img 
            src={user?.photo || ProfilImg}
            alt={user?.name || 'Photo profil'}
            className="profil-photo"
              />
        </div>
        <h2>{user?.name || 'Ndeye Absa Der'}</h2>
        <p className="profil-university">📍 {user?.university || 'EPT'}</p>
        <div className="profil-rating">
          <Star size={20} fill="#FFB400" color="#FFB400" />
          <Star size={20} fill="#FFB400" color="#FFB400" />
          <Star size={20} fill="#FFB400" color="#FFB400" />
          <Star size={20} fill="#FFB400" color="#FFB400" />
          <Star size={20} fill="#FFB400" color="#FFB400" />
          <span className="rating-price">3 000 FCFA</span>
        </div>
      </div>

      <div className="profil-service">
        <h3>Cours de Mathématiques<br/>& Informatique</h3>
        <button className="btn-boost">Booster ma visibilité</button>
      </div>

      <div className="profil-reviews">
        <div className="review-item">
          <img 
            src="https://ui-avatars.com/api/?name=Fatima+Ba&background=FF9800&color=fff&size=100"
            alt="Fatima"
            className="review-avatar"
          />
          <div className="review-content">
            <div className="review-header">
              <strong>Fatima B.</strong>
              <span className="review-stars">⭐⭐⭐⭐⭐</span>
            </div>
            <p className="review-verified">✓ Client vérifié</p>
            <p className="review-text">
              Super encadreur, clair et patient !
            </p>
          </div>
        </div>
      </div>

      <div className="profil-stats">
        <div className="stat-card">
          <div className="stat-icon">
            <Heart size={24} color="#FF9800" />
          </div>
          <div className="stat-content">
            <h4>{user?.donations || 12}</h4>
            <p>Dons</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <TrendingUp size={24} color="#2E7D32" />
          </div>
          <div className="stat-content">
            <h4>{user?.sales || 8}</h4>
            <p>Ventes</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <Award size={24} color="#FFB400" />
          </div>
          <div className="stat-content">
            <h4>{user?.karma || 50}</h4>
            <p>Karma</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilEtudiant;