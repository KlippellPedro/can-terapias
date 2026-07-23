# Projeto: Site — Cibele A. Nadalon (Acupuntura e Terapias Integrativas)

## Contexto
Site atual (cibelenadalon.wixsite.com/my-site-1) foi feito por um amigo da família, plano gratuito do Wix, com problemas reais identificados: título/meta genérico nunca customizado ("My Site 1"), conteúdo duplicado entre páginas, barra de marca d'água do Wix visível em todas as páginas. Objetivo: substituir por site próprio, profissional.

**Confirmado via checagem direta no site (04/07/2026)**: as 4 páginas DEDICADAS de cada serviço (ex: `/acupuntura-e-medicina-chinesa`) estão quebradas — 3 praticamente vazias (só título, horário, telefone) e a de Mandalas Cristalinas com parágrafo copiado de outra página (fala em "formações em acupuntura, medicina chinesa e radiestesia", não em mandalas). **Porém a home tem, para os 4 serviços, uma descrição curta real e específica (não genérica)** — ver seção "Conteúdo disponível" abaixo. Essas descrições curtas da home são boas e usáveis; o que está quebrado são as sub-páginas dedicadas.

Este é um projeto de portfólio/família — não é cliente pagante.

## Objetivo do site
Landing page **única** (não multi-página), com seções internas por serviço. Objetivo de conversão primário: **clique no WhatsApp** (não formulário, não ligação).

## Escopo do protótipo (fase atual)
Construir o front-end completo em estrutura, com conteúdo real onde já disponível e **placeholder claramente marcado** onde o conteúdo ainda depende de levantamento com a cliente (ex: `<!-- PLACEHOLDER: descrição técnica de Acupuntura e MTC, pendente de revisão com a Cibele -->`). Não travar o protótipo esperando todo o conteúdo final.

Seções da página única:
1. Hero / apresentação (nome, marca, tagline, CTA WhatsApp)
2. Sobre (bio consolidada — ver conteúdo disponível abaixo)
3. Serviços (**6 blocos**, atualizado em 04/07/2026 — ver `pesquisa-terapias.md`: Acupuntura e Medicina Chinesa, Alinhamento Energético e Radiestesia, Consultoria Sistêmica e Constelação Familiar, Mandalas Cristalinas, Reiki, Shiatsu e Quickmassage). Shiatsu e Quickmassage foi adicionado como 6º bloco porque é a origem profissional real da Cibele (shiatsuterapeuta desde 2009, especialização com o mestre Hisayuki Yasui) e aparece como serviço formal em material mais recente dela — vale ela confirmar que quer isso publicado como card formal.
4. Depoimentos
5. Contato / CTA final (WhatsApp)

**Sem formulário de contato** — decisão já tomada, CTA único é WhatsApp, para não depender de serviço de terceiro em site estático.

## Stack técnico
**Pivô em 14/07/2026**: migrado de HTML/CSS/JS estático puro para **Vite + React 19 + TypeScript + Tailwind CSS v4 + Framer Motion**. Ainda sem backend, sem banco de dados, sem servidor — build estático (SPA de página única), hospedagem continua sendo qualquer host de arquivos estáticos (Netlify/Vercel/GitHub Pages/Cloudflare Pages, ver seção Hospedagem). O motivo do pivô foi a seção "Como a acupuntura atua" (`ExplodedView`, ver `src/components/exploded-view.tsx`): uma cena scroll-driven com três camadas SVG (corpo, nervos, meridianos) que se separam em glassmorphism conforme o scroll, usando `useScroll`/`useTransform` do Framer Motion — viável em JS vanilla, mas o React + Framer Motion tornou a implementação e a manutenção bem mais diretas. Pedro trouxe um projeto já gerado em Next.js (via outra ferramenta de IA) com todas as seções reescritas nesse novo stack; migrei Next→Vite (SPA sem roteamento server-side, já que o site é uma página única) e portei aqui.

Responsivo mobile obrigatório (mantido do escopo original).

