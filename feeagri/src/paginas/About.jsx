import React from "react";
import Header from "../componentes/Header";
import "../styles/HeaderSecundario.scss";
import "../styles/About.scss";
import Footer from '../componentes/Footer';

export default function About() {
  return (
    <div>
      <Header />
      <div className="HeaderSecundario">
        <div className="links">
          <h3>
            <a href="">Home</a> | <a href="">About</a>
          </h3>
        </div>
        <div className="container">
          <h2>Sobre Nós</h2>
          <p>A FEEAGRI foi criada com o propósito de unir e representar os estudantes de Agronomia em nível nacional, oferecendo uma plataforma para o desenvolvimento e a valorização dessa importante área do conhecimento. A organização visa promover debates, eventos e ações que impactam positivamente a sociedade, além de fomentar a troca de experiências, a capacitação técnica e o </p>
        </div>
      </div>
      <main>
        <div className="containerAbout">
          <h2>Quem somos?</h2>
          <p>A FEEAGRI foi criada com o propósito de unir e representar os estudantes de Agronomia em nível nacional, oferecendo uma plataforma para o desenvolvimento e a valorização dessa importante área do conhecimento. A organização visa promover debates, eventos e ações que impactam positivamente a sociedade, além de fomentar a troca de experiências, a capacitação técnica e o fortalecimento da atuação dos futuros profissionais do setor. Buscamos influenciar políticas públicas relacionadas ao campo da Agronomia e contribuir para a inovação e sustentabilidade no setor agrícola, tornando-nos uma referência na formação de líderes comprometidos com o desenvolvimento social e ambiental.</p>
          <h2>Nossa Missão, Visão e Valores</h2>
          <p>Missão: Unir e representar estudantes de Agronomia, promovendo o desenvolvimento acadêmico, técnico e humano por meio de ações que fomentem a formação de profissionais qualificados e comprometidos com o futuro do setor agrícola. Visão: Ser reconhecida como a principal entidade estudantil de Agronomia no Brasil, promovendo a inovação, sustentabilidade e o fortalecimento da atuação profissional no setor.</p>
          <h2>Nossa história</h2>
          <p>A FEEAGRI foi fundada em [ano de fundação] por um grupo de estudantes de Agronomia que acreditavam na importância de uma representação forte e ativa da classe estudantil. O objetivo inicial era criar uma plataforma que unisse os futuros profissionais da Agronomia em todo o Brasil, promovendo a troca de experiências e o desenvolvimento de ações que impactassem diretamente o setor agrícola e a sociedade. Desde então, a organização tem se dedicado a fortalecer a formação acadêmica e técnica dos estudantes, preparando-os para os desafios do mercado de trabalho.</p>
          <p>Ao longo dos anos, a FEEAGRI tem se consolidado como um espaço essencial para o aprimoramento das competências dos estudantes. Através de congressos, eventos, workshops e parcerias estratégicas com instituições de ensino, empresas e órgãos governamentais, a FEEAGRI tem proporcionado aos seus membros a oportunidade de aprofundar seus conhecimentos, ampliar seu networking e se engajar ativamente em questões que impactam a Agronomia e o agronegócio nacional.</p>
          <p>Com o passar do tempo, a FEEAGRI se tornou uma referência na formação de líderes comprometidos com a inovação e a sustentabilidade no setor agrícola. Nossa história é marcada pela constante busca por inovação e pelo compromisso com a educação, com o desenvolvimento social e ambiental, consolidando nossa atuação como uma organização que contribui significativamente para o futuro da Agronomia no Brasil.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
