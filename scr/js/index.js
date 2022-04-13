const consts = {
    labels: ["Brasil","Argentina","Uruguai","Equador","Peru","Colômbia","Chile","Paraguai","Bolívia","Venezuela"],
    labelsPais: ["Pontos","Quantidade de jogos","Vitorias","Empate","Derota","GP","GC","SG"],
    colors: [ "rgb(0, 255, 0)","rgb(50, 205, 50)","rgb(154, 205, 50)","rgb(255, 255, 0)","rgb(255, 165, 0)","rgb(255, 140, 0)","rgb(255, 69, 0)","rgb(178, 34, 34)","rgb(139, 0, 0)","rgb(255, 0, 0)"],
    pontosdata: [ 45, 39, 28, 26, 24, 23, 19, 16, 15, 10],
    GPdata: [ 40,	27,	22,	27,	19,	20,	19,	12,	23,	14],
    GCdata: [ 5, 8, 22, 19, 22, 19, 26, 26, 42, 34],
    SGdata: [ 35, 19, 0, 8, -3, 1, -7, -14, -19, -20],
    Vitoriasdata: [ 14, 11, 8, 7, 7, 5, 5, 3, 4, 3],
    Empatedata: [ 3, 6, 4, 5, 3, 8, 4, 7, 3, 1],
    Derotasdata: [ 0, 0, 6, 6, 8, 5, 9, 8, 11, 14],
    MediaGolsdata: [2.4, 1.6, 1.2, 1.5, 1.1, 1.1, 1.1, 0.7, 1.3, 0.8],
    infoBrasil: [ 45, 17, 14, 3, 0, 40, 5, 35],
    infoArgentina: [ 39, 17, 11, 6, 0, 27, 8, 19],
    infoUruguai: [ 28, 18, 8, 4, 6, 22, 22, 0],
    infoEquador: [ 26, 18, 7, 5, 6, 27, 19, 8],
    infoPeru: [ 24, 18, 7, 3, 8, 19, 22, -3],
    infoColombia: [ 23, 18, 5, 8, 5, 20, 19, 1],
    infoChile: [ 19, 18, 5, 4, 9, 19, 26, -7],
    infoParaguai: [ 16, 18, 3, 7, 8, 12, 26, -14],
    infoBolívia: [ 15, 18, 4, 3, 11, 23, 42, -19],
    infoVenezuela: [ 10, 18, 3, 1, 14, 14, 34, -20]
}

const datapontos = {
    labels: consts.labels,
    datasets: [{
        label: 'Pontos',
        backgroundColor: consts.colors,
        data: consts.pontosdata
    }]
};

const dataMediaGols ={
    labels: consts.labels,
    datasets: [{
        label: 'Media de Gols',
        backgroundColor: 'rgb(0, 255, 0)',
        data: consts.MediaGolsdata
    }]
};

const dataGeral = {
    labels: consts.labelsPais,
    datasets: [{
        label: 'Brasil',
        backgroundColor: 'rgb(0, 255, 0, 0.1)',
        borderColor: 'rgb(0, 255, 0)',
        pointBackgroundColor:' rgb(0, 255, 0)',
        data: consts.infoBrasil,
    },{
        label: 'Argentina',
        backgroundColor: 'rgb(50, 205, 50, 0.1)',
        borderColor: 'rgb(50, 205, 50)',
        pointBackgroundColor:' rgb(50, 205, 50)',
        data: consts.infoArgentina,
    },{
        label: 'Uruguai',
        backgroundColor: 'rgb(154, 205, 50, 0.1)',
        borderColor: 'rgb(154, 205, 50)',
        pointBackgroundColor:' rgb(154, 205, 50)',
        data: consts.infoUruguai,
    },{
        label: 'Equador',
        backgroundColor: 'rgb(255, 255, 0, 0.1)',
        borderColor: 'rgb(255, 255, 0)',
        pointBackgroundColor:' rgb(255, 255, 0)',
        data: consts.infoEquador,
    },{
        label: 'Peru',
        backgroundColor: 'rgb(255, 165, 0, 0.1)',
        borderColor: 'rgb(255, 165, 0)',
        pointBackgroundColor:' rgb(255, 165, 0)',
        data: consts.infoPeru,
        label: 'Colômbia',
        backgroundColor: 'rgb(255, 140, 0, 0.1)',
        borderColor: 'rgb(255, 140, 0)',
        pointBackgroundColor:' rgb(255, 140, 0)',
        data: consts.infoColombia,
    },{
        label: 'Chile',
        backgroundColor: 'rgb(255, 140, 0, 0.1)',
        borderColor: 'rgb(255, 140, 0)',
        pointBackgroundColor:' rgb(255, 140, 0)',
        data: consts.infoChile,
    },{
        label: 'Paraguai',
        backgroundColor: 'rgb(178, 34, 34, 0.1)',
        borderColor: 'rgb(178, 34, 34)',
        pointBackgroundColor:' rgb(178, 34, 34)',
        data: consts.infoParaguai,
    },{
        label: 'Bolívia',
        backgroundColor: 'rgb(139, 0, 0, 0.1)',
        borderColor: 'rgb(139, 0, 0)',
        pointBackgroundColor:' rgb(139, 0, 0)',
        data: consts.infoBolívia,
    },{
        label: 'Venezuela',
        backgroundColor: 'rgb(255, 0, 0, 0.1)',
        borderColor: 'rgb(255, 0, 0)',
        pointBackgroundColor:' rgb(255, 0, 0)',
        data: consts.infoVenezuela,
    }
]
};

const dataVED = {
    labels: consts.labels,
    datasets: [
        {
            label: 'Vitorias',
            backgroundColor: 'rgb(0, 255, 0)',
            data: consts.Vitoriasdata,
        },
        {
            label: 'Empate',
            backgroundColor: 'rgb(255, 255, 0)',
            data: consts.Empatedata,
        },
        {
            label: 'Derotas',
            backgroundColor: 'rgb(255, 0, 0)',
            data: consts.Derotasdata,
        },
    ]
};

const dataGols = {
    labels: consts.labels,
    datasets: [
        {
            label: 'GP',
            backgroundColor: 'rgb(0, 255, 0)',
            data: consts.GPdata,
        },
        {
            label: 'GC',
            backgroundColor: 'red',
            data: consts.GCdata,
        },
        {
            label: 'SG',
            backgroundColor: 'blue',
            data: consts.SGdata,
        },
    ] 
}

const configpontos = {
    type: 'pie',
    data: datapontos,
    options: {}
};

const configGeral = {
    type: 'radar',
    data: dataGeral,
    options: {
        elements: {
          line: {
            borderWidth: 3
          }
        }
    },
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

const configMedia = {
    type: 'bar',
    data: dataMediaGols,
    options: {}
};

const PontosPais = new Chart(
    document.getElementById('pontosPais'),
    configpontos
);

const MediasGols = new Chart(
    document.getElementById('mediaGols'),
    configMedia
);


const InfoGeral = new Chart(
    document.getElementById('infoGeral'),
    configGeral
);

const JogosVED = new Chart(
    document.getElementById('jogosVED'),
    configVED
);

const Gols = new Chart(
    document.getElementById('gols'),
    configGols
);