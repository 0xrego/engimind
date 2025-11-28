import Section from "@/components/Section";

export const metadata = {
  title: "Política de Privacidade",
  description: "Política de privacidade e proteção de dados da ENGIMIND.",
};

export default function Privacy() {
  return (
    <>
      {/* Header */}
      <section className="bg-white pt-24 pb-12">
        <div className="container-editorial">
          <div className="max-w-3xl">
            <p className="text-caption mb-4">Legal</p>
            <h1 className="text-display mb-8">
              Política de Privacidade
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <Section background="white" spacing="default">
        <div className="max-w-3xl">
          <div className="prose prose-lg max-w-none">
            <h2>Titularidade do domínio</h2>
            <p>
              O presente sítio de internet (website) www.engimind.com é
              propriedade da &quot;Engimind Consultores em Engenharia e Planeamento
              Lda&quot;, doravante designada pela forma ENGIMIND, com sede na Avenida
              Defensores de Chaves, nº 4, 1000-120 Lisboa, registada na
              Conservatória do Registo Comercial de Lisboa sob o número único de
              matrícula e pessoa coletiva 507783727, com capital social de
              10.000,00€.
            </p>

            <h2>Proteção de Dados Pessoais</h2>
            <p>
              A ENGIMIND está fortemente empenhada em respeitar a privacidade dos
              seus utilizadores. Por este motivo, elaborou a seguinte política
              para informar devidamente como o site funciona e como a informação
              pessoal é tratada, nos termos da legislação nacional e europeia,
              nomeadamente para efeitos de cumprimento do Regulamento Geral de
              Proteção de Dados.
            </p>

            <h2>Recolha de Dados</h2>
            <p>
              O titular dos dados, ao utilizar este site, está a declarar que
              autoriza expressamente a recolha e atualização dos seus dados de
              contacto (nome completo, email, contacto telefónico e data de
              nascimento, entre outros), para eventual integração nos ficheiros da
              ENGIMIND com a finalidade de relações de prestação de serviços.
            </p>

            <h2>Direitos do Titular</h2>
            <p>
              O titular dos dados tem o direito de aceder aos dados conservados,
              bem como de solicitar a limitação, retificação, oposição ou
              apagamento dos mesmos quando, entre outros fundamentos legais, os
              dados de contacto sejam inexatos ou deixem de ser necessários para a
              finalidade que motivou a sua recolha.
            </p>

            <h2>Cookies</h2>
            <p>
              Utilizamos cookies no nosso website. Ao navegar, será solicitada a
              sua aceitação da presente política e consequente utilização de
              acordo com as condições descritas. Quando visitar o nosso site, um
              pequeno ficheiro de texto (Cookie) será criado e gravado no disco do
              seu computador.
            </p>

            <h2>Contactos</h2>
            <p>
              Para o exercício dos seus direitos e outras questões adicionais que
              tenha em relação à proteção de dados, poderá contactar por escrito a
              ENGIMIND através dos seguintes meios:
            </p>
            <ul>
              <li>Email: engimind@engimind.com</li>
              <li>Carta: Avenida Defensores de Chaves, nº 4, 1000-120 Lisboa</li>
              <li>Telefone: (+351) 218 420 748</li>
            </ul>

            <h2>Autoridade de Controlo</h2>
            <p>
              Informamos ainda que poderá apresentar reclamação junto da Comissão
              Nacional de Proteção de Dados, caso considere que os seus direitos
              não foram devidamente salvaguardados. Para mais informações poderá
              consultar: https://www.cnpd.pt/
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
