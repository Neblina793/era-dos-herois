// BANCO DE DADOS GLOBAL - PRÉ-CARREGADO
const BANCO_GLOBAL = {
    magias: [
        { nome: "Bola de Fogo", desc: "Dano: 8d6 de fogo. Alcance: 45 metros. Área: Esfera de 6m." },
        { nome: "Mísseis Mágicos", desc: "Cria 3 dardos. Dano: 1d4+1 cada. Nunca erram o alvo." },
        { nome: "Curar Ferimentos", desc: "Cura: 1d8 + modificador de conjuração. Toque." },
        { nome: "Bênção", desc: "3 criaturas recebem +1d4 em jogadas de ataque e testes de resistência." },
        { nome: "Escudo Arcano", desc: "+5 na CA até o próximo turno. Reação." }
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
        { nome: "Ataque Extra", desc: "Você pode atacar duas vezes, em vez de uma, sempre que usar a ação Atacar." },
        { nome: "Fúria", desc: "Vantagem em testes de Força e dano adicional em ataques corpo a corpo." },
        { nome: "Sentido de Perigo", desc: "Vantagem em testes de resistência de Destreza contra efeitos visíveis." },
        { nome: "Retomar o Fôlego", desc: "Ação bônus para recuperar 1d10 + nível de vida (1x por descanso)." }
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
    
    // Força a atualização da interface se a função existir na página principal
    if (typeof renderListasUI === 'function') {
        renderListasUI();
    }
}

injetarDadosIniciais();