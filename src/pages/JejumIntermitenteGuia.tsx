import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTAButton from "@/components/CTAButton";
import { 
  Clock, 
  TrendingUp, 
  CheckCircle, 
  AlertTriangle,
  Target,
  Calendar,
  Users,
  Zap
} from "lucide-react";

const JejumIntermitenteGuia = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cta-orange/10 via-background to-primary/5 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge className="bg-cta-orange/10 text-cta-orange">
                <TrendingUp className="h-3 w-3 mr-1" />
                Método #1 em 2025
              </Badge>
              <Badge variant="outline">Emagrecimento</Badge>
              <Badge variant="outline">Jejum Intermitente</Badge>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Jejum Intermitente: Guia Completo Baseado em Ciência 2025
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              O jejum intermitente continua sendo o método de emagrecimento mais eficaz 
              e sustentável. Descubra tudo o que a ciência mais recente revelou sobre 
              esta poderosa ferramenta de transformação.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                Janeiro 2025
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                15 min de leitura
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-2" />
                8,2k visualizações
              </div>
            </div>

            <CTAButton 
              href="https://app.monetizze.com.br/r/APZ25502897"
              text="🔥 Controle Total do Apetite - Inibe One"
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
                O jejum intermitente (JI) transcendeu a categoria de "dieta da moda" para 
                se tornar uma das ferramentas mais estudadas e eficazes para 
                emagrecimento, longevidade e saúde metabólica em 2025.
              </p>
              
              <p className="text-lg leading-relaxed mb-8">
                <strong>Dados atualizados de 2024-2025:</strong> Mais de 80% das pessoas que 
                adотam o jejum intermitente conseguem manter a perda de peso por mais de 1 ano, 
                comparado a apenas 20% das dietas tradicionais restritivas.
              </p>
            </div>

            <CTAButton 
              href="https://app.monetizze.com.br/r/AJZ25504136"
              text="✨ Mounja Slim - Acelere seu Metabolismo"
              variant="cta"
              className="mb-12 w-full md:w-auto"
            />

            {/* What is Intermittent Fasting */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                O Que é Jejum Intermitente? Definição Científica 2025
              </h2>
              
              <div className="bg-primary/5 p-8 rounded-lg mb-8">
                <p className="text-lg leading-relaxed">
                  O jejum intermitente é um padrão alimentar que alterna entre períodos 
                  de alimentação e jejum. Não é sobre <em>o que</em> você come, 
                  mas <strong>quando</strong> você come. Durante o jejum, seu corpo 
                  passa por mudanças metabólicas profundas que promovem queima de gordura, 
                  reparação celular e otimização hormonal.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Zap className="h-5 w-5 mr-2 text-cta-orange" />
                      Autofagia
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      Processo de "limpeza celular" que remove proteínas danificadas 
                      e organelas defeituosas, promovendo renovação celular.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Target className="h-5 w-5 mr-2 text-primary" />
                      Cetose
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      Estado metabólico onde o corpo queima gordura como combustível 
                      principal, aumentando drasticamente a perda de peso.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <TrendingUp className="h-5 w-5 mr-2 text-success" />
                      HGH Boost
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      Aumento natural do hormônio do crescimento (até 500%), 
                      preservando massa muscular durante a perda de peso.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <CTAButton 
              href="https://app.monetizze.com.br/r/ASY18248645"
              text="🚀 Super Green Black - Energia e Metabolismo"
              variant="cta-primary"
              className="mb-12 w-full md:w-auto"
            />

            {/* Types of Intermittent Fasting */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Os 5 Principais Métodos de Jejum Intermitente em 2025
              </h2>
              
              <div className="space-y-6">
                <Card className="border-l-4 border-l-cta-orange">
                  <CardHeader>
                    <CardTitle>1. Método 16:8 (Mais Popular)</CardTitle>
                    <CardDescription>16 horas de jejum, 8 horas de alimentação</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-success">✅ Vantagens:</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• Fácil de manter no dia a dia</li>
                          <li>• Resultados visíveis em 2-3 semanas</li>
                          <li>• Melhora significativa na energia</li>
                          <li>• Redução natural do apetite</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">📋 Como Fazer:</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• Janela alimentar: 12h às 20h</li>
                          <li>• Ou: 10h às 18h (mais eficaz)</li>
                          <li>• Água, chá e café sem açúcar liberados</li>
                          <li>• 2-3 refeições na janela alimentar</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-primary">
                  <CardHeader>
                    <CardTitle>2. Método 18:6 (Avançado)</CardTitle>
                    <CardDescription>18 horas de jejum, 6 horas de alimentação</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      Ideal para quem já pratica o 16:8 há pelo menos 4 semanas. 
                      Acelera significativamente a queima de gordura e a autofagia.
                    </p>
                    <div className="bg-cta-orange/10 p-4 rounded-lg">
                      <p className="text-sm">
                        <strong>Dica Pro:</strong> Use suplementos controladores de apetite 
                        nas primeiras semanas para facilitar a adaptação.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-success">
                  <CardHeader>
                    <CardTitle>3. Método 5:2 (Flexível)</CardTitle>
                    <CardDescription>5 dias normais, 2 dias com restrição calórica</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Nos 2 dias não consecutivos, consome-se apenas 500-600 calorias. 
                      Perfeito para iniciantes ou pessoas com rotina irregular.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-destructive">
                  <CardHeader>
                    <CardTitle>4. OMAD - One Meal A Day (Extremo)</CardTitle>
                    <CardDescription>23 horas de jejum, 1 hora de alimentação</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-start space-x-3">
                      <AlertTriangle className="h-5 w-5 text-destructive mt-1" />
                      <div>
                        <p className="mb-2">
                          <strong>Atenção:</strong> Método avançado, não recomendado para iniciantes.
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Requer acompanhamento profissional e adaptação gradual.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-muted">
                  <CardHeader>
                    <CardTitle>5. Jejum 24h (Semanal)</CardTitle>
                    <CardDescription>24 horas de jejum, 1-2 vezes por semana</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Potente para "resetar" o metabolismo e quebrar platôs de peso. 
                      Combine com os outros métodos para resultados extraordinários.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <div className="bg-success/10 p-8 rounded-lg mb-12 text-center">
              <h3 className="text-2xl font-bold mb-4">
                🎯 Turbine seus Resultados com Jejum Intermitente
              </h3>
              <p className="text-lg mb-6">
                Combine o jejum intermitente com suplementos específicos para 
                acelerar a perda de peso e controlar a fome naturalmente.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CTAButton 
                  href="https://app.monetizze.com.br/r/APZ25502897"
                  text="Inibe One - Controle da Fome"
                />
                <CTAButton 
                  href="https://app.monetizze.com.br/r/ANA25505142"
                  text="GHDROL - Queima de Gordura"
                  variant="cta-primary"
                />
              </div>
            </div>

            {/* Benefits */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Benefícios Científicos Comprovados em 2025
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-primary">
                    Benefícios Físicos
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-3 text-success mt-0.5" />
                      <div>
                        <strong>Perda de peso acelerada:</strong> 3-8% do peso corporal em 3-24 semanas
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-3 text-success mt-0.5" />
                      <div>
                        <strong>Redução da gordura visceral:</strong> Especialmente na região abdominal
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-3 text-success mt-0.5" />
                      <div>
                        <strong>Melhora da sensibilidade à insulina:</strong> Redução de 20-31%
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-3 text-success mt-0.5" />
                      <div>
                        <strong>Aumento do metabolismo:</strong> Até 14% nas primeiras 24h de jejum
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-3 text-success mt-0.5" />
                      <div>
                        <strong>Preservação da massa muscular:</strong> Superior às dietas convencionais
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-primary">
                    Benefícios Metabólicos e Mentais
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-3 text-success mt-0.5" />
                      <div>
                        <strong>Clareza mental aumentada:</strong> Melhora da função cognitiva
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-3 text-success mt-0.5" />
                      <div>
                        <strong>Energia estável:</strong> Menos picos e quedas de glicose
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-3 text-success mt-0.5" />
                      <div>
                        <strong>Redução da inflamação:</strong> Marcadores inflamatórios diminuem
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-3 text-success mt-0.5" />
                      <div>
                        <strong>Longevidade celular:</strong> Ativação de genes anti-envelhecimento
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-3 text-success mt-0.5" />
                      <div>
                        <strong>Melhora do sono:</strong> Qualidade e duração do sono
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <CTAButton 
              href="https://app.monetizze.com.br/r/ASS25503415"
              text="🌟 SB2 Black - Suporte Completo para Jejum"
              variant="cta"
              className="mb-12 w-full md:w-auto"
            />

            {/* Timeline and What to Expect */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Timeline: O Que Esperar do Jejum Intermitente
              </h2>
              
              <div className="space-y-6">
                <Card className="bg-gradient-to-r from-cta-orange/5 to-cta-orange/10">
                  <CardHeader>
                    <CardTitle>🕐 Primeiros 3 dias</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p><strong>O que acontece:</strong> Adaptação inicial, possível fome e irritabilidade.</p>
                    <p><strong>Dica:</strong> Mantenha-se hidratado e use controladores naturais de apetite.</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-r from-primary/5 to-primary/10">
                  <CardHeader>
                    <CardTitle>📅 Semana 1</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p><strong>Resultados:</strong> Perda de 1-2kg (principalmente água), redução do inchaço.</p>
                    <p><strong>Sensação:</strong> Energia mais estável, menos desejos por doces.</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-r from-success/5 to-success/10">
                  <CardHeader>
                    <CardTitle>📈 Semanas 2-4</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p><strong>Resultados:</strong> Perda consistente de 0,5-1kg por semana de gordura real.</p>
                    <p><strong>Sensação:</strong> Aumento da energia, melhora do humor, roupas mais folgadas.</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-r from-destructive/5 to-destructive/10">
                  <CardHeader>
                    <CardTitle>🚀 Mês 2-3</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p><strong>Resultados:</strong> Transformação corporal visível, 5-10kg perdidos.</p>
                    <p><strong>Sensação:</strong> Jejum se torna natural, maior clareza mental, sono melhor.</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Tips for Success */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                7 Dicas Essenciais para o Sucesso no Jejum Intermitente
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>1. Hidratação Inteligente</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm space-y-1">
                      <li>• 2-3L de água por dia</li>
                      <li>• Adicione limão ou sal rosa (eletrólitos)</li>
                      <li>• Chá verde e café sem açúcar liberados</li>
                      <li>• Evite adoçantes artificiais</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>2. Quebra do Jejum Estratégica</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm space-y-1">
                      <li>• Comece com proteínas e gorduras boas</li>
                      <li>• Evite carboidratos refinados</li>
                      <li>• Masque bem e coma devagar</li>
                      <li>• Porções menores que o habitual</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>3. Gerenciamento da Fome</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm space-y-1">
                      <li>• Fome vem em ondas, passa em 20min</li>
                      <li>• Mantenha-se ocupado durante jejum</li>
                      <li>• Use suplementos controladores naturais</li>
                      <li>• Respire fundo quando sentir fome</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>4. Exercícios Durante o Jejum</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm space-y-1">
                      <li>• Caminhada leve sempre liberada</li>
                      <li>• Treino intenso perto da quebra do jejum</li>
                      <li>• Yoga e alongamento potencializam resultados</li>
                      <li>• Ouça seu corpo sempre</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            <div className="bg-primary/10 p-8 rounded-lg mb-12 text-center">
              <h3 className="text-2xl font-bold mb-4">
                💪 Potencialize seu Jejum Intermitente
              </h3>
              <p className="text-lg mb-6">
                Combine o poder do jejum com suplementos cientificamente formulados 
                para acelerar seus resultados e tornar o processo mais fácil.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <CTAButton 
                  href="https://app.monetizze.com.br/r/APZ25502897"
                  text="Inibe One"
                  size="default"
                />
                <CTAButton 
                  href="https://app.monetizze.com.br/r/APP25503419"
                  text="Fignar"
                  variant="cta-primary"
                  size="default"
                />
                <CTAButton 
                  href="https://app.monetizze.com.br/r/AFX20871337"
                  text="ReduPhine Caps"
                  size="default"
                />
              </div>
            </div>

            {/* FAQ */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">
                FAQ: Jejum Intermitente 2025
              </h2>
              
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>O jejum intermitente é seguro para todos?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      O jejum intermitente é seguro para a maioria dos adultos saudáveis. 
                      Porém, deve ser evitado por:
                    </p>
                    <ul className="text-sm space-y-1">
                      <li>• Gestantes e lactantes</li>
                      <li>• Diabéticos tipo 1</li>
                      <li>• Pessoas com histórico de transtornos alimentares</li>
                      <li>• Menores de 18 anos</li>
                    </ul>
                    <p className="text-sm text-muted-foreground mt-4">
                      Sempre consulte um profissional de saúde antes de iniciar.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Vou perder massa muscular fazendo jejum?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Não, quando feito corretamente. Estudos mostram que o jejum intermitente 
                      preserva mais massa muscular que dietas restritivas tradicionais, 
                      devido ao aumento do hormônio do crescimento e manutenção da taxa metabólica.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Posso tomar suplementos durante o jejum?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Sim, alguns suplementos são permitidos e até recomendados: 
                      eletrólitos, controladores de apetite naturais, termogênicos sem calorias. 
                      Evite suplementos com calorias (proteína, BCAA) durante o jejum.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Quanto peso posso perder com jejum intermitente?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Em média, 0,5-1kg por semana de forma sustentável. 
                      Pessoas com mais peso para perder podem ter resultados mais rápidos inicialmente. 
                      O importante é a perda de gordura, não apenas peso na balança.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <Separator className="mb-8" />
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Conclusão: O Jejum Intermitente é o Futuro do Emagrecimento
              </h2>
              
              <p className="text-lg leading-relaxed mb-6">
                Em 2025, o jejum intermitente consolidou-se como a estratégia mais eficaz 
                e sustentável para perda de peso e otimização da saúde. Não é apenas uma 
                dieta temporária, mas um estilo de vida que promove transformações 
                profundas no corpo e na mente.
              </p>
              
              <p className="text-lg leading-relaxed mb-8">
                Os benefícios vão muito além da perda de peso: maior energia, 
                clareza mental, longevidade celular e um relacionamento mais saudável 
                com a comida. Com as ferramentas e suplementos adequados, 
                nunca foi tão fácil obter resultados extraordinários.
              </p>

              <div className="text-center">
                <CTAButton 
                  href="https://app.monetizze.com.br/r/APZ25502897"
                  text="🚀 Comece sua Jornada de Transformação Hoje"
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

export default JejumIntermitenteGuia;