## Design
- **Manter logo e paleta de cor atuais**: rosa empoeirado (fundo), cinza, roxo, verde-água (blocos de serviço).
- **Assets de imagem já salvos no projeto** (pasta `img/`): `img/icons/can.png` (logo completo: ícone lótus + monograma "CAn" + assinatura "Cibele A. Nadalon" + subtítulo), `img/icons/lotus.png` (ícone de lótus isolado, 1024×1024), `img/fotos/img_1.avif` (retrato, 463×813, tons quentes — AVIF tem suporte pleno em navegadores modernos, não precisa converter).
- **Paleta extraída diretamente dos arquivos de logo** (cores reais, não estimadas): roxo `#AB96C1` (pétalas do lótus), verde-água `#86A49B` (caule/monograma). Rosa empoeirado (fundo) e um cinza neutro **não existem em nenhum asset atual** — precisam ser escolhidos/combinados na hora do CSS, ou extraídos do CSS do site Wix antigo se quisermos manter exatamente o mesmo tom.
- Cores complementares escolhidas para completar os 6 blocos de serviço (sem fonte real, só combinação visual): rosa accent `#C98F86`, dourado `#C6A05F`, azul `#92A9BC`, terracota `#A9795F` (Shiatsu e Quickmassage, 6º bloco).
- **RESOLVIDO (parcial) — logo em vetor/alta resolução**: não existe. O único arquivo com o logo completo (ícone + texto) é `can.png`, um raster pequeno de 340×227 — vai pixelizar se ampliado (hero, telas grandes, impressão). `lotus.png` é maior (1024×1024) mas só tem o ícone, sem o texto. Decisão pendente: (a) recriar o logo em SVG/vetor, ou (b) usar `lotus.png` como ícone + tipografia web real para "Cibele A. Nadalon" / tagline, em vez de depender da imagem com texto embutido.
- Corrigir a inconsistência visual encontrada: o bloco "Alinhamento Energético e Radiestesia" usa a mesma cor do fundo em vez de cor própria como os outros 3 blocos.
- Não haverá barra de marca d'água (site próprio).

## Conteúdo disponível para reaproveitar (extraído do site atual)
- **Bio**: texto verbatim completo já transcrito da página "Quem Sou" (04/07/2026). Detalhes confirmados e reaproveitáveis: formada em Educação Física em 2002 pelo **Instituto Porto Alegre (IPA)**, CREF 004536-G/RS, com experiência em aquáticas e ginástica laboral; especialização em shiatsu com o mestre **Hisayuki Yasui** (neck therapy, shiatsu laboral, tui-ná); período morando e atendendo em **Roma/Itália**; auriculoterapia método Huang Li Chun; craniopuntura japonesa; pós-graduação em Acupuntura em 2013 pelo Colégio Brasileiro de Acupuntura e Medicina Chinesa (ABACO-CBA), reconhecida pela Faculdade São Judas Tadeu (Porto Alegre); cursos de moxabustão japonesa OKYO e técnicas avançadas em acupuntura japonesa I e II; também consteladora familiar e **se autodenomina "reikiana"** no próprio texto (evidência forte a favor de manter Reiki como serviço formal — ver Conteúdo pendente); atende alinhamento energético/radiestesia em Porto Alegre/RS e Litoral Gaúcho, além de ferramentas online. Prática iniciada em 2009 como shiatsuterapeuta.
  - **Nota de qualidade — ATUALIZADA (04/07/2026, achado no Instagram)**: o texto original tem o trecho "mulher, mãe pâncreas, buscadora". A bio do Instagram @canterapias usa a hashtag `#maepancreas` ativamente — não é erro de digitação do site antigo, é um trocadilho/hashtag pessoal dela. Ainda vale confirmar o sentido exato e se ela quer isso no site novo, mas não tratar mais como "erro a corrigir".
- **Descrições curtas reais dos 4 serviços** (extraídas da home, específicas e usáveis — não são genéricas apesar do que a checagem das sub-páginas sugeriu):
  - Acupuntura e Medicina Chinesa: "Trata uma variedade de condições físicas, emocionais e mentais através do restauro do equilíbrio energético (qi)."
  - Alinhamento Energético e Radiestesia: "Prática que busca equilibrar e harmonizar pessoas, animais e ambientes."
  - Consultoria Sistêmica: "Abordagem que identifica conflitos através da constelação familiar sistêmica e compreensão de dinâmicas familiares e organizacionais."
  - Mandalas Cristalinas: "Ferramenta terapêutica usando geometria sagrada, cristais e elementos da natureza para expandir força de cura."
