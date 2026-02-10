import React, { useState } from 'react';
import { BookOpen } from 'lucide-react';
import './Connexion.css';

function Connexion({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      onLogin(email);
    }
  };

  return (
    <div className="connexion-container">
      <div className="connexion-header">
        <div className="logo">
          <BookOpen size={48} color="#2E7D32" />
        </div>
        <h1>SUNU CAMPUS</h1>
        <p className="subtitle">Accès réservé aux<br/>étudiants vérifiés</p>
      </div>

      <div className="connexion-illustration">
        <div className="book-stack">
          <div className="book book-1"></div>
          <div className="book book-2"></div>
          <div className="book book-3"></div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="connexion-form">
        <button type="button" className="btn-email-etudiant">
          Se connecter avec email étudiant
        </button>

        <div className="separator">
          <span>ou</span>
        </div>

        <input
          type="email"
          placeholder="Email universitaire"
          className="input-field"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Mot de passe"
          className="input-field"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="btn-primary">
          Se connecter
        </button>

        <p className="signup-link">
          Pas encore de compte ? <span>Créer un compte</span>
        </p>
      </form>

      <div className="info-badge">
        <p>✅ Vérification carte étudiant obligatoire</p>
      </div>
    </div>
  );
}

export default Connexion;