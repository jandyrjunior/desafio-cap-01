const input = require("fs").readFileSync("stdin", "utf8");
let senha = input;
const tamanhoDaSenha = senha.length
const tamanhoPadraoDaSenha = 6
let caracteresFaltantesDaSenha = 0

if (tamanhoDaSenha >= tamanhoPadraoDaSenha) {
    console.log(caracteresFaltantesDaSenha);
} else {
    caracteresFaltantesDaSenha = tamanhoPadraoDaSenha - tamanhoDaSenha
    console.log(caracteresFaltantesDaSenha)
}