import React, { useState } from 'react';
import { 
  Building2, 
  TrendingUp, 
  Users, 
  Target,
  Briefcase,
  GraduationCap,
  Smartphone,
  Utensils,
  Book,
  Zap,
  BarChart3,
  Eye,
  MousePointer,
  MessageCircle,
  ChevronRight,
  Star,
  Check,
  Gift,
  Percent,
  Calendar
} from 'lucide-react';
import './EspacePartenaires.css';
import orangeLogo from '../assets/orangemoney.png';
import waveLogo from '../assets/wave.png';
import ubaLogo from '../assets/uba.png';
import enkoLogo from '../assets/enko.png';
import jumiaLogo from '../assets/jumia.png';
import freeLogo from '../assets/free.png';
import ecobankLogo from '../assets/ecobank.png';
import Education from '../assets/education.png';
import Bank from '../assets/banque.png';
import Food from '../assets/food.png';
import Fintech from '../assets/fintech.png';
import Telecom from '../assets/telecom.png';
import Fibre from '../assets/fibre.png';

function EspacePartenaires() {
  const [activeTab, setActiveTab] = useState('offres'); // offres, partenaires, analytics, devenir
  const [selectedCategorie, setSelectedCategorie] = useState('all');

  // PARTENAIRES EXISTANTS

// LOGOS DES PARTENAIRES (URLs)


const logosPartenaires = {
  'Orange Sénégal': orangeLogo,
  'Wave': waveLogo,
  'UBA Sénégal': ubaLogo,
  'Enko Education': enkoLogo,
  'Jumia Food': jumiaLogo,
  'Free Sénégal': freeLogo,
  'Ecobank': ecobankLogo
};

  const partenairesActifs = [
    {
      id: 1,
      nom: 'Orange Sénégal',
       logo: logosPartenaires['Orange Sénégal'], 
      categorie: 'Télécom',
      typePartenariat: 'Premium',
      duree: 'Partenariat annuel',
      dateDebut: 'Janvier 2026',
      offresActives: 5,
      reach: '45 000 étudiants',
      budget: '2 000 000 FCFA/an',
      contact: {
        nom: 'Amadou Diop',
        poste: 'Responsable Marketing Jeunes',
        email: 'a.diop@orange.sn',
        tel: '+221 77 123 45 67'
      },
      statistiques: {
        vues: 12500,
        clics: 3400,
        conversions: 850,
        tauxConversion: '25%'
      }
    },
    {
      id: 2,
      nom: 'Wave',
      logo: logosPartenaires['Wave'],
      categorie: 'Fintech',
      typePartenariat: 'Premium',
      duree: 'Partenariat annuel',
      dateDebut: 'Mars 2025',
      offresActives: 3,
      reach: '38 000 étudiants',
      budget: '1 500 000 FCFA/an',
      contact: {
        nom: 'Fatou Sall',
        poste: 'Head of Partnerships',
        email: 'fatou.sall@wave.com',
        tel: '+221 76 234 56 78'
      },
      statistiques: {
        vues: 18000,
        clics: 5200,
        conversions: 1500,
        tauxConversion: '29%'
      }
    },
    {
      id: 3,
      nom: 'UBA Sénégal',
      logo: logosPartenaires['UBA Sénégal'],
      categorie: 'Banque',
      typePartenariat: 'Standard',
      duree: '6 mois',
      dateDebut: 'Septembre 2025',
      offresActives: 4,
      reach: '25 000 étudiants',
      budget: '800 000 FCFA/6 mois',
      contact: {
        nom: 'Ibrahima Kane',
        poste: 'Chargé Marketing Digital',
        email: 'i.kane@ubagroup.com',
        tel: '+221 77 345 67 89'
      },
      statistiques: {
        vues: 8500,
        clics: 2100,
        conversions: 420,
        tauxConversion: '20%'
      }
    },
    {
      id: 4,
      nom: 'Enko Education',
      logo: logosPartenaires['Enko Education'],
      categorie: 'Éducation',
      typePartenariat: 'Standard',
      duree: 'Partenariat annuel',
      dateDebut: 'Janvier 2026',
      offresActives: 2,
      reach: '15 000 étudiants',
      budget: '600 000 FCFA/an',
      contact: {
        nom: 'Marie Diagne',
        poste: 'Directrice Communication',
        email: 'm.diagne@enkoeducation.com',
        tel: '+221 78 456 78 90'
      },
      statistiques: {
        vues: 6200,
        clics: 1800,
        conversions: 280,
        tauxConversion: '16%'
      }
    },
    {
      id: 5,
      nom: 'Jumia Food',
      logo: logosPartenaires['Jumia Food'],
      categorie: 'Food',
      typePartenariat: 'Basic',
      duree: '3 mois',
      dateDebut: 'Février 2026',
      offresActives: 6,
      reach: '20 000 étudiants',
      budget: '400 000 FCFA/3 mois',
      contact: {
        nom: 'Ousmane Ndiaye',
        poste: 'Marketing Manager',
        email: 'o.ndiaye@jumia.com',
        tel: '+221 76 567 89 01'
      },
      statistiques: {
        vues: 15000,
        clics: 4500,
        conversions: 1200,
        tauxConversion: '27%'
      }
    }
  ];

  // OFFRES PROMOTIONNELLES ACTIVES
  const offresPromotionnelles = [
    {
      id: 1,
      partenaire: 'Orange Sénégal',
       logo: logosPartenaires['Orange Sénégal'], 
      titre: 'Forfait Étudiant Orange',
      description: '15 Go + Appels illimités Orange + 2h tous réseaux',
      prixNormal: 7500,
      prixEtudiant: 5000,
      reduction: 33,
      duree: '30 jours',
      conditions: 'Sur présentation carte étudiant',
      categorie: 'Télécom',
      validiteOffre: 'Jusqu\'au 30 Juin 2026',
      beneficiaires: 2400,
      codePromo: 'SUNU2026',
      image: Telecom,
      avantages: [
        '15 Go Internet 4G',
        'Appels illimités vers Orange',
        '2h d\'appels tous réseaux',
        '1000 SMS gratuits',
        'Orange Money gratuit'
      ]
    },
    {
      id: 2,
      partenaire: 'Wave',
        logo: logosPartenaires['Wave'], 
      titre: 'Cashback Étudiant Wave',
      description: '5% de cashback sur tous vos paiements avec Wave',
      prixNormal: 0,
      prixEtudiant: 0,
      reduction: 5,
      duree: 'Illimité',
      conditions: 'Compte vérifié étudiant',
      categorie: 'Fintech',
      validiteOffre: 'Permanent',
      beneficiaires: 5600,
      codePromo: 'WAVECAMPUS',
      image: Fintech,
      avantages: [
        '5% cashback sur tous paiements',
        'Transferts gratuits entre étudiants',
        'Retraits sans frais (3/mois)',
        'Carte virtuelle gratuite',
        'Assurance achat incluse'
      ]
    },
    {
      id: 3,
      partenaire: 'UBA Sénégal',
        logo: logosPartenaires['UBA Sénégal'], 
      titre: 'Compte Épargne Jeune UBA',
      description: 'Ouvrez un compte épargne avec 0 FCFA et bénéficiez de 5% d\'intérêt',
      prixNormal: 5000,
      prixEtudiant: 0,
      duree: 'Permanent',
      reduction: 100,
      conditions: 'Carte étudiant + 1000 FCFA dépôt minimum',
      categorie: 'Banque',
      validiteOffre: 'Toute l\'année',
      beneficiaires: 1200,
      codePromo: 'UBAJEUNE',
      image: Bank,
      avantages: [
        'Ouverture gratuite (économie 5000 FCFA)',
        '5% d\'intérêt annuel',
        'Carte bancaire gratuite 1ère année',
        'Mobile Banking gratuit',
        'Découvert autorisé 50 000 FCFA'
      ]
    },
    {
      id: 4,
      partenaire: 'Enko Education',
      logo: logosPartenaires['Enko Education'], 
      titre: 'Formations Certifiantes -50%',
      description: 'Certification Google, Microsoft, AWS à prix réduit',
      prixNormal: 150000,
      prixEtudiant: 75000,
      reduction: 50,
      duree: '3 mois de formation',
      conditions: 'Inscription avant fin Mars',
      categorie: 'Éducation',
      validiteOffre: 'Mars - Juin 2026',
      beneficiaires: 340,
      codePromo: 'ENKOCERT50',
      image: Education,
      avantages: [
        'Certifications reconnues internationalement',
        'Support mentor dédié',
        'Accès plateforme e-learning',
        'Stage garanti fin formation',
        'Réseau alumni Enko'
      ]
    },
    {
      id: 5,
      partenaire: 'Jumia Food',
   logo: logosPartenaires['Jumia Food'], 
      titre: 'Livraison Gratuite Campus',
      description: 'Livraison gratuite + 20% sur la 1ère commande',
      prixNormal: 1500,
      prixEtudiant: 0,
      reduction: 100,
      duree: 'Par commande',
      conditions: 'Commande minimum 3000 FCFA',
      categorie: 'Food',
      validiteOffre: 'Jusqu\'au 31 Mars 2026',
      beneficiaires: 8900,
      codePromo: 'CAMPUSFOOD20',
      image: Food,
      avantages: [
        'Livraison gratuite sur campus',
        '20% réduction 1ère commande',
        'Temps livraison garanti 30min',
        'Paiement Wave/Orange Money',
        'Programme fidélité cumulatif'
      ]
    },
    {
      id: 6,
      partenaire: 'Orange Sénégal',
        logo: logosPartenaires['Orange Sénégal'], 
      titre: 'Smartphone à Crédit Étudiant',
      description: 'Achetez votre smartphone et payez en 6 mois sans intérêt',
      prixNormal: 150000,
      prixEtudiant: 150000,
      reduction: 0,
      duree: '6 mois',
      conditions: 'Attestation étudiant + pièce identité',
      categorie: 'Télécom',
      validiteOffre: 'Toute l\'année',
      beneficiaires: 890,
      codePromo: 'SMARTCAMPUS',
      image: Telecom,
      avantages: [
        'Paiement 6 mensualités sans intérêt',
        'Assurance casse incluse 1 an',
        'Forfait 10 Go offert 3 mois',
        'SAV prioritaire étudiant',
        'Trade-in ancien téléphone accepté'
      ]
    },
    {
      id: 7,
      partenaire: 'Free Sénégal',
       logo: logosPartenaires['Free Sénégal'], 
      titre: 'Fibre Optique Cité U',
      description: 'Internet illimité 100 Mbps pour les résidences universitaires',
      prixNormal: 25000,
      prixEtudiant: 15000,
      reduction: 40,
      duree: 'Mensuel',
      conditions: 'Résidence universitaire uniquement',
      categorie: 'Télécom',
      validiteOffre: 'Année universitaire',
      beneficiaires: 450,
      codePromo: 'FREECAMPUS',
      image: Fibre,
      avantages: [
        '100 Mbps illimité',
        'Installation gratuite',
        'Box WiFi 6 incluse',
        'Assistance technique 24/7',
        'Pas d\'engagement'
      ]
    },
    {
      id: 8,
      partenaire: 'Ecobank',
      logo: logosPartenaires['Ecobank'], 
      titre: 'Prêt Étudiant Express',
      description: 'Jusqu\'à 200 000 FCFA sans garant en 48h',
      prixNormal: 0,
      prixEtudiant: 0,
      reduction: 0,
      duree: '12 mois remboursement',
      conditions: 'Carte étudiant + justificatif inscription',
      categorie: 'Banque',
      validiteOffre: 'Toute l\'année',
      beneficiaires: 280,
      codePromo: 'ECOPRET',
      image: Fintech,
      avantages: [
        'Jusqu\'à 200 000 FCFA',
        'Taux préférentiel 8%/an',
        'Remboursement 12 mois',
        'Pas de garant nécessaire',
        'Réponse en 48h'
      ]
    }
  ];

  // STATISTIQUES GLOBALES
  const statsGlobales = {
    totalEtudiants: 50000,
    etudiantsActifs: 38000,
    tauxEngagement: 76,
    partenaireActifs: 5,
    offresDisponibles: 18,
    transactionsMois: 15000,
    revenusPartenaires: 4500000,
    croissanceMensuelle: 12
  };

  // PACKAGES PARTENAIRES
  const packagesPartenaires = [
    {
      id: 1,
      nom: 'Package Basic',
      prix: 150000,
      duree: '3 mois',
      couleur: '#2196F3',
      icon: '🥉',
      features: [
        'Publication 3 offres simultanées',
        'Visibilité homepage 1 semaine/mois',
        'Analytics basiques',
        'Support email',
        'Badge "Partenaire Officiel"',
        'Newsletter mensuelle (1 mention)'
      ],
      limites: {
        offres: 3,
        vuesEstimees: '10 000/mois',
        positionsSponsored: 'Non'
      }
    },
    {
      id: 2,
      nom: 'Package Standard',
      prix: 400000,
      duree: '6 mois',
      couleur: '#FF9800',
      icon: '🥈',
      popular: true,
      features: [
        'Publication 6 offres simultanées',
        'Visibilité homepage 2 semaines/mois',
        'Analytics avancées + Dashboard',
        'Support prioritaire (email + tel)',
        'Badge "Partenaire Premium"',
        'Newsletter hebdomadaire (2 mentions)',
        'Push notification 1x/mois',
        'Campagne ciblée par filière'
      ],
      limites: {
        offres: 6,
        vuesEstimees: '25 000/mois',
        positionsSponsored: 'Oui (top 3)'
      }
    },
    {
      id: 3,
      nom: 'Package Premium',
      prix: 1000000,
      duree: '12 mois',
      couleur: '#4CAF50',
      icon: '🥇',
      features: [
        'Offres illimitées',
        'Visibilité homepage permanente',
        'Analytics complètes + API',
        'Account manager dédié',
        'Badge "Partenaire Exclusif"',
        'Newsletter quotidienne (mentions illimitées)',
        'Push notifications illimitées',
        'Campagnes ultra-ciblées (campus, niveau, filière)',
        'Événements sponsorisés sur campus',
        'Co-branding SUNU-CAMPUS',
        'Accès data anonymisées',
        'Reporting mensuel personnalisé'
      ],
      limites: {
        offres: 'Illimité',
        vuesEstimees: '50 000+/mois',
        positionsSponsored: 'Position #1 garantie'
      }
    }
  ];

 const categoriesOffres = [
  {
    id: 'all',
    nom: 'Toutes',
    image: require('../assets/all.png'),
    count: offresPromotionnelles.length
  },
  {
    id: 'Télécom',
    nom: 'Télécom',
    image: require('../assets/telecom.png'),
    count: offresPromotionnelles.filter(o => o.categorie === 'Télécom').length
  },
  {
    id: 'Fintech',
    nom: 'Fintech',
    image: require('../assets/fintech.png'),
    count: offresPromotionnelles.filter(o => o.categorie === 'Fintech').length
  },
  {
    id: 'Banque',
    nom: 'Banque',
    image: require('../assets/banque.png'),
    count: offresPromotionnelles.filter(o => o.categorie === 'Banque').length
  },
  {
    id: 'Éducation',
    nom: 'Éducation',
    image: require('../assets/education.png'),
    count: offresPromotionnelles.filter(o => o.categorie === 'Éducation').length
  },
  {
    id: 'Food',
    nom: 'Food',
    image: require('../assets/food.png'),
    count: offresPromotionnelles.filter(o => o.categorie === 'Food').length
  }
];



  const offresFiltered = selectedCategorie === 'all' 
    ? offresPromotionnelles 
    : offresPromotionnelles.filter(o => o.categorie === selectedCategorie);

  return (
    <div className="partenaires-container-v2">
      {/* Hero Section */}
      <div className="partenaires-hero">
        <div className="hero-gradient-bg"></div>
        <div className="hero-content">
          <Building2 size={48} className="hero-icon" />
          <h1>Espace Partenaires</h1>
          <p>Touchez directement 50 000+ étudiants sénégalais</p>
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="stat-number">{statsGlobales.totalEtudiants.toLocaleString()}</span>
              <span className="stat-label">Étudiants inscrits</span>
            </div>
            <div className="hero-stat">
              <span className="stat-number">{statsGlobales.tauxEngagement}%</span>
              <span className="stat-label">Taux engagement</span>
            </div>
            <div className="hero-stat">
              <span className="stat-number">{statsGlobales.partenaireActifs}</span>
              <span className="stat-label">Partenaires actifs</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="partenaires-tabs">
        <button 
          className={`tab-partner ${activeTab === 'offres' ? 'active' : ''}`}
          onClick={() => setActiveTab('offres')}
        >
          <Gift size={20} />
          Offres Actives
        </button>
        <button 
          className={`tab-partner ${activeTab === 'partenaires' ? 'active' : ''}`}
          onClick={() => setActiveTab('partenaires')}
        >
          <Briefcase size={20} />
          Nos Partenaires
        </button>
        <button 
          className={`tab-partner ${activeTab === 'analytics' ? 'active' : ''}`}
          onClick={() => setActiveTab('analytics')}
        >
          <BarChart3 size={20} />
          Analytics
        </button>
        <button 
          className={`tab-partner ${activeTab === 'devenir' ? 'active' : ''}`}
          onClick={() => setActiveTab('devenir')}
        >
          <Target size={20} />
          Devenir Partenaire
        </button>
      </div>

      {/* TAB 1 : OFFRES PROMOTIONNELLES */}
      {activeTab === 'offres' && (
        <div className="tab-content-partners">
          {/* Filtres par catégorie */}
          <div className="categories-filter">
            {categoriesOffres.map(cat => (
              <button
                key={cat.id}
                className={`category-btn ${selectedCategorie === cat.id ? 'active' : ''}`}
                onClick={() => setSelectedCategorie(cat.id)}
              >
                <img src={cat.image} alt={cat.nom} className="cat-icon" />
                <span className="cat-name">{cat.nom}</span>
                <span className="cat-count">{cat.count}</span>
              </button>
            ))}
          </div>

          {/* Liste des offres */}
          <div className="offres-grid">
            {offresFiltered.map(offre => (
              <div key={offre.id} className="offre-card-detailed">
                {/* Header avec logo partenaire */}
                <div className="offre-header">
                  <div className="partner-badge">
                  <img 
                    src={offre.logo}
                    alt={`Logo ${offre.partenaire}`}
                    className="partner-logo-mini"
                     />
                  <span className="partner-name-mini">{offre.partenaire}</span>
                </div>
                  {offre.reduction > 0 && (
                    <div className="reduction-badge">
                      <Percent size={14} />
                      -{offre.reduction}%
                    </div>
                  )}
                </div>

                {/* Image/Icon de l'offre */}
               <div className="offre-image-container">
                <img src={offre.image} alt={offre.titre} className="offre-image" />
              </div>

                {/* Contenu */}
                <div className="offre-content">
                  <h3>{offre.titre}</h3>
                  <p className="offre-description">{offre.description}</p>

                  {/* Prix */}
                  {offre.prixNormal > 0 && (
                    <div className="offre-pricing">
                      <span className="prix-normal">{offre.prixNormal.toLocaleString()} FCFA</span>
                      <span className="prix-etudiant">{offre.prixEtudiant.toLocaleString()} FCFA</span>
                    </div>
                  )}

                  {/* Code promo */}
                  <div className="code-promo-section">
                    <span className="code-label">Code promo :</span>
                    <div className="code-promo">
                      <code>{offre.codePromo}</code>
                      <button className="btn-copy-code">📋</button>
                    </div>
                  </div>

                  {/* Avantages */}
                  <div className="offre-avantages">
                    <p className="avantages-title">✨ Avantages inclus :</p>
                    <ul>
                      {offre.avantages.slice(0, 3).map((avantage, index) => (
                        <li key={index}>
                          <Check size={14} color="#4CAF50" />
                          {avantage}
                        </li>
                      ))}
                    </ul>
                    {offre.avantages.length > 3 && (
                      <button className="btn-voir-plus">
                        +{offre.avantages.length - 3} autres avantages
                      </button>
                    )}
                  </div>

                  {/* Footer */}
                  <div className="offre-footer">
                    <div className="offre-meta">
                      <span className="meta-item">
                        <Users size={14} />
                        {offre.beneficiaires.toLocaleString()} bénéficiaires
                      </span>
                      <span className="meta-item">
                        <Calendar size={14} />
                        {offre.validiteOffre}
                      </span>
                    </div>
                    <button className="btn-profiter">
                      Profiter de l'offre
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 2 : NOS PARTENAIRES */}
      {activeTab === 'partenaires' && (
        <div className="tab-content-partners">
          <h2 className="section-title-partners">
            Nos {partenairesActifs.length} Partenaires de Confiance
          </h2>

          <div className="partenaires-list-detailed">
            {partenairesActifs.map(partenaire => (
              <div key={partenaire.id} className="partenaire-card-full">
                {/* Header */}
                <div className="partenaire-card-header">
                  <div className="partenaire-identity">
                    <div className="partenaire-logo-large">
                      <img src={partenaire.logo} alt={`Logo ${partenaire.nom}`} />
                      </div>
                                          <div>
                      <h3>{partenaire.nom}</h3>
                      <p className="partenaire-categorie">{partenaire.categorie}</p>
                    </div>
                  </div>
                  <div className="partenaire-type-badge" style={{
                    background: partenaire.typePartenariat === 'Premium' ? '#4CAF50' : '#2196F3'
                  }}>
                    <Star size={14} fill="white" />
                    {partenaire.typePartenariat}
                  </div>
                </div>

                {/* Stats */}
                <div className="partenaire-stats-grid">
                  <div className="stat-box">
                    <Eye size={20} color="#667eea" />
                    <div>
                      <p className="stat-value">{partenaire.statistiques.vues.toLocaleString()}</p>
                      <p className="stat-label">Vues totales</p>
                    </div>
                  </div>
                  <div className="stat-box">
                    <MousePointer size={20} color="#FF9800" />
                    <div>
                      <p className="stat-value">{partenaire.statistiques.clics.toLocaleString()}</p>
                      <p className="stat-label">Clics</p>
                    </div>
                  </div>
                  <div className="stat-box">
                    <Target size={20} color="#4CAF50" />
                    <div>
                      <p className="stat-value">{partenaire.statistiques.conversions.toLocaleString()}</p>
                      <p className="stat-label">Conversions</p>
                    </div>
                  </div>
                  <div className="stat-box">
                    <TrendingUp size={20} color="#F44336" />
                    <div>
                      <p className="stat-value">{partenaire.statistiques.tauxConversion}</p>
                      <p className="stat-label">Taux conversion</p>
                    </div>
                  </div>
                </div>

                {/* Infos partenariat */}
                <div className="partenariat-info">
                  <div className="info-row">
                    <span className="info-label">Durée partenariat :</span>
                    <span className="info-value">{partenaire.duree}</span>
                  </div>
                  <div className="info-row">
                    <span className="info-label">Depuis :</span>
                    <span className="info-value">{partenaire.dateDebut}</span>
                  </div>
                  <div className="info-row">
                    <span className="info-label">Offres actives :</span>
                    <span className="info-value">{partenaire.offresActives}</span>
                  </div>
                  <div className="info-row">
                    <span className="info-label">Reach potentiel :</span>
                    <span className="info-value">{partenaire.reach}</span>
                  </div>
                  <div className="info-row">
                    <span className="info-label">Investissement :</span>
                    <span className="info-value budget">{partenaire.budget}</span>
                  </div>
                </div>

                {/* Contact */}
                <div className="contact-partenaire">
                  <h4>👤 Contact Dédié</h4>
                  <div className="contact-details">
                    <p><strong>{partenaire.contact.nom}</strong></p>
                    <p className="contact-poste">{partenaire.contact.poste}</p>
                    <div className="contact-links">
                      <a href={`mailto:${partenaire.contact.email}`} className="contact-link">
                        ✉️ {partenaire.contact.email}
                      </a>
                      <a href={`tel:${partenaire.contact.tel}`} className="contact-link">
                        📞 {partenaire.contact.tel}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="partenaire-actions">
                  <button className="btn-voir-offres">
                    Voir les {partenaire.offresActives} offres
                  </button>
                  <button className="btn-contact-partner">
                    <MessageCircle size={16} />
                    Contacter
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3 : ANALYTICS */}
      {activeTab === 'analytics' && (
        <div className="tab-content-partners">
          <h2 className="section-title-partners">
            📊 Performance Globale Partenaires
          </h2>

          {/* Stats Overview */}
          <div className="analytics-overview">
            <div className="analytics-card">
              <div className="analytics-icon" style={{ background: '#E3F2FD' }}>
                <Users size={32} color="#2196F3" />
              </div>
              <div>
                <p className="analytics-value">{statsGlobales.etudiantsActifs.toLocaleString()}</p>
                <p className="analytics-label">Étudiants actifs ce mois</p>
                <p className="analytics-trend positive">
                  <TrendingUp size={14} />
                  +{statsGlobales.croissanceMensuelle}% vs mois dernier
                </p>
              </div>
            </div>

            <div className="analytics-card">
              <div className="analytics-icon" style={{ background: '#FFF3E0' }}>
                <Target size={32} color="#FF9800" />
              </div>
              <div>
                <p className="analytics-value">{statsGlobales.transactionsMois.toLocaleString()}</p>
                <p className="analytics-label">Transactions ce mois</p>
                <p className="analytics-trend positive">
                  <TrendingUp size={14} />
                  +18% vs mois dernier
                </p>
              </div>
            </div>

            <div className="analytics-card">
              <div className="analytics-icon" style={{ background: '#E8F5E9' }}>
                <Zap size={32} color="#4CAF50" />
              </div>
              <div>
                <p className="analytics-value">{statsGlobales.tauxEngagement}%</p>
                <p className="analytics-label">Taux d'engagement</p>
                <p className="analytics-trend positive">
                  <TrendingUp size={14} />
                  +5% vs mois dernier
                </p>
              </div>
            </div>

            <div className="analytics-card">
              <div className="analytics-icon" style={{ background: '#F3E5F5' }}>
                <BarChart3 size={32} color="#9C27B0" />
              </div>
              <div>
                <p className="analytics-value">{(statsGlobales.revenusPartenaires / 1000000).toFixed(1)}M FCFA</p>
                <p className="analytics-label">Revenus partenaires</p>
                <p className="analytics-trend positive">
                  <TrendingUp size={14} />
                  +25% vs mois dernier
                </p>
              </div>
            </div>
          </div>

          {/* ROI Calculator */}
          <div className="roi-calculator">
            <h3>🎯 Calculateur ROI Partenaire</h3>
            <p className="roi-subtitle">Estimez le retour sur investissement de votre campagne</p>
            
            <div className="calculator-inputs">
              <div className="calc-group">
                <label>Budget campagne (FCFA)</label>
                <input type="number" defaultValue="500000" className="calc-input" />
              </div>
              <div className="calc-group">
                <label>Durée (mois)</label>
                <input type="number" defaultValue="3" className="calc-input" />
              </div>
              <div className="calc-group">
                <label>Package</label>
                <select className="calc-input">
                  <option>Standard</option>
                  <option>Premium</option>
                </select>
              </div>
            </div>

            <div className="roi-results">
              <div className="roi-result-item">
                <span>Reach estimé</span>
                <strong>25 000 étudiants</strong>
              </div>
              <div className="roi-result-item">
                <span>Clics estimés</span>
                <strong>6 250 clics</strong>
              </div>
              <div className="roi-result-item">
                <span>Conversions estimées</span>
                <strong>1 250 conversions</strong>
              </div>
              <div className="roi-result-item">
                <span>Coût par acquisition</span>
                <strong>400 FCFA</strong>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4 : DEVENIR PARTENAIRE */}
      {activeTab === 'devenir' && (
        <div className="tab-content-partners">
          <div className="devenir-partenaire-section">
            <h2>🤝 Devenez Partenaire SUNU-CAMPUS</h2>
            <p className="devenir-subtitle">
              Rejoignez Orange, Wave, UBA et les autres leaders qui font confiance à SUNU-CAMPUS
            </p>

            {/* Packages */}
            <div className="packages-grid">
              {packagesPartenaires.map(pkg => (
                <div 
                  key={pkg.id} 
                  className={`package-card ${pkg.popular ? 'popular' : ''}`}
                  style={{ borderColor: pkg.couleur }}
                >
                  {pkg.popular && (
                    <div className="popular-badge-package">Le plus populaire</div>
                  )}
                  
                  <div className="package-header" style={{ background: `${pkg.couleur}15` }}>
                    <span className="package-icon">{pkg.icon}</span>
                    <h3 style={{ color: pkg.couleur }}>{pkg.nom}</h3>
                    <div className="package-price">
                      <span className="prix-amount">{(pkg.prix / 1000).toFixed(0)}K</span>
                      <span className="prix-currency">FCFA</span>
                    </div>
                    <p className="package-duree">{pkg.duree}</p>
                  </div>

                  <div className="package-features">
                    {pkg.features.map((feature, index) => (
                      <div key={index} className="feature-item">
                        <Check size={16} color={pkg.couleur} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="package-limits">
                    <p className="limits-title">Limites & Performances</p>
                    <ul>
                      <li>📊 {pkg.limites.offres} offres simultanées</li>
                      <li>👁️ {pkg.limites.vuesEstimees} vues estimées</li>
                      <li>⭐ Sponsored: {pkg.limites.positionsSponsored}</li>
                    </ul>
                  </div>

                  <button 
                    className="btn-choisir-package"
                    style={{ background: pkg.couleur }}
                  >
                    Choisir {pkg.nom}
                  </button>
                </div>
              ))}
            </div>

            {/* Formulaire contact */}
            <div className="contact-form-section">
              <h3>📬 Demande de Partenariat</h3>
              <form className="partner-contact-form">
                <div className="form-row">
                  <div className="form-group-partner">
                    <label>Nom de l'entreprise *</label>
                    <input type="text" required placeholder="Orange Sénégal" />
                  </div>
                  <div className="form-group-partner">
                    <label>Secteur d'activité *</label>
                    <select required>
                      <option value="">Sélectionnez...</option>
                      <option>Télécom</option>
                      <option>Banque / Finance</option>
                      <option>Éducation / Formation</option>
                      <option>Food & Beverage</option>
                      <option>E-commerce</option>
                      <option>Transport</option>
                      <option>Autre</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group-partner">
                    <label>Nom & Prénom *</label>
                    <input type="text" required placeholder="Fatou Sall" />
                  </div>
                  <div className="form-group-partner">
                    <label>Fonction *</label>
                    <input type="text" required placeholder="Responsable Marketing" />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group-partner">
                    <label>Email professionnel *</label>
                    <input type="email" required placeholder="f.sall@entreprise.com" />
                  </div>
                  <div className="form-group-partner">
                    <label>Téléphone *</label>
                    <input type="tel" required placeholder="+221 77 123 45 67" />
                  </div>
                </div>

                <div className="form-group-partner full-width">
                  <label>Package souhaité *</label>
                  <div className="package-radio-group">
                    <label className="radio-package">
                      <input type="radio" name="package" value="basic" />
                      <span>Basic (150K FCFA)</span>
                    </label>
                    <label className="radio-package">
                      <input type="radio" name="package" value="standard" defaultChecked />
                      <span>Standard (400K FCFA) ⭐</span>
                    </label>
                    <label className="radio-package">
                      <input type="radio" name="package" value="premium" />
                      <span>Premium (1M FCFA)</span>
                    </label>
                  </div>
                </div>

                <div className="form-group-partner full-width">
                  <label>Message / Objectifs de campagne</label>
                  <textarea 
                    rows="4" 
                    placeholder="Décrivez vos objectifs, votre cible, vos contraintes..."
                  ></textarea>
                </div>

                <button type="submit" className="btn-submit-partner">
                  Envoyer la demande
                  <ChevronRight size={20} />
                </button>
              </form>
            </div>

            {/* CTA Final */}
            <div className="final-cta-partners">
              <h3>💼 Besoin d'un package sur mesure ?</h3>
              <p>
                Pour les grandes entreprises ou les besoins spécifiques, 
                notre équipe peut créer un package personnalisé.
              </p>
              <button className="btn-contact-direct">
                <MessageCircle size={20} />
                Contacter notre équipe commerciale
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default EspacePartenaires;