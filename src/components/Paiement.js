import React, { useState } from 'react';
import { CreditCard, Smartphone, Check, AlertCircle, Clock, ArrowRight } from 'lucide-react';
import './Paiement.css';
import WaveImg from '../assets/wave.png';
import OrangeMoneyImg from '../assets/orangemoney.png';
import FreeImg from '../assets/free.png';

function PaiementMobile({ montant, objet, onSuccess, onCancel }) {
  const [etape, setEtape] = useState('choix'); // choix, details, processing, success
  const [methodePaiement, setMethodePaiement] = useState(null);
  const [numero, setNumero] = useState('');
  const [pin, setPin] = useState('');
  const [loading, setLoading] = useState(false);
  const [transactionId, setTransactionId] = useState('');

  // Méthodes de paiement avec images
  const methodes = [
    {
      id: 'wave',
      nom: 'Wave',
      logo: WaveImg,
      couleur: '#00D9FF',
      frais: 0,
      description: 'Paiement instantané sans frais',
      prefixes: ['70', '76', '77']
    },
    {
      id: 'orange',
      nom: 'Orange Money',
      logo: OrangeMoneyImg,
      couleur: '#FF7900',
      frais: montant * 0.01,
      description: 'Paiement sécurisé Orange',
      prefixes: ['77', '78']
    },
    {
      id: 'free',
      nom: 'Free Money',
      logo: FreeImg,
      couleur: '#E3342F',
      frais: montant * 0.015,
      description: 'Paiement via Free Money',
      prefixes: ['76', '70']
    }
  ];

  const handleChoixMethode = (methode) => {
    setMethodePaiement(methode);
    setEtape('details');
  };

  const handlePaiement = () => {
    setLoading(true);
    setEtape('processing');

    setTimeout(() => {
      const txId = 'TXN' + Date.now() + Math.random().toString(36).substr(2, 9).toUpperCase();
      setTransactionId(txId);
      setEtape('success');
      setLoading(false);

      setTimeout(() => {
        if (onSuccess) {
          onSuccess({
            transactionId: txId,
            montant: montant + (methodePaiement?.frais || 0),
            methode: methodePaiement?.nom,
            date: new Date()
          });
        }
      }, 2000);
    }, 3000);
  };

  const montantTotal = montant + (methodePaiement?.frais || 0);

  return (
    <div className="paiement-overlay">
      <div className="paiement-modal">
        {/* Header */}
        <div className="paiement-header">
          <h2>💳 Paiement Mobile</h2>
          <button className="btn-close-modal" onClick={onCancel}>✕</button>
        </div>

        {/* Étape 1: Choix de la méthode */}
        {etape === 'choix' && (
          <div className="paiement-content">
            <div className="montant-display">
              <p className="montant-label">Montant à payer</p>
              <p className="montant-value">{montant.toLocaleString()} FCFA</p>
              <p className="montant-objet">{objet}</p>
            </div>

            <h3 className="section-title">Choisissez votre méthode</h3>

            <div className="methodes-grid">
              {methodes.map(methode => (
                <div 
                  key={methode.id}
                  className="methode-card"
                  onClick={() => handleChoixMethode(methode)}
                  style={{ borderColor: methode.couleur }}
                >
                  <div className="methode-logo" style={{ background: methode.couleur }}>
                    <img src={methode.logo} alt={methode.nom} className="methode-img" />
                  </div>
                  <h4>{methode.nom}</h4>
                  <p className="methode-desc">{methode.description}</p>
                  {methode.frais > 0 ? (
                    <p className="methode-frais">
                      Frais: {methode.frais.toLocaleString()} FCFA
                    </p>
                  ) : (
                    <p className="methode-frais gratuit">
                      ✨ Sans frais
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Étape 2: Saisie des détails */}
        {etape === 'details' && methodePaiement && (
          <div className="paiement-content">
            <button className="btn-back" onClick={() => setEtape('choix')}>← Retour</button>

            <div className="methode-selected">
              <div className="methode-logo-large" style={{ background: methodePaiement.couleur }}>
                <img src={methodePaiement.logo} alt={methodePaiement.nom} className="methode-img-large" />
              </div>
              <h3>{methodePaiement.nom}</h3>
            </div>

            <div className="resume-paiement">
              <div className="resume-row">
                <span>Montant</span>
                <span className="resume-value">{montant.toLocaleString()} FCFA</span>
              </div>
              {methodePaiement.frais > 0 && (
                <div className="resume-row">
                  <span>Frais</span>
                  <span className="resume-value">{methodePaiement.frais.toLocaleString()} FCFA</span>
                </div>
              )}
              <div className="resume-row total">
                <span>Total</span>
                <span className="resume-value">{montantTotal.toLocaleString()} FCFA</span>
              </div>
            </div>

            <div className="form-paiement">
              <div className="form-group">
                <label><Smartphone size={20}/> Numéro {methodePaiement.nom}</label>
                <input
                  type="tel"
                  placeholder="77 123 45 67"
                  value={numero}
                  onChange={(e) => setNumero(e.target.value)}
                  maxLength="12"
                  className="input-numero"
                />
                <p className="input-hint">
                  Préfixes acceptés: {methodePaiement.prefixes.join(', ')}
                </p>
              </div>

              {methodePaiement.id === 'orange' && (
                <div className="form-group">
                  <label><CreditCard size={20}/> Code PIN Orange Money</label>
                  <input
                    type="password"
                    placeholder="••••"
                    value={pin}
                    onChange={(e) => setPin(e.target.value)}
                    maxLength="4"
                    className="input-pin"
                  />
                </div>
              )}

              <div className="securite-info">
                <AlertCircle size={16}/>
                <p>Paiement 100% sécurisé et crypté</p>
              </div>

              <button
                className="btn-confirmer-paiement"
                onClick={handlePaiement}
                disabled={numero.length < 9}
                style={{ background: methodePaiement.couleur, opacity: numero.length < 9 ? 0.5 : 1 }}
              >
                Payer {montantTotal.toLocaleString()} FCFA <ArrowRight size={20} />
              </button>
            </div>
          </div>
        )}

        {/* Étape 3: Processing */}
        {etape === 'processing' && (
          <div className="paiement-content processing">
            <div className="loader-payment"><div className="spinner-payment"></div></div>
            <h3>Traitement en cours...</h3>
            <p>Veuillez confirmer sur votre téléphone</p>
          </div>
        )}

        {/* Étape 4: Succès */}
        {etape === 'success' && (
          <div className="paiement-content success">
            <div className="success-animation"><Check size={48} /></div>
            <h3>Paiement Réussi ! 🎉</h3>
            <p>Votre transaction a été effectuée avec succès</p>

            <div className="transaction-details">
              <div className="detail-row"><span>ID Transaction</span><span className="detail-value">{transactionId}</span></div>
              <div className="detail-row"><span>Méthode</span><span className="detail-value">{methodePaiement?.nom}</span></div>
              <div className="detail-row"><span>Montant</span><span className="detail-value">{montantTotal.toLocaleString()} FCFA</span></div>
              <div className="detail-row"><span>Date</span><span className="detail-value">{new Date().toLocaleDateString('fr-FR', { day:'2-digit', month:'long', year:'numeric', hour:'2-digit', minute:'2-digit' })}</span></div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default PaiementMobile;