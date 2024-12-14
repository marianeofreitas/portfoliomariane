const projectDetails = [
    {
      title: "Localização do Estado de Minas Gerais",
      info: [
        "Categoria: Localização",
        "Software: QGIS",
        "Data: Maio, 2024",
      ],
      nome_do_mapa: "Mapa_localizacao_Minas_Gerais.jpg",
      description: "Localizado no contexto geográfico brasileiro, Minas Gerais, meu estado natal, é representado com dados do IBGE e imagens do satélite Landsat 8. O mapa foi cuidadosamente elaborado para proporcionar uma leitura clara e facilitar a compreensão das características geográficas do estado."
    },
    {
      title: "Distribuição da espécie <i>Brachycephalus ephippium</i>",
      info: [
        "Categoria: Localização",
        "Software: QGIS",
        "Data: Abril, 2024",
      ],
      nome_do_mapa: "Mapa_localizacao_Distribuicao_Brachy.jpg",
      description:"Este mapa retrata a distribuição do sapo-de-ouro (<i>Brachycephalus ephippium</i>), espécie endêmica da Mata Atlântica. Baseado em dados do IBGE e da IUCN, ele revela que, apesar de classificada como 'baixo risco de extinção', sua população está em declínio. Essa análise georreferenciada destaca áreas prioritárias para conservação, reforçando a importância de preservar a Mata Atlântica para proteger essa e outras espécies vulneráveis."
    },
    {
      title: "Ecorregiões do Brasil",
      info: [
        "Categoria: Temático",
        "Software: QGIS",
        "Data: Abril, 2024",
      ],
      nome_do_mapa: "Mapa_tematico_ecorregioes_BR.jpeg",
      description: "Este mapa ilustra as ecorregiões do Brasil, destacando a vasta diversidade biológica e geográfica do país, com base nos dados da WWF (World Wide Fund For Nature). Cada bioma brasileiro possui ecossistemas únicos, abrigando espécies endêmicas e uma riqueza biológica impressionante. O mapa utiliza cores e formas distintas para representar as diferentes ecorregiões, facilitando a visualização e compreensão de suas particularidades. Como uma ferramenta educativa, ele evidencia a importância da preservação dessas áreas na manutenção da biodiversidade e do equilíbrio ecológico do Brasil."
    },
    {
      title: "Comparação de Casos Graves e Óbitos de Dengue no Brasil",
      info: [
        "Categoria: Temático",
        "Software: QGIS",
        "Data: Abril, 2024",
      ],
      nome_do_mapa: "Mapa_tematico_obitos_dengue_2023_2024.jpeg",
      description: "A distribuição de casos graves e óbitos por dengue no Brasil, entre 2023 e 2024, é representada neste mapa, cobrindo as semanas epidemiológicas 01 a 07. Através de uma escala de cores e representações graduadas, são destacadas as regiões mais afetadas, facilitando a identificação de áreas prioritárias para a implementação de estratégias de saúde pública.A análise visual dos dados permite uma compreensão clara das áreas críticas, essencial para a formulação de políticas eficazes e para a alocação de recursos no combate à dengue."

    },
    {
      title: "Mapa hipsométrico do Parque Torres del Paine - Chile",
      info: [
        "Categoria: Analítico",
        "Software: QGIS",
        "Data: Abril, 2024",
      ],
      nome_do_mapa: "Mapa_Analitico_hipsometrico_torres_del_paine.jpg",
      description: "Este mapa apresenta a variação altimétrica do Parque Nacional Torres del Paine, uma das áreas protegidas mais icônicas do Chile, localizada na região da Patagônia. A representação hipsométrica utiliza um gradiente de cores para destacar diferentes elevações, facilitando a visualização da topografia e dos principais relevos da região.Além de ser uma ferramenta valiosa para o planejamento de atividades de conservação e gestão ambiental, o mapa também apoia o planejamento de trilhas e infraestrutura do parque, ajudando a identificar áreas de difícil acesso e otimizando a localização de pontos de apoio. Essa abordagem contribui para uma gestão mais eficiente e para a preservação da biodiversidade da região."

    },
    {
      title: "NDVI da Reserva Nacional Lago Peñuelas - Chile",
      info: [
        "Categoria: Analítico",
        "Software: QGIS",
        "Data: Maio, 2024",
      ],
      nome_do_mapa: "Mapa_Analitico_Parque_lago_Tenuela.jpeg",
      description: "Através da análise do Índice de Vegetação por Diferença Normalizada (NDVI), este mapa detalha as alterações na vegetação antes e depois dos incêndios florestais de fevereiro de 2024, no Parque Lago Peñuelas. Utilizando dados de sensoriamento remoto, é possível identificar claramente as áreas impactadas pelos incêndios e as variações na vegetação ao longo do tempo.Esta ferramenta é essencial para o monitoramento ambiental, permitindo avaliar a recuperação da vegetação e identificar áreas prioritárias para ações de preservação e restauração ecológica, além de contribuir para a gestão sustentável dos recursos naturais."
    },
    {
      title: "Topografia do Estado de Minas Gerais",
      info: [
        "Categoria: Artístico",
        "Software: QGIS, Blender",
        "Data: Maio, 2024",
      ],
      nome_do_mapa: "Mapa_MG_artistico_topo.png",
      description: "Diferente de uma representação convencional, este mapa apresenta a topografia de Minas Gerais por meio de uma visualização tridimensional detalhada e estilizada. Seu objetivo é evidenciar a beleza natural e as formas do relevo de maneira mais abstrata e visualmente impactante.As cores, sombras e texturas foram aplicadas de forma cuidadosa, criando uma percepção única das características geográficas do estado, ao mesmo tempo em que combinam arte e ciência. Além de ser esteticamente impressionante, essa abordagem inovadora também oferece insights valiosos para análises geográficas, planejamento urbano e conservação ambiental.O resultado final valoriza a diversidade e a complexidade das paisagens mineiras, tornando o mapa uma peça tanto informativa quanto inspiradora."
    },
    {
      title: "Mapa Artístico dos Países da América do Sul e Seus Animais Símbolo",
      info: [
        "Categoria: Artístico",
        "Software: Qgis",
        "Data: Abril, 2024",
      ],
      nome_do_mapa: "Mapa_artistico_Animais_Simbolos_America_Sul.jpg",
      description: "De maneira artística, este mapa combina cores suaves, fontes estilizadas e ilustrações realistas, oferecendo uma experiência visualmente agradável e educativa.Cada país da América do Sul é representado não apenas por seu território, mas também pelo animal que reflete sua identidade cultural e natural, acompanhado do nome científico e do status de conservação. A escolha dos animais visa destacar a diversidade e a importância de cada espécie para a região.Este trabalho busca celebrar a biodiversidade do continente, proporcionando uma reflexão sobre as diferentes realidades de conservação e a necessidade de preservar essas espécies icônicas para as futuras gerações."
    }
  ];

  // Swiper initialization
