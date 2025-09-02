import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTAButton from "@/components/CTAButton";
import { 
  Dna, 
  TrendingUp, 
  CheckCircle, 
  Microscope,
  Target,
  Calendar,
  Users,
  Clock,
  Zap,
  Heart,
  Brain
} from "lucide-react";

const NutricaoPersonalizada = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-success/10 via-background to-primary/5 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge className="bg-success/10 text-success">
                <TrendingUp className="h-3 w-3 mr-1" />
                Futuro da Nutrição
              </Badge>
              <Badge variant="outline">Nutrição</Badge>
              <Badge variant="outline">DNA</Badge>
              <Badge variant="outline">Personalização</Badge>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Nutrição Personalizada: Como Adaptar sua Dieta ao seu DNA em 2025
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              A revolução da nutrição personalizada chegou ao Brasil. Descubra como 
              adaptar sua alimentação baseada no seu perfil genético, microbioma 
              e biomarcadores únicos para resultados extraordinários.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                Janeiro 2025
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                14 min de leitura
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-2" />
                5,8k visualizações
              </div>
            </div>

            <CTAButton 
              href="https://app.monetizze.com.br/r/AXC25503421"
              text="🧬 Nutra Vida - Nutrição Inteligente"
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
                Imagine se você pudesse saber exatamente quais alimentos seu corpo 
                processa melhor, quais nutrientes você tem maior dificuldade para 
                absorver, e qual estratégia nutricional é perfeita para seu perfil único. 
                Em 2025, isso não é mais ficção científica.
              </p>
              
              <p className="text-lg leading-relaxed mb-8">
                <strong>Dados impressionantes:</strong> Pesquisas mostram que pessoas 
                que seguem dietas personalizadas baseadas em seu perfil genético 
                têm <strong>2,5x mais chances</strong> de atingir seus objetivos de 
                saúde e mantê-los a longo prazo.
              </p>
            </div>

            <CTAButton 
              href="https://app.monetizze.com.br/r/AKS25517419"
              text="💊 Super Imune - Fortalecimento Personalizado"
              variant="cta"
              className="mb-12 w-full md:w-auto"
            />

            {/* What is Personalized Nutrition */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                O Que é Nutrição Personalizada de Verdade?
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card className="text-center">
                  <CardHeader>
                    <Dna className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <CardTitle>Genética</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      Análise de variações genéticas que influenciam metabolismo, 
                      sensibilidades alimentares e necessidades nutricionais específicas.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="text-center">
                  <CardHeader>
                    <Microscope className="h-12 w-12 mx-auto mb-4 text-success" />
                    <CardTitle>Microbioma</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      Mapeamento das bactérias intestinais para otimizar digestão, 
                      absorção de nutrientes e produção de vitaminas.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <Target className="h-12 w-12 mx-auto mb-4 text-cta-orange" />
                    <CardTitle>Biomarcadores</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      Análise de exames laboratoriais, níveis hormonais e 
                      marcadores inflamatórios para ajustes precisos.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-primary/5 p-8 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Brain className="h-5 w-5 mr-2 text-primary" />
                  A Ciência Por Trás da Personalização
                </h3>
                <p className="text-lg mb-4">
                  Cada pessoa possui mais de <strong>6 milhões de variações genéticas</strong> 
                  que influenciam como processamos carboidratos, gorduras, proteínas, 
                  vitaminas e minerais.
                </p>
                <p>
                  Essas diferenças explicam por que a mesma dieta pode funcionar 
                  perfeitamente para uma pessoa e falhar completamente para outra.
                </p>
              </div>
            </section>

            <CTAButton 
              href="https://app.monetizze.com.br/r/AEK25517455"
              text="✨ Femme Q10 Power - Nutrição Feminina Otimizada"
              variant="cta-primary"
              className="mb-12 w-full md:w-auto"
            />

            {/* Key Areas of Personalization */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                7 Áreas-Chave da Personalização Nutricional
              </h2>
              
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Zap className="h-5 w-5 mr-2 text-cta-orange" />
                      1. Metabolismo de Carboidratos
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      Genes como PPARA e TCF7L2 determinam como você processa açúcares 
                      e amidos. Algumas pessoas são:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-success mb-2">Alta Sensibilidade</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Dieta baixa em carboidratos (≤100g/dia)</li>
                          <li>• Foco em carboidratos complexos</li>
                          <li>• Jejum intermitente altamente eficaz</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Tolerância Normal</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Dieta balanceada (150-250g carboidratos)</li>
                          <li>• Flexibilidade nas fontes de energia</li>
                          <li>• Ciclagem de carboidratos eficaz</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Heart className="h-5 w-5 mr-2 text-destructive" />
                      2. Metabolismo de Gorduras
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      Variações no gene APOE influenciam como você processa gorduras saturadas:
                    </p>
                    <ul className="space-y-2">
                      <li>• <strong>APOE4:</strong> Reduzir gorduras saturadas drasticamente</li>
                      <li>• <strong>APOE3:</strong> Moderação nas gorduras saturadas</li>
                      <li>• <strong>APOE2:</strong> Maior tolerância a gorduras saturadas</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Target className="h-5 w-5 mr-2 text-success" />
                      3. Necessidades de Vitaminas
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">Genes específicos aumentam suas necessidades:</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2">Vitaminas B</h4>
                        <ul className="text-sm space-y-1">
                          <li>• MTHFR: Folato metilado necessário</li>
                          <li>• COMT: B6 em doses maiores</li>
                          <li>• MTR: B12 metilcobalamina</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Outras Vitaminas</h4>
                        <ul className="text-sm space-y-1">
                          <li>• VDR: Vitamina D em altas doses</li>
                          <li>• CYP4F2: Vitamina K2 essencial</li>
                          <li>• BCO1: Beta-caroteno vs. vitamina A</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            <div className="bg-success/10 p-8 rounded-lg mb-12 text-center">
              <h3 className="text-2xl font-bold mb-4">
                🎯 Otimize Sua Nutrição Agora
              </h3>
              <p className="text-lg mb-6">
                Enquanto você não faz testes genéticos, nossos suplementos 
                são formulados para atender as necessidades mais comuns dos brasileiros.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CTAButton 
                  href="https://app.monetizze.com.br/r/AXC25503421"
                  text="Nutra Vida - Multivitamínico"
                />
                <CTAButton 
                  href="https://app.monetizze.com.br/r/AKS25517419"
                  text="Super Imune - Reforço"
                  variant="cta-primary"
                />
              </div>
            </div>

            {/* Food Sensitivities */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Sensibilidades Alimentares Baseadas no DNA
              </h2>
              
              <p className="text-lg mb-8">
                Seus genes determinam não apenas o que você deve comer, 
                mas também o que deve evitar. Principais sensibilidades genéticas:
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Intolerância à Lactose</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      <strong>Gene LCT:</strong> 65% dos brasileiros adultos têm algum grau de intolerância.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-success" />
                        <span className="text-sm">Substitutos: Leites vegetais, iogurtes sem lactose</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-success" />
                        <span className="text-sm">Suplementos: Enzima lactase quando necessário</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Sensibilidade ao Glúten</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      <strong>Genes HLA-DQ:</strong> Determinam predisposição à doença celíaca e sensibilidade.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-success" />
                        <span className="text-sm">Alternativas: Quinoa, arroz integral, tapioca</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-success" />
                        <span className="text-sm">Cuidado: Contaminação cruzada em produtos</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Metabolismo da Cafeína</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      <strong>Gene CYP1A2:</strong> Determina se você é metabolizador rápido ou lento.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-success" />
                        <span className="text-sm">Rápido: Até 400mg/dia seguro</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-destructive" />
                        <span className="text-sm">Lento: Máximo 200mg/dia, evitar à tarde</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Sensibilidade ao Álcool</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      <strong>Genes ALDH2 e ADH1B:</strong> Definem tolerância e risco de dependência.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-success" />
                        <span className="text-sm">Metabolismo lento: Evitar ou consumir muito pouco</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-success" />
                        <span className="text-sm">Foco em antioxidantes para proteção hepática</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            <CTAButton 
              href="https://app.monetizze.com.br/r/ADE25505113"
              text="🌟 Dermodiet - Nutrição para Pele Saudável"
              variant="cta"
              className="mb-12 w-full md:w-auto"
            />

            {/* How to Start */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Como Começar sua Jornada de Nutrição Personalizada
              </h2>
              
              <div className="space-y-6">
                <Card className="bg-gradient-to-r from-primary/5 to-primary/10">
                  <CardHeader>
                    <CardTitle>Passo 1: Avaliação Inicial (Faça Agora)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">Enquanto não faz testes genéticos, comece observando:</p>
                    <ul className="space-y-2">
                      <li>• Como você se sente após consumir diferentes alimentos</li>
                      <li>• Seus níveis de energia ao longo do dia</li>
                      <li>• Padrões de sono e digestão</li>
                      <li>• Histórico familiar de doenças metabólicas</li>
                      <li>• Resultados de exames de sangue recentes</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-r from-cta-orange/5 to-cta-orange/10">
                  <CardHeader>
                    <CardTitle>Passo 2: Implementação Gradual</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">Estratégias baseadas em padrões comuns:</p>
                    <ul className="space-y-2">
                      <li>• <strong>Semana 1-2:</strong> Elimine alimentos processados</li>
                      <li>• <strong>Semana 3-4:</strong> Teste diferentes ratios de macronutrientes</li>
                      <li>• <strong>Semana 5-6:</strong> Adicione suplementação personalizada</li>
                      <li>• <strong>Semana 7-8:</strong> Ajuste timing das refeições</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-r from-success/5 to-success/10">
                  <CardHeader>
                    <CardTitle>Passo 3: Otimização Contínua</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">Para resultados de longo prazo:</p>
                    <ul className="space-y-2">
                      <li>• Monitore biomarcadores a cada 3-6 meses</li>
                      <li>• Ajuste conforme mudanças na vida (idade, estresse, atividade)</li>
                      <li>• Considere testes genéticos quando disponível</li>
                      <li>• Mantenha diário alimentar por períodos específicos</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">
                FAQ: Nutrição Personalizada
              </h2>
              
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>A nutrição personalizada realmente funciona?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Sim! Estudos mostram que pessoas que seguem recomendações baseadas 
                      em seu perfil genético têm 2,5x mais sucesso em perder peso e 
                      3x mais chances de manter os resultados. A ciência é sólida e 
                      os resultados são mensuráveis.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Preciso fazer testes genéticos caros?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Não necessariamente. Você pode começar observando como seu corpo 
                      responde a diferentes alimentos e usando suplementos formulados 
                      para cobrir as necessidades mais comuns. Testes genéticos são 
                      úteis, mas não obrigatórios para começar.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Quanto tempo leva para ver resultados?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Mudanças na energia e digestão podem aparecer em 1-2 semanas. 
                      Mudanças na composição corporal em 4-8 semanas. 
                      Otimização completa dos biomarcadores pode levar 3-6 meses.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>A nutrição personalizada muda com a idade?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Sim! Suas necessidades nutricionais evoluem com a idade, níveis 
                      hormonais, estresse e atividade física. É importante reavaliar 
                      e ajustar sua estratégia nutricional periodicamente.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <Separator className="mb-8" />
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Conclusão: O Futuro da Nutrição é Pessoal
              </h2>
              
              <p className="text-lg leading-relaxed mb-6">
                A nutrição personalizada representa uma mudança fundamental de 
                paradigma: da abordagem "tamanho único" para estratégias 
                verdadeiramente individualizadas baseadas na sua biologia única.
              </p>
              
              <p className="text-lg leading-relaxed mb-8">
                Em 2025, temos ferramentas para entender não apenas o que comer, 
                mas exatamente como, quando e por que certos alimentos funcionam 
                melhor para você. Investir nessa personalização é investir em 
                resultados sustentáveis e transformação real da sua saúde.
              </p>

              <div className="text-center">
                <CTAButton 
                  href="https://app.monetizze.com.br/r/AXC25503421"
                  text="🚀 Comece sua Nutrição Personalizada Hoje"
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

export default NutricaoPersonalizada;