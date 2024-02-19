const fs = require("fs/promises");
// const fs = require("fs");

async function writeFileAsyncAwaitt(nomeArquivo, dados) {
  console.log(`Escrevendo dados no arquivo ${nomeArquivo}...`);
  
  try {
    // fs.writeFileSync(nomeArquivo, dados);
    fs.writeFile(nomeArquivo, dados);
    console.log(`Dados escritos no arquivo ${nomeArquivo} com sucesso.`);
  } catch (error) {
    console.log(`Erro ao escrever dados no arquivo ${nomeArquivo}...`);
    throw error;
  }
}

async function readFileAsyncAwait(nomeArquivo) {
  console.log(`Lendo dados do arquivo: ${nomeArquivo}`);

  try {
    // const data = fs.readFileSync(nomeArquivo, {encoding: 'utf-8'});
    const data = fs.readFile(nomeArquivo, {encoding: 'utf-8'});
    console.log(`Dados lidos do arquivo ${nomeArquivo}`);
    return data;
  } catch (error) {
    console.error(`Erro ao ler dados do arquivo ${nomeArquivo}`);
    throw error;
  }
}

async function getPokemonsAsyncAwait() {
  console.log("Aguardando retorno da Poke API");

  try {
    const pokemonResponse = await fetch("https://pokeapi.co/api/v2/pokemon/105");
    const pokemonJson = await pokemonResponse.json();

    const pokemonInfo = {
      nome: pokemonJson.name,
      tipos: pokemonJson.types.map((type) => type.type.name),
      peso: pokemonJson.weight,
      altura: pokemonJson.height,
    };

    const pokemonData = JSON.stringify(pokemonInfo, null, 2);
    await writeFileAsyncAwaitt("pokemon.json", pokemonData);
    console.log("Pokemon cadastrado");

    const localData = await readFileAsyncAwait("dados.txt");
    console.log(localData);

    const pokemonDataInfo = await readFileAsyncAwait("pokemon.json");
    console.log("Conteudo do arquivo pokemon", pokemonDataInfo);
    
  } catch (error) {
    console.error("Erro ao obter dados do pokemon");
    throw error;
  }
}

getPokemonsAsyncAwait();
