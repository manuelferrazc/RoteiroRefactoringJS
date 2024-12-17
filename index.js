const { readFileSync } = require('fs');
var Repositorio = require("./repositorio.js");
var ServicoCalculoFatura = require("./servico.js") ;
var gerarFaturaStr = require("./apresentacao.js");

function gerarFaturaHTML(fatura, pecas,calc) {
  // let faturaStr = `<html>\n<p> Fatura ${fatura.cliente} </p>\n<ul>\n`;
  // for (let apre of fatura.apresentacoes) {
  //   faturaStr += `<li> ${getPeca(pecas,apre).nome}: ${formatarMoeda(calc.calcularTotalApresentacao(pecas,apre))} (${apre.audiencia} assentos) </li>\n`;
  // }
  
  // faturaStr += `</ul>\n<p> Valor total: ${formatarMoeda(calc.calcularTotalFatura(pecas,fatura.apresentacoes))} </p>\n`;
  // faturaStr += `<p> Créditos acumulados: ${calc.calcularTotalCreditos(pecas,fatura.apresentacoes)} </p>\n</html>\n`;
  // return faturaStr
}

const faturas = JSON.parse(readFileSync('./faturas.json'));
const calc = new ServicoCalculoFatura(new Repositorio());
const faturaStr = gerarFaturaStr(faturas, calc);
console.log(faturaStr);