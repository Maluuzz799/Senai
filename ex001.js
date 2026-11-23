const produtos = [
    { nome: "Notebook", preco: 3500 },
    { nome: "Celular", preco: 2000 },
    { nome: "Tablet", preco: 1500 }
];


produtos.sort((a, b) => b.preco - a.preco);


produtos.forEach((produto) => {
    console.log(${produto.nome} - R$ ${produto.preco});
});
