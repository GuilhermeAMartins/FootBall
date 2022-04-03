const labels = [
    'Brasil',
    'Argentina',
    'Uruguai',
    'Equador',
    'Peru',
    'Colômbia',
    'Chile',
    'Paraguai',
    'Bolívia',
    'Venezuela'
];
  
const colors = [ 
    'rgb(0, 255, 0)',
    'rgb(50, 205, 50)',
    'rgb(154, 205, 50)',
    'rgb(255, 255, 0)',
    'rgb(255, 165, 0)',
    'rgb(255, 140, 0)',
    'rgb(255, 69, 0)',
    'rgb(178, 34, 34)',
    'rgb(139, 0, 0)',
    'rgb(255, 0, 0)'
];

const datapontos = {
    labels: labels,
    datasets: [{
        label: 'Pontos',
        backgroundColor: colors,
        data: [ 45, 39, 28, 26, 24, 23, 19, 16, 15, 10],
    }]
};
  
const dataclassificacao = {
    labels: labels,
    datasets: [
        {
            label: 'Classificado',
            backgroundColor: ['rgb(0, 255, 0)'],
            data: [ 3, 3, 3, 3, 0, 0, 0, 0, 0, 0],
        },
        {
            label: 'Repescagem',
            backgroundColor: 'rgb(255, 255, 0)',
            data: [ 0, 0, 0, 0, 2, 0, 0, 0, 0, 0],
        },
        {
            label: 'Nao Classificado',
            backgroundColor: 'rgb(255, 0, 0)',
            data: [ 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
        },
    ]
};

const datajogos = {
    labels: labels,
    datasets: [{
        label: 'Quantidade de jogos',
        backgroundColor: 'blue',
        data: [ 17, 17, 18, 18, 18, 18, 18, 18, 18, 18],
    }]
};

const dataVED = {
    labels: labels,
    datasets: [
        {
            label: 'Vitorias',
            backgroundColor: 'rgb(0, 255, 0)',
            data: [ 14, 11, 8, 7, 7, 5, 5, 3, 4, 3],
        },
        {
            label: 'Empate',
            backgroundColor: 'rgb(255, 255, 0)',
            data: [ 3, 6, 4, 5, 3, 8, 4, 7, 3, 1],
        },
        {
            label: 'Derotas',
            backgroundColor: 'rgb(255, 0, 0)',
            data: [ 0, 0, 6, 6, 8, 5, 9, 8, 11, 14],
        },
    ]
};

const dataGols = {
    labels: labels,
    datasets: [
        {
            label: 'GP',
            backgroundColor: 'rgb(0, 255, 0)',
            data: [ 40,	27,	22,	27,	19,	20,	19,	12,	23,	14],
        },
        {
            label: 'GC',
            backgroundColor: 'red',
            data: [ 5, 8, 22, 19, 22, 19, 26, 26, 42, 34],
        },
        {
            label: 'SG',
            backgroundColor: 'blue',
            data: [ 35, 19, 0, 8, -3, 1, -7, -14, -19, -20],
        },
    ] 
}

const configpontos = {
    type: 'bar',
    data: datapontos,
    options: {}
};

const configclassificacao = {
    type: 'bar',
    data: dataclassificacao,
    options: {
        responsive: true,
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true
          }
        }
    }
};

const configjogos = {
    type: 'bar',
    data: datajogos,
    options: {}
};

const configVED = {
    type: 'bar',
    data: dataVED,
    options: {
        responsive: true,
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true
          }
        }
    }
};

const configGols = {
    type: 'bar',
    data: dataGols,
    options: {}
};

const PontosPais = new Chart(
    document.getElementById('pontosPais'),
    configpontos
);

const JogosPais = new Chart(
    document.getElementById('jogosPais'),
    configjogos
);

const JogosVED = new Chart(
    document.getElementById('jogosVED'),
    configVED
);

const Classificacao = new Chart(
    document.getElementById('classificados'),
    configclassificacao
);

const Gols = new Chart(
    document.getElementById('gols'),
    configGols
);