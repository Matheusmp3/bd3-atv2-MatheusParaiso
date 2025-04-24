const database = 'bd3_atv3' ;
use(database);

// a. Pesquisa pelo produto mais caro
db.bd3_atv3_produtos.find().sort({ "valor": -1 }).limit(1);

// b. Pesquisa pelo produto mais barato
db.bd3_atv3_produtos.find().sort({ "valor": 1 }).limit(1);

// c. Pesquisa por produtos entre uma faixa de valor
db.bd3_atv3_produtos.find({
  "valor": { $gte: 100, $lte: 1000 }
});

// d. Pesquisa por produtos de uma determinada categoria
db.bd3_atv3_produtos.find({
  "categoria": "Monitores"
});

// e. Pesquisa por produtos de duas categorias
db.bd3_atv3_produtos.find({
  "categoria": { $in: ["Monitores", "Componentes"] }
});

// f. Pesquisa excluindo produtos de duas categorias
db.bd3_atv3_produtos.find({
  "categoria": { $nin: ["Monitores", "Áudio"] }
});

// g. Pesquisa de todos os produtos ordenados do mais barato para o mais caro
db.bd3_atv3_produtos.find().sort({ "valor": 1 });

// h. Pesquisa de todos os produtos ordenados do mais caro para o mais barato
db.bd3_atv3_produtos.find().sort({ "valor": -1 });

// i. Pesquisa de todos os produtos ordenados do mais barato para o mais caro de uma categoria específica
db.bd3_atv3_produtos.find({
  "categoria": "Componentes"
}).sort({ "valor": 1 });

// j. Pesquisa de todos os produtos ordenados do mais caro para o mais barato, excluindo uma categoria
db.bd3_atv3_produtos.find({
  "categoria": { $ne: "Áudio" }
}).sort({ "valor": -1 });