const swiper = new Swiper('.swiper', {
  loop: true, // Vai permitir o loop infinito no carrossel
  slidesPerView: 1, // Número de slides visíveis de uma vez
  spaceBetween: 10, // Espaço entre os slides
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  on: {
    slideChange: function () {
      let correctedIndex = this.realIndex % projectDetails.length;
      updateProjectDetails(correctedIndex); // Use o índice corrigido
    }
  }
});

// Function to update project details
function updateProjectDetails(index) {
  const project = projectDetails[index];
  const projectInfoElement = document.getElementById('project-info');
  const projectTitleElement = document.getElementById('project-title');
  const projectDescriptionElement = document.getElementById('project-description');

  projectInfoElement.innerHTML = project.info.map(info => `<li>${info}</li>`).join('');
  projectTitleElement.innerHTML = project.title;
  projectDescriptionElement.innerHTML = project.description;
}




function initializeProjectDetails() {
  const projectInfoElement = document.getElementById('project-info');
  const projectTitleElement = document.getElementById('project-title');
  const projectDescriptionElement = document.getElementById('project-description');

  const urlParams = new URLSearchParams(window.location.search);
  const newMapName = urlParams.get("nome_do_mapa");

  const project = projectDetails.find(x => x.nome_do_mapa === newMapName);

  // Atualiza os detalhes do projeto
  projectInfoElement.innerHTML = project.info.map(info => `<li>${info}</li>`).join('');
  projectTitleElement.innerHTML = project.title;
  projectDescriptionElement.innerHTML = project.description;

  // Define o slide inicial no carrossel
  const swiperSlides = document.querySelectorAll('.swiper-slide img.mapImage');
  swiperSlides.forEach((slide, index) => {
    if (slide.src.includes(newMapName)) {
      swiper.slideTo(index);
    }
  });
}



setTimeout(() => {
  initializeProjectDetails();
}, 500);
