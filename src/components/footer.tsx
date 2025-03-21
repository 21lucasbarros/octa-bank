import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import Link from "next/link";

const footerLinks = {
  products: [
    { name: "Banco Pessoal", href: "#" },
    { name: "Banco Empresarial", href: "#" },
    { name: "Banco Privado", href: "#" },
    { name: "Investimentos", href: "#" },
    { name: "Cartão Black", href: "#" },
  ],
  company: [
    { name: "Sobre Nós", href: "#" },
    { name: "Carreiras", href: "#" },
    { name: "Imprensa", href: "#" },
    { name: "Notícias", href: "#" },
    { name: "Contato", href: "#" },
  ],
  legal: [
    { name: "Termos", href: "#" },
    { name: "Privacidade", href: "#" },
    { name: "Cookies", href: "#" },
    { name: "Licenças", href: "#" },
    { name: "Configurações", href: "#" },
  ],
  support: [
    { name: "Central de Ajuda", href: "#" },
    { name: "FAQs", href: "#" },
    { name: "Segurança", href: "#" },
    { name: "Recuperação de Conta", href: "#" },
    { name: "Download do App", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6">OCTA BANK</h2>
            <p className="text-gray-400 mb-6 max-w-md">
              Redefinindo o banco de luxo para a elite moderna. Experimente
              serviços financeiros incomparáveis, adaptados ao seu estilo de
              vida.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FacebookIcon />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <TwitterIcon />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <InstagramIcon />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <LinkedinIcon />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Produtos</h3>
            <ul className="space-y-4">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Empresa</h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Suporte</h3>
            <ul className="space-y-4">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">
              © {new Date().getFullYear()} OCTA BANK. Todos os direitos
              reservados.
            </p>
            <div className="flex gap-8">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
