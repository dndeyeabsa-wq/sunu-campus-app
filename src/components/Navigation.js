import React from 'react';
import { Home, Search, Plus, MessageCircle, User, LogOut } from 'lucide-react';
import './Navigation.css';

function Navigation({ currentScreen, setCurrentScreen, onLogout }) {
  return (
    <div className="bottom-navigation">
      <button 
        className={currentScreen === 'fil-principal' ? 'active' : ''}
        onClick={() => setCurrentScreen('fil-principal')}
      >
        <Home size={24} />
        <span>Accueil</span>
      </button>

      <button 
        className={currentScreen === 'search' ? 'active' : ''}
        onClick={() => setCurrentScreen('search')}
      >
        <Search size={24} />
        <span>Recherche</span>
      </button>

      <button className="add-button">
        <Plus size={28} color="white" />
      </button>

      <button 
        className={currentScreen === 'messages' ? 'active' : ''}
        onClick={() => setCurrentScreen('messages')}
      >
        <MessageCircle size={24} />
        <span>Messages</span>
      </button>

      <button 
        className={currentScreen === 'profil' ? 'active' : ''}
        onClick={() => setCurrentScreen('profil')}
      >
        <User size={24} />
        <span>Profil</span>
      </button>
    </div>
  );
}

export default Navigation;