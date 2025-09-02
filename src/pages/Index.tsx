import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTAButton from "@/components/CTAButton";
import { 
  Heart, 
  TrendingUp, 
  Zap, 
  Shield, 
  Clock,
  Users,
  Star,
  ArrowRight
} from "lucide-react";

const Index = () => {
  const featuredArticles = [
    {
      id: 1,
      title: "Saúde Intestinal e Microbioma: A Revolução da Medicina em 2025",
      excerpt: "Descubra como o microbioma intestinal está transformando nossa compreensão sobre saúde, imunidade e bem-estar geral.",
      category: "Saúde Intestinal",
      readTime: "8 min",
      trending: true,
      link: "/saude-intestinal-microbioma"
    },
    {
      id: 2,
      title: "Jejum Intermitente: Guia Completo Baseado em Ciência 2025",
      excerpt: "Tudo o que você precisa saber sobre jejum intermitente, incluindo os métodos mais eficazes e resultados comprovados.",
      category: "Emagrecimento",
      readTime: "12 min",
      trending: true,
      link: "/jejum-intermitente-guia-completo"
    },
    {
      id: 3,
      title: "Nutrição Personalizada: Como Adaptar sua Dieta ao seu DNA",
      excerpt: "A nutrição do futuro já chegou. Aprenda como personalizar sua alimentação baseada em seu perfil genético.",
      category: "Nutrição",
      readTime: "10 min",
      trending: false,
      link: "/nutricao-personalizada"
    }
  ];

  const stats = [
    { icon: Users, value: "50K+", label: "Leitores Mensais" },
    { icon: Star, value: "4.9", label: "Avaliação Média" },
    { icon: Clock, value: "100+", label: "Artigos Publicados" },
    { icon: TrendingUp, value: "95%", label: "Taxa de Satisfação" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-cta-orange/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-success/10 text-success hover:bg-success/20">
              ✨ Tendências de Saúde 2025
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Brasil Vital Boost
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Seu portal completo de <strong>saúde, bem-estar e qualidade de vida</strong>. 
              Descubra as tendências mais atuais em nutrição, fitness e suplementação 
              baseadas em ciência.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <CTAButton 
                href="https://app.monetizze.com.br/r/APZ25502897"
                text="🔥 Controle seu Apetite Hoje"
                variant="cta"
                size="xl"
              />
              <Button variant="cta-primary" size="xl" asChild>
                <Link to="/artigos">
                  Explorar Artigos <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Artigos em Destaque
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Conteúdo atualizado semanalmente com base nas tendências mais procuradas 
              pelos brasileiros em 2025
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredArticles.map((article) => (
              <Card key={article.id} className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{article.category}</Badge>
                    {article.trending && (
                      <Badge className="bg-cta-orange/10 text-cta-orange hover:bg-cta-orange/20">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        Trending
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {article.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {article.readTime}
                    </span>
                    <Button variant="ghost" size="sm" asChild>
                      <Link to={article.link}>
                        Ler mais <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-cta-orange/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Heart className="h-16 w-16 mx-auto mb-6 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Transforme sua Saúde Hoje
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Milhares de brasileiros já estão usando nossos produtos recomendados 
              para melhorar sua qualidade de vida
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="text-center">
                <Shield className="h-12 w-12 mx-auto mb-4 text-success" />
                <h3 className="font-semibold mb-2">100% Seguro</h3>
                <p className="text-sm text-muted-foreground">
                  Produtos testados e aprovados
                </p>
              </div>
              <div className="text-center">
                <Zap className="h-12 w-12 mx-auto mb-4 text-cta-orange" />
                <h3 className="font-semibold mb-2">Resultados Rápidos</h3>
                <p className="text-sm text-muted-foreground">
                  Veja mudanças em poucas semanas
                </p>
              </div>
              <div className="text-center">
                <Heart className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Saúde Completa</h3>
                <p className="text-sm text-muted-foreground">
                  Cuide do seu corpo integralmente
                </p>
              </div>
            </div>

            <CTAButton 
              href="https://app.monetizze.com.br/r/ACN25503403"
              text="🌟 Comece sua Transformação Agora"
              variant="cta"
              size="xl"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;