- **Página "Minha Abordagem" — texto verbatim completo**: "Talvez você esteja abatido(a) ou ansioso(a), talvez você não tenha certeza sobre o futuro, ou simplesmente sente que não está vivendo a vida que gostaria de viver. Seja qual for sua necessidade, estou aqui para acompanhar você no seu processo de autoconhecimento, este é um caminho para o crescimento e a elevação da consciência. Em meus atendimentos, promovo a transformação, incentivando uma perspectiva positiva e a adoção de novas atitudes e hábitos saudáveis em sua rotina. Tenho a experiência profissional que ajudará você a viver melhor e com maior qualidade de vida."
- **Frase de chamada da home** (real, usável em Hero ou CTA final): "Se você busca transformar a sua vida, através do equilíbrio do seu corpo, mente e espírito, estou aqui para te ajudar."
- **Página "Minha Abordagem"** (existe no site atual, não estava mapeada antes): texto de posicionamento pessoal real e bom, tom próximo/acolhedor (abre com "Talvez você esteja abatido(a) ou ansioso(a)..." e fecha em "...viver melhor e com maior qualidade de vida"). Não vira seção nova (a página única já fechou em 5 seções), mas é boa fonte de frases para o bloco Sobre.
- **Horário**: Seg a Sex 8h–20h, Sábado 9h–12h.
- **Atendimento**: presencial, domiciliar e online.
- **Contato**: telefone/WhatsApp (51) 9 9561-2876 — link `wa.me` **conferido em 04/07/2026**: `https://wa.me/5551995612876` é o formato correto (55 + DDD 51 + 9 dígitos). Não testado clicando de fato (abrir o WhatsApp), só validada a estrutura do número.
- **Redes sociais**: Facebook (facebook.com/profile.php/?id=100055632515514) — link confirmado no site atual. Instagram: o site atual referencia @cibeleanadalon.terapeuta, mas o Instagram ativo/real usado por ela é **@canterapias** (836 posts, 1.458 seguidores, bio "Cibele A. Nadalon 🪷 Terapeuta", confirmado em 04/07/2026 navegando direto no perfil) — checar com ela qual conta é a atual antes de linkar no rodapé do site novo, pode ser que a `@cibeleanadalon.terapeuta` esteja desatualizada/abandonada.
- **Depoimentos — RESOLVIDO (04/07/2026)**: mistério da Carol Tauceda resolvido — não veio da página Feedbacks da Wix, é uma avaliação do Google (print enviado pelo Pedro). Os 3 depoimentos usados no site vêm desse print do Google: **Danielle** (5★, "3 avaliações · 2 fotos"), **Karem Padua** (5★, Local Guide · 24 avaliações) e **Carol Tauceda** (5★). Prováveis correspondências com os nomes de arquivo da página Feedbacks da Wix (não confirmado): Danielle ≈ "Dani Camarata", Karem Padua ≈ "Karem" — mas o conteúdo publicado no site usa o texto verbatim do Google, não o das imagens da Wix. Uma frase do depoimento da Danielle ("Até a biza já fez atendimento...") foi omitida por incerteza na transcrição de uma palavra — ver comentário no `index.html`. Os 3 depoimentos das imagens da Wix (`feedback dani camarata.jpg`, `feedback karem.jpg`, print de WhatsApp sem nome) não são mais necessários — 3 depoimentos reais e completos já cobrem a seção.
- **Descrições de serviço — NÃO usar as do site atual como estão** (ver correção em Contexto acima): Acupuntura e MTC, Alinhamento Energético e Consultoria Sistêmica estão vazias; Mandalas Cristalinas tem texto de outra página colado por engano. As únicas strings realmente sobre o serviço em si, hoje, são os títulos das páginas.

