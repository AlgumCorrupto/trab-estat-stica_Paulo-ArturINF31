let data, total;

function tablegen() {
    // pegar/criar os elementos html
    let btnGen      = document.getElementById("gerador");
    let table       = document.getElementById("tabela");
    let tableBody   = document.createElement("tbody");
    let func        = document.getElementById("func");

    let data    =  this.data;
    let total   = this.total;

    tableBody.id = "tbody";

    //setar eles como escondido ou não
    btnGen.hidden   = true;
    table.hidden    = false;
    func.hidden     = false;

    //gerar dados (aleatórios) para a tabela 
    data    = genRandData();
    total   = data.reduce((a, b) => {return a + b}); // soma da array


    //colocar esses dados na tabela
    for (let i = 0; i < data.length; i++) {
        let row = document.createElement("tr");
        let nome        = document.createElement("th");
        let bruto       = document.createElement("td");
        let relativo    = document.createElement("td");
        let porcentagem = document.createElement("td");
        let count       = 1+i;

        nome.scope      = "row";

        nome.innerHTML          = "Indivíduo " + count.toString();
        bruto.innerHTML         = data[i].toString();
        relativo.innerHTML      = genRelativo(total, data[i]).toPrecision(3).toString();
        porcentagem.innerHTML   = genPorcentagem(total, data[i]).toPrecision(3).toString();

        row.appendChild(nome);
        row.appendChild(bruto);
        row.appendChild(relativo);
        row.appendChild(porcentagem);

        tableBody.appendChild(row);
    }

    // Botar dados totais na tabela
    let ttRow = document.createElement("tr");
    let ttNome        = document.createElement("th");
    let ttBruto       = document.createElement("td");
    let ttRelativo    = document.createElement("td");
    let ttPorcentagem = document.createElement("td");

    ttNome.innerHTML          = "Total";
    ttBruto.innerHTML         = total.toString();
    ttRelativo.innerHTML      = genRelativo(total, total).toString();
    ttPorcentagem.innerHTML   = genPorcentagem(total, total).toString();

    ttRow.appendChild(ttNome);
    ttRow.appendChild(ttBruto);
    ttRow.appendChild(ttRelativo);
    ttRow.appendChild(ttPorcentagem);
    tableBody.appendChild(ttRow);

    table.appendChild(tableBody);

    this.total  = total;
    this.data   = data;
};

function genRandData() {
    let numPessoas  = Math.floor(Math.random() * 10);
    let pessoas     = new Array(numPessoas);
    for(let i = 0; i < pessoas.length; i++) 
        pessoas[i] = Math.floor(Math.random() * 40);

    return pessoas;
};

function genPorcentagem(total, valor) {
    return (valor / total) * 100;
};

function genRelativo(total, valor) {
    return valor / total;
};

//OBS: incluir essa função no final dos código das funções para 
//     o javascript incluir os resultados no HTML
// param dados = o resultado da função que você fez
//       desc = descrição da sua função
function acrescentarRes(dados, desc) {
    let total = this.total;
    let table = document.getElementById('tabela');
    let bTable = document.getElementById('tbody');
    // Botar dados na tabela
    let row = document.createElement("tr");
    let nome        = document.createElement("th");
    let bruto       = document.createElement("td");
    let relativo    = document.createElement("td");
    let porcentagem = document.createElement("td");

    nome.innerHTML          = desc;
    bruto.innerHTML         = dados.toString();
    relativo.innerHTML      = genRelativo(total, dados).toPrecision(3);
    porcentagem.innerHTML   = genPorcentagem(total, dados).toPrecision(3);

    row.appendChild(nome);
    row.appendChild(bruto);
    row.appendChild(relativo);
    row.appendChild(porcentagem);
    bTable.appendChild(row);

    table.appendChild(bTable);
};

// função utilizada quando o botão de gerar função é clicado
function gerarFunc() {
    let func = document.body.getElementById('funcSel').innerHTML;
    switch(func) {
    case 'Média':
        funcMedia();
        break;
    case 'Moda':
        funcModa();
        break;
    case 'Variação':
        funcVariacao();
        break;
    case 'Mediana':
        funcMediana();
        break;
    case 'Desvio médio':
        funcDesvioMed();
        break;
    case 'Variância':
        funcVariancia();
        break;
    case 'Desvio Padrão':
        funcDesvioPad();
        break;
    default:
        acrescentarRes(0, 'Opção Inválida');
    }
};

function funcMedia(){
    let data = this.data;
    let retorno = 0;

    //código da sua função vai aqui
    //...

    acrescentarRes(retorno, 'Média:')
}
function funcModa(){
    let data = this.data;
    let retorno = 0;

    acrescentarRes(retorno, 'Média:')
}
function funcVariacao(){
    let data = this.data;
    let retorno = 0;

    //código da sua função vai aqui
    //...

    acrescentarRes(retorno, 'Média:')
}
function funcMediana(){
    let data = this.data;
    let retorno = 0;

    //código da sua função vai aqui
    //...

    acrescentarRes(retorno, 'Média:')
}
function funcDesvioMed(){
    let data = this.data;
    let retorno = 0;

    //código da sua função vai aqui
    //...

    acrescentarRes(retorno, 'Média:')
}
function funcVariancia(){
    let data = this.data;
    let retorno = 0;

    //código da sua função vai aqui
    //...

    acrescentarRes(retorno, 'Média:')
}
function funcDesvioPad(){
    let data = this.data;
    let retorno = 0;

    //código da sua função vai aqui
    //...

    acrescentarRes(retorno, 'Média:')
}


