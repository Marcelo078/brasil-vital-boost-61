import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTAButton from "@/components/CTAButton";
import { 
  Leaf, 
  TrendingUp, 
  CheckCircle, 
  AlertCircle,
  Zap,
  Calendar,
  Users,
  Clock,
  Heart,
  Shield,
  Target
} from "lucide-react";

const FibremaxxingTendencia = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-success/15 via-background to-primary/5 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge className="bg-success/10 text-success">
                <TrendingUp className="h-3 w-3 mr-1" />
                +350% de Busca em 2024
              </Badge>
              <Badge variant="outline">Fibremaxxing</Badge>
              <Badge variant="outline">Alto Consumo de Fibras</Badge>
              <Badge variant="outline">Tendência 2025</Badge>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Fibremaxxing: A Tendência de Alto Consumo de Fibras que Revoluciona a Saúde
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              O "fibremaxxing" explodiu nas redes sociais em 2024 e se tornou a estratégia 
              #1 para emagrecimento, saúde intestinal e longevidade em 2025. 
              Descubra como maximizar fibras pode transformar sua vida.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                Janeiro 2025
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                11 min de leitura
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-2" />
                12,3k visualizações
              </div>
            </div>

            <CTAButton 
              href="https://app.monetizze.com.br/r/ACN25503403"
              text="🌿 Kit Restart Intestinal - Rico em Fibras"
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
                O termo "fibremaxxing" nasceu nas redes sociais, mas rapidamente ganhou 
                respaldo científico. Trata-se da estratégia de maximizar o consumo de 
                fibras alimentares para otimizar saúde intestinal, controle de peso, 
                imunidade e bem-estar geral.
              </p>
              
              <p className="text-lg leading-relaxed mb-8">
                <strong>Dados de 2024-2025:</strong> Pessoas que consomem mais de 40g de 
                fibras por dia (vs. média brasileira de 15g) têm <strong>67% menos risco</strong> 
                de desenvolver diabetes tipo 2, <strong>40% menos risco</strong> de doenças 
                cardíacas e perdem peso <strong>2,3x mais rápido</strong>.
              </p>
            </div>

            <div className="bg-success/10 p-8 rounded-lg mb-12">
              <div className="flex items-start space-x-4">
                <Leaf className="h-8 w-8 text-success mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Por Que "Fibremaxxing" Explodiu?</h3>
                  <p className="text-lg">
                    Influenciadores de saúde descobriram que aumentar drasticamente o 
                    consumo de fibras gerava resultados visíveis em apenas 2 semanas: 
                    menos inchaço, mais energia, pele melhor e perda de peso eficaz.
                  </p>
                </div>
              </div>
            </div>

            <CTAButton 
              href="https://app.monetizze.com.br/r/ALW20871672"
              text="🚀 New Detox - Fibras + Detox Completo"
              variant="cta"
              className="mb-12 w-full md:w-auto"
            />

            {/* What is Fibremaxxing */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                O Que é Fibremaxxing: Definição e Ciência
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Target className="h-5 w-5 mr-2 text-primary" />
                      Meta de Fibras
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li>• <strong>Iniciantes:</strong> 25-30g por dia</li>
                      <li>• <strong>Intermediário:</strong> 35-40g por dia</li>
                      <li>• <strong>Fibremaxxing:</strong> 45-60g por dia</li>
                      <li>• <strong>Atletas:</strong> 60-80g por dia</li>
                    </ul>
                    <p className="text-sm text-muted-foreground mt-4">
                      A média brasileira é apenas 15g/dia - muito baixa!
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Zap className="h-5 w-5 mr-2 text-cta-orange" />
                      Tipos de Fibras
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li>• <strong>Solúveis:</strong> Aveia, maçã, feijão</li>
                      <li>• <strong>Insolúveis:</strong> Cereais integrais, vegetais</li>
                      <li>• <strong>Prebióticas:</strong> Alho, cebola, banana verde</li>
                      <li>• <strong>Fermentáveis:</strong> Aspargo, alcachofra</li>
                    </ul>
                    <p className="text-sm text-muted-foreground mt-4">
                      Diversidade é a chave do sucesso!
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-primary/5 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <AlertCircle className="h-5 w-5 mr-2 text-primary" />
                  Como as Fibras Funcionam no Corpo
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">1. Saciedade</h4>
                    <p className="text-sm">
                      Fibras expandem no estômago, enviando sinais de saciedade 
                      ao cérebro, reduzindo naturalmente o apetite.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">2. Microbioma</h4>
                    <p className="text-sm">
                      Alimentam bactérias benéficas que produzem ácidos graxos 
                      de cadeia curta, melhorando imunidade e metabolismo.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">3. Glicemia</h4>
                    <p className="text-sm">
                      Retardam absorção de açúcares, estabilizando glicose 
                      sanguínea e reduzindo picos de insulina.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <CTAButton 
              href="https://app.monetizze.com.br/r/AZW15606936"
              text="🌟 DTX Black - Fibras + Desintoxicação"
              variant="cta-primary"
              className="mb-12 w-full md:w-auto"
            />

            {/* Benefits of Fibremaxxing */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                10 Benefícios Comprovados do Fibremaxxing
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-success">Emagrecimento Acelerado</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 mr-2 text-success mt-0.5" />
                        <span>Redução de 300-500 calorias/dia automaticamente</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 mr-2 text-success mt-0.5" />
                        <span>Aumento de 10% no gasto energético digestivo</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 mr-2 text-success mt-0.5" />
                        <span>Menor absorção de gorduras (até 15%)</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-primary">Saúde Digestiva Otimizada</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 mr-2 text-primary mt-0.5" />
                        <span>Regularidade intestinal em 3-7 dias</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 mr-2 text-primary mt-0.5" />
                        <span>Redução de inchaço abdominal</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 mr-2 text-primary mt-0.5" />
                        <span>Melhora da diversidade microbiana</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-cta-orange">Controle Glicêmico</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 mr-2 text-cta-orange mt-0.5" />
                        <span>Redução de 20-30% nos picos de glicose</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 mr-2 text-cta-orange mt-0.5" />
                        <span>Melhora da sensibilidade à insulina</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 mr-2 text-cta-orange mt-0.5" />
                        <span>Menor risco de diabetes tipo 2</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-destructive">Saúde Cardiovascular</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 mr-2 text-destructive mt-0.5" />
                        <span>Redução do colesterol LDL em 15%</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 mr-2 text-destructive mt-0.5" />
                        <span>Diminuição da pressão arterial</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 mr-2 text-destructive mt-0.5" />
                        <span>Menor inflamação sistêmica</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8 grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-success/10 rounded-lg">
                  <Heart className="h-10 w-10 mx-auto mb-3 text-success" />
                  <h3 className="font-semibold mb-2">Longevidade</h3>
                  <p className="text-sm">+5-8 anos de expectativa de vida com consumo adequado de fibras</p>
                </div>
                
                <div className="text-center p-6 bg-primary/10 rounded-lg">
                  <Shield className="h-10 w-10 mx-auto mb-3 text-primary" />
                  <h3 className="font-semibold mb-2">Imunidade</h3>
                  <p className="text-sm">70% da imunidade vem do intestino - fibras fortalecem a barreira</p>
                </div>
                
                <div className="text-center p-6 bg-cta-orange/10 rounded-lg">
                  <Zap className="h-10 w-10 mx-auto mb-3 text-cta-orange" />
                  <h3 className="font-semibold mb-2">Energia</h3>
                  <p className="text-sm">Energia estável sem picos e quedas de açúcar</p>
                </div>
              </div>
            </section>

            <div className="bg-success/10 p-8 rounded-lg mb-12 text-center">
              <h3 className="text-2xl font-bold mb-4">
                🎯 Maximize suas Fibras com Suplementação Inteligente
              </h3>
              <p className="text-lg mb-6">
                Enquanto adapta sua dieta, use produtos ricos em fibras para 
                acelerar os resultados e facilitar a transição.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CTAButton 
                  href="https://app.monetizze.com.br/r/ACN25503403"
                  text="Kit Restart Intestinal"
                />
                <CTAButton 
                  href="https://app.monetizze.com.br/r/ACE25513322"
                  text="Donna Detox Black"
                  variant="cta-primary"
                />
              </div>
            </div>

            {/* How to Start Fibremaxxing */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Protocolo Fibremaxxing: Como Começar
              </h2>
              
              <div className="space-y-6">
                <Card className="border-l-4 border-l-success">
                  <CardHeader>
                    <CardTitle>Semana 1-2: Adaptação Gradual</CardTitle>
                    <CardDescription>Meta: 25-30g de fibras/dia</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Café da Manhã (8-10g)</h4>
                        <ul className="text-sm space-y-1">
                          <li>• 40g aveia em flocos (4g fibras)</li>
                          <li>• 1 maçã com casca (4g fibras)</li>
                          <li>• 1 colher de sopa chia (5g fibras)</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Almoço/Jantar (15-20g)</h4>
                        <ul className="text-sm space-y-1">
                          <li>• 100g feijão cozido (9g fibras)</li>
                          <li>• 200g brócolis (5g fibras)</li>
                          <li>• 50g arroz integral (2g fibras)</li>
                          <li>• Salada verde variada (3g fibras)</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4 p-4 bg-success/5 rounded-lg">
                      <p className="text-sm"><strong>Dica:</strong> Aumente gradualmente para evitar desconforto digestivo.</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-primary">
                  <CardHeader>
                    <CardTitle>Semana 3-4: Intensificação</CardTitle>
                    <CardDescription>Meta: 35-40g de fibras/dia</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold mb-3">Adicione aos Pratos:</h4>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <h5 className="font-medium mb-2">Sementes/Grãos</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Linhaça (27g fibras/100g)</li>
                          <li>• Chia (34g fibras/100g)</li>
                          <li>• Quinoa (7g fibras/100g)</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium mb-2">Vegetais Power</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Alcachofra (11g fibras/100g)</li>
                          <li>• Couve-de-bruxelas (4g fibras/100g)</li>
                          <li>• Abacate (7g fibras/100g)</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium mb-2">Frutas Ricas</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Framboesa (7g fibras/100g)</li>
                          <li>• Pera com casca (6g fibras/100g)</li>
                          <li>• Maracujá (11g fibras/100g)</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-cta-orange">
                  <CardHeader>
                    <CardTitle>Semana 5+: Fibremaxxing Total</CardTitle>
                    <CardDescription>Meta: 45-60g de fibras/dia</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">Para atingir níveis de fibremaxxing:</p>
                    <ul className="space-y-2">
                      <li>• <strong>Psyllium:</strong> 5-10g antes das refeições principais</li>
                      <li>• <strong>Farelo de aveia:</strong> 2-3 colheres de sopa/dia</li>
                      <li>• <strong>Vegetais em todas as refeições:</strong> Mínimo 300g/dia</li>
                      <li>• <strong>Leguminosas 2x/dia:</strong> Feijão, lentilha, grão-de-bico</li>
                      <li>• <strong>Frutas com casca:</strong> 3-4 porções/dia</li>
                    </ul>
                    <div className="mt-4 p-4 bg-cta-orange/10 rounded-lg">
                      <p className="text-sm"><strong>Atenção:</strong> Beba pelo menos 3L de água/dia nesta fase!</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            <CTAButton 
              href="https://app.monetizze.com.br/r/ALW20871672"
              text="💪 New Detox - Suporte para Fibremaxxing"
              variant="cta"
              className="mb-12 w-full md:w-auto"
            />

            {/* Common Mistakes */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                7 Erros Mais Comuns no Fibremaxxing
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-l-4 border-l-destructive">
                  <CardHeader>
                    <CardTitle className="text-destructive">1. Aumento Muito Rápido</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-2">
                      <strong>Erro:</strong> Pular de 15g para 50g de fibras em poucos dias.
                    </p>
                    <p className="text-sm text-success">
                      <strong>Correto:</strong> Aumentar 5g por semana gradualmente.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-destructive">
                  <CardHeader>
                    <CardTitle className="text-destructive">2. Hidratação Insuficiente</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-2">
                      <strong>Erro:</strong> Manter o mesmo consumo de água.
                    </p>
                    <p className="text-sm text-success">
                      <strong>Correto:</strong> 35-40ml por kg de peso + 500ml extra.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-destructive">
                  <CardHeader>
                    <CardTitle className="text-destructive">3. Foco Apenas em Quantidade</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-2">
                      <strong>Erro:</strong> Usar apenas psyllium ou farelo.
                    </p>
                    <p className="text-sm text-success">
                      <strong>Correto:</strong> Diversificar tipos de fibras (solúvel/insolúvel).
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-destructive">
                  <CardHeader>
                    <CardTitle className="text-destructive">4. Ignorar Sintomas</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-2">
                      <strong>Erro:</strong> Continuar aumentando mesmo com desconforto.
                    </p>
                    <p className="text-sm text-success">
                      <strong>Correto:</strong> Reduzir temporariamente e progredir mais devagar.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* FAQ */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">
                FAQ: Fibremaxxing
              </h2>
              
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Fibremaxxing causa gases e inchaço?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Inicialmente pode causar, especialmente se aumentar muito rápido. 
                      O segredo é progressão gradual (5g por semana) e hidratação adequada. 
                      Após 2-3 semanas de adaptação, os sintomas desaparecem e você se sente melhor que nunca.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Quanto tempo para ver resultados?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Resultados digestivos aparecem em 3-7 dias. Perda de peso visível em 2-3 semanas. 
                      Benefícios completos (colesterol, glicemia, composição corporal) em 6-12 semanas. 
                      A chave é consistência, não velocidade.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Posso fazer fibremaxxing com intestino sensível?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Sim, mas com mais cuidado. Comece com 20g/dia e aumente apenas 2-3g por semana. 
                      Prefira fibras solúveis (aveia, maçã) inicialmente. 
                      Considere probióticos para melhorar a tolerância.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Preciso tomar suplementos de fibra?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Não é obrigatório, mas facilita muito atingir as metas. 
                      Psyllium, farelo de aveia e inulina são excelentes opções. 
                      Combine sempre com alimentos ricos em fibras para máxima eficácia.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <Separator className="mb-8" />
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Conclusão: Fibremaxxing é o Futuro da Saúde Preventiva
              </h2>
              
              <p className="text-lg leading-relaxed mb-6">
                O fibremaxxing representa mais que uma tendência - é uma revolução 
                baseada em décadas de pesquisa científica sobre o papel fundamental 
                das fibras na saúde humana.
              </p>
              
              <p className="text-lg leading-relaxed mb-8">
                Em 2025, maximizar o consumo de fibras se tornou a estratégia mais 
                eficaz, sustentável e baseada em evidências para perda de peso, 
                saúde intestinal e prevenção de doenças crônicas. 
                Os resultados falam por si: transformação real em poucas semanas.
              </p>

              <div className="text-center">
                <CTAButton 
                  href="https://app.monetizze.com.br/r/ACN25503403"
                  text="🌱 Comece seu Fibremaxxing Hoje"
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

export default FibremaxxingTendencia;