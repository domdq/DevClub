const marcas = [
  { nome: "Apple", valor: 300, anoFundação: 1976 },
  { nome: "Microsoft", valor: 250, anoFundação: 1975 },
  { nome: "Google", valor: 280, anoFundação: 1998 },
  { nome: "Amazon", valor: 170, anoFundação: 1994 },
  { nome: "Tesla", valor: 90, anoFundação: 2003 },
];

const add10porCentoDoValor = function (empresas) {
  empresas.valor += empresas.valor / 10;
  return empresas;
};

const empresasMasAntigas = (empresas) => empresas.anoFundação < 2000;

const valorDaEmpresaAntiga = (acumulador, valorAtual) =>
  acumulador + valorAtual.valor;

const melhoresEmpresas = marcas
  .map(add10porCentoDoValor)
  .filter(empresasMasAntigas)
  .reduce(valorDaEmpresaAntiga, 0);

console.log(melhoresEmpresas);