## Conteúdo pendente (depende de levantamento com a Cibele)
- **Nome público do serviço de Reiki**: material próprio dela usa "Reiki e Magia Divina", mas `pesquisa-terapias.md` sinaliza que "magia" pode sugerir substituição de tratamento médico em vez de complemento (e é um ponto sensível para anúncios em domínio de saúde, ver seção Meta Ads). O site hoje usa só "Reiki" no título do card até ela confirmar o nome definitivo.
- Confirmar se ela quer Shiatsu e Quickmassage como 6º card formal de serviço (ver Escopo do protótipo acima) — incluído no protótipo porque já está documentado como parte real do trabalho dela.
- Descrição **mais aprofundada** de cada serviço, se quisermos ir além da frase curta/expandida já usada no card (ver `pesquisa-terapias.md` para o conteúdo educativo completo com fontes, inclusive notas sobre quais práticas têm ou não respaldo científico — não necessariamente para publicar como está, é contexto para as decisões de copywriting da Cibele).
- Confirmar o sentido exato de "#maepancreas" (ver nota atualizada acima — é hashtag intencional dela no Instagram, não erro de digitação).
- Confirmar a palavra "biza" no depoimento da Danielle (frase omitida do site por ora, ver nota no `index.html`).
- **CORRIGIDO (14/07/2026) — ilustrações de serviço**: a nota anterior dizia que `img/servicos/` existia com 6 SVGs — checagem direta em 14/07/2026 mostrou que essa pasta nunca existiu no projeto (só `img/fotos/` e `img/icons/`). Ponto discutível, mas não bloqueia nada: os 6 ícones de serviço agora são SVG inline por componente (`ServicoIcon` em `src/components/icons.tsx`), não dependem de arquivo de imagem.
- **Fotos reais dela/do espaço — parcialmente resolvido via Instagram @canterapias (04/07/2026)**: perfil é público, sem necessidade de login pra ver a grade de posts. Melhores achados pra reaproveitar no site (ver post completo antes de decidir, alguns são carrossel):
  - `instagram.com/p/DJReg-rSOXM/` — carrossel "Quem sou eu?", primeiro slide é peça gráfica de marca (roxo, tipografia CAN) e o segundo slide é um retrato real dela ao ar livre, boa qualidade — candidato forte pra Hero ou Sobre (hoje só há 1 foto no projeto).
  - `instagram.com/p/DP3w3hbjGok/` — foto real dela aplicando quick massage num piloto da Stuttgart Porsche (evento "3 dias de atendimento exclusivo"), prova social forte pra Shiatsu e Quickmassage.
  - `instagram.com/p/DaApJDnjoBb/` — grade de cristais e folhas em formato de flor/mandala, legenda confirma que é conteúdo de **"Magia Divina"** (não Mandalas Cristalinas) — reforça que "Reiki e Magia Divina" é nome que ela já usa ativamente na prática, não só um rótulo antigo.
  - Outros bons candidatos vistos na grade (sem permalink anotado ainda): 2 fotos em close de agulha de auriculoterapia na orelha (ótimas pra Acupuntura e MTC), cadeira de quick massage vazia, fachada com placa "MASSAGEM", foto de massagem nos pés, fotos de equipe uniformizada em eventos corporativos (prova social/credibilidade).
  - **Limitação técnica**: não consegui baixar os arquivos de imagem automaticamente (a ferramenta de navegador bloqueia a extração da URL direta da foto, por segurança/privacidade) — alguém precisa abrir o post e salvar a imagem manualmente (é conta da própria família, sem problema de direitos autorais).

## Rastreamento / Meta Ads (contexto para quem for implementar)
- Evento de conversão a implementar: clique no botão/link do WhatsApp.
- Técnica necessária: abrir o link em nova aba (`target="_blank"`) ou usar pequeno delay antes da navegação, para não interromper o disparo do evento do Pixel.
- Incluir checagem defensiva antes de chamar `fbq` (ex: `if (typeof fbq !== 'undefined') { ... }`), pois o script pode não carregar (bloqueador de anúncio, falha de rede).
- Nome exato do evento padrão da Meta para isso não foi confirmado na documentação atual — checar no Events Manager antes de implementar, não assumir nome de função.
- **Risco conhecido**: domínios com conteúdo de saúde/bem-estar podem ser classificados automaticamente pela Meta e ter eventos de otimização restringidos, independente da aprovação do anúncio em si. Verificar classificação no Events Manager assim que o domínio existir.
- Verificação de domínio no Meta Business Suite (TXT no DNS ou meta tag) é pré-requisito para o Pixel/Conversions API funcionar corretamente.

## SEO básico (correção do que está quebrado hoje)
- Title tag único e descritivo (hoje é "My Site 1" em todas as páginas — corrigir).
- Meta description real.
- Open Graph / Twitter Card com nome e marca reais.
- Alt text em todas as imagens, especialmente no logo (hoje é imagem sem texto associado).
- Hierarquia de heading semântica (H1 único por página, H2 por seção).

## Domínio — decisão pendente
Confirmado: domínio `.com.br` pode ser registrado por pessoa física com CPF, não exige CNPJ/empresa aberta. Preço oficial no Registro.br gira em torno de R$ 40/ano, podendo variar entre R$ 40–80/ano via registradoras — não há confirmação de promoções vigentes no momento, checar ao comprar.

Sugestões de nome (a decidir):
- `cibelenadalon.com.br`
- `cannterapias.com.br` (baseado em "CAN Terapias", nome usado no rodapé do site atual)

## Hospedagem — decisão pendente
Ainda não escolhida. Opções comuns para site estático com domínio próprio: Netlify, Vercel, GitHub Pages, Cloudflare Pages. Não há confirmação de qual é a melhor opção atual para este caso específico — verificar direto na documentação de cada uma antes de decidir.

## Status
**Protótipo iniciado em 04/07/2026**: versão estática (`index.html`, `css/style.css`, `js/script.js`) com as 5 seções da página única.

**Atualização em 04/07/2026**: Pedro trouxe prints de 3 avaliações reais do Google (resolvendo o depoimento pendente) e um arquivo `pesquisa-terapias.md` (pesquisa com fontes sobre cada modalidade terapêutica, incluindo notas de status científico). Com isso: os 3 depoimentos deixaram de ser placeholder, as descrições dos serviços foram expandidas com conteúdo real da pesquisa, Reiki ganhou descrição própria, e um 6º serviço (Shiatsu e Quickmassage) foi adicionado.

**Pivô em 14/07/2026 — migração para Vite + React + TypeScript**: a versão estática foi substituída pela stack descrita em "Stack técnico" acima. Estrutura atual:
- `index.html` — entry point Vite (metadata SEO, JSON-LD, favicon, `<div id="root">`).
- `src/main.tsx` — bootstrap do React, importa fontes (`@fontsource/playfair-display`, `@fontsource/jost`, self-hospedadas — sem chamada externa ao Google Fonts) e `index.css`.
- `src/App.tsx` — monta as seções na ordem (Header, Hero, Sobre, ExplodedView, Serviços, Depoimentos, Contato, Footer, botão flutuante de WhatsApp).
- `src/components/*.tsx` — um componente por seção/elemento; `exploded-view.tsx` é a peça nova (cena scroll-driven, ver Stack técnico).
- `src/lib/data.ts` — dados de serviços, depoimentos e links (WhatsApp, nav) centralizados.
- `src/index.css` — tokens de design Tailwind v4 (`@theme inline`), mesma paleta de cores já documentada em Design.
- `public/img/` — mesmos assets de imagem que já existiam em `img/` (movidos, não duplicados).
- `.claude/launch.json` atualizado para rodar `npm run dev` (Vite, porta 5500) em vez do `python -m http.server` antigo — **rodar `npm install` antes do primeiro `npm run dev`**.

Pendências de conteúdo inalteradas pelo pivô de stack: nome público do Reiki ("e Magia Divina"?) e confirmação do Shiatsu/Quickmassage como card oficial — ver Conteúdo pendente.

## Pendências que bloqueiam início do código
1. Nome de domínio final.
2. Registro efetivo do domínio (CPF do titular).
3. ~~Confirmar existência de arquivo original do logo (vetor/alta resolução)~~ — **confirmado: não existe** (ver Design acima). Decisão pendente é outra: recriar em vetor ou usar `lotus.png` + tipografia web.
4. Escolha de hospedagem.
5. Conteúdo técnico real de cada serviço (pode seguir como placeholder no protótipo inicial — não bloqueia o início do código).
6. Mais fotos/vídeos reais (só há 1 foto salva hoje) — não bloqueia o início do código, protótipo pode seguir com o que existe + placeholders de imagem.
