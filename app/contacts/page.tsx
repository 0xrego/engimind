import Section from "@/components/Section";
import { companyInfo } from "@/content/team";

export const metadata = {
  title: "Contactos",
  description: "Entre em contacto com a ENGIMIND. Escritórios em Lisboa e São Paulo.",
};

export default function Contacts() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white pt-24 pb-12">
        <div className="container-editorial">
          <div className="max-w-3xl">
            <p className="text-caption mb-4">Contactos</p>
            <h1 className="text-display mb-8">
              Vamos conversar
            </h1>
            <p className="text-xl text-[#525252] leading-relaxed">
              Estamos disponíveis para discutir o seu projeto, esclarecer
              dúvidas ou simplesmente trocar ideias sobre mobilidade e
              transportes.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <Section background="white" spacing="large">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Offices */}
          <div>
            <h2 className="text-2xl font-medium mb-12">Escritórios</h2>

            <div className="space-y-8">
              {companyInfo.offices.map((office, index) => (
                <div key={index} className="pb-8 border-b border-[#e5e5e5]">
                  <h3 className="text-xl font-medium mb-4">
                    {office.city}
                    <span className="text-[#a3a3a3] font-normal ml-2">
                      {office.country}
                    </span>
                  </h3>
                  <p className="text-body mb-4">
                    {office.address}
                    <br />
                    {office.postalCode}
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm">
                      <span className="text-[#a3a3a3]">Tel:</span>{" "}
                      <a
                        href={`tel:${office.phone.replace(/\s/g, "")}`}
                        className="hover:text-[#2563eb] transition-colors"
                      >
                        {office.phone}
                      </a>
                    </p>
                    <p className="text-sm">
                      <span className="text-[#a3a3a3]">Email:</span>{" "}
                      <a
                        href={`mailto:${office.email}`}
                        className="hover:text-[#2563eb] transition-colors"
                      >
                        {office.email}
                      </a>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-medium mb-12">Envie-nos uma mensagem</h2>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Nome</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-[#fafafa] border border-transparent focus:border-[#0a0a0a] focus:outline-none transition-colors"
                    placeholder="O seu nome"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-[#fafafa] border border-transparent focus:border-[#0a0a0a] focus:outline-none transition-colors"
                    placeholder="email@exemplo.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Empresa</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-[#fafafa] border border-transparent focus:border-[#0a0a0a] focus:outline-none transition-colors"
                  placeholder="Nome da empresa (opcional)"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Assunto</label>
                <select className="w-full px-4 py-3 bg-[#fafafa] border border-transparent focus:border-[#0a0a0a] focus:outline-none transition-colors">
                  <option value="">Selecione um assunto</option>
                  <option value="project">Novo Projeto</option>
                  <option value="partnership">Parceria</option>
                  <option value="career">Carreiras</option>
                  <option value="other">Outro</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Mensagem
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-[#fafafa] border border-transparent focus:border-[#0a0a0a] focus:outline-none transition-colors resize-none"
                  placeholder="Como podemos ajudar?"
                />
              </div>

              <button type="submit" className="btn-primary w-full md:w-auto">
                Enviar mensagem
              </button>
            </form>
          </div>
        </div>
      </Section>

      {/* Map placeholder */}
      <Section background="light" spacing="none" container="full">
        <div className="h-96 bg-[#e5e5e5] flex items-center justify-center">
          <p className="text-[#a3a3a3]">Mapa</p>
        </div>
      </Section>
    </>
  );
}
