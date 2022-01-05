import React from 'react';
import CardItem from './CardItem';
import '../styles/Cards.css';

export default function Cards() {
  return (
    <div id="vantagens" className="cards">
      <h2>Automatizando todas as suas tarefas.</h2>
      <div className="cards-container">
        <div className="cards-wrapper">
          <ul className="cards-items">
            <CardItem
              src="/images/sistema-de-gerenciamento-de-conteudo.png"
              text="Mantenha seus dados atualizados em sites de parceiros de forma instantanea."
              label="Gerenciamento de Perfil"
            />
            <CardItem
              src="/images/broom.png"
              text="Seus dados de organização serão limpos e ficarão sempre consistentes com o nosso processo de revisão."
              label="Limpeza de dados"
            />
            <CardItem
              src="/images/coleta-de-dados.png"
              text="Seus dados sincronizados de forma contínua nos motores de buscas por localização da nossa rede de parceiros."
              label="Gerenciamento de dados de localização"
            />
            <CardItem
              src="/images/delete-file.png"
              text="Elimine de forma automatizada registros duplicados."
              label="Exclusão de registros"
            />
            <CardItem
              src="/images/integration.png"
              text="Suas informações obtidas com facilidade nos principais mapas e listas."
              label="Integração"
            />
            <CardItem
              src="/images/star.png"
              text="Gerenciamos de forma automatizada a reputação de sua empresa."
              label="Reputação"
            />
            <CardItem
              src="/images/social-media.png"
              text="Compartilhamento de notícias e ofertas de forma fácil e rápida."
              label="Publicação e Conteúdo"
            />
            <CardItem
              src="/images/notification.png"
              text="Mantenha-se atualizado e informado sobre atualizações e interações com seus locais, bem como detalhes que requerem atenção."
              label="Feed e Alertas"
            />
            <CardItem
              src="/images/support.png"
              text="Qualquer problema, dúvida ou orientação fazemos o suporte e garantimos a solução."
              label="Suporte"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
