import { Link } from "react-router-dom";
import { Heart, Mail, Shield, FileText } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Heart className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg">Brasil Vital Boost</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Seu portal completo de saúde, bem-estar e qualidade de vida. 
              Informações atualizadas sobre as melhores tendências em saúde no Brasil.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-semibold text-sm mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/saude-intestinal" className="text-muted-foreground hover:text-primary transition-colors">
                  Saúde Intestinal
                </Link>
              </li>
              <li>
                <Link to="/emagrecimento" className="text-muted-foreground hover:text-primary transition-colors">
                  Emagrecimento
                </Link>
              </li>
              <li>
                <Link to="/suplementos" className="text-muted-foreground hover:text-primary transition-colors">
                  Suplementos
                </Link>
              </li>
              <li>
                <Link to="/artigos" className="text-muted-foreground hover:text-primary transition-colors">
                  Todos os Artigos
                </Link>
              </li>
            </ul>
          </div>

          {/* Categorias */}
          <div>
            <h3 className="font-semibold text-sm mb-4">Categorias</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/nutricao-personalizada" className="text-muted-foreground hover:text-primary transition-colors">
                  Nutrição Personalizada
                </Link>
              </li>
              <li>
                <Link to="/jejum-intermitente" className="text-muted-foreground hover:text-primary transition-colors">
                  Jejum Intermitente
                </Link>
              </li>
              <li>
                <Link to="/fitness-virtual" className="text-muted-foreground hover:text-primary transition-colors">
                  Fitness Virtual
                </Link>
              </li>
              <li>
                <Link to="/longevidade" className="text-muted-foreground hover:text-primary transition-colors">
                  Longevidade
                </Link>
              </li>
            </ul>
          </div>

          {/* Informações Legais */}
          <div>
            <h3 className="font-semibold text-sm mb-4">Informações</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Shield className="h-4 w-4" />
                <span>Site Seguro</span>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground">
                <FileText className="h-4 w-4" />
                <span>Conteúdo Verificado</span>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>Atualizado Semanalmente</span>
              </li>
            </ul>
            <div className="mt-4 text-xs text-muted-foreground">
              <p>© 2025 Brasil Vital Boost</p>
              <p>Todos os direitos reservados</p>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground text-center">
            <strong>Aviso Legal:</strong> As informações contidas neste site têm caráter informativo e educacional. 
            Sempre consulte um profissional de saúde antes de iniciar qualquer tratamento ou suplementação. 
            Este site pode conter links de afiliados, o que significa que podemos receber uma comissão 
            por compras realizadas através desses links, sem custo adicional para você.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;