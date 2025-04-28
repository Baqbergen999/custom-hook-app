import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Description from './Desc';

const people = [
  {
    iin: "010101500123",
    name: "Асанов Ернар",
    dob: "01.01.2001",
    address: "Астана қ.",
    photo: "https://static.tildacdn.com/tild6138-6632-4235-b466-613934343134/12.jpg",
    services: {
      family: {
        married: true,
        children: 2,
      },
      education: {
        level: "Жоғары",
        institution: "Қазақ Ұлттық Университеті",
        program: "Компьютерлік ғылымдар",
      },
      job: {
        position: "Бағдарламашы",
        company: "Tech Ltd.",
      },
      health: {
        bloodType: "О+",
        allergies: "Жоқ",
      },
      finance: {
        income: 150000,
        taxPaid: 30000,
      },
      legal: {
        lawyer: "Жанар Б.",
        caseStatus: "Шешілмеген",
      },
      socialSupport: {
        assistanceType: "Жәрдемақы",
        amount: 5000,
      },
      insurance: {
        policyNumber: "123456789",
        expiryDate: "01.01.2026",
      },
    },
  },
  {
    iin: "020202600456",
    name: "Мұратова Айгерім",
    dob: "02.02.2002",
    address: "Алматы қ.",
    photo: "https://static.tildacdn.com/tild6661-6236-4734-b439-313863366466/000001.jpg",
    services: {
      family: {
        married: false,
        children: 0,
      },
      education: {
        level: "Колледж",
        institution: "Алматы колледжі",
        program: "Дизайн",
      },
      job: {
        position: "Дизайнер",
        company: "Art Studio",
      },
      health: {
        bloodType: "А-",
        allergies: "Тозаңға аллергия",
      },
      finance: {
        income: 80000,
        taxPaid: 15000,
      },
      legal: {
        lawyer: "Нұрлан Т.",
        caseStatus: "Қаралуда",
      },
      socialSupport: {
        assistanceType: "Бала күтіміне байланысты жәрдемақы",
        amount: 10000,
      },
      insurance: {
        policyNumber: "987654321",
        expiryDate: "10.10.2025",
      },
    },
  },
];

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/service/:type" element={<ServicePage />} />
        </Routes>
      </div>
    </Router>
  );
}

function HomePage() {
  return (
    <div>
      <Header></Header>
      <div className="cards">
        <ServiceCard icon="👪" title="Семья" type="family" image="https://via.placeholder.com/150" />
        <ServiceCard icon="📚" title="Білім" type="education" image="https://via.placeholder.com/150" />
        <ServiceCard icon="💼" title="Жұмыс" type="job" image="https://via.placeholder.com/150" />
        <ServiceCard icon="🩺" title="Денсаулық" type="health" image="https://via.placeholder.com/150" />
        <ServiceCard icon="💰" title="Қаржы" type="finance" image="https://via.placeholder.com/150" />
        <ServiceCard icon="⚖️" title="Құқық" type="legal" image="https://via.placeholder.com/150" />
        <ServiceCard icon="🤝" title="Әлеуметтік көмек" type="socialSupport" image="https://via.placeholder.com/150" />
        <ServiceCard icon="🛡️" title="Сақтандыру" type="insurance" image="https://via.placeholder.com/150" />
      </div>
      <Description></Description>
    </div>
  );
}

function ServiceCard({ icon, title, type, image }) {
  return (
    <Link to={`/service/${type}`} className="card">
      <div className="card-image">
        <img src={image} alt={title} />
      </div>
      <div className="card-content">
        <span className="icon">{icon}</span>
        <h3>{title}</h3>
      </div>
    </Link>
  );
}

function ServicePage() {
  const { type } = useParams();
  const [iin, setIin] = useState("");
  const [person, setPerson] = useState(null);

  const handleSearch = () => {
    const found = people.find((p) => p.iin === iin);
    setPerson(found || null);
  };

  return (
    <div className="service-page">
      <h2>{type === 'family' ? 'Семья қызметі' : 
            type === 'education' ? 'Білім қызметі' : 
            type === 'job' ? 'Жұмыс қызметі' : 
            type === 'health' ? 'Денсаулық қызметі' : 
            type === 'finance' ? 'Қаржы қызметі' : 
            type === 'legal' ? 'Құқық қызметі' : 
            type === 'socialSupport' ? 'Әлеуметтік көмек' : 
            type === 'insurance' ? 'Сақтандыру' : 'Қызмет'}</h2>
      <input
        className="iin-input"
        value={iin}
        onChange={(e) => setIin(e.target.value)}
        placeholder="ЖСН енгізіңіз"
      />
      <button onClick={handleSearch}>Іздеу</button>

      {person && (
        <div className="person-info">
          <img src={person.photo} alt={person.name} className="person-photo" />
          <h3>{person.name}</h3>
          <p>Туған күні: {person.dob}</p>
          <p>Мекенжай: {person.address}</p>
          
          {type === 'family' && (
            <div>
              <p>Отбасылық жағдай: {person.services.family.married ? 'Үйленген' : 'Үйленбеген'}</p>
              <p>Балалар саны: {person.services.family.children}</p>
            </div>
          )}
          
          {type === 'education' && (
            <div>
              <p>Білім деңгейі: {person.services.education.level}</p>
              <p>Оқитын оқу орны: {person.services.education.institution}</p>
              <p>Бағдарлама: {person.services.education.program}</p>
            </div>
          )}

          {type === 'job' && (
            <div>
              <p>Қызметі: {person.services.job.position}</p>
              <p>Компания: {person.services.job.company}</p>
            </div>
          )}

          {type === 'health' && (
            <div>
              <p>Қан тобы: {person.services.health.bloodType}</p>
              <p>Аллергиялары: {person.services.health.allergies}</p>
            </div>
          )}

          {type === 'finance' && (
            <div>
              <p>Табыс: {person.services.finance.income} тг</p>
              <p>Төленген салық: {person.services.finance.taxPaid} тг</p>
            </div>
          )}

          {type === 'legal' && (
            <div>
              <p>Адвокат: {person.services.legal.lawyer}</p>
              <p>Іс жағдайы: {person.services.legal.caseStatus}</p>
            </div>
          )}

          {type === 'socialSupport' && (
            <div>
              <p>Көмек түрі: {person.services.socialSupport.assistanceType}</p>
              <p>Сомасы: {person.services.socialSupport.amount} тг</p>
            </div>
          )}

          {type === 'insurance' && (
            <div>
              <p>Полис нөмірі: {person.services.insurance.policyNumber}</p>
              <p>Мерзімі: {person.services.insurance.expiryDate}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
