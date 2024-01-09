
import logo from "../../assets/logo.png";
import tomate from "../../assets/frutas/Tomate.png";
import pepino from "../../assets/frutas/Pepino.png";
import abobora from "../../assets/frutas/Abóbora.png";
import brocolis from "../../assets/frutas/Brócolis.png";
import batata from "../../assets/frutas/Batata.png";


const cesta = {
topo:{
titulo: "Detalhes da ceste",
},
detalhes: {
    nome: "Cesta de Verduras",
    logoFazenda: logo,
    NomeFazenda: "Jenny Jack Farm",
    descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para a sua cozinha",
    preco: "R$ 40,00",
    botao: "Comprar",
},
itens:{
    titulo: "Itens da cesta",
    lista:[
        {
            nome: "Tomate",
            imagem : tomate,
        },
        {
            nome: "Batata",
            imagem : batata,
        },
        {
            nome: "Pepino",
            imagem : pepino,
        },
        {
            nome: "Abóbora",
            imagem : abobora,
        },
        {
            nome: "Brócolis",
            imagem : brocolis,
        }
    ],
}

};

export default cesta;