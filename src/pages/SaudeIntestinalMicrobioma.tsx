import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTAButton from "@/components/CTAButton";
import { 
  Heart, 
  TrendingUp, 
  CheckCircle, 
  AlertCircle,
  Users,
  Calendar,
  Clock
} from "lucide-react";

const SaudeIntestinalMicrobioma = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-success/5 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge className="bg-success/10 text-success">
                <TrendingUp className="h-3 w-3 mr-1" />
                Tendência 2025
              </Badge>
              <Badge variant="outline">Saúde Intestinal</Badge>
              <Badge variant="outline">Microbioma</Badge>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Saúde Intestinal e Microbioma: A Revolução da Medicina em 2025
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              O microbioma intestinal é considerado o "segundo cérebro" do corpo humano. 
              Descubra como revolucionar sua saúde através do cuidado com seu intestino.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                Janeiro 2025
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                12 min de leitura
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-2" />
                2,5k visualizações
              </div>
            </div>

            <CTAButton 
              href="https://app.monetizze.com.br/r/ACN25503403"
              text="🌿 Revolucione sua Saúde Intestinal"
              variant="cta"
              size="xl"
              className="mb-8"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg leading-relaxed mb-6">
                Em 2025, a ciência da saúde intestinal atingiu um patamar revolucionário. 
                O que antes era considerado apenas um sistema digestivo, hoje sabemos ser 
                o centro de comando de nossa imunidade, humor, energia e até mesmo longevidade.
              </p>
              
              <p className="text-lg leading-relaxed mb-8">
                <strong>Dados impressionantes:</strong> Segundo pesquisas recentes, 70% da nossa 
                imunidade está diretamente relacionada à saúde intestinal, e um microbioma 
                desequilibrado pode ser a causa raiz de mais de 100 condições de saúde diferentes.
              </p>
            </div>

            <CTAButton 
              href="https://app.monetizze.com.br/r/ACN25503403"
              text="✨ Kit Restart Intestinal - Oferta Especial"
              variant="cta"
              className="mb-12 w-full md:w-auto"
            />

            {/* What is Microbiome */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                O Que é o Microbioma Intestinal?
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Heart className="h-5 w-5 mr-2 text-primary" />
                      Definição Científica
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      O microbioma intestinal é uma comunidade complexa de trilhões de 
                      microrganismos que vivem em nosso trato digestivo, incluindo bactérias, 
                      vírus, fungos e outros microorganismos.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <TrendingUp className="h-5 w-5 mr-2 text-success" />
                      Importância Crescente
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Pesquisas de 2024-2025 mostram que o microbioma influencia diretamente 
                      nossa saúde mental, imunidade, peso corporal, e até mesmo nossa 
                      predisposição a doenças crônicas.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-primary/5 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <AlertCircle className="h-5 w-5 mr-2 text-primary" />
                  Fato Impressionante
                </h3>
                <p className="text-lg">
                  Você sabia que temos mais células microbianas em nosso corpo do que 
                  células humanas? São aproximadamente <strong>39 trilhões de micróbios</strong> 
                  contra 30 trilhões de células humanas!
                </p>
              </div>
            </section>

            <CTAButton 
              href="https://app.monetizze.com.br/r/ALW20871672"
              text="🚀 New Detox - Limpeza Intestinal Completa"
              variant="cta-primary"
              className="mb-12 w-full md:w-auto"
            />

            {/* Signs of Imbalance */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Sinais de Desequilíbrio do Microbioma
              </h2>
              
              <p className="text-lg mb-6">
                Um microbioma desequilibrado pode manifestar sintomas que vão muito além 
                de problemas digestivos. Confira os principais sinais:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-destructive">
                    Sintomas Físicos
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-destructive mt-0.5" />
                      Digestão lenta e constipação crônica
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-destructive mt-0.5" />
                      Inchaço abdominal frequente
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-destructive mt-0.5" />
                      Gases excessivos
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-destructive mt-0.5" />
                      Infecções recorrentes
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-destructive mt-0.5" />
                      Problemas de pele (acne, eczema)
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-destructive">
                    Sintomas Emocionais
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-destructive mt-0.5" />
                      Ansiedade e irritabilidade
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-destructive mt-0.5" />
                      Mudanças bruscas de humor
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-destructive mt-0.5" />
                      Fadiga mental constante
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-destructive mt-0.5" />
                      Dificuldade de concentração
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-destructive mt-0.5" />
                      Compulsão alimentar
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <CTAButton 
              href="https://app.monetizze.com.br/r/AZW15606936"
              text="🌟 DTX Black - Detox Avançado"
              variant="cta"
              className="mb-12 w-full md:w-auto"
            />

            {/* How to Restore */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Como Restaurar a Saúde Intestinal em 2025
              </h2>
              
              <p className="text-lg mb-8">
                A boa notícia é que o microbioma tem uma capacidade impressionante de 
                regeneração. Com as estratégias certas, é possível ver melhorias 
                significativas em apenas 2-4 semanas.
              </p>

              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>1. Alimentação Estratégica</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      A dieta é o fator mais importante para a saúde do microbioma. 
                      Foque em:
                    </p>
                    <ul className="space-y-2">
                      <li>• <strong>Fibras diversificadas:</strong> 25-35g por dia de fontes variadas</li>
                      <li>• <strong>Alimentos fermentados:</strong> Kefir, kombucha, vegetais fermentados</li>
                      <li>• <strong>Prebióticos:</strong> Alho, cebola, banana verde, alcachofra</li>
                      <li>• <strong>Polifenóis:</strong> Frutas vermelhas, chá verde, cacau</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>2. Suplementação Inteligente</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      Produtos específicos para restauração intestinal podem acelerar 
                      significativamente o processo:
                    </p>
                    <ul className="space-y-2">
                      <li>• <strong>Probióticos de múltiplas cepas</strong> (10-50 bilhões CFU)</li>
                      <li>• <strong>Enzimas digestivas</strong> para melhor absorção</li>
                      <li>• <strong>L-Glutamina</strong> para reparação da mucosa intestinal</li>
                      <li>• <strong>Compostos detox</strong> para limpeza profunda</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>3. Estilo de Vida Otimizado</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li>• <strong>Gerenciamento do estresse:</strong> Meditação e respiração</li>
                      <li>• <strong>Sono de qualidade:</strong> 7-9 horas por noite</li>
                      <li>• <strong>Exercícios regulares:</strong> Especialmente caminhadas</li>
                      <li>• <strong>Hidratação adequada:</strong> 35ml por kg de peso corporal</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            <div className="bg-success/10 p-8 rounded-lg mb-12">
              <h3 className="text-2xl font-bold mb-4 text-center">
                🎯 Transforme seu Intestino em 30 Dias
              </h3>
              <p className="text-center text-lg mb-6">
                Nossos produtos recomendados foram desenvolvidos especificamente 
                para restaurar a saúde intestinal de forma rápida e eficaz.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CTAButton 
                  href="https://app.monetizze.com.br/r/ACN25503403"
                  text="Kit Restart Intestinal"
                  variant="cta"
                />
                <CTAButton 
                  href="https://app.monetizze.com.br/r/ACE25513322"
                  text="Donna Detox Black"
                  variant="cta-primary"
                />
              </div>
            </div>

            {/* FAQ Section */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">
                Perguntas Frequentes sobre Saúde Intestinal
              </h2>
              
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Quanto tempo leva para restaurar o microbioma?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Com uma abordagem adequada, mudanças positivas podem ser observadas 
                      em 7-14 dias, com melhorias significativas em 4-8 semanas. 
                      A restauração completa pode levar de 3-6 meses.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Posso tomar probióticos todos os dias?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Sim, probióticos de qualidade podem ser consumidos diariamente. 
                      O ideal é escolher produtos com múltiplas cepas e pelo menos 
                      10 bilhões de CFU por dose.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Qual a relação entre intestino e ansiedade?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      O intestino produz 90% da serotonina do corpo, o neurotransmissor 
                      do bem-estar. Um intestino desequilibrado pode contribuir 
                      significativamente para ansiedade e depressão.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Antibióticos prejudicam o microbioma?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Antibióticos podem reduzir a diversidade do microbioma em até 90%. 
                      É essencial fazer uma restauração adequada após o uso, 
                      com probióticos e alimentação específica.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <Separator className="mb-8" />
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Conclusão: O Futuro da Saúde Começa no Intestino
              </h2>
              
              <p className="text-lg leading-relaxed mb-6">
                A revolução da saúde intestinal em 2025 não é apenas uma tendência passageira - 
                é uma mudança fundamental em como entendemos e cuidamos da nossa saúde. 
                O microbioma intestinal é verdadeiramente o centro de comando do nosso bem-estar.
              </p>
              
              <p className="text-lg leading-relaxed mb-8">
                Investir na saúde do seu intestino hoje significa investir em energia, 
                imunidade, humor equilibrado e longevidade para o futuro. 
                Com as ferramentas e conhecimentos disponíveis em 2025, 
                nunca foi tão possível transformar sua saúde de forma completa e duradoura.
              </p>

              <div className="text-center">
                <CTAButton 
                  href="https://app.monetizze.com.br/r/ACN25503403"
                  text="🌟 Comece sua Transformação Intestinal Hoje"
                  variant="cta"
                  size="xl"
                />
              </div>
            </section>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default SaudeIntestinalMicrobioma;