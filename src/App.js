import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

// Import des composants existants
import Connexion from './components/Connexion';
import FilPrincipal from './components/FilPrincipal';
import ProfilEtudiant from './components/ProfilEtudiant';
import BoostVisibilite from './components/BoostVisibilite';
import EspacePartenaires from './components/EspacePartenaires';

// Import des NOUVEAUX composants
import RechercheLogement from './components/RechercheLogement';
import Paiement from './components/Paiement';

import Navigation from './components/Navigation';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [currentScreen, setCurrentScreen] = useState('connexion');
  const [showPaiement, setShowPaiement] = useState(false);
  const [paiementData, setPaiementData] = useState(null);

  const handleLogin = (email) => {
    setIsAuthenticated(true);
    setCurrentUser({
      name: 'Mamadou Diallo',
      email: email,
      university: 'EPT',
      karma: 50,
      donations: 12,
      sales: 8
    });
    setCurrentScreen('fil-principal');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentUser(null);
    setCurrentScreen('connexion');
  };

  const handlePaiement = (montant, description) => {
    setPaiementData({ montant, description });
    setShowPaiement(true);
  };

  const handlePaiementSuccess = (data) => {
    console.log('Paiement réussi:', data);
    setShowPaiement(false);
    setPaiementData(null);
    // Afficher une notification de succès
    alert(`Paiement de ${data.montant} FCFA effectué avec succès via ${data.methode}!`);
  };

  return (
    <div className="App">
      <div className="phone-container">
        {/* Navigation Top */}
        {isAuthenticated && currentScreen !== 'connexion' && !showPaiement && (
          <div className="top-nav">
            <button 
              onClick={() => setCurrentScreen('fil-principal')}
              className={currentScreen === 'fil-principal' ? 'active' : ''}
            >
              🏠 Accueil
            </button>
            <button 
              onClick={() => setCurrentScreen('logement')}
              className={currentScreen === 'logement' ? 'active' : ''}
            >
              🏘️ Logement
            </button>
           
            <button 
              onClick={() => setCurrentScreen('profil')}
              className={currentScreen === 'profil' ? 'active' : ''}
            >
              👤 Profil
            </button>
            <button 
              onClick={() => setCurrentScreen('boost')}
              className={currentScreen === 'boost' ? 'active' : ''}
            >
              ⚡ Boost
            </button>
            
            <button 
              onClick={() => setCurrentScreen('partenaires')}
              className={currentScreen === 'partenaires' ? 'active' : ''}
            >
              🤝 Partenaires
            </button>
          </div>
          
        )}

        {/* Screens */}
        <div className="screen-content">
          {/* Écran de paiement (overlay) */}
          {showPaiement && paiementData && (
            <Paiement 
              montant={paiementData.montant}
              description={paiementData.description}
              onSuccess={handlePaiementSuccess}
              onCancel={() => setShowPaiement(false)}
            />
          )}

          {/* Écrans normaux */}
          {!showPaiement && (
            <>
              {currentScreen === 'connexion' && (
                <Connexion onLogin={handleLogin} />
              )}
              
              {currentScreen === 'fil-principal' && (
                <FilPrincipal user={currentUser} />
              )}
              
              {currentScreen === 'logement' && (
                <RechercheLogement user={currentUser} />
              )}
              
             
              
              {currentScreen === 'profil' && (
                <ProfilEtudiant user={currentUser} />
              )}
              
              {currentScreen === 'boost' && (
                <BoostVisibilite 
                  user={currentUser}
                  onPayer={(montant) => handlePaiement(montant, 'Boost de visibilité')}
                />
              )}
              
              {currentScreen === 'partenaires' && (
                <EspacePartenaires />
              )}
            </>
          )}
        </div>

        {/* Bottom Navigation */}
        {isAuthenticated && currentScreen !== 'connexion' && !showPaiement && (
          <Navigation 
            currentScreen={currentScreen} 
            setCurrentScreen={setCurrentScreen}
            onLogout={handleLogout}
          />
        )}
      </div>
    </div>
  );
}

export default App;