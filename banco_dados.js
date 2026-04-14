// BANCO DE DADOS GLOBAL - PRÉ-CARREGADO
const BANCO_GLOBAL = {
    magias: [
{ 
        nome: "Abaular Terra", 
        nivel: 0, 
        desc: "Truque. Transmuta terra em cubo de 1,5m: muda terreno difícil, cria formas ou altera cores por 1 hora." 
    },
    { 
        nome: "Acalmar Emoções", 
        nivel: 2, 
        desc: "Esfera de 6m. Alvos fazem salvaguarda de CAR ou ficam imunes a Amedrontado/Enfeitiçado ou tornam-se indiferentes a hostis." 
    },
    { 
        nome: "Acudir os Moribundos", 
        nivel: 0, 
        desc: "Truque. Toque. Estabiliza uma criatura com 0 PV que não esteja morta." 
    },
    { 
        nome: "Adivinhação", 
        nivel: 4, 
        desc: "Ritual. Você recebe uma resposta verdadeira sobre uma atividade específica que planeja realizar em até 7 dias." 
    },
    { 
        nome: "Ajuda", 
        nivel: 2, 
        desc: "Aumenta o PV máximo e atual de até 3 criaturas em 5 pontos por 8 horas. +5 PV por círculo superior." 
    },
    { 
        nome: "Alarme", 
        nivel: 1, 
        desc: "Ritual. Alerta mental ou sonoro se uma criatura entrar em área de 6m por 8 horas." 
    },
    { 
        nome: "Aliado Extraplanar", 
        nivel: 6, 
        desc: "Pede ajuda a uma entidade extraplanar poderosa em troca de pagamento ou serviço." 
    },
    { 
        nome: "Alterar-se", 
        nivel: 2, 
        desc: "Muda forma: Adaptação Aquática, Armas Naturais (1d6 dano) ou Aparência (Muda rosto/cor)." 
    },
    { 
        nome: "Amizade Animal", 
        nivel: 1, 
        desc: "Fera deve passar em salvaguarda de SAB ou fica Enfeitiçada por você por 24 horas." 
    },
    { 
        nome: "Andar na Água", 
        nivel: 3, 
        desc: "Até 10 criaturas ganham a habilidade de andar sobre líquidos (água, lama, neve, lava) por 1 hora."
    },
{ 
        nome: "Animar Objetos", 
        nivel: 5, 
        desc: "Dá vida a até 10 objetos não mágicos. Eles tornam-se criaturas sob seu comando com estatísticas baseadas no tamanho." 
    },
    { 
        nome: "Antipatia/Simpatia", 
        nivel: 8, 
        desc: "Encanta um objeto ou área para atrair ou repelir tipos específicos de criaturas por 10 dias." 
    },
    { 
        nome: "Aparência Longínqua", 
        nivel: 5, 
        desc: "Cria um duplicado de si mesmo em qualquer local no mesmo plano que você possa ver ou visualizar. Você pode ver e ouvir através dele." 
    },
    { 
        nome: "Aperto de Hadar", 
        nivel: 0, 
        desc: "Truque (Explosão Mística). Quando você atinge uma criatura, pode puxá-la 3 metros em linha reta em sua direção." 
    },
    { 
        nome: "Aprisionamento", 
        nivel: 9, 
        desc: "Cria uma contenção mágica que dura até ser dissipada. O alvo não envelhece e não precisa respirar/comer." 
    },
    { 
        nome: "Arco Elétrico de Witch", 
        nivel: 1, 
        desc: "Ataque mágico que causa 1d12 de dano elétrico. Enquanto mantiver concentração, pode usar uma ação para causar o dano automaticamente." 
    },
    { 
        nome: "Arma Espiritual", 
        nivel: 2, 
        desc: "Cria uma arma flutuante que ataca com sua Ação Bônus. Dano: 1d8 + Mod. Atributo de Conjuração." 
    },
    { 
        nome: "Armadura de Agathys", 
        nivel: 1, 
        desc: "Ganha 5 PV temporários. Enquanto os tiver, qualquer criatura que te atingir em combate corpo a corpo sofre 5 de dano gélido." 
    },
    { 
        nome: "Armadura de Mage", 
        nivel: 1, 
        desc: "Toque. A CA de uma criatura sem armadura torna-se 13 + Mod. Destreza por 8 horas." 
    },
    { 
        nome: "Arrombar", 
        nivel: 2, 
        desc: "Abre instantaneamente uma porta, baú ou algema trancada (mesmo que por meios mágicos). Emite um som alto a 90m." 
    },
{ 
        nome: "Ataque Certeiro", 
        nivel: 0, 
        desc: "Truque. Você aponta para um alvo. No seu próximo turno, você tem Vantagem na primeira jogada de ataque contra ele." 
    },
    { 
        nome: "Aumentar/Reduzir", 
        nivel: 2, 
        desc: "Altera o tamanho de uma criatura ou objeto. Aumentar: Vantagem em testes de FOR e +1d4 de dano. Reduzir: Desvantagem em FOR e -1d4 de dano." 
    },
    { 
        nome: "Aura de Pureza", 
        nivel: 4, 
        desc: "Emanação de 9m. Aliados não podem ficar Doentes e têm Vantagem em salvaguardas contra várias condições (Cego, Surdo, Medo, etc)." 
    },
    { 
        nome: "Aura de Vitalidade", 
        nivel: 3, 
        desc: "Emanação de 9m. Enquanto a magia durar, você pode usar uma Ação Bônus para curar 2d6 PV de uma criatura na área." 
    },
    { 
        nome: "Aura Sagrada", 
        nivel: 8, 
        desc: "Emanação de 9m. Aliados têm Vantagem em salvaguardas e inimigos têm Desvantagem em ataques contra eles. Pode cegar atacantes mortos-vivos." 
    },
    { 
        nome: "Auxílio", 
        nivel: 2, 
        desc: "Aumenta o PV máximo e atual de até 3 criaturas em 5 pontos por 8 horas. O bônus aumenta em +5 para cada nível acima do 2º." 
    },
    { 
        nome: "Bacalhau de Inverno (Toque Gelado)", 
        nivel: 0, 
        desc: "Truque. Ataque mágico causa 1d8 de dano gélido e impede o alvo de recuperar PV até o início do seu próximo turno." 
    },
    { 
        nome: "Badalar Fúnebre", 
        nivel: 0, 
        desc: "Truque. Alvo faz salvaguarda de SAB ou sofre 1d8 de dano necrótico (1d12 se o alvo estiver ferido)." 
    },
    { 
        nome: "Banimento", 
        nivel: 4, 
        desc: "Alvo deve passar em salvaguarda de CAR ou é enviado para outro plano. Se o alvo for nativo do plano atual, ele vai para um semiplano inofensivo." 
    },
    { 
        nome: "Banquete dos Heróis", 
        nivel: 6, 
        desc: "Cria um banquete magnífico. Até 12 criaturas ganham imunidade a veneno/medo, vantagem em testes de SAB e aumentam PV máximo em 2d10." 
    },
{ 
        nome: "Barreira de Lâminas", 
        nivel: 6, 
        desc: "Cria uma parede de lâminas cortantes de 30m. Criaturas na área sofrem 6d10 de dano cortante (Destreza reduz metade)." 
    },
    { 
        nome: "Bênção", 
        nivel: 1, 
        desc: "Até 3 criaturas recebem +1d4 em jogadas de ataque e testes de resistência por 1 minuto." 
    },
    { 
        nome: "Boca Mágica", 
        nivel: 2, 
        desc: "Ritual. Encanta um objeto para proferir uma mensagem de até 25 palavras quando um gatilho visual ou auditivo ocorrer." 
    },
    { 
        nome: "Bola de Fogo", 
        nivel: 3, 
        desc: "Explosão em esfera de 6m. Criaturas sofrem 8d6 de dano ígneo (Destreza reduz metade). Incendeia objetos inflamáveis." 
    },
    { 
        nome: "Bola de Fogo Controlável", 
        nivel: 7, 
        desc: "Uma conta brilhante que explode causando 12d6 de dano ígneo. O dano aumenta em 1d6 para cada turno que você não a detonar." 
    },
    { 
        nome: "Bons Frutos", 
        nivel: 1, 
        desc: "Cria 10 frutos mágicos. Cada fruto cura 1 PV e fornece nutrição para um dia inteiro." 
    },
    { 
        nome: "Braços de Hadar", 
        nivel: 1, 
        desc: "Tentáculos de energia negra causam 2d6 de dano necrótico em área de 3m e impedem o alvo de usar Reações." 
    },
    { 
        nome: "Bruxaria (Hex)", 
        nivel: 1, 
        desc: "Alvo sofre +1d6 de dano necrótico sempre que você o atingir com um ataque. Você impõe Desvantagem em testes de um Atributo escolhido." 
    },
    { 
        nome: "Buraco Negro (Ravenous Void)", 
        nivel: 9, 
        desc: "Cria um vácuo de 6m de raio. Criaturas são puxadas para o centro, sofrem 5d10 de dano de força e ficam Contidas." 
    },
    { 
        nome: "Caçador de Mortos-Vivos", 
        nivel: 4, 
        desc: "Seus ataques causam +1d6 de dano radiante a mortos-vivos. Você detecta a localização de mortos-vivos a até 18 metros." 
    },
{ 
        nome: "Cajado Florido", 
        nivel: 0, 
        desc: "Truque. Você faz flores, folhas ou ramos brotarem de um cajado ou pedaço de madeira. Pode ser usado para criar efeitos visuais ou sinalização." 
    },
    { 
        nome: "Caminhar em Árvores (Tree Stride)", 
        nivel: 5, 
        desc: "Você ganha a habilidade de entrar em uma árvore viva e sair de outra árvore do mesmo tipo a até 150 metros, usando parte do seu deslocamento." 
    },
    { 
        nome: "Campo Antimagia", 
        nivel: 8, 
        desc: "Uma esfera invisível de 3m de raio envolve você. Magias não podem ser conjuradas e itens mágicos tornam-se mundanos dentro da área." 
    },
    { 
        nome: "Campo de Força (Forcecage)", 
        nivel: 7, 
        desc: "Cria uma prisão invisível de energia em forma de cubo ou gaiola. Criaturas presas não podem sair nem por meios mágicos sem teste de CAR." 
    },
    { 
        nome: "Cão Fiel de Mordenkainen", 
        nivel: 4, 
        desc: "Cria um cão invisível e imóvel que late se criaturas se aproximarem e ataca inimigos a até 1,5m causando 4d10 de dano de força." 
    },
    { 
        nome: "Cativar", 
        nivel: 2, 
        desc: "Você tece uma distração magnética. Criaturas que falharem na salvaguarda de SAB têm Desvantagem em Percepção para notar qualquer um exceto você." 
    },
    { 
        nome: "Cegueira/Surdez", 
        nivel: 2, 
        desc: "Você escolhe entre deixar o alvo Cego ou Surdo. O alvo faz uma salvaguarda de CON no final de cada turno dele para encerrar o efeito." 
    },
    { 
        nome: "Círculo de Poder", 
        nivel: 5, 
        desc: "Emanação de 9m. Aliados têm Vantagem em salvaguardas contra magias e não sofrem dano se passarem em salvaguardas que dariam metade do dano." 
    },
    { 
        nome: "Círculo de Teletransporte", 
        nivel: 5, 
        desc: "Desenha um círculo no chão que abre um portal para um círculo de teletransporte permanente que você conheça em qualquer lugar do mesmo plano." 
    },
    { 
        nome: "Chama Sagrada", 
        nivel: 0, 
        desc: "Truque. Radiação desce sobre uma criatura. O alvo sofre 1d8 de dano radiante (Destreza anula). Ignora cobertura parcial." 
    },
{ 
        nome: "Chicote de Espinhos", 
        nivel: 0, 
        desc: "Truque. Ataque mágico corpo a corpo (9m). Causa 1d6 de dano perfurante e, se o alvo for Grande ou menor, você o puxa até 3 metros para perto de você." 
    },
    { 
        nome: "Chuva de Meteoros", 
        nivel: 9, 
        desc: "Quatro esferas de fogo caem em pontos à sua escolha. Criaturas na área sofrem 20d6 de dano ígneo e 20d6 de dano de concussão (Destreza reduz metade)." 
    },
    { 
        nome: "Clarividência", 
        nivel: 3, 
        desc: "Você cria um sensor invisível em um local familiar ou óbvio. Você pode ver ou ouvir através dele como se estivesse lá por 10 minutos." 
    },
    { 
        nome: "Clone", 
        nivel: 8, 
        desc: "Cria uma duplicata inerte de uma criatura viva em um receptáculo. Se a criatura original morrer, sua alma se transfere para o clone se ele estiver maduro." 
    },
    { 
        nome: "Cloudkill (Névoa Mortal)", 
        nivel: 5, 
        desc: "Cria uma esfera de fumaça venenosa de 6m. Causa 5d8 de dano venenoso a quem iniciar o turno lá. A névoa se afasta 3m de você a cada turno." 
    },
    { 
        nome: "Coluna de Chamas", 
        nivel: 5, 
        desc: "Um cilindro de fogo desce dos céus. Criaturas sofrem 4d6 de dano ígneo e 4d6 de dano radiante (Destreza reduz metade)." 
    },
    { 
        nome: "Comando", 
        nivel: 1, 
        desc: "Você dá uma ordem de uma palavra (ex: Fuja, Caia, Pare) a uma criatura. Ela deve passar em salvaguarda de SAB ou obedecer no próximo turno." 
    },
    { 
        nome: "Compreender Idiomas", 
        nivel: 1, 
        desc: "Ritual. Pela duração, você entende o significado literal de qualquer idioma falado que ouvir ou texto escrito que tocar." 
    },
    { 
        nome: "Comunhão", 
        nivel: 5, 
        desc: "Ritual. Você contata sua divindade e faz até três perguntas que possam ser respondidas com 'Sim' ou 'Não'." 
    },
    { 
        nome: "Comunhão com a Natureza", 
        nivel: 5, 
        desc: "Ritual. Você se torna um com a natureza e ganha conhecimento sobre o terreno, plantas, animais ou inimigos em um raio de 4,5km." 
    },
{ 
        nome: "Cone de Frio", 
        nivel: 5, 
        desc: "Um cone de 18m de ar congelante. Criaturas sofrem 8d8 de dano gélido (Constituição reduz metade). Alvos mortos tornam-se estátuas de gelo." 
    },
    { 
        nome: "Confusão", 
        nivel: 4, 
        desc: "Alvos em esfera de 3m fazem salvaguarda de SAB. Se falharem, rolam 1d10 para determinar o comportamento aleatório (atacar aliados, fugir ou ficar parado)." 
    },
    { 
        nome: "Conjurar Animais", 
        nivel: 3, 
        desc: "Invoca espíritos feéricos que assumem a forma de feras (ex: 1 fera ND 2 ou 8 feras ND 1/4). Eles obedecem aos seus comandos no combate." 
    },
    { 
        nome: "Conjurar Elemental", 
        nivel: 5, 
        desc: "Invoca um elemental de ND 5 ou menor de uma área de ar, terra, fogo ou água. Requer concentração total ou o elemental torna-se hostil." 
    },
    { 
        nome: "Conjurar Seres Feéricos", 
        nivel: 6, 
        desc: "Invoca uma criatura feérica de ND 6 ou menor. Ela aparece em um espaço desocupado e obedece aos seus comandos verbais." 
    },
    { 
        nome: "Consertar (Mending)", 
        nivel: 0, 
        desc: "Truque. Repara um único dano físico ou rachadura em um objeto (como um elo de corrente, uma chave quebrada ou uma capa rasgada)." 
    },
    { 
        nome: "Constrição (Ensnaring Strike)", 
        nivel: 1, 
        desc: "Próximo ataque com arma cria vinhas espinhosas. Alvo sofre 1d6 de dano perfurante por turno e fica Contido (Força anula)." 
    },
    { 
        nome: "Contramagia", 
        nivel: 3, 
        desc: "Reação. Tenta interromper uma magia sendo conjurada. Se a magia for de nível 4+, exige teste de atributo (CD 10 + nível da magia)." 
    },
    { 
        nome: "Controlar Água", 
        nivel: 4, 
        desc: "Manipula uma grande massa de água: pode criar redemoinhos, inundar áreas, criar fossos ou desviar o curso de um rio." 
    },
    { 
        nome: "Controlar Clima", 
        nivel: 8, 
        desc: "Você altera gradualmente as condições climáticas (precipitação, temperatura e vento) em um raio de 8km por até 8 horas." 
    },
{ 
        nome: "Controlar Mortos-Vivos", 
        nivel: 5, 
        desc: "Você tenta dobrar um morto-vivo à sua vontade. Ele deve passar em salvaguarda de CAR ou obedecer aos seus comandos por 24 horas." 
    },
    { 
        nome: "Controlar o Clima", 
        nivel: 8, 
        desc: "Você altera as condições climáticas (precipitação, temperatura e vento) em um raio de 8km. As mudanças levam tempo para ocorrer." 
    },
    { 
        nome: "Convocação Instantânea de Tenser", 
        nivel: 6, 
        desc: "Você toca um objeto e grava seu nome nele. A qualquer momento, você pode chamar o objeto para sua mão de qualquer distância." 
    },
    { 
        nome: "Convocar Animais", 
        nivel: 3, 
        desc: "Você invoca espíritos feéricos que assumem a forma de feras. Elas aparecem em espaços desocupados e obedecem aos seus comandos." 
    },
    { 
        nome: "Convocar Divindade", 
        nivel: 9, 
        desc: "Você clama pela intervenção direta de uma divindade ou poder cósmico para realizar um efeito milagroso ou devastador." 
    },
    { 
        nome: "Convocar Elementais Menores", 
        nivel: 4, 
        desc: "Você invoca espíritos elementais (como Mephits) que aparecem e lutam por você até que a concentração seja quebrada." 
    },
    { 
        nome: "Convocar Montaria", 
        nivel: 2, 
        desc: "Você convoca um espírito que assume a forma de uma montaria leal (cavalo, camelo, etc.). Ela é inteligente e ligada telepaticamente a você." 
    },
    { 
        nome: "Convocar Montaria Maior", 
        nivel: 4, 
        desc: "Semelhante a convocar montaria, mas permite criaturas voadoras ou mais poderosas como Grifos, Pégasos ou Hipogrifos." 
    },
    { 
        nome: "Convocar Relâmpagos", 
        nivel: 3, 
        desc: "Cria uma nuvem de tempestade. Com uma ação, você pode fazer um relâmpago cair, causando 3d10 de dano elétrico (Destreza reduz metade)." 
    },
    { 
        nome: "Coroa da Loucura", 
        nivel: 2, 
        desc: "Um humanoide fica enfeitiçado e uma coroa de ferro surge na sua cabeça. Ele deve usar a ação dele para atacar uma criatura que você escolher." 
    },
{ 
        nome: "Corpo de Espinhos", 
        nivel: 4, 
        desc: "Espinhos brotam do seu corpo. No início de cada um dos seus turnos, qualquer criatura que te agarre ou esteja agarrada por você sofre 1d10 de dano perfurante." 
    },
    { 
        nome: "Criar Comida e Água", 
        nivel: 3, 
        desc: "Ritual. Você cria 20kg de comida e 110 litros de água no chão ou em recipientes, o suficiente para sustentar 15 humanos ou 5 montarias por 24 horas." 
    },
    { 
        nome: "Criar Mortos-Vivos", 
        nivel: 6, 
        desc: "Você imbui cadáveres com energia necrótica para criar até três Carniçais sob seu controle. Se conjurada em níveis altos, cria seres mais poderosos." 
    },
    { 
        nome: "Criar ou Destruir Água", 
        nivel: 1, 
        desc: "Você cria até 40 litros de água limpa em um recipiente ou em forma de chuva, ou destrói a mesma quantidade em forma de névoa ou poça." 
    },
    { 
        nome: "Crescer Espinhos", 
        nivel: 2, 
        desc: "O chão em um raio de 6m fica coberto de espinhos duros. A área torna-se terreno difícil e uma criatura sofre 2d4 de dano para cada 1,5m que se mover." 
    },
    { 
        nome: "Crescimento Vegetal", 
        nivel: 3, 
        desc: "Num raio de 30m, as plantas tornam-se densas; mover-se 1,5m custa 6m de deslocamento. Pode ser usada como ritual de 8h para dobrar a colheita de uma região." 
    },
    { 
        nome: "Cura Curativa (Healing Word)", 
        nivel: 1, 
        desc: "Ação Bônus. Uma criatura à vista recupera PV igual a 1d4 + seu modificador de atributo de conjuração." 
    },
    { 
        nome: "Curar Ferimentos", 
        nivel: 1, 
        desc: "Toque. Uma criatura recupera PV igual a 1d8 + seu modificador de atributo de conjuração." 
    },
    { 
        nome: "Curar Ferimentos em Massa", 
        nivel: 5, 
        desc: "Ondas de energia curativa emanam de você. Até 6 criaturas em um raio de 9m recuperam 3d8 + seu modificador de atributo de conjuração." 
    },
    { 
        nome: "Dardo Guia", 
        nivel: 1, 
        desc: "Ataque mágico causa 4d6 de dano radiante. O próximo ataque feito contra este alvo antes do fim do seu próximo turno tem Vantagem." 
    },
{ 
        nome: "Debilidade Mental", 
        nivel: 8, 
        desc: "Você ataca a mente de uma criatura. O alvo sofre 4d6 de dano psíquico e deve passar em salvaguarda de INT ou terá seus valores de INT e CAR reduzidos para 1 por 30 dias." 
    },
    { 
        nome: "Dedilhação Sombria (Chill Touch)", 
        nivel: 0, 
        desc: "Truque. Ataque mágico causa 1d8 de dano necrótico. O alvo não pode recuperar PV e, se for morto-vivo, tem desvantagem em ataques contra você até o seu próximo turno." 
    },
    { 
        nome: "Dedo da Morte", 
        nivel: 7, 
        desc: "Envia energia negativa. Alvo sofre 7d8 + 30 de dano necrótico (Constituição reduz metade). Se matar um humanoide, ele levanta como Zumbi sob seu comando permanente." 
    },
    { 
        nome: "Descanso Tranquilo", 
        nivel: 2, 
        desc: "Ritual. Toca um cadáver ou ossos. Pela duração de 10 dias, o alvo não pode ser transformado em morto-vivo e o tempo limite para ressurreição é pausado." 
    },
    { 
        nome: "Desintegrar", 
        nivel: 6, 
        desc: "Raio causa 10d6 + 40 de dano de força. Se o dano reduzir o alvo a 0 PV, ele e tudo o que carrega (exceto itens mágicos) são transformados em pó." 
    },
    { 
        nome: "Deslocamento", 
        nivel: 3, 
        desc: "Sua imagem projeta-se ao seu lado, fazendo com que ataques contra você tenham Desvantagem. O efeito encerra se você sofrer dano ou for incapacitado." 
    },
    { 
        nome: "Despistar", 
        nivel: 5, 
        desc: "Você fica Invisível e simultaneamente cria uma duplicata ilusória de si mesmo. Você pode mover a duplicata e ver/ouvir através dela." 
    },
    { 
        nome: "Destruição Estática", 
        nivel: 3, 
        desc: "Cria uma barreira de energia elétrica. Criaturas que passarem por ela sofrem 4d8 de dano elétrico e podem ser empurradas para trás." 
    },
    { 
        nome: "Detectar Armadilhas e Poços", 
        nivel: 2, 
        desc: "Você sente a presença e natureza de qualquer armadilha dentro da sua linha de visão a até 36 metros de distância." 
    },
    { 
        nome: "Detectar Bem e Mal", 
        nivel: 1, 
        desc: "Pela duração, você sabe se há um celestial, corruptor, elemental, feérico, morto-vivo ou aberração a até 9 metros, bem como locais consagrados/profanados." 
    },
{ 
        nome: "Detectar Magia", 
        nivel: 1, 
        desc: "Ritual. Você sente a presença de magia a até 9 metros. Se sentir magia, pode usar sua ação para ver uma aura ao redor de qualquer criatura ou objeto visível que a possua e determinar a escola de magia." 
    },
    { 
        nome: "Detectar Pensamentos", 
        nivel: 2, 
        desc: "Você lê os pensamentos superficiais de criaturas a até 9 metros. Pode tentar aprofundar a leitura, mas o alvo percebe e faz uma salvaguarda de SAB." 
    },
    { 
        nome: "Detectar Veneno e Doença", 
        nivel: 1, 
        desc: "Ritual. Você sente a presença e localização de venenos, criaturas venenosas e doenças a até 9 metros de você por 10 minutos." 
    },
    { 
        nome: "Diafragma de Diamante (Invulnerabilidade)", 
        nivel: 9, 
        desc: "Você fica imune a todos os danos até o fim da duração da magia (10 minutos). Requer um diamante de 500 PO que é consumido." 
    },
    { 
        nome: "Dificultar Detecção", 
        nivel: 3, 
        desc: "Alvo não pode ser alvo de magias de adivinhação ou percebido por sensores mágicos de vidência por 8 horas." 
    },
    { 
        nome: "Disfarçar-se", 
        nivel: 1, 
        desc: "Você muda sua aparência física, incluindo roupas e equipamentos, por 1 hora. Uma criatura pode usar investigação contra sua CD de magia para perceber o disfarce." 
    },
    { 
        nome: "Dissipar Magia", 
        nivel: 3, 
        desc: "Escolha um alvo. Qualquer magia de nível 3 ou inferior no alvo termina. Para magias de nível superior, faça um teste de atributo (CD 10 + nível da magia)." 
    },
    { 
        nome: "Drenar Vida (Enervation)", 
        nivel: 5, 
        desc: "Um chicote de energia negra liga você a um alvo. Ele sofre 4d8 de dano necrótico e você recupera PV igual a metade do dano causado." 
    },
    { 
        nome: "Dominar Animal", 
        nivel: 4, 
        desc: "Uma fera deve passar em salvaguarda de SAB ou fica Enfeitiçada. Você estabelece um elo telepático e pode assumir o controle total das ações dela." 
    },
    { 
        nome: "Dominar Monstro", 
        nivel: 8, 
        desc: "Uma criatura à vista deve passar em salvaguarda de SAB ou fica Enfeitiçada. Você tem controle total sobre as ações dela enquanto houver concentração." 
    },
{ 
        nome: "Dominar Pessoa", 
        nivel: 5, 
        desc: "Você tenta dominar um humanoide. O alvo deve passar em salvaguarda de SAB ou fica Enfeitiçado. Enquanto houver concentração, você tem controle total sobre as ações dele através de um elo telepático." 
    },
    { 
        nome: "Dormir", 
        nivel: 1, 
        desc: "Role 5d8; o total é o número de PV de criaturas que esta magia afeta. Criaturas em uma esfera de 6m caem num sono mágico em ordem ascendente de seus PV atuais." 
    },
    { 
        nome: "Drenar Sopro (Warding Bond)", 
        nivel: 2, 
        desc: "Você toca um aliado e cria um elo. Enquanto ele estiver a até 18m, ele ganha +1 na CA e salvaguardas, e resistência a todos os danos. Sempre que ele sofrer dano, você sofre a mesma quantidade." 
    },
    { 
        nome: "Duplicata Ilusória (Mislead)", 
        nivel: 5, 
        desc: "Você fica invisível e cria uma cópia ilusória de si mesmo. Você pode usar sua ação para mover a cópia e ver/ouvir através dela como se estivesse no lugar dela." 
    },
    { 
        nome: "Ecos da Morte", 
        nivel: 2, 
        desc: "Você imbui uma arma com energia necrótica. O próximo ataque causa 2d6 de dano necrótico extra e o alvo não pode recuperar PV até o início do seu próximo turno." 
    },
    { 
        nome: "Elasticidade", 
        nivel: 2, 
        desc: "O corpo do alvo torna-se flexível. Ele ganha vantagem em testes de Destreza (Acrobacia) e pode passar por espaços de até 25cm de largura sem precisar se espremer." 
    },
    { 
        nome: "Eletrocussão (Shocking Grasp)", 
        nivel: 0, 
        desc: "Truque. Toque. Ataque mágico causa 1d8 de dano elétrico. Você tem vantagem se o alvo usar armadura de metal. O alvo não pode usar reações até o início do próximo turno dele." 
    },
    { 
        nome: "Elo Mental de Rary", 
        nivel: 5, 
        desc: "Ritual. Cria uma ligação telepática entre até oito criaturas voluntárias por 1 hora. Elas podem se comunicar à distância através do pensamento (desde que no mesmo plano)." 
    },
    { 
        nome: "Emanação Sagrada", 
        nivel: 4, 
        desc: "Uma luz suave brilha de você em um raio de 9m. Aliados recuperam o valor mínimo de qualquer dado de cura lançado e têm vantagem em salvaguardas contra morte." 
    },
{ 
        nome: "Emissário (Sending)", 
        nivel: 3, 
        desc: "Você envia uma mensagem de até 25 palavras para uma criatura que conhece. Ela ouve na mente e pode responder. Funciona em qualquer distância e até entre planos (5% de chance de falha)." 
    },
    { 
        nome: "Encontrar Armadilhas", 
        nivel: 2, 
        desc: "Você sente a presença de qualquer armadilha dentro da sua linha de visão a até 36 metros. Você aprende a natureza geral do perigo, mas não sua localização exata." 
    },
    { 
        nome: "Encontrar Caminho", 
        nivel: 6, 
        desc: "Escolha um local fixo no mesmo plano. Pela duração (1 dia), você sabe a distância e direção exata para lá, e o caminho mais curto e direto." 
    },
    { 
        nome: "Encontrar Familiar", 
        nivel: 1, 
        desc: "Ritual. Você ganha os serviços de um espírito que assume a forma de um animal (coruja, gato, rato, etc.). Você pode ver pelos olhos dele e conjurar magias de toque através dele." 
    },
    { 
        nome: "Enfeitiçar Pessoa", 
        nivel: 1, 
        desc: "Um humanoide à vista deve passar em salvaguarda de SAB ou fica Enfeitiçado por você por 1 hora. Ele te vê como um conhecido amigável." 
    },
    { 
        nome: "Enfraquecer Intelecto (Mind Blank)", 
        nivel: 8, 
        desc: "Alvo fica imune a dano psíquico, leitura de pensamentos, emoções e magias de adivinhação. Também impede que o alvo seja Enfeitiçado." 
    },
    { 
        nome: "Enredar (Entangle)", 
        nivel: 1, 
        desc: "Plantas e ervas brotam em um quadrado de 6m. A área vira terreno difícil e criaturas que falharem em Força ficam Contidas pelas vinhas." 
    },
    { 
        nome: "Envenenamento (Ray of Sickness)", 
        nivel: 1, 
        desc: "Ataque mágico à distância. Causa 2d8 de dano venenoso e o alvo deve passar em salvaguarda de CON ou fica Envenenado até o fim do seu próximo turno." 
    },
    { 
        nome: "Envelhecer (Blight)", 
        nivel: 4, 
        desc: "Energia necrótica causa 8d8 de dano necrótico a uma criatura (Constituição reduz metade). Plantas e elementais de água têm desvantagem na salvaguarda." 
    },
    { 
        nome: "Enxergar o Invisível", 
        nivel: 2, 
        desc: "Pela duração (1 hora), você vê criaturas e objetos invisíveis como se fossem visíveis, e pode ver no Plano Etéreo." 
    },
{ 
        nome: "Érebo (Darkness)", 
        nivel: 2, 
        desc: "Cria uma esfera de escuridão mágica de 4,5m de raio. Visão no escuro não funciona aqui e luz não passa através dela. Magias de luz de nível 2 ou inferior são dissipadas." 
    },
    { 
        nome: "Escrita Ilusória", 
        nivel: 1, 
        desc: "Ritual. Você escreve em um material e a mensagem parece ser algo diferente para todos, exceto para as criaturas que você designar." 
    },
    { 
        nome: "Escrita Celeste (Skywrite)", 
        nivel: 2, 
        desc: "Ritual. Você faz com que até dez palavras apareçam no céu formadas por nuvens. As palavras duram 1 hora ou até serem dispersadas pelo vento." 
    },
    { 
        nome: "Escudo Arcano (Shield)", 
        nivel: 1, 
        desc: "Reação. Quando você é atingido por um ataque ou alvo de Mísseis Mágicos. Você ganha +5 na CA (incluindo contra o ataque gatilho) até o início do seu próximo turno." 
    },
    { 
        nome: "Escudo de Fogo", 
        nivel: 4, 
        desc: "Chamas te envolvem. Escolha Escudo Quente (Resistência a Gelo) ou Escudo Frio (Resistência a Fogo). Criaturas que te atingirem corpo a corpo sofrem 2d8 de dano." 
    },
    { 
        nome: "Escudo da Fé", 
        nivel: 1, 
        desc: "Um campo cintilante envolve uma criatura à vista, concedendo-lhe um bónus de +2 na CA pela duração (10 minutos, concentração)." 
    },
    { 
        nome: "Esfera Flamejante", 
        nivel: 2, 
        desc: "Uma esfera de fogo de 1,5m aparece. Criaturas a até 1,5m dela sofrem 2d6 de dano ígneo. Você pode mover a esfera até 9m com uma ação bónus." 
    },
    { 
        nome: "Esfera Vitriólica", 
        nivel: 4, 
        desc: "Uma esfera de ácido explode em um ponto. Criaturas sofrem 10d4 de dano ácido e mais 5d4 no final do próximo turno (Destreza reduz metade e evita dano contínuo)." 
    },
    { 
        nome: "Espada Espiritual (Mordenkainen's Sword)", 
        nivel: 7, 
        desc: "Cria um plano de força em forma de espada. Você pode fazer um ataque mágico contra uma criatura a até 1,5m da espada, causando 3d10 de dano de força." 
    },
    { 
        nome: "Espíritos Guardiões", 
        nivel: 3, 
        desc: "Espíritos protectores flutuam ao seu redor (4,5m). Inimigos na área têm deslocamento reduzido à metade e sofrem 3d8 de dano radiante ou necrótico (SAB reduz metade)." 
    },
{ 
        nome: "Estalido de Melf (Acid Arrow)", 
        nivel: 2, 
        desc: "Uma flecha de ácido atinge o alvo causando 4d4 de dano ácido imediato e 2d4 de dano ácido no final do próximo turno dele. Em caso de erro, causa apenas metade do dano inicial." 
    },
    { 
        nome: "Estática Transmissora", 
        nivel: 0, 
        desc: "Truque. Você cria um estalo de energia estática. Uma criatura a até 1,5m deve passar em salvaguarda de CON ou sofrer 1d8 de dano elétrico e não poder usar reações até o início do próximo turno dela." 
    },
    { 
        nome: "Estremecimento (Earthquake)", 
        nivel: 8, 
        desc: "Cria um tremor em um raio de 30m. Criaturas devem passar em salvaguarda de DES ou cairão Caídas. O terreno torna-se difícil e estruturas podem sofrer danos massivos ou desmoronar." 
    },
    { 
        nome: "Expulsar (Dispel Evil and Good)", 
        nivel: 5, 
        desc: "Criaturas extraplanares têm desvantagem em ataques contra você. Você pode encerrar a magia para tentar banir uma dessas criaturas de volta ao seu plano de origem." 
    },
    { 
        nome: "Explosão de Chamas (Burning Hands)", 
        nivel: 1, 
        desc: "Um cone de 4,5m de chamas. Criaturas sofrem 3d6 de dano ígneo (Destreza reduz metade). Incendeia objetos inflamáveis que não estejam sendo usados ou carregados." 
    },
    { 
        nome: "Explosão Mística (Eldritch Blast)", 
        nivel: 0, 
        desc: "Truque. Um feixe de energia dispara contra uma criatura. Ataque mágico à distância causa 1d10 de dano de força. O número de feixes aumenta nos níveis 5, 11 e 17." 
    },
    { 
        nome: "Explosão Solar", 
        nivel: 8, 
        desc: "Luz brilhante em um raio de 18m. Criaturas sofrem 12d6 de dano radiante e ficam Cegas (Constituição reduz metade e evita cegueira). Mortos-vivos e limos têm desvantagem." 
    },
    { 
        nome: "Fabricar", 
        nivel: 4, 
        desc: "Você transforma materiais brutos em um objeto acabado (ex: madeira em uma ponte, linho em roupas). Não pode criar itens mágicos ou que exijam alto grau de perícia (como armas) sem proficiência." 
    },
    { 
        nome: "Falar com Animais", 
        nivel: 1, 
        desc: "Ritual. Você ganha a habilidade de compreender e se comunicar verbalmente com feras pela duração (10 minutos). A maioria das feras tem inteligência limitada." 
    },
    { 
        nome: "Falar com Mortos", 
        nivel: 3, 
        desc: "Você concede vida falsa a um cadáver, permitindo que ele responda até cinco perguntas. O cadáver sabe apenas o que sabia em vida e não é obrigado a ser amigável." 
    },
{ 
        nome: "Falar com Plantas", 
        nivel: 3, 
        desc: "Você imbui plantas num raio de 9m com consciência e capacidade de comunicação. Pode perguntar sobre eventos recentes, tornar terreno difícil em normal (ou vice-versa) e solicitar favores simples." 
    },
    { 
        nome: "Falso Destino (Mislead)", 
        nivel: 5, 
        desc: "Você fica invisível e cria uma duplicata ilusória. Você pode mover a duplicata e usar seus sentidos através dela. Dura até 1 hora ou até você atacar/conjurar." 
    },
    { 
        nome: "Falsa Vida", 
        nivel: 1, 
        desc: "Você recebe 1d4 + 4 pontos de vida temporários pela duração (1 hora). Para cada nível de magia acima do 1º, você recebe mais 5 PV temporários." 
    },
    { 
        nome: "Fome de Hadar", 
        nivel: 3, 
        desc: "Cria uma esfera de 6m de vácuo e escuridão. Criaturas que iniciam o turno lá sofrem 2d6 de dano gélido. Criaturas que terminam o turno lá devem passar em DES ou sofrem 2d6 de dano ácido." 
    },
    { 
        nome: "Fogo das Fadas (Faerie Fire)", 
        nivel: 1, 
        desc: "Objetos e criaturas num cubo de 6m brilham com luz suave. Ataques contra alvos afetados têm Vantagem se você puder vê-los. Invisibilidade é anulada no alvo." 
    },
    { 
        nome: "Fome de Hadar", 
        nivel: 3, 
        desc: "Cria uma esfera de escuridão mágica e frio. Criaturas na área sofrem 2d6 de dano gélido no início do turno e 2d6 de dano ácido no final (se falharem na salvaguarda)." 
    },
    { 
        nome: "Forma Etérea", 
        nivel: 7, 
        desc: "Você entra nas bordas do Plano Etéreo. Pode mover-se em qualquer direção (incluindo através de objetos sólidos no plano material) e não pode afetar ou ser afetado por nada no plano material." 
    },
    { 
        nome: "Forma Gasosa", 
        nivel: 3, 
        desc: "Alvo voluntário torna-se uma nuvem de névoa. Ganha resistência a dano não mágico, vantagem em testes de DES e pode passar por frestas minúsculas. O deslocamento de voo é 3m." 
    },
    { 
        nome: "Fração de Segundo (Blur)", 
        nivel: 2, 
        desc: "Seu corpo torna-se turvo e oscilante. Qualquer criatura tem Desvantagem em jogadas de ataque contra você, a menos que possua sentidos como Visão Cega ou Ver o Invisível." 
    },
    { 
        nome: "Fúria (Enrage)", 
        nivel: 1, 
        desc: "Você incita violência no coração de uma criatura. O alvo deve passar em salvaguarda de SAB ou terá Desvantagem em ataques contra qualquer um que não seja a criatura mais próxima dele." 
    },
{ 
        nome: "Gelo Glacial (Ice Storm)", 
        nivel: 4, 
        desc: "Granizo cai em um cilindro de 6m de raio. Criaturas sofrem 2d8 de dano de concussão e 4d6 de dano gélido (Destreza reduz metade). A área torna-se terreno difícil até o fim do seu próximo turno." 
    },
    { 
        nome: "Globo de Invulnerabilidade", 
        nivel: 6, 
        desc: "Uma barreira imóvel de 3m de raio envolve você. Qualquer magia de nível 5 ou inferior conjurada de fora não pode afetar criaturas ou objetos dentro da esfera." 
    },
    { 
        nome: "Golpe de Vento (Steel Wind Strike)", 
        nivel: 5, 
        desc: "Você desaparece e ataca até 5 criaturas a até 9m. Faça um ataque mágico contra cada uma; se atingir, causa 6d10 de dano de força. Depois, você se teletransporta para perto de um dos alvos." 
    },
    { 
        nome: "Golpe Trovejante", 
        nivel: 1, 
        desc: "Seu próximo ataque com arma causa 2d6 de dano trovejante extra e empurra o alvo 3 metros. Um som de trovão audível a 90m é emitido." 
    },
    { 
        nome: "Grasnido de Agonia", 
        nivel: 1, 
        desc: "Você solta um grito terrível. Criaturas em um cone de 4,5m devem passar em SAB ou sofrer 1d6 de dano psíquico e ficar Assustadas até o final do seu próximo turno." 
    },
    { 
        nome: "Gravidade Reversa", 
        nivel: 7, 
        desc: "Inverte a gravidade em um cilindro de 15m de raio por 30m de altura. Criaturas e objetos caem para cima. Se encontrarem um teto, sofrem dano de queda." 
    },
    { 
        nome: "Guardião da Fé", 
        nivel: 4, 
        desc: "Um guardião espectral aparece e ocupa um espaço. Ele ataca inimigos que se aproximem a 3m, causando 20 de dano radiante automático até ter causado um total de 60 de dano." 
    },
    { 
        nome: "Guardião de Natureza", 
        nivel: 4, 
        desc: "Você assume uma forma de espírito da natureza. Escolha entre Força da Floresta (Vantagem em ataques de DES/SAB e terreno difícil para inimigos) ou Ira da Montanha (Vantagem em ataques de FOR e +1d6 de dano)." 
    },
    { 
        nome: "Guia (Guidance)", 
        nivel: 0, 
        desc: "Truque. Você toca uma criatura voluntária. Uma vez, antes da magia acabar (1 min), o alvo pode rolar um 1d4 e adicionar o resultado a um teste de atributo de sua escolha." 
    },
    { 
        nome: "Hálito de Dragão", 
        nivel: 2, 
        desc: "Você toca uma criatura e ela ganha um ataque de sopro. Ela pode usar uma ação para exalar energia em um cone de 4,5m, causando 3d6 de dano (Ácido, Frio, Fogo, Elétrico ou Veneno)." 
    },
{ 
        nome: "Heroísmo", 
        nivel: 1, 
        desc: "Uma criatura voluntária torna-se imune ao medo e ganha PV temporários iguais ao seu modificador de atributo de conjuração no início de cada um dos turnos dela." 
    },
    { 
        nome: "Hipnose (Hypnotic Pattern)", 
        nivel: 3, 
        desc: "Cria um padrão de cores flutuantes num cubo de 9m. Criaturas que falharem na salvaguarda de SAB ficam Incapacitadas e com deslocamento 0 enquanto durar a concentração." 
    },
    { 
        nome: "Identificar", 
        nivel: 1, 
        desc: "Ritual. Ao tocar um objeto mágico durante a conjuração, você aprende suas propriedades, como usá-lo e quantas cargas ele possui." 
    },
    { 
        nome: "Ilusão Menor", 
        nivel: 0, 
        desc: "Truque. Você cria um som ou a imagem de um objeto a até 9m. A ilusão dura 1 minuto e pode ser identificada como falsa com um teste de Investigação." 
    },
    { 
        nome: "Ilusão Programada", 
        nivel: 6, 
        desc: "Cria uma ilusão visual e sonora de um objeto, criatura ou fenômeno que é ativada por um gatilho específico. A ilusão pode durar até 5 minutos por ativação." 
    },
    { 
        nome: "Imobilizar Monstro", 
        nivel: 5, 
        desc: "Uma criatura à vista deve passar em salvaguarda de SAB ou ficará Paralisada. O alvo pode repetir a salvaguarda no final de cada um dos turnos dele." 
    },
    { 
        nome: "Imobilizar Pessoa", 
        nivel: 2, 
        desc: "Um humanoide deve passar em salvaguarda de SAB ou ficará Paralisada pela duração (1 min). O alvo repete a salvaguarda a cada fim de turno." 
    },
    { 
        nome: "Impor Maldição", 
        nivel: 3, 
        desc: "Ao tocar uma criatura, você impõe uma maldição: desvantagem em testes de um atributo, desvantagem em ataques contra você ou perda de ações." 
    },
    { 
        nome: "Incinerar", 
        nivel: 4, 
        desc: "Uma criatura é envolta em chamas, sofrendo 8d6 de dano ígneo. O alvo continua sofrendo 1d6 de dano no início de cada turno até passar numa salvaguarda de DES." 
    },
    { 
        nome: "Infligir Ferimentos", 
        nivel: 1, 
        desc: "Ataque mágico corpo a corpo. Causa 3d10 de dano necrótico em um toque. O dano aumenta em 1d10 para cada nível de magia acima do 1º." 
    },
{ 
        nome: "Inshala (Banishment)", 
        nivel: 4, 
        desc: "Você tenta enviar uma criatura para outro plano de existência. O alvo deve passar em uma salvaguarda de CAR ou será banido. Se for nativo do plano atual, volta após 1 minuto; se não for, ele não retorna." 
    },
    { 
        nome: "Insignia de Valor", 
        nivel: 1, 
        desc: "Você imbui um objeto com coragem. Até três criaturas que portarem ou virem o objeto ganham Vantagem em salvaguardas contra Medo por 1 hora." 
    },
    { 
        nome: "Instinto Assassino", 
        nivel: 2, 
        desc: "Você aprimora seus reflexos. Pela duração (1 min), você pode adicionar seu modificador de atributo de conjuração às suas jogadas de iniciativa e não pode ser surpreendido." 
    },
    { 
        nome: "Invisibilidade", 
        nivel: 2, 
        desc: "Uma criatura que você tocar torna-se invisível por 1 hora. A magia termina precocemente se o alvo atacar ou conjurar uma magia." 
    },
    { 
        nome: "Invisibilidade Maior", 
        nivel: 4, 
        desc: "Uma criatura que você tocar torna-se invisível por 1 minuto. Diferente da versão comum, atacar ou conjurar magias não quebra a invisibilidade." 
    },
    { 
        nome: "Invocação de Mortos-Vivos", 
        nivel: 3, 
        desc: "Você imbui um cadáver com energia negativa, transformando-o em um Zumbi ou Esqueleto sob seu comando por 24 horas." 
    },
    { 
        nome: "Invocação do Relâmpago", 
        nivel: 3, 
        desc: "Uma nuvem de tempestade aparece acima de você. Com uma ação, você pode convocar um raio em um ponto, causando 3d10 de dano elétrico (Destreza reduz metade)." 
    },
    { 
        nome: "Ira da Natureza", 
        nivel: 5, 
        desc: "As plantas e rochas na área (18m) atacam seus inimigos. O terreno torna-se difícil, criaturas podem ficar contidas por raízes ou atingidas por pedras soltas." 
    },
    { 
        nome: "Janela Arcana (Scrying)", 
        nivel: 5, 
        desc: "Você pode ver e ouvir uma criatura específica em qualquer lugar do mesmo plano. O alvo faz uma salvaguarda de SAB; o sucesso depende do quão bem você conhece o alvo." 
    },
    { 
        nome: "Jato de Ácido (Acid Splash)", 
        nivel: 0, 
        desc: "Truque. Você arremessa uma bolha de ácido. Uma ou duas criaturas a até 1,5m uma da outra devem passar em DES ou sofrer 1d6 de dano ácido." 
    },
{ 
        nome: "Lâmina da Chama Esmeralda", 
        nivel: 0, 
        desc: "Truque. Você cria uma chama verde na sua arma e ataca. Causa dano normal e chamas saltam para uma criatura a até 1,5m, causando dano de fogo igual ao seu mod. de conjuração." 
    },
    { 
        nome: "Lâmina de Gelo", 
        nivel: 1, 
        desc: "Você arremessa um estilhaço de gelo. Ataque mágico causa 1d10 de dano perfurante e explode, causando 2d6 de dano gélido em área de 1,5m (Destreza reduz metade)." 
    },
    { 
        nome: "Lâmina Ressonante (Booming Blade)", 
        nivel: 0, 
        desc: "Truque. Você imbui sua arma com energia trovejante e ataca. Se o alvo se mover voluntariamente antes do seu próximo turno, ele sofre 1d8 de dano trovejante." 
    },
    { 
        nome: "Lança Mística", 
        nivel: 0, 
        desc: "Truque. Uma variação do feixe de energia que foca em longo alcance (até 90m) ou precisão, causando 1d10 de dano de força." 
    },
    { 
        nome: "Lentidão", 
        nivel: 3, 
        desc: "Até 6 criaturas em um cubo de 12m têm deslocamento reduzido à metade, -2 na CA e salvaguardas de DES, e não podem usar reações ou múltiplos ataques." 
    },
    { 
        nome: "Levitação", 
        nivel: 2, 
        desc: "Uma criatura ou objeto de até 250kg flutua verticalmente até 6m. O alvo pode subir ou descer conforme você desejar pela duração." 
    },
    { 
        nome: "Ligação Mental", 
        nivel: 2, 
        desc: "Você estabelece uma conexão com uma fera ou humanoide voluntário, permitindo comunicação telepática básica e compartilhamento de emoções." 
    },
    { 
        nome: "Línguas", 
        nivel: 3, 
        desc: "A criatura tocada ganha a habilidade de entender e falar qualquer idioma falado que ouvir pela duração de 1 hora." 
    },
    { 
        nome: "Localizar Criatura", 
        nivel: 4, 
        desc: "Você sente a direção da localização de uma criatura específica familiar ou de uma espécie específica a até 300 metros de você." 
    },
    { 
        nome: "Localizar Objeto", 
        nivel: 2, 
        desc: "Você sente a direção da localização de um objeto objeto específico a até 300 metros, desde que já o tenha visto de perto uma vez." 
    },
{ 
        nome: "Luz", 
        nivel: 0, 
        desc: "Truque. Você toca um objeto. Ele emite luz brilhante em um raio de 6m e luz plena por mais 6m. Dura 1 hora." 
    },
    { 
        nome: "Luz do Sol (Sunbeam)", 
        nivel: 6, 
        desc: "Um feixe de luz brilhante dispara da sua mão. Criaturas na linha sofrem 6d8 de dano radiante e ficam Cegas. Você pode disparar um novo feixe a cada turno." 
    },
    { 
        nome: "Luz Sagrada", 
        nivel: 5, 
        desc: "Uma criatura ou objeto emite luz radiante em 9m. Inimigos na área têm desvantagem em ataques e você pode explodir a luz para causar 4d8 de dano e cegar alvos." 
    },
    { 
        nome: "Mãos Mágicas (Mage Hand)", 
        nivel: 0, 
        desc: "Truque. Uma mão espectral flutuante aparece. Você pode usá-la para manipular objetos, abrir portas destrancadas ou carregar itens a até 9m de você." 
    },
    { 
        nome: "Mansão Magnífica de Mordenkainen", 
        nivel: 7, 
        desc: "Você cria uma entrada para um semiplano que contém uma mansão luxuosa com comida e 100 servos fantasmagóricos para até 12 pessoas." 
    },
    { 
        nome: "Manto do Cruzado", 
        nivel: 3, 
        desc: "Uma aura de poder emana de você (9m). Aliados dentro da aura causam 1d4 de dano radiante extra sempre que atingirem com um ataque com arma." 
    },
    { 
        nome: "Marca do Caçador", 
        nivel: 1, 
        desc: "Ação Bônus. Você marca uma criatura. Seus ataques com arma contra ela causam +1d6 de dano e você tem vantagem para rastreá-la." 
    },
    { 
        nome: "Marca da Punição", 
        nivel: 2, 
        desc: "Próximo ataque com arma causa 2d6 de dano radiante extra e o alvo fica visível (não pode ficar invisível) e emite luz fraca." 
    },
    { 
        nome: "Medo", 
        nivel: 3, 
        desc: "Você projeta uma imagem aterrorizante. Criaturas num cone de 9m devem passar em SAB ou largar o que seguram e ficar Assustadas, fugindo de você." 
    },
    { 
        nome: "Mensagem", 
        nivel: 0, 
        desc: "Truque. Você aponta para uma criatura e sussurra uma mensagem. Apenas ela ouve e pode responder com um sussurro que só você ouve." 
    },
{ 
        nome: "Metamorfose", 
        nivel: 4, 
        desc: "Transforma uma criatura em uma nova forma de fera. O alvo assume os PV e atributos físicos da nova forma. A magia encerra se os PV da nova forma chegarem a 0." 
    },
    { 
        nome: "Metamorfose Verdadeira", 
        nivel: 9, 
        desc: "Transforma uma criatura em outra criatura de ND igual ou menor, ou em um objeto (ou vice-versa). Se mantiver a concentração por 1 hora, a mudança torna-se permanente." 
    },
    { 
        nome: "Militarismo (Crusader's Mantle)", 
        nivel: 3, 
        desc: "Poder sagrado irradia de você. Até o fim da magia, ataques com armas de aliados a até 9m de você causam 1d4 de dano radiante extra ao atingir." 
    },
    { 
        nome: "Mina de Estática", 
        nivel: 2, 
        desc: "Você planta uma armadilha mágica invisível em uma superfície. Quando uma criatura se aproxima, a mina explode causando 3d8 de dano elétrico." 
    },
    { 
        nome: "Mísseis Mágicos", 
        nivel: 1, 
        desc: "Você cria três dardos de força brilhantes. Cada dardo atinge uma criatura à sua escolha, que você possa ver, causando 1d4 + 1 de dano de força automaticamente." 
    },
    { 
        nome: "Mudar de Plano", 
        nivel: 7, 
        desc: "Você e até oito criaturas voluntárias são transportados para um plano de existência diferente. Requer uma haste de metal sintonizada com o plano de destino." 
    },
    { 
        nome: "Muralha de Espinhos", 
        nivel: 6, 
        desc: "Cria uma parede de plantas espinhosas de até 18m de comprimento. Criaturas na área ou que tentarem atravessar sofrem 7d8 de dano perfurante." 
    },
    { 
        nome: "Muralha de Fogo", 
        nivel: 4, 
        desc: "Cria uma parede de chamas de até 18m. Criaturas que terminarem o turno a até 3m do lado "quente" ou passarem por ela sofrem 5d8 de dano ígneo." 
    },
    { 
        nome: "Muralha de Gelo", 
        nivel: 6, 
        desc: "Cria uma parede de gelo opaco. Se uma criatura passar pela parede destruída, ela deve passar em DES ou sofrer 10d6 de dano gélido." 
    },
    { 
        nome: "Muralha de Pedra", 
        nivel: 5, 
        desc: "Cria uma muralha de rocha sólida que pode ser moldada. Se a muralha for mantida por 10 minutos com concentração, ela torna-se permanente." 
    },
{ 
        nome: "Muralha de Vento", 
        nivel: 3, 
        desc: "Uma cortina de vento forte de até 15m surge. Ela impede a passagem de névoas, gases e projéteis pequenos (flechas/parafusos). Criaturas na área sofrem 3d8 de dano de concussão." 
    },
    { 
        nome: "Névoa (Fog Cloud)", 
        nivel: 1, 
        desc: "Você cria uma esfera de névoa de 6m de raio. A área torna-se pesadamente obscurecida (visão zero). Um vento moderado dispersa a névoa." 
    },
    { 
        nome: "Névoa Mortal (Cloudkill)", 
        nivel: 5, 
        desc: "Uma esfera de gás venenoso amarelo-esverdeado de 6m de raio. Criaturas sofrem 5d8 de dano venenoso (Constituição reduz metade). A névoa se afasta 3m de você a cada turno." 
    },
    { 
        nome: "Nuvem Incendiária", 
        nivel: 8, 
        desc: "Uma nuvem de fumaça e brasas de 6m de raio. Criaturas sofrem 10d8 de dano ígneo (Destreza reduz metade). A nuvem obscurece a visão e se move 3m por turno." 
    },
    { 
        nome: "Oração de Cura", 
        nivel: 2, 
        desc: "Tempo de conjuração: 10 min. Até seis criaturas recuperam PV igual a 2d8 + seu modificador de atributo de conjuração. Não afeta mortos-vivos ou construtos." 
    },
    { 
        nome: "Orbe Cromática", 
        nivel: 1, 
        desc: "Ataque mágico à distância. Você escolhe o tipo de dano (Ácido, Frio, Fogo, Elétrico, Veneno ou Trovão) e causa 3d8 de dano. Requer um diamante de 50 PO." 
    },
    { 
        nome: "Onda de Trovão (Thunderwave)", 
        nivel: 1, 
        desc: "Uma onda de força emana de você em um cubo de 4,5m. Criaturas sofrem 2d8 de dano trovejante e são empurradas 3m para longe (Constituição reduz metade e evita empurrão)." 
    },
    { 
        nome: "Orientação Divina", 
        nivel: 1, 
        desc: "Você recebe um vislumbre do futuro. Até o final da magia, você pode adicionar 1d4 a uma jogada de ataque ou salvaguarda de sua escolha." 
    },
    { 
        nome: "Padrão Hipnótico", 
        nivel: 3, 
        desc: "Você cria um padrão de cores flutuantes. Criaturas na área que falharem em SAB ficam Incapacitadas e com deslocamento 0. O efeito termina se sofrerem dano ou forem sacudidas." 
    },
    { 
        nome: "Palavra de Poder: Atordoar", 
        nivel: 8, 
        desc: "Você profere uma palavra. Se o alvo tiver 150 PV ou menos, ele fica Atordoado. Ele faz uma salvaguarda de CON no fim de cada turno para encerrar o efeito." 
    },
{ 
        nome: "Palavra de Poder: Curar", 
        nivel: 9, 
        desc: "Uma onda de energia curativa flui de você. Uma criatura que você tocar recupera todos os seus pontos de vida e encerra as condições de amedrontado, atordoado, paralisado e cego." 
    },
    { 
        nome: "Palavra de Poder: Matar", 
        nivel: 9, 
        desc: "Você profere uma palavra de poder. Se a criatura que você puder ver tiver 100 pontos de vida ou menos, ela morre instantaneamente." 
    },
    { 
        nome: "Palavra Curativa (Healing Word)", 
        nivel: 1, 
        desc: "Ação Bônus. Uma criatura à vista recupera 1d4 + seu modificador de atributo de conjuração. Útil para levantar aliados caídos à distância." 
    },
    { 
        nome: "Palavra Sagrada", 
        nivel: 7, 
        desc: "Você profere um enunciado sagrado. Criaturas (exceto celestiais/corruptores conforme o caso) sofrem efeitos baseados nos PV atuais: de ensurdecido a morte instantânea." 
    },
    { 
        nome: "Passo Arcano (Misty Step)", 
        nivel: 2, 
        desc: "Ação Bônus. Você é cercado por uma névoa prateada e se teletransporta para um espaço desocupado que possa ver a até 9 metros de distância." 
    },
    { 
        nome: "Passos Sem Pegadas", 
        nivel: 2, 
        desc: "Uma sombra e silêncio emanam de você. Você e aliados a até 9m ganham +10 em testes de Destreza (Furtividade) e não podem ser rastreados por meios não mágicos." 
    },
    { 
        nome: "Pele de Árvore", 
        nivel: 2, 
        desc: "Você toca uma criatura voluntária e a pele dela torna-se áspera. A CA do alvo não pode ser menor que 16, independentemente da armadura que estiver usando." 
    },
    { 
        nome: "Pele de Pedra", 
        nivel: 4, 
        desc: "A carne do alvo torna-se dura como rocha. Ele ganha resistência a dano de concussão, perfurante e cortante não mágico. Requer pó de diamante (100 PO)." 
    },
    { 
        nome: "Perdição (Bane)", 
        nivel: 1, 
        desc: "Até três criaturas devem passar em salvaguarda de CAR. Se falharem, devem subtrair 1d4 de todas as jogadas de ataque e salvaguardas que fizerem." 
    },
    { 
        nome: "Pernas Longas (Longstrider)", 
        nivel: 1, 
        desc: "Você toca uma criatura e o deslocamento dela aumenta em 3 metros pela duração de 1 hora." 
    },
{ 
        nome: "Pilar de Chamas", 
        nivel: 5, 
        desc: "Uma coluna de fogo divino cai em um cilindro de 3m de raio. Criaturas sofrem 4d6 de dano ígneo e 4d6 de dano radiante (Destreza reduz metade)." 
    },
    { 
        nome: "Piscar (Blink)", 
        nivel: 3, 
        desc: "No final de cada um dos seus turnos, role 1d20. Se tirar 11+, você vai para o Plano Etéreo, tornando-se intocável até o início do seu próximo turno." 
    },
    { 
        nome: "Poção da Amizade", 
        nivel: 1, 
        desc: "Você encanta uma bebida. A criatura que a consumir deve passar em salvaguarda de SAB ou ficará Enfeitiçada por você por 1 hora." 
    },
    { 
        nome: "Poeira Estelar", 
        nivel: 2, 
        desc: "Cria uma nuvem de partículas brilhantes em um cubo de 6m. Criaturas na área brilham (Vantagem para atingi-las) e não podem se beneficiar de invisibilidade." 
    },
    { 
        nome: "Polimorfia", 
        nivel: 4, 
        desc: "Transforma uma criatura em uma fera com ND igual ou menor ao nível do alvo. O alvo assume os PV e estatísticas da fera enquanto durar a magia." 
    },
    { 
        nome: "Porta Dimensional", 
        nivel: 4, 
        desc: "Você se teletransporta instantaneamente para qualquer lugar que possa visualizar ou descrever a até 150 metros. Pode levar uma criatura voluntária." 
    },
    { 
        nome: "Portal (Gate)", 
        nivel: 9, 
        desc: "Abre um portal para um plano de existência específico. Você pode conjurar o nome de uma criatura para que o portal se abra exatamente onde ela está e a puxe." 
    },
    { 
        nome: "Prisão Mental", 
        nivel: 6, 
        desc: "O alvo fica cercado por uma ilusão aterrorizante. Ele fica Incapacitado e se tentar se mover, sofre 10d10 de dano psíquico e a magia encerra." 
    },
    { 
        nome: "Projetar Imagem", 
        nivel: 7, 
        desc: "Cria uma cópia ilusória de você em qualquer lugar do mesmo plano. Você pode ver e ouvir através dela e falar como se estivesse lá." 
    },
    { 
        nome: "Proteção contra Energia", 
        nivel: 3, 
        desc: "Uma criatura tocada ganha Resistência a um tipo de dano à sua escolha: Ácido, Frio, Fogo, Elétrico ou Trovão pela duração (1 hora)." 
    },
{ 
        nome: "Proteção contra Lâminas (Blade Ward)", 
        nivel: 0, 
        desc: "Truque. Você estende sua mão e traça um símbolo de proteção no ar. Até o final do seu próximo turno, você tem resistência contra dano de concussão, perfurante e cortante causado por ataques com armas." 
    },
    { 
        nome: "Proteção contra Mal e Bem", 
        nivel: 1, 
        desc: "Uma criatura voluntária fica protegida contra certos tipos de criaturas: aberrações, celestiais, corruptores, elementais, feéricos e mortos-vivos. Elas têm desvantagem em ataques contra o alvo e o alvo não pode ser enfeitiçado ou possuído por elas." 
    },
    { 
        nome: "Proteção contra Veneno", 
        nivel: 2, 
        desc: "Você toca uma criatura. Se ela estiver envenenada, o efeito é neutralizado. Pela duração (1 hora), o alvo tem vantagem em salvaguardas contra veneno e resistência a dano venenoso." 
    },
    { 
        nome: "Proteger Fortalezas (Guards and Wards)", 
        nivel: 6, 
        desc: "Você cria uma série de efeitos mágicos em uma área de até 230 metros quadrados: névoa nos corredores, portas trancadas magicamente, teias de aranha e sugestões ilusórias em cruzamentos." 
    },
    { 
        nome: "Purificar Alimentos", 
        nivel: 1, 
        desc: "Ritual. Toda comida e bebida não mágica em uma esfera de 1,5m de raio centrada em um ponto à sua escolha é purificada e livre de venenos e doenças." 
    },
    { 
        nome: "Queda Suave (Feather Fall)", 
        nivel: 1, 
        desc: "Reação. Quando você ou uma criatura a até 18m cai. A velocidade de queda de até cinco criaturas cai para 18m por rodada. Se o alvo aterrissar antes da magia acabar, ele não sofre dano de queda." 
    },
    { 
        nome: "Raio Ardente (Scorching Ray)", 
        nivel: 2, 
        desc: "Você cria três raios de fogo e os atira em alvos a até 36m. Você pode disparar em um alvo ou em vários. Faça um ataque mágico para cada raio; cada acerto causa 2d6 de dano ígneo." 
    },
    { 
        nome: "Raio de Enfraquecimento", 
        nivel: 2, 
        desc: "Um raio de energia negra atinge uma criatura. O alvo deve passar em salvaguarda de CON ou passará a causar apenas metade do dano com ataques baseados em Força pela duração." 
    },
    { 
        nome: "Raio de Fogo (Fire Bolt)", 
        nivel: 0, 
        desc: "Truque. Você lança um dardo de fogo em uma criatura ou objeto. Ataque mágico à distância causa 1d10 de dano ígneo. Incendeia objetos inflamáveis que não estejam sendo usados." 
    },
    { 
        nome: "Raio de Gelo (Ray of Frost)", 
        nivel: 0, 
        desc: "Truque. Um raio de luz azulada atinge o alvo. Ataque mágico causa 1d8 de dano gélido e reduz o deslocamento do alvo em 3 metros até o início do seu próximo turno." 
    },

    ],
    talentos: [
        { nome: "Alerta", desc: "Proficiência em Iniciativa. Adicione seu Bônus de Proficiência à jogada. Pode trocar sua Iniciativa com a de um aliado voluntário." },
        { nome: "Artifista", desc: "Proficiência com três Ferramentas de Artesão. Desconto de 20% em itens não mágicos. Pode fabricar equipamentos após Descanso Longo." },
        { nome: "Atacante Selvagem", desc: "Uma vez por turno, ao atingir um alvo com uma arma, pode jogar os dados de dano duas vezes e usar qualquer uma das jogadas." },
        { nome: "Curandeiro", desc: "Médico de Combate: Recupera PV com Kit de Curandeiro. Cura Garantida: Pode rolar novamente resultados 1 em dados de cura." },
        { nome: "Habilidoso", desc: "Você adquire proficiência em qualquer combinação de três perícias ou ferramentas à sua escolha." },
        { nome: "Iniciado em Magia", desc: "Aprende dois truques e uma magia de 1º círculo de uma lista de classe (Clérigo, Druida ou Mago)." },
        { nome: "Músico", desc: "Proficiência com três Instrumentos Musicais. Concede Inspiração Heroica a aliados ao tocar durante descansos." },
        { nome: "Sortudo", desc: "Pontos de Sorte: Igual à Proficiência (recupera em Descanso Longo). Gastar 1 pt para: Ter Vantagem em teste de d20 OU impor Desvantagem em ataque contra você." },
        { nome: "Valentão de Taverna", desc: "Ataque Desarmado: 1d4 + FOR. Dano Garantido: Rola novamente resultado 1 no dano. Proficiência: Armas Improvisadas. Empurrar: 1x/turno ao atingir, empurra 1,5m." },
        { nome: "Vigoroso", desc: "Vida Máxima: Aumenta em 2x seu nível atual. Ao subir de nível, ganha +2 PV adicionais além do normal." },
        { nome: "Adepto Elemental", desc: "Pré-req: Nív 4+. Atributo: +1 INT, SAB ou CAR. Efeito: Escolha um elemento. Ignora Resistência a dano desse tipo e trata 1 no dado de dano como 2. (Pode repetir)." },
        { nome: "Agressor", desc: "Pré-req: Nív 4+, FOR/DES 13+. Atributo: +1 FOR ou DES. Corrida: +3m ao Correr. Investida: Se mover 3m em linha reta, ganha +1d8 de dano OU empurra o alvo 3m." },
        { nome: "Analítico", desc: "Pré-req: Nív 4+, INT/SAB 13+. Atributo: +1 INT ou SAB. Perícia: Ganha Proficiência ou Especialização em Intuição, Investigação ou Percepção. Ação: Procurar como Ação Bônus." },
        { nome: "Atirador Arcano", desc: "Pré-req: Nív 4+. Atributo: +1 INT, SAB ou CAR. Magias: Ignora Cobertura Parcial/3-Quartos. Sem desvantagem corpo-a-corpo. Alcance: +18m em magias de ataque." },
        { nome: "Atleta", desc: "Pré-req: Nív 4+, FOR/DES 13+. Atributo: +1 FOR ou DES. Movimento: Ganha Deslocamento de Escalada. Levantar custa só 1,5m. Salto: Precisa de apenas 1,5m de corrida." },
        { nome: "Ator", desc: "Atributo: +1 CAR. Personificação: Vantagem em Atuação/Enganação para se passar por outro. Mimetismo: Imita sons/fala (CD 8+CAR+Prof para descobrir)." },
        { nome: "Aumento no Valor de Atributo", desc: "Efeito: Aumente um atributo em +2 OU dois atributos em +1 (Máximo 20). (Pode repetir este talento)." },
        { nome: "Chef", desc: "Atributo: +1 CON ou SAB. Proficiência: Utensílios de Cozinheiro. Descanso Curto: Aliados recuperam +1d8 PV. Guloseimas: Cria lanches (Prof/dia) que dão PV Temporário igual à Proficiência." },
        { nome: "Combatente Montado", desc: "Atributo: +1 FOR, DES ou SAB. Montado: Vantagem contra alvos menores no chão. Pulo Lateral: Montaria não sofre dano em sucessos de DES. Redirecionar: Pode forçar ataque da montaria em você." },
        { nome: "Conjurador Bélico", desc: "Atributo: +1 INT, SAB ou CAR. Concentração: Vantagem em salvaguardas de CON. Reação: Pode conjurar magia no lugar de Ataque de Oportunidade. Somático: Conjura mesmo com mãos ocupadas." },
        { nome: "Conjurador Ritualista", desc: "Atributo: +1 INT, SAB ou CAR. Magias: Prepara rituais de 1º círculo (total = Proficiência). Ritual Rápido: 1x/Descanso Longo, conjura um ritual com tempo de ação normal sem gastar espaço." },
        { nome: "Duelista Defensivo", desc: "Atributo: +1 DES. Aparar: Se usar arma de Acuidade, usa Reação para somar Proficiência na CA contra ataques corpo a corpo até seu próximo turno." },
        { nome: "Envenenador", desc: "Atributo: +1 DES ou INT. Veneno Potente: Ignora resistência a Veneno. Preparar: Cria doses (Prof/dia). Ação Bônus: Aplica na arma. Alvo sofre 2d8 veneno e condição Envenenado (CD 8+Atrib+Prof)." },
        { nome: "Esmagador", desc: "Atributo: +1 FOR ou CON. Empurrar: 1x/turno, ao causar dano Contundente, move o alvo 1,5m. Crítico: Ataques contra o alvo têm Vantagem até seu próximo turno após um crítico contundente." },
        { nome: "Especialista Ambidestro", desc: "Atributo: +1 FOR ou DES. Saque Rápido: Saca/guarda 2 armas. Combate: Ao atacar com arma Leve, pode fazer ataque bônus com outra arma corpo a corpo (não precisa ser leve)." },
        { nome: "Especialista em Armaduras Leves", desc: "Atributo: +1 FOR ou DES. Treinamento: Ganha proficiência com Armadura Leve e Escudos." },
        { nome: "Especialista em Armaduras Médias", desc: "Atributo: +1 FOR ou DES. Treinamento: Ganha proficiência com Armadura Média." },
        { nome: "Especialista em Armaduras Pesadas", desc: "Atributo: +1 FOR ou CON. Treinamento: Ganha proficiência com Armadura Pesada." },
        { nome: "Especialista em Besta", desc: "Atributo: +1 DES. Bestas: Ignora Recarga (mesmo sem mão livre). Disparo: Sem desvantagem a 1,5m do inimigo. Combate: Soma Atributo no dano do ataque bônus com Besta Leve." },
        { nome: "Especialista em Perícia", desc: "Atributo: +1 em qualquer. Perícia: Ganha 1 Proficiência e 1 Especialização à sua escolha." },
        { nome: "Exterminador de Conjuradores", desc: "Atributo: +1 FOR ou DES. Concentração: Inimigo tem Desvantagem para manter magia ao sofrer seu dano. Resguardo: 1x/Descanso, transforma falha em sucesso em teste de INT, SAB ou CAR." },
        { nome: "Imobilizador", desc: "Atributo: +1 FOR ou DES. Socar: 1x/turno causa Dano + Imobilizar com Ataque Desarmado. Combate: Vantagem contra alvos Imobilizados por você. Movimento total ao arrastar alvos do seu tamanho ou menor." },
        { nome: "Líder Inspirador", desc: "Atributo: +1 SAB ou CAR. Atuação: Após Descanso, dá PV Temporários (Nível + Modificador) para até 6 aliados que presenciarem seu discurso/música." },
        { nome: "Mente Aguçada", desc: "Atributo: +1 INT. Conhecimento: Proficiência ou Especialização em Arcanismo, História, Investigação, Natureza ou Religião. Ação: Analisar como Ação Bônus." },
        { nome: "Mestre das Armas", desc: "Atributo: +1 FOR ou DES. Maestria: Escolha 1 arma (Simples/Marcial) para usar a propriedade de Maestria. Pode trocar a arma após um Descanso Longo." },
        { nome: "Mestre em Armaduras Médias", desc: "Atributo: +1 FOR ou DES. Portador Ágil: Se DES for 16+, soma +3 na CA (em vez de +2) usando armadura Média." },
        { nome: "Mestre em Armaduras Pesadas", desc: "Atributo: +1 FOR ou CON. Redução: Enquanto usar Armadura Pesada, reduz danos Físicos (Cont/Cort/Perf) em valor igual à sua Proficiência." },
        { nome: "Mestre em Armas de Haste", desc: "Atributo: +1 FOR ou DES. Golpe: Ação Bônus para atacar com o cabo (1d4 Contundente). Reação: Ataque de Oportunidade quando inimigo ENTRA no seu alcance." },
        { nome: "Mestre em Armas Grandes", desc: "Atributo: +1 FOR. Maestria: Com arma Pesada, soma Proficiência no dano (1x/turno). Cortar: Se der Crítico ou matar inimigo, faz 1 ataque adicional como Ação Bônus." },
        { nome: "Mestre em Escudos", desc: "Atributo: +1 FOR. Golpe: Ao atingir, Reação para empurrar ou derrubar (CD 8+FOR+Prof). Interpor: Se passar em teste de DES para metade do dano, usa Reação para sofrer ZERO." },
        { nome: "Mestre-Atirador", desc: "Atributo: +1 DES. Ataques: Ignora cobertura parcial/3-quartos. Disparo: Sem desvantagem a 1,5m do inimigo. Tiro Longo: Sem desvantagem no alcance máximo." },
        { nome: "Perfurador", desc: "Atributo: +1 FOR ou DES. Punção: 1x/turno, rola novamente 1 dado de dano Perfurante. Crítico: Adiciona +1 dado de dano ao causar crítico perfurante." },
        { nome: "Resiliente", desc: "Atributo: +1 em um atributo sem proficiência em salvaguarda. Efeito: Ganha Proficiência em Salvaguardas com o atributo escolhido." },
        { nome: "Resistente", desc: "Atributo: +1 CON. Desafie a Morte: Vantagem em Salvaguardas Contra Morte. Recuperação: Ação Bônus para gastar 1 Dado de Vida e recuperar PV." },
        { nome: "Sentinela", desc: "Atributo: +1 FOR ou DES. Diligente: Ataque de Oportunidade se inimigo a 1,5m usar Desengajar ou atacar aliado. Deter: Ataque de Oportunidade reduz deslocamento do alvo a 0." },
        { nome: "Sorrateiro", desc: "Atributo: +1 DES. Visão às Cegas (3m). Névoa de Guerra: Vantagem em Furtividade para Esconder-se em combate. Atirador: Errar ataque enquanto escondido não revela sua posição." },
        { nome: "Talhador", desc: "Atributo: +1 FOR ou DES. Debilitar: 1x/turno, dano Cortante reduz deslocamento do alvo em 3m. Crítico: Alvo tem Desvantagem em ataques até seu próximo turno." },
        { nome: "Telecinético", desc: "Atributo: +1 INT, SAB ou CAR. Telecinese: Aprende Mãos Mágicas (Invisível, +9m alcance, sem componentes). Ação Bônus: Empurra criatura a 9m (1,5m na sua direção ou longe; CD 8+Atrib+Prof)." },
        { nome: "Telepático", desc: "Atributo: +1 INT, SAB ou CAR. Telepatia: Fala mentalmente a 18m. Magia: Aprende Detectar Pensamentos (1x/descanso grátis ou com espaços de magia)." },
        { nome: "Tocado Pelas Sombras", desc: "Atributo: +1 INT, SAB ou CAR. Magia: Aprende Invisibilidade e 1 magia de 1º círculo (Ilusão/Necromancia). Pode conjurar 1x cada grátis por Descanso Longo." },
        { nome: "Tocado Por Fadas", desc: "Atributo: +1 INT, SAB ou CAR. Magia: Aprende Passo Nebuloso e 1 magia de 1º círculo (Adivinhação/Encantamento). Pode conjurar 1x cada grátis por Descanso Longo." },
        { nome: "Treinamento com Armas Marciais", desc: "Atributo: +1 FOR ou DES. Treinamento: Ganha proficiência com todas as armas Marciais." },
        { nome: "Velocista", desc: "Atributo: +1 DES ou CON. Efeito: +3m de Deslocamento. Terreno Difícil: Não custa movimento extra ao Correr. Defesa: Desvantagem para ataques de oportunidade contra você." },
        { nome: "Estilo de luta: Arquearia", desc: "Pré-req: Estilo de Luta. Bônus: +2 nas jogadas de ataque com armas à Distância." },
        { nome: "Estilo de luta: Arremesso", desc: "Pré-req: Estilo de Luta. Bônus: +2 no dano com armas de Arremesso ao atacar à distância." },
        { nome: "Estilo de luta: Armas Grandes", desc: "Pré-req: Estilo de Luta. Efeito: Ao usar arma de Duas Mãos ou Versátil, resultados 1 ou 2 no dado de dano tornam-se 3." },
        { nome: "Estilo de luta: Duas Armas", desc: "Pré-req: Estilo de Luta. Efeito: Soma modificador de atributo no dano do ataque adicional da propriedade Leve." },
        { nome: "Estilo de luta: Desarmado", desc: "Pré-req: Estilo de Luta. Dano: 1d6+FOR (ou 1d8 se mãos vazias). Efeito: Causa 1d4 de dano automático no início do turno a uma criatura imobilizada por você." },
        { nome: "Estilo: Defensivo", desc: "Pré-req: Estilo de Luta. Bônus: +1 na CA enquanto estiver usando qualquer armadura (Leve, Média ou Pesada)." },
        { nome: "Estilo de luta: Duelismo", desc: "Pré-req: Estilo de Luta. Bônus: +2 no dano ao usar uma arma corpo a corpo em uma mão e nenhuma outra arma." },
        { nome: "Estilo de luta: Interceptação", desc: "Pré-req: Estilo de Luta. Reação: Reduz dano sofrido por aliado a 1,5m em 1d10 + Proficiência (requer escudo ou arma)." },
        { nome: "Estilo de luta: Luta às Cegas", desc: "Pré-req: Estilo de Luta. Efeito: Você adquire Visão às Cegas com alcance de 3 metros." },
        { nome: "Estilo de luta: Protetivo", desc: "Pré-req: Estilo de Luta. Reação: Se aliado a 1,5m for atacado, impõe Desvantagem no ataque (requer escudo) e em todos os ataques contra ele até seu próximo turno." },
        { nome: "Dádiva: Fortitude", desc: "Épico (Nív 19+). Atributo: +1 em qualquer (Máx 30). PV: +40 fixos. Cura: Sempre que recuperar PV, ganha bônus igual ao Mod. CON (1x por turno)." },
        { nome: "Dádiva: Proeza em Combate", desc: "Épico (Nív 19+). Atributo: +1 em qualquer (Máx 30). Pontaria: 1x por turno, se errar um ataque, você pode transformar o erro em ACERTO." },
        { nome: "Dádiva: Proficiência em Perícia", desc: "Épico (Nív 19+). Atributo: +1 em qualquer (Máx 30). Efeito: Ganha proficiência em TODAS as perícias e 1 Especialização à escolha." },
        { nome: "Dádiva: Recordação de Magia", desc: "Épico (Nív 19+). Atributo: +1 INT, SAB ou CAR (Máx 30). Conjuração Livre: Ao usar espaço de 1º a 4º nível, role 1d4; se o dado for igual ao nível da magia, o espaço não é gasto." },
        { nome: "Dádiva: Recuperação", desc: "Épico (Nív 19+). Atributo: +1 em qualquer (Máx 30). Até a Morte: 1x/Descanso Longo, ao cair a 0 PV, fica com 1 e cura metade da vida máxima. Bônus: Reserva de 10d10 para cura (Ação Bônus)." },
        { nome: "Dádiva: Resistência à Energia", desc: "Épico (Nív 19+). Atributo: +1 em qualquer (Máx 30). Resistência: Escolha 2 tipos de dano elemental (mude após descanso). Reação: Redireciona dano recebido (2d12+CON) para alvo a 18m." },
        { nome: "Dádiva: Velocidade", desc: "Épico (Nív 19+). Atributo: +1 em qualquer (Máx 30). Agilidade: +9m de deslocamento. Artista de Fuga: Ação Bônus para Desengajar e encerrar condição Imobilizado." },
        { nome: "Dádiva: Viagem Dimensional", desc: "Épico (Nív 19+). Atributo: +1 em qualquer (Máx 30). Passos Fugazes: Após usar ação Atacar ou Magia, pode se teleportar 9 metros." },
        { nome: "Dádiva: Visão Verdadeira", desc: "Épico (Nív 19+). Atributo: +1 em qualquer (Máx 30). Efeito: Ganha Visão Verdadeira com alcance de 18 metros." },
        { nome: "Dádiva: Ataque Irresistível", desc: "Épico (Nív 19+). Atributo: +1 FOR ou DES (Máx 30). Superar Defesas: Seu dano físico ignora Resistências. Golpe Devastador: Se tirar 20 natural, soma valor do atributo no dano." },
        { nome: "Dádiva: Destino", desc: "Épico (Nív 19+). Atributo: +1 em qualquer (Máx 30). Aprimorar: Quando alguém a 18m falha/passa em teste, role 2d4 e use como bônus ou penalidade (recupera com Iniciativa)." },
        { nome: "Dádiva: Espírito da Noite", desc: "Épico (Nív 19+). Atributo: +1 em qualquer (Máx 30). Sombras: Invisível com Ação Bônus na penumbra/escuridão. Forma Sombria: Resistência a tudo (exceto Psíquico/Radiante) no escuro." }
    ],
    habs: [
        { nome: "Ataque Extra", desc: "Você pode atacar duas vezes sempre que usar a ação Atacar." },
        { nome: "Fúria", desc: "Vantagem em testes de Força e dano adicional corpo a corpo." },
        { nome: "Retomar o Fôlego", desc: "Ação bônus para recuperar 1d10 + nível de vida." }
    ]
};

function injetarDadosIniciais() {
    let storageKey = 'rpg_v20';
    let localData = JSON.parse(localStorage.getItem(storageKey)) || { herois: [], magias: [], talentos: [], habs: [] };

    ["magias", "talentos", "habs"].forEach(tipo => {
        BANCO_GLOBAL[tipo].forEach(itemNovo => {
            const existe = localData[tipo].some(itemDB => itemDB.nome === itemNovo.nome);
            if (!existe) {
                localData[tipo].push(itemNovo);
            }
        });
    });

    localStorage.setItem(storageKey, JSON.stringify(localData));
}
injetarDadosIniciais();