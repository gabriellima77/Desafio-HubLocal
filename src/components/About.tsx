import React, { useState } from 'react';
import '../styles/About.css';

type arrayList = Array<boolean>;

export default function About() {
  const [active, setActive] = useState<arrayList>([false, false, false, false]);

  const handleAccordion = (index: number) => {
    setActive((prev) => {
      return prev.map((active, i) => (i === index ? !active : false));
    });
  };

  return (
    <section className="about">
      <h3 className="about-header">ATRAINDO CLIENTES A TODO MOMENTO!</h3>
      <div className="about-container">
        <div className="side-img"></div>
        <div className="text-container">
          <div className="accordion-wrapper">
            <div onClick={() => handleAccordion(0)} className="accordion">
              Análise de Presença
              <i className={`fas fa-chevron-${active[0] ? 'up' : 'down'}`}></i>
            </div>
            <p className={`accordion-text ${active[0] ? 'active' : ''}`}>
              A HubLocal faz com que sua empresa seja encontrada em todos os
              principais mapas da internet.
            </p>
          </div>
          <div className="accordion-wrapper">
            <div onClick={() => handleAccordion(1)} className="accordion">
              Correção de Presença
              <i className={`fas fa-chevron-${active[1] ? 'up' : 'down'}`}></i>
            </div>
            <p className={`accordion-text ${active[1] ? 'active' : ''}`}>
              As informações da sua empresa são atualizadas automaticamentes
              através de funcionalidades de correção e checagem em tempo real.
            </p>
          </div>
          <div className="accordion-wrapper">
            <div onClick={() => handleAccordion(2)} className="accordion">
              Manutenção de Presença
              <i className={`fas fa-chevron-${active[2] ? 'up' : 'down'}`}></i>
            </div>
            <p className={`accordion-text ${active[2] ? 'active' : ''}`}>
              Com a HubLocal é fácil fazer divulgações de promoções, cupons de
              descontos e campanhas regionais de sua empresa sem nenhuma
              complicação.
            </p>
          </div>
          <div className="accordion-wrapper">
            <div onClick={() => handleAccordion(3)} className="accordion">
              Análise de Resultados
              <i className={`fas fa-chevron-${active[3] ? 'up' : 'down'}`}></i>
            </div>
            <p className={`accordion-text ${active[3] ? 'active' : ''}`}>
              Com ferramentas de relatório de inteligência de mercado é possível
              descobrir quais são suas melhores fontes de novos clientes,
              fazendo assim com que seus resultados sejam bem melhores.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
