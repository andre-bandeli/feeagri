import React from "react";
import Header from "../componentes/Header";
import "../styles/HeaderSecundario.scss";
import NewsletterComponent from "../componentes/NewsletterComponent";

export default function Newsletter() {
  return (
    <div>
         <Header />
            <div className="HeaderSecundario">
              <div className="links">
                <h3> <a href="">Home</a> | <a href="">Newsletter</a></h3>
              </div>
                <div className="container">
                <h2>Acompanhe nossa newsletter</h2>
                <p>A FEEAGRI foi criada com o propósito de unir e representar os estudantes de Agronomia em nível nacional, oferecendo uma plataforma para o desenvolvimento e a valorização dessa importante área do conhecimento. A organização visa promover debates, eventos e ações que impactam positivamente a sociedade, além de fomentar a troca de experiências, a capacitação técnica e o fortalecimento da atuação dos futuros profissionais do setor. A FEEAGRI busca, ainda, influenciar as políticas públicas relacionadas ao campo da Agronomia e contribuir para a inovação e sustentabilidade no setor agrícola, tornando-se uma referência na formação de líderes comprometidos com o desenvolvimento social e ambiental.</p>
                </div>
              </div>
            <main>
            <NewsletterComponent />
            </main>
    </div>
  )
}
