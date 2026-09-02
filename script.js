/* ==========================================================================
   WISDOM ELITES LTD COMPANY - Interactive Script
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const translations = {
    'Follow us:': 'Suivez-nous :',
    'Mon-Fri: 8:30am - 5:30pm': 'Lun-Ven : 8h30 - 17h30',
    'Call:': 'Appelez :',
    'Home': 'Accueil',
    'Company': 'Entreprise',
    'Overview': 'Apercu',
    'Managing Partner Message': 'Message du directeur general',
    'Competencies': 'Competences',
    'Advisory & Support': 'Conseil et assistance',
    'Studies': 'Etudes',
    'Training': 'Formation',
    'Audit': 'Audit',
    'Team': 'Equipe',
    'Our Team': 'Notre equipe',
    'Join Our Team': 'Rejoignez notre equipe',
    'Open Application': 'Candidature spontanee',
    'Events': 'Evenements',
    'Contact': 'Contact',
    'Technical Support': 'Support technique',
    'Contact Us': 'Contactez-nous',
    'Let’s Talk About Your Project': 'Parlons de votre projet',
    'About Our Firm': 'A propos de notre entreprise',
    'Company Overview': 'Presentation de l entreprise',
    'Our Core Competencies': 'Nos competences cles',
    'Diagnostic Excellence': 'Excellence diagnostique',
    'Studies & Research': 'Etudes et recherche',
    'Capacity Building': 'Renforcement des capacites',
    'Training & Development': 'Formation et developpement',
    'Assurance & Review': 'Assurance et evaluation',
    'Audit Services': 'Services d audit',
    'Knowledge Sharing': 'Partage des connaissances',
    'Events & Seminars': 'Evenements et seminaires',
    'Support Center': 'Centre de support',
    'Career Opportunities': 'Opportunites de carriere',
    'Nzema Essiama, branch nzema Asasetre, Ghanaik Filling Station, Nzema, Ghana': 'Aiyinasi, pres de la station Mobik, Nzema, Ghana',
    'Get In Touch': 'Nous contacter',
    'Our Services': 'Nos services',
    'Learn More': 'En savoir plus',
    'Company Profile': 'Profil de l entreprise',
    'Core Competencies': 'Competences cles',
    'Read Full Message': 'Lire le message complet',
    'Our Partners': 'Nos partenaires',
    'Trusted Electrical Sector Partners': 'Partenaires de confiance du secteur electrique',
    'Office Address': 'Adresse du bureau',
    'Telephone': 'Telephone',
    'Working Hours': 'Heures de travail',
    'Monday-Friday, 8:30am - 5:30pm': 'Lundi-vendredi, 8h30 - 17h30',
    'Electrical Engineering': 'Ingenierie electrique',
    'Building Construction': 'Construction de batiments',
    'Energy Services': 'Services energetiques',
    'Security & Labour Services': 'Securite et main-d oeuvre',
    'Electrical Installation & Maintenance': 'Installation et maintenance electriques',
    'Civil Engineering & Construction': 'Genie civil et construction',
    'Energy Commission & ECG Contractor': 'Commission de l energie et entrepreneur ECG',
    'Access Control & Video Intercom': 'Controle d acces et interphone video',
    'Electricity Company of Ghana': 'Compagnie d electricite du Ghana',
    'Energy Commission Ghana': 'Commission de l energie du Ghana',
    'Contact Information': 'Coordonnees',
    'Request a Consultation': 'Demander une consultation',
    'Submit Request': 'Envoyer la demande',
    'Project / Inquiry Details': 'Details du projet / de la demande',
    'Required Service': 'Service requis',
    'Full Name': 'Nom complet',
    'Email Address': 'Adresse e-mail',
    'Consulting & Advisory': 'Conseil et assistance',
    'Organizational Audit': 'Audit organisationnel',
    'Diagnostic Studies & Surveys': 'Etudes diagnostiques et enquetes',
    'Training & Human Resources': 'Formation et ressources humaines',
    'Financial & Industrial Engineering': 'Ingenierie financiere et industrielle',
    'Civil Engineering & Building Construction': 'Genie civil et construction de batiments',
    'Recruitment & Labour Hiring': 'Recrutement et embauche de main-d oeuvre',
    'Hikvision Access Control & Video Intercom': 'Controle d acces Hikvision et interphone video',
    'Describe your requirements or questions...': 'Decrivez vos besoins ou vos questions...',
    'name@company.com': 'nom@entreprise.com',
    'e.g. John Doe': 'ex. Jean Dupont',
    'Electrical engineering, civil engineering, construction, energy, recruitment, and security installation services in Nzema.': 'Services d ingenierie electrique, de genie civil, de construction, d energie, de recrutement et d installation de securite a Nzema.'
    , 'Electrical Engineering & Construction Services': 'Services d ingenierie electrique et de construction'
    , 'Reliable Technical Services for Homes and Businesses': 'Services techniques fiables pour les particuliers et les entreprises'
    , 'Professional electrical engineering, civil engineering, building construction, energy, recruitment, and security installation services in Nzema.': 'Services professionnels d ingenierie electrique, de genie civil, de construction, d energie, de recrutement et d installation de securite a Nzema.'
    , 'Value Creation Partner': 'Partenaire de creation de valeur'
    , 'Empowering Businesses & Organizations': 'Renforcer les entreprises et les organisations'
    , 'We provide strategic decision data, capacity building, and financial engineering designed for long-term growth and success.': 'Nous fournissons des donnees strategiques, le renforcement des capacites et de l ingenierie financiere pour une croissance durable et la reussite.'
    , 'Proven National & International Track Record': 'Une experience nationale et internationale reconnue'
    , 'Trusted Institutional & Corporate Partner': 'Partenaire institutionnel et corporatif de confiance'
    , 'Approved by FDFP and chosen by major global institutions including World Bank, Proinvest, BIO, and CDC PEPFAR.': 'Agre par le FDFP et choisi par de grandes institutions internationales telles que la Banque mondiale, Proinvest, BIO et CDC PEPFAR.'
    , 'A Firm Dedicated to Creating Value for Its Clients': 'Un cabinet dedie a la creation de valeur pour ses clients'
    , 'We continuously strive to deliver high value-added solutions to private companies, public entities, and international institutions.': 'Nous nous efforcons constamment de fournir des solutions a forte valeur ajoutee aux entreprises privees, aux entites publiques et aux institutions internationales.'
    , 'Areas of Intervention': 'Domaines d intervention'
    , 'Our Core Pillars of Expertise': 'Nos principaux domaines d expertise'
    , 'We offer tailored solutions designed to strengthen organizational capacity and facilitate sustainable growth.': 'Nous proposons des solutions adaptees pour renforcer les capacites organisationnelles et favoriser une croissance durable.'
    , 'Leadership Outlook': 'Vision de la direction'
    , 'Message from the Managing Partner': 'Message du directeur general'
    , 'Key Figures & Impact': 'Chiffres cles et impact'
    , 'Track Record': 'Bilan'
    , 'New Challenges Addressed': 'Nouveaux defis releves'
    , 'Handled annually with custom solutions': 'Traites chaque annee avec des solutions adaptees'
    , 'R&D Investment': 'Investissement en R&D'
    , 'Of annual turnover reinvested in innovation': 'Du chiffre d affaires annuel reinvesti dans l innovation'
    , 'Training Sessions': 'Sessions de formation'
    , 'Organized over the last three years': 'Organisees au cours des trois dernieres annees'
    , 'Professionals Trained': 'Professionnels formes'
    , 'Empowered across various industries': 'Accompagnes dans divers secteurs'
    , 'Tailored Solutions': 'Solutions adaptees'
    , 'Featured Services & Solutions': 'Services et solutions a la une'
    , 'We offer comprehensive services designed to foster long-term corporate partnerships.': 'Nous offrons des services complets pour favoriser des partenariats durables.'
    , 'All Services': 'Tous les services'
    , 'Surveys & Studies': 'Enquetes et etudes'
    , 'Finance & Industry': 'Finance et industrie'
    , 'Training & HR': 'Formation et ressources humaines'
    , 'Since January 2017': 'Depuis janvier 2017'
    , 'Company Profile & History': 'Profil et histoire du cabinet'
    , 'Competitive Advantages': 'Avantages concurrentiels'
    , 'Corporate Philosophy': 'Philosophie de l entreprise'
    , 'Our Vision & Core Values': 'Notre vision et nos valeurs fondamentales'
    , 'Professionalism': 'Professionnalisme'
    , 'Quality': 'Qualite'
    , 'Performance': 'Performance'
    , 'Integrity': 'Integrite'
    , 'Integrity & Probity': 'Integrite et probite'
    , 'Punctuality': 'Ponctualite'
    , 'Operational Team': 'Equipe operationnelle'
    , 'Meet Our Experts & Project Leaders': 'Decouvrez nos experts et chefs de projet'
    , 'Our multi-disciplinary team brings together experienced leaders, strategy project managers, and technical specialists.': 'Notre equipe pluridisciplinaire rassemble des dirigeants experimentes, des chefs de projet et des specialistes techniques.'
    , 'Subscribe to receive updates on corporate training sessions and insights.': 'Inscrivez-vous pour recevoir des informations sur nos formations et nos analyses.'
    , 'Quick Links': 'Liens rapides'
    , 'Featured Services': 'Services a la une'
    , 'Diagnostic Studies': 'Etudes diagnostiques'
    , 'Strategic Audit': 'Audit strategique'
    , 'Management Consulting': 'Conseil en management'
    , 'Corporate Training': 'Formation en entreprise'
    , 'Financial Engineering': 'Ingenierie financiere'
    , 'All rights reserved. English Translation & Web Application.': 'Tous droits reserves. Traduction anglaise et application web.'
    , 'Service Areas': 'Domaines de service'
    , 'Practical Advisory for Sustainable Growth': 'Conseil pratique pour une croissance durable'
    , 'Strategy': 'Strategie'
    , 'Strategic Advisory': 'Conseil strategique'
    , 'Request Support': 'Demander de l assistance'
    , 'Operations': 'Operations'
    , 'Operational Improvement': 'Amelioration operationnelle'
    , 'Discuss Needs': 'Discuter de vos besoins'
    , 'Governance': 'Gouvernance'
    , 'Institutional Strengthening': 'Renforcement institutionnel'
    , 'Book Consultation': 'Reserver une consultation'
    , 'What We Deliver': 'Ce que nous proposons'
    , 'Evidence-Based Studies for Better Decisions': 'Etudes fondees sur des preuves pour de meilleures decisions'
    , 'Research': 'Recherche'
    , 'Customer Satisfaction Surveys': 'Enquetes de satisfaction client'
    , 'Ask for a Survey': 'Demander une enquete'
    , 'Assessment': 'Evaluation'
    , 'Market & Sector Studies': 'Etudes de marche et sectorielles'
    , 'Request Analysis': 'Demander une analyse'
    , 'Planning': 'Planification'
    , 'Operational Diagnostics': 'Diagnostics operationnels'
    , 'Discuss Your Project': 'Discuter de votre projet'
    , 'Audit Focus': 'Focus audit'
    , 'Independent Review for Better Governance': 'Une evaluation independante pour une meilleure gouvernance'
    , 'Control': 'Controle'
    , 'Operational Audit': 'Audit operationnel'
    , 'Book Review': 'Reserver une evaluation'
    , 'Compliance': 'Conformite'
    , 'Compliance Review': 'Evaluation de conformite'
    , 'Ask a Question': 'Poser une question'
    , 'Performance Assessment': 'Evaluation de la performance'
    , 'Share Your Profile With WISDOM ELITES LIMITED COMPANY': 'Partagez votre profil avec WISDOM ELITES LIMITED COMPANY'
    , 'Why Join Us': 'Pourquoi nous rejoindre'
    , 'Experience': 'Experience'
    , 'Professional Growth': 'Developpement professionnel'
    , 'Impact': 'Impact'
    , 'Meaningful Projects': 'Projets porteurs de sens'
    , 'Teamwork': 'Travail en equipe'
    , 'Collaborative Environment': 'Environnement collaboratif'
    , 'Submit Your Interest': 'Soumettre votre candidature'
    , 'Application Form': 'Formulaire de candidature'
    , 'Area of Interest': 'Domaine d interet'
    , 'Tell Us About Yourself': 'Parlez-nous de vous'
    , 'Submit Application': 'Envoyer la candidature'
    , 'Upcoming Focus': 'Prochaines activites'
    , 'Recent & Upcoming Engagements': 'Activites recentes et a venir'
    , 'Workshop': 'Atelier'
    , 'Leadership & Governance Forum': 'Forum sur le leadership et la gouvernance'
    , 'Register Interest': 'S inscrire'
    , 'Seminar': 'Seminaire'
    , 'Capacity Building Roundtable': 'Table ronde sur le renforcement des capacites'
    , 'Get Details': 'Obtenir les details'
    , 'Conference': 'Conference'
    , 'Strategic Performance Conference': 'Conference sur la performance strategique'
    , 'Request Invitation': 'Demander une invitation'
    , 'Our Experts': 'Nos experts'
    , 'Work With Us': 'Travailler avec nous'
    , 'How We Help': 'Comment nous aidons'
    , 'Reliable Assistance When You Need It': 'Une assistance fiable quand vous en avez besoin'
    , 'Response': 'Reponse'
    , 'Quick Follow-up': 'Suivi rapide'
    , 'Send a Message': 'Envoyer un message'
    , 'Guidance': 'Orientation'
    , 'Project Guidance': 'Accompagnement de projet'
    , 'Request Guidance': 'Demander un accompagnement'
    , 'Coordination': 'Coordination'
    , 'Service Coordination': 'Coordination des services'
    , 'Speak to Us': 'Parler avec nous'
    , 'Learn About Our Firm': 'En savoir plus sur notre cabinet'
    , 'Thank you! Your message has been sent to WISDOM ELITES LTD COMPANY.': 'Merci ! Votre message a ete envoye a WISDOM ELITES LTD COMPANY.'
    , 'Successfully subscribed to WISDOM ELITES LTD COMPANY newsletter!': 'Inscription reussie a la newsletter de WISDOM ELITES LTD COMPANY !'
    , 'Your email address': 'Votre adresse e-mail'
    , 'About Us': 'A propos de nous'
    , 'Explore Our Expertise': 'Decouvrir notre expertise'
    , 'Our Strengths': 'Nos points forts'
    , 'Experienced senior experts and project leaders': 'Experts seniors et chefs de projet experimentes'
    , 'Adaptation to institutional and technical constraints': 'Adaptation aux contraintes institutionnelles et techniques'
    , 'Strong regional and international project exposure': 'Solide experience regionale et internationale des projets'
    , 'Balanced quality, cost, and delivery performance': 'Equilibre entre qualite, cout et performance de livraison'
    , 'Request an Audit': 'Demander un audit'
    , 'See Our Studies': 'Voir nos etudes'
    , 'We deliver Energy Commission and ECG contractor services for domestic, commercial, and industrial installations.': 'Nous fournissons des services d entrepreneur de la Commission de l energie et d ECG pour les installations domestiques, commerciales et industrielles.'
    , 'Assess internal processes, efficiency, and the effectiveness of controls that support daily operations.': 'Nous evaluons les processus internes, l efficacite et l efficacite des controles qui soutiennent les operations quotidiennes.'
    , 'Ensure that policies, procedures, and practices align with regulatory and institutional requirements.': 'Nous veillons a ce que les politiques, procedures et pratiques soient conformes aux exigences reglementaires et institutionnelles.'
    , 'Evaluate execution quality and identify practical steps to improve results and resilience.': 'Nous evaluons la qualite de l execution et identifions des mesures pratiques pour ameliorer les resultats et la resilience.'
    , 'WISDOM ELITES LIMITED COMPANY regularly hosts and participates in events focused on management, governance, leadership, and organizational development.': 'WISDOM ELITES LIMITED COMPANY organise et participe regulierement a des evenements consacres au management, a la gouvernance, au leadership et au developpement organisationnel.'
    , 'A multidisciplinary group of consultants, auditors, project managers, and trainers who bring experience, rigor, and practical insight to every assignment.': 'Un groupe pluridisciplinaire de consultants, auditeurs, chefs de projet et formateurs qui apporte experience, rigueur et expertise pratique a chaque mission.'
    , 'A multidisciplinary consultancy established in 2017, supporting institutions, private companies, and development partners with rigorous, practical, and locally grounded advisory services.': 'Un cabinet de conseil pluridisciplinaire etabli en 2017, qui accompagne les institutions, les entreprises privees et les partenaires au developpement avec des services de conseil rigoureux, pratiques et adaptes au contexte local.'
    , 'Profile & History': 'Profil et histoire'
    , 'What Sets Us Apart': 'Ce qui nous distingue'
    , 'Our Mission': 'Notre mission'
    , 'Helping Organizations Perform Better': 'Aider les organisations a mieux performer'
    , 'From our inception, WISDOM ELITES LIMITED COMPANY has built a reputation for delivering reliable studies, audits, consulting assignments, and training programs tailored to public and private sector needs. We combine analytical discipline with a strong understanding of field realities.': 'Depuis sa creation, WISDOM ELITES LIMITED COMPANY s est forge une reputation en fournissant des etudes, audits, missions de conseil et programmes de formation fiables, adaptes aux besoins des secteurs public et prive. Nous associons rigueur analytique et connaissance approfondie des realites du terrain.'
    , 'We place rigor, ethics, and delivery quality at the heart of every engagement.': 'Nous plaçons la rigueur, l ethique et la qualite de livraison au coeur de chaque mission.'
    , 'Our solutions are tailored, documented, and aligned with client expectations.': 'Nos solutions sont adaptees, documentees et alignees sur les attentes des clients.'
    , 'We focus on practical results that strengthen decision-making and execution.': 'Nous nous concentrons sur des resultats pratiques qui renforcent la prise de decision et l execution.'
    , 'Confidentiality, probity, and long-term trust remain central to our approach.': 'La confidentialite, la probite et la confiance a long terme restent au coeur de notre approche.'
    , 'The quality of management is central to long-term performance. We work with leaders to build the capabilities, structures, and discipline needed to sustain growth and resilience.': 'La qualite du management est au coeur de la performance a long terme. Nous accompagnons les dirigeants dans la construction des capacites, structures et disciplines necessaires pour maintenir la croissance et la resilience.'
    , 'Since January 2017, WISDOM ELITES LIMITED COMPANY has stood beside companies, institutions, and development partners to deliver practical solutions that strengthen organizations from the inside out.': 'Depuis janvier 2017, WISDOM ELITES LIMITED COMPANY accompagne les entreprises, institutions et partenaires au developpement en fournissant des solutions pratiques qui renforcent les organisations de l interieur.'
    , 'We welcome spontaneous applications from professionals who want to contribute to our work in strategy, audit, studies, training, and institutional support.': 'Nous accueillons les candidatures spontanees de professionnels souhaitant contribuer a nos travaux en strategie, audit, etudes, formation et appui institutionnel.'
    , 'Apply Now': 'Postuler maintenant'
    , 'Meet the Team': 'Decouvrir l equipe'
    , 'Training Themes': 'Themes de formation'
    , 'Programs Designed for Growth': 'Des programmes conçus pour la croissance'
    , 'Leadership & Management': 'Leadership et management'
    , 'Finance & Accounting': 'Finance et comptabilite'
    , 'HR & Organizational Skills': 'Ressources humaines et competences organisationnelles'
    , 'Book a Session': 'Reserver une session'
    , 'View Advisory Services': 'Voir les services de conseil'
    , 'Join an Event': 'Participer a un evenement'
    , 'View Training': 'Voir les formations'
    , 'Contact Support': 'Contacter le support'
    , 'Need help or have a question about a service, platform, or project? Our support team is available to assist you promptly.': 'Besoin d aide ou une question sur un service, une plateforme ou un projet ? Notre equipe de support est disponible pour vous aider rapidement.'
    , 'We respond promptly to service questions, technical concerns, and request follow-ups.': 'Nous repondons rapidement aux questions sur les services, aux problemes techniques et aux demandes de suivi.'
    , 'Our experts help you clarify project scope, next steps, and the best service path for your needs.': 'Nos experts vous aident a clarifier la portee du projet, les prochaines etapes et le service le mieux adapte a vos besoins.'
    , 'We coordinate between teams and stakeholders to ensure your request is handled smoothly.': 'Nous coordonnons les equipes et les parties prenantes afin que votre demande soit traitee efficacement.'
    , 'Electrical wiring installation, maintenance, and electrical engineering consultancy for domestic, commercial, and industrial clients.': 'Installation et maintenance du cablage electrique, ainsi que conseil en ingenierie electrique pour les clients domestiques, commerciaux et industriels.'
    , 'Civil engineering and building construction works, with sales of building construction goods.': 'Travaux de genie civil et de construction de batiments, avec vente de materiaux de construction.'
    , 'Energy Commission and ECG contractor services, including single-phase and three-phase meter installation.': 'Services d entrepreneur de la Commission de l energie et d ECG, y compris l installation de compteurs monophasés et triphases.'
    , 'Recruitment and labour worker hiring, plus Hikvision access control and video intercom installation.': 'Recrutement et embauche de travailleurs, ainsi qu installation de controle d acces et d interphones video Hikvision.'
    , 'Electrical engineering services for wiring installation, maintenance, and IV/HV transformer installation.': 'Services d ingenierie electrique pour l installation et la maintenance du cablage, ainsi que l installation de transformateurs moyenne et haute tension.'
    , 'Civil engineering, building construction works, and sales of building construction goods.': 'Genie civil, travaux de construction de batiments et vente de materiaux de construction.'
    , 'Domestic, commercial, and industrial energy services, including single-phase and three-phase meter installation.': 'Services energetiques domestiques, commerciaux et industriels, y compris l installation de compteurs monophasés et triphases.'
    , 'Hikvision security installation work, including access control and video intercom systems.': 'Travaux d installation de securite Hikvision, y compris les systemes de controle d acces et d interphone video.'
    , 'Learn Details': 'En savoir plus'
    , 'Highly qualified and experienced senior consultants.': 'Consultants seniors hautement qualifies et experimentes.'
    , 'High adaptability to organizational and technical constraints.': 'Grande capacite d adaptation aux contraintes organisationnelles et techniques.'
    , 'Functional modern infrastructure and equipment.': 'Infrastructure et equipements modernes et fonctionnels.'
    , 'Competitive cost-to-quality ratio.': 'Rapport cout-qualite competitif.'
    , 'Confirmed international project experience (World Bank, Proinvest, BIO, CDC PEPFAR).': 'Experience internationale confirmee sur des projets (Banque mondiale, Proinvest, BIO, CDC PEPFAR).'
    , 'Represented the CDE (Centre for Development of Enterprise - EU/ACP group) in Côte d\'Ivoire (2008–2014).': 'A represente le CDE (Centre pour le developpement de l entreprise - groupe UE/ACP) en Cote d Ivoire (2008-2014).'
    , '“Facing the strategic, economic, social, and technological challenges of the 21st century, every organization is called to performance if it wishes to meet market requirements. In this highly competitive context, management quality becomes an essential success factor.”': '« Face aux defis strategiques, economiques, sociaux et technologiques du XXIe siecle, toute organisation est appelee a la performance si elle souhaite repondre aux exigences du marche. Dans ce contexte hautement concurrentiel, la qualite du management devient un facteur essentiel de succes. »'
  };

  const languageSwitch = document.querySelector('.lang-switch');
  if (!languageSwitch) {
    const topSocial = document.querySelector('.top-social');
    if (topSocial) {
      const switchMarkup = document.createElement('div');
      switchMarkup.className = 'lang-switch';
      switchMarkup.setAttribute('aria-label', 'Choose website language');
      switchMarkup.innerHTML = '<button type="button" data-language="en" aria-pressed="true">EN</button><span aria-hidden="true">|</span><button type="button" data-language="fr" aria-pressed="false">FR</button>';
      topSocial.appendChild(switchMarkup);
    }
  }

  const originalText = new WeakMap();
  const originalAttributes = new WeakMap();
  let currentLanguage = 'en';

  function translateValue(value, language) {
    if (language === 'en') return value;
    return Object.keys(translations)
      .sort((first, second) => second.length - first.length)
      .reduce((result, source) => result.split(source).join(translations[source]), value);
  }

  function translatePage(language) {
    currentLanguage = language === 'fr' ? 'fr' : 'en';
    document.documentElement.lang = currentLanguage;
    document.querySelectorAll('body *:not(script):not(style)').forEach(element => {
      element.childNodes.forEach(node => {
        if (node.nodeType !== Node.TEXT_NODE) return;
        if (!originalText.has(node)) originalText.set(node, node.nodeValue);
        const source = originalText.get(node);
        node.nodeValue = translateValue(source, currentLanguage);
      });
    });

    document.querySelectorAll('[placeholder], [title], [alt], [aria-label], meta[name="description"], title').forEach(element => {
      if (!originalAttributes.has(element)) {
        originalAttributes.set(element, {});
        ['placeholder', 'title', 'alt', 'aria-label', 'content'].forEach(attribute => {
          if (element.hasAttribute(attribute)) originalAttributes.get(element)[attribute] = element.getAttribute(attribute);
        });
        if (element.tagName === 'TITLE') originalAttributes.get(element).textContent = element.textContent;
      }
      const attributes = originalAttributes.get(element);
      Object.keys(attributes).forEach(attribute => {
        if (attribute === 'textContent') element.textContent = translateValue(attributes[attribute], currentLanguage);
        else element.setAttribute(attribute, translateValue(attributes[attribute], currentLanguage));
      });
    });

    document.querySelectorAll('.lang-switch button').forEach(button => {
      const isActive = button.dataset.language === language;
      button.classList.toggle('active', isActive);
      button.setAttribute('aria-pressed', String(isActive));
    });
    localStorage.setItem('wisdomLanguage', currentLanguage);
  }

  document.querySelectorAll('.lang-switch button').forEach(button => {
    button.addEventListener('click', () => translatePage(button.dataset.language));
  });
  translatePage(localStorage.getItem('wisdomLanguage') || 'en');

  // Mobile Navigation Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
      }
    });

    // Close menu when link clicked
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', (event) => {
        const parentItem = link.closest('.menu-item-has-children');
        const isMobile = window.innerWidth <= 992;

        if (parentItem && isMobile) {
          if (!parentItem.classList.contains('open')) {
            event.preventDefault();
            document.querySelectorAll('.menu-item-has-children.open').forEach(item => item.classList.remove('open'));
            parentItem.classList.add('open');
            return;
          }
        }

        navMenu.classList.remove('active');
        const icon = mobileToggle.querySelector('i');
        if (icon) {
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-times');
        }
      });
    });
  }

  // Hero Slider
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.dot');
  let currentSlide = 0;
  let slideInterval;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
    currentSlide = index;
  }

  function nextSlide() {
    let next = (currentSlide + 1) % slides.length;
    showSlide(next);
  }

  function startSlideShow() {
    slideInterval = setInterval(nextSlide, 5000);
  }

  function resetSlideShow() {
    clearInterval(slideInterval);
    startSlideShow();
  }

  if (slides.length > 0) {
    dots.forEach((dot, idx) => {
      dot.addEventListener('click', () => {
        showSlide(idx);
        resetSlideShow();
      });
    });
    startSlideShow();
  }

  // Service Filter Tabs
  const filterBtns = document.querySelectorAll('.filter-btn');
  const serviceCards = document.querySelectorAll('.service-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      serviceCards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.4s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Animated Stats Counter
  const statNumbers = document.querySelectorAll('.stat-number');
  let counted = false;

  function animateStats() {
    const statsSection = document.querySelector('.stats-section');
    if (!statsSection || counted) return;

    const sectionPos = statsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight;

    if (sectionPos < screenPos - 100) {
      counted = true;
      statNumbers.forEach(stat => {
        const target = Number.parseInt(stat.dataset.target, 10);
        let count = 0;
        const speed = target > 500 ? 30 : 25;
        const increment = Math.ceil(target / (1500 / speed));

        const updateCount = () => {
          count += increment;
          if (count >= target) {
            stat.innerText = target + (stat.dataset.suffix || '');
          } else {
            stat.innerText = count + (stat.dataset.suffix || '');
            setTimeout(updateCount, speed);
          }
        };
        updateCount();
      });
    }
  }

  window.addEventListener('scroll', animateStats);
  animateStats();

  // Modal Dialog handling
  const modalOverlay = document.getElementById('modalOverlay');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  const modalClose = document.getElementById('modalClose');

  window.openModal = function (title, contentHtml) {
    if (modalOverlay && modalTitle && modalBody) {
      modalTitle.innerText = translateValue(title, currentLanguage);
      modalBody.innerHTML = translateValue(contentHtml, currentLanguage);
      modalOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  };

  function closeModal() {
    if (modalOverlay) {
      modalOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // Toast Notification
  window.showToast = function (message) {
    let toast = document.getElementById('toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toast';
      toast.className = 'toast';
      document.body.appendChild(toast);
    }
    toast.innerText = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 4000);
  };

  // Contact Form Handling
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast(currentLanguage === 'fr' ? translations['Thank you! Your message has been sent to WISDOM ELITES LTD COMPANY.'] : 'Thank you! Your message has been sent to WISDOM ELITES LTD COMPANY.');
      contactForm.reset();
    });
  }

  // Newsletter Form Handling
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast(currentLanguage === 'fr' ? translations['Successfully subscribed to WISDOM ELITES LTD COMPANY newsletter!'] : 'Successfully subscribed to WISDOM ELITES LTD COMPANY newsletter!');
      newsletterForm.reset();
    });
  }

  // Smooth Navigation Active Link Tracking
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute('id');
      const navLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

      if (navLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
          navLink.classList.add('active');
        }
      }
    });
  });

  // ============================================================
  // Active Page Nav Link Highlighting
  // ============================================================
  (function highlightCurrentPage() {
    const currentFile = window.location.pathname.split('/').pop() || 'index.html';

    // Map each page file to the top-level nav link href it belongs to
    const pageToNavMap = {
      'index.html':            'index.html',
      '':                      'index.html',
      'company.html':          'company.html',
      'managing-partner.html': 'company.html',
      'advisory-support.html': 'advisory-support.html',
      'studies.html':          'advisory-support.html',
      'training.html':         'advisory-support.html',
      'audit.html':            'advisory-support.html',
      'team.html':             'team.html',
      'contact.html':          'contact.html',
      'open-application.html': 'team.html',
      'technical-support.html':'contact.html',
      'events.html':           'events.html',
    };

    const targetHref = pageToNavMap[currentFile];
    if (!targetHref) return;

    // Find the top-level nav link and apply page-active
    const topLinks = document.querySelectorAll('.nav-menu > .menu-header-menu-container > ul > li > a.nav-link, #menu-header-menu > li > a.nav-link');
    topLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === targetHref || href.endsWith('/' + targetHref)) {
        link.classList.add('page-active');
      }
    });

    // Also highlight exact sub-link if on a sub-page
    document.querySelectorAll('.nav-link').forEach(link => {
      const href = link.getAttribute('href');
      if (href === currentFile || href.endsWith('/' + currentFile)) {
        link.classList.add('page-active');
      }
    });
  })();

  // ============================================================
  // Dark / Light Mode Toggle
  // ============================================================
  const themeToggle = document.getElementById('themeToggle');
  const themeLabel = themeToggle ? themeToggle.querySelector('.theme-label') : null;
  const themeIcon  = themeToggle ? themeToggle.querySelector('i') : null;

  function applyTheme(mode) {
    if (mode === 'light') {
      document.body.classList.add('light-mode');
      if (themeToggle) themeToggle.classList.add('is-light');
      if (themeLabel) themeLabel.textContent = 'Light';
      if (themeIcon)  { themeIcon.classList.remove('fa-moon'); themeIcon.classList.add('fa-sun'); }
    } else {
      document.body.classList.remove('light-mode');
      if (themeToggle) themeToggle.classList.remove('is-light');
      if (themeLabel) themeLabel.textContent = 'Dark';
      if (themeIcon)  { themeIcon.classList.remove('fa-sun'); themeIcon.classList.add('fa-moon'); }
    }
    localStorage.setItem('wisdomTheme', mode);
  }

  // Load saved preference
  applyTheme(localStorage.getItem('wisdomTheme') || 'dark');

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const isLight = document.body.classList.contains('light-mode');
      applyTheme(isLight ? 'dark' : 'light');
    });
  }
});
