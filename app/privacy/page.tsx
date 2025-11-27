import Hero from "@/components/Hero";
import Section from "@/components/Section";

export default function Privacy() {
    return (
        <main>
            <Hero
                title="Política de Privacidade"
                subtitle="O nosso compromisso com a proteção dos seus dados."
                backgroundImage="/images/hero-about.jpg"
            />

            <Section>
                <div className="max-w-4xl mx-auto prose prose-slate">
                    <h3>Titularidade do domínio www.engimind.com</h3>
                    <p>
                        O presente sítio da internet (website) www.engimind.com é propriedade da “Engimind – Consultores de Engenharia e Planeamento Lda”, doravante designada pela forma abreviada de ENGIMIND, com sede na Avenida Defensores de Chaves, nº 45, 5º Dto, 1000-120 Lisboa, registada na Conservatória do Registo Comercial de Lisboa sob o número único de matrícula e de pessoa coletiva 507783727, com o capital social de 10.000,00 €.
                    </p>

                    <h3>Objeto e âmbito de aplicação</h3>
                    <p>
                        As presentes Condições Gerais de Contratação e Utilização (“Condições Gerais”) aplicam-se aos visitantes do Site (“Visitantes”). A navegação no Site, implica o conhecimento e a aceitação das presentes Condições Gerais pelos Utilizadores. A ENGIMIND reserva o direito de alterar estas Condições Gerais, sem aviso prévio, sendo que quaisquer alterações às mesmas serão publicadas no Site.
                    </p>

                    <h3>Propriedade intelectual e industrial</h3>
                    <p>
                        Todos os dados, marcas registadas e todo o conteúdo em geral neste site, são da propriedade ou do uso exclusivo da ENGIMIND e estão protegidas nos termos gerais de direito e pela legislação nacional e internacional de protecção da Propriedade Intelectual. A reprodução para uso pessoal é permitida, mas são proibidas as modificações não autorizadas, imitações, empréstimos, alugueres, transmissões ou venda de qualquer conteúdo deste site.
                    </p>

                    <h3>Protecção de Dados Pessoais</h3>
                    <p>
                        A ENGIMIND, está fortemente empenhada em respeitar a privacidade dos seus utilizadores. Por este motivo, elaborou a seguinte Política de Privacidade para o informar devidamente como o site funciona e como a sua informação pessoal é tratada.
                    </p>
                    <p>
                        Qualquer alteração à nossa Política de Privacidade, posterior ao seu envio activo de dados pessoais, e que coloque em causa os fins para os quais os disponibilizou, será do seu conhecimento se para isso nos tiver facultado um meio de contacto.
                    </p>

                    <h3>Direitos do Titular dos Dados</h3>
                    <p>
                        O titular dos dados tem o direito de aceder aos dados conservados, bem como de solicitar a sua limitação, retificação, oposição ou apagamento quando, entre outros fundamentos legais, os dados de contacto sejam inexatos ou deixem de ser necessários para a finalidade que motivou a sua recolha, a qualquer altura e sem qualquer encargo, usando para tal o email que usou para disponibilizar os seus dados pessoais.
                    </p>
                    <p>
                        Para o exercício destes direitos ou outras questões adicionais que tenha relativas à proteção de dados, poderá contactar por escrito a ENGIMIND através dos seguintes meios:
                    </p>
                    <ul>
                        <li>Email: engimind@engimind.com</li>
                        <li>Carta: Avenida Defensores de Chaves, nº 45, 5º Dto, 1000-120 Lisboa</li>
                        <li>Telefone: (+351) 21 000 00 00</li>
                    </ul>

                    <h3>Cookies</h3>
                    <p>
                        Utilizamos cookies no nosso website. Ao navegar, será solicitada a aceitação da presente política e consequente utilização de cookies de acordo com as condições descritas. Quando visitar o nosso site, um pequeno ficheiro de texto (Cookie) é criado e gravado no disco do seu computador. Este ficheiro ao reconhecê-lo, vai permitir-lhe uma maior facilidade e rapidez no acesso, e personalização da página a nível da sua experiência online.
                    </p>
                </div>
            </Section>
        </main>
    );
}
