function separarPorCategoria(produtos) {
  return produtos.reduce((acumulador, produto) => {
    (acumulador[produto.categoria] = acumulador[produto.categoria] || []).push(produto);
    return acumulador;
  }, {});
}

let produtos = [
  { nome: "maça", categoria: "Frutas" },
  { nome: "banana", categoria: "Frutas" },
  { nome: "lapis", categoria: "Papelaria" },
  { nome: "tesoura", categoria: "Papelaria" },
  { nome: "limão", categoria: "Frutas" },
];

console.log(separarPorCategoria(produtos));
// frutas: maça, banana -- papelaria: lapis, tesoura