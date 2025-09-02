import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTAButton from "@/components/CTAButton";
import { 
  Smartphone, 
  TrendingUp, 
  CheckCircle, 
  Stethoscope,
  Video,
  Calendar,
  Users,
  Clock,
  Zap,
  Shield,
  Brain,
  Heart
} from "lucide-react";

const TelemedicinaVirtual = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-cta-orange/5 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge className="bg-primary/10 text-primary">
                <TrendingUp className="h-3 w-3 mr-1" />
                Revolução Digital
              </Badge>
              <Badge variant="outline">Telemedicina</Badge>
              <Badge variant="outline">Saúde Virtual</Badge>
              <Badge variant="outline">2025</Badge>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Telemedicina e Saúde Virtual: Como a Tecnologia Revoluciona o Cuidado Médico
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              A telemedicina explodiu no Brasil e mudou para sempre como cuidamos da nossa saúde. 
              Descubra como aproveitar ao máximo essa revolução digital para monitorar, 
              prevenir e tratar sua saúde de forma mais eficaz.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                Janeiro 2025
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                13 min de leitura
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-2" />
                7,1k visualizações
              </div>
            </div>

            <CTAButton 
              href="https://app.monetizze.com.br/r/AHQ25517456"
              text="🧠 Foco Pill - Otimize sua Performance Mental"
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
                A pandemia catalisou uma transformação que já estava em curso: 
                a digitalização completa da medicina. Em 2025, a telemedicina não é mais 
                uma alternativa emergencial, mas sim o novo padrão de cuidado médico 
                preventivo e personalizado.
              </p>
              
              <p className="text-lg leading-relaxed mb-8">
                <strong>Números impressionantes:</strong> O mercado brasileiro de telemedicina 
                cresceu <strong>1.200% desde 2020</strong>, com mais de 45 milhões de consultas 
                virtuais realizadas em 2024. A satisfação dos pacientes atingiu 
                <strong>92%</strong>, superando consultas presenciais tradicionais.
              </p>
            </div>

            <div className="bg-primary/5 p-8 rounded-lg mb-12">
              <div className="flex items-start space-x-4">
                <Smartphone className="h-8 w-8 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">A Nova Era da Medicina Digital</h3>
                  <p className="text-lg">
                    A telemedicina evoluiu de simples videochamadas para ecossistemas 
                    completos de saúde que incluem IA, monitoramento remoto, 
                    análise preditiva e cuidado personalizado 24/7.
                  </p>
                </div>
              </div>
            </div>

            <CTAButton 
              href="https://app.monetizze.com.br/r/AXC25503421"
              text="💊 Nutra Vida - Saúde Preventiva Completa"
              variant="cta"
              className="mb-12 w-full md:w-auto"
            />

            {/* What is Telemedicine 2025 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Telemedicina em 2025: Muito Além das Videochamadas
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card className="text-center">
                  <CardHeader>
                    <Video className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <CardTitle>Consultas Virtuais</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      Consultas de alta qualidade por vídeo, com integração 
                      de exames, histórico médico e prescrições digitais.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="text-center">
                  <CardHeader>
                    <Zap className="h-12 w-12 mx-auto mb-4 text-cta-orange" />
                    <CardTitle>Monitoramento Remoto</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      Dispositivos wearables que monitoram sinais vitais 
                      continuamente e alertam sobre mudanças importantes.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <Brain className="h-12 w-12 mx-auto mb-4 text-success" />
                    <CardTitle>IA Diagnóstica</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      Inteligência artificial que auxilia no diagnóstico, 
                      análise de exames e predição de riscos de saúde.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Stethoscope className="h-5 w-5 mr-2 text-primary" />
                      Modalidades Disponíveis no Brasil
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Teleconsulta</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Consultas médicas por vídeo</li>
                          <li>• Psicoterapia online</li>
                          <li>• Orientação nutricional</li>
                          <li>• Consultas de enfermagem</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Telemonitoramento</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Acompanhamento de crônicos</li>
                          <li>• Monitoramento pós-cirúrgico</li>
                          <li>• Controle de diabetes</li>
                          <li>• Acompanhamento cardíaco</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Shield className="h-5 w-5 mr-2 text-success" />
                      Regulamentação e Segurança
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      A telemedicina no Brasil é regulamentada pelo CFM (Conselho Federal de Medicina) 
                      e deve seguir protocolos rigorosos de segurança e privacidade.
                    </p>
                    <ul className="space-y-2">
                      <li>• <strong>LGPD Compliance:</strong> Proteção total dos dados pessoais</li>
                      <li>• <strong>Certificação Digital:</strong> Prescrições com validade legal</li>
                      <li>• <strong>Registro Médico:</strong> Todos os profissionais devem ter CRM ativo</li>
                      <li>• <strong>Auditoria:</strong> Plataformas são auditadas regularmente</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            <CTAButton 
              href="https://app.monetizze.com.br/r/AKS25517419"
              text="🛡️ Super Imune - Fortaleça sua Imunidade"
              variant="cta-primary"
              className="mb-12 w-full md:w-auto"
            />

            {/* Benefits of Telemedicine */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                10 Vantagens da Telemedicina que Você Precisa Conhecer
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-success">1. Acesso Democrático</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 mr-2 text-success mt-0.5" />
                        <span>Especialistas disponíveis em cidades pequenas</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 mr-2 text-success mt-0.5" />
                        <span>Redução de filas de espera em 60%</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 mr-2 text-success mt-0.5" />
                        <span>Custos 40-60% menores que presencial</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-primary">2. Conveniência Total</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 mr-2 text-primary mt-0.5" />
                        <span>Consultas no conforto de casa</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 mr-2 text-primary mt-0.5" />
                        <span>Eliminação de tempo de deslocamento</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 mr-2 text-primary mt-0.5" />
                        <span>Horários flexíveis, incluindo fins de semana</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-cta-orange">3. Continuidade do Cuidado</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 mr-2 text-cta-orange mt-0.5" />
                        <span>Acompanhamento constante de crônicos</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 mr-2 text-cta-orange mt-0.5" />
                        <span>Histórico médico sempre acessível</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 mr-2 text-cta-orange mt-0.5" />
                        <span>Lembretes automáticos de medicamentos</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-destructive">4. Prevenção Ativa</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 mr-2 text-destructive mt-0.5" />
                        <span>Alertas precoces de problemas de saúde</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 mr-2 text-destructive mt-0.5" />
                        <span>Check-ups regulares mais acessíveis</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 mr-2 text-destructive mt-0.5" />
                        <span>Programas de wellness personalizados</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Heart className="h-5 w-5 mr-2 text-destructive" />
                      Especialidades Mais Beneficiadas
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2">Saúde Mental</h4>
                        <p className="text-sm">
                          Psicoterapia online com eficácia igual ao presencial, 
                          maior adesão ao tratamento.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Endocrinologia</h4>
                        <p className="text-sm">
                          Monitoramento contínuo de diabetes, 
                          ajustes precisos de medicação.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Dermatologia</h4>
                        <p className="text-sm">
                          Diagnóstico por imagem, 
                          acompanhamento de tratamentos estéticos.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            <div className="bg-primary/10 p-8 rounded-lg mb-12 text-center">
              <h3 className="text-2xl font-bold mb-4">
                🎯 Otimize sua Saúde com Suplementação Inteligente
              </h3>
              <p className="text-lg mb-6">
                Combine o poder da telemedicina com suplementos de qualidade 
                para uma abordagem completa de saúde preventiva.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CTAButton 
                  href="https://app.monetizze.com.br/r/AHQ25517456"
                  text="Foco Pill - Performance Mental"
                />
                <CTAButton 
                  href="https://app.monetizze.com.br/r/AXC25503421"
                  text="Nutra Vida - Saúde Geral"
                  variant="cta-primary"
                />
              </div>
            </div>

            {/* How to Use Telemedicine */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Como Aproveitar ao Máximo a Telemedicina
              </h2>
              
              <div className="space-y-6">
                <Card className="border-l-4 border-l-success">
                  <CardHeader>
                    <CardTitle>Preparação para Consulta Virtual</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Aspectos Técnicos</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Conexão estável de internet (mín. 5 Mbps)</li>
                          <li>• Dispositivo com câmera e microfone</li>
                          <li>• Ambiente silencioso e bem iluminado</li>
                          <li>• Teste da plataforma antes da consulta</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Preparação Médica</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Lista de sintomas detalhada</li>
                          <li>• Medicamentos em uso (mostrar na tela)</li>
                          <li>• Exames recentes digitalizados</li>
                          <li>• Histórico familiar organizado</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-primary">
                  <CardHeader>
                    <CardTitle>Maximizando a Eficácia da Consulta</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 mr-3 text-primary mt-0.5" />
                        <div>
                          <strong>Seja específico:</strong> Descreva sintomas com detalhes 
                          (intensidade 1-10, frequência, duração)
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 mr-3 text-primary mt-0.5" />
                        <div>
                          <strong>Faça perguntas:</strong> Prepare lista de dúvidas 
                          antes da consulta para não esquecer
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 mr-3 text-primary mt-0.5" />
                        <div>
                          <strong>Grave (com permissão):</strong> Para revisar 
                          orientações importantes posteriormente
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 mr-3 text-primary mt-0.5" />
                        <div>
                          <strong>Follow-up:</strong> Agende retornos conforme necessário, 
                          não espere sintomas piorarem
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-cta-orange">
                  <CardHeader>
                    <CardTitle>Plataformas Recomendadas no Brasil</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2">Consultas Gerais</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Teladoc Health</li>
                          <li>• Conexa Saúde</li>
                          <li>• Portal Telemedicina</li>
                          <li>• Saúde Digital</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Saúde Mental</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Vittude</li>
                          <li>• Zenklub</li>
                          <li>• Psicologia Viva</li>
                          <li>• Terapia Online</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Especialidades</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Dr. Consulta (geral)</li>
                          <li>• Fleury Medicina Digital</li>
                          <li>• Einstein Conecta</li>
                          <li>• Sírio-Libanês Digital</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            <CTAButton 
              href="https://app.monetizze.com.br/r/AEK25517455"
              text="💎 Femme Q10 Power - Saúde Feminina Completa"
              variant="cta"
              className="mb-12 w-full md:w-auto"
            />

            {/* Future Trends */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Tendências da Telemedicina para 2025-2030
              </h2>
              
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Brain className="h-5 w-5 mr-2 text-primary" />
                      Inteligência Artificial Avançada
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      IA será capaz de fazer diagnósticos preliminares com precisão 
                      superior a 95%, analisar exames em tempo real e sugerir 
                      tratamentos personalizados.
                    </p>
                    <ul className="text-sm space-y-1">
                      <li>• Diagnóstico por voz (análise de padrões respiratórios)</li>
                      <li>• Análise facial para detecção de doenças</li>
                      <li>• Chatbots médicos 24/7 com precisão profissional</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Zap className="h-5 w-5 mr-2 text-cta-orange" />
                      Internet das Coisas Médica (IoMT)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      Dispositivos conectados monitorarão saúde continuamente, 
                      enviando dados em tempo real para equipes médicas.
                    </p>
                    <ul className="text-sm space-y-1">
                      <li>• Roupas inteligentes que monitoram sinais vitais</li>
                      <li>• Banheiros que fazem análises de urina automaticamente</li>
                      <li>• Espelhos que detectam mudanças na pele</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Heart className="h-5 w-5 mr-2 text-destructive" />
                      Medicina Preditiva
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      Algoritmos preverão doenças com meses ou anos de antecedência, 
                      permitindo prevenção verdadeiramente eficaz.
                    </p>
                    <ul className="text-sm space-y-1">
                      <li>• Predição de infartos com 6 meses de antecedência</li>
                      <li>• Detecção precoce de câncer via biomarcadores</li>
                      <li>• Prevenção personalizada baseada em perfil genético</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* FAQ */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">
                FAQ: Telemedicina
              </h2>
              
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>A telemedicina substitui consultas presenciais?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Não substitui completamente, mas complementa. Cerca de 70-80% 
                      das consultas podem ser feitas virtualmente. Exames físicos, 
                      procedimentos e emergências ainda requerem presença física.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Meu plano de saúde cobre telemedicina?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Sim! A ANS (Agência Nacional de Saúde Suplementar) obriga 
                      planos de saúde a cobrir teleconsultas desde 2020. 
                      Verifique com sua operadora os procedimentos cobertos.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Como sei se o médico é qualificado?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Todas as plataformas sérias verificam CRM ativo dos médicos. 
                      Você pode consultar o número do CRM no site do CFM. 
                      Desconfie de consultas muito baratas ou sem identificação médica clara.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>É seguro compartilhar dados de saúde online?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Plataformas confiáveis seguem protocolos rigorosos de segurança 
                      (criptografia, LGPD, certificações internacionais). 
                      É mais seguro que carregar receitas em papel ou conversar em consultórios sem privacidade.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <Separator className="mb-8" />
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Conclusão: A Saúde Digital é o Futuro que Já Chegou
              </h2>
              
              <p className="text-lg leading-relaxed mb-6">
                A telemedicina não é mais uma tendência do futuro - é a realidade 
                do presente. Em 2025, quem não abraçar essa revolução digital 
                ficará para trás em termos de acesso, qualidade e eficiência no cuidado da saúde.
              </p>
              
              <p className="text-lg leading-relaxed mb-8">
                A combinação de telemedicina, IA, dispositivos wearables e 
                medicina preventiva está criando um novo paradigma onde 
                cuidamos da saúde de forma contínua, personalizada e preditiva. 
                O futuro da medicina é digital, acessível e centrado no paciente.
              </p>

              <div className="text-center">
                <CTAButton 
                  href="https://app.monetizze.com.br/r/AHQ25517456"
                  text="🚀 Optimize sua Saúde Mental Hoje"
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

export default TelemedicinaVirtual;