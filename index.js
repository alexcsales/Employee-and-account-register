import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js"
import { Diretor } from "./Funcionarios/Diretor.js"
import { SistemaAutentificacao } from "./SistemaAutentificacao.js";

const diretor = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha(123456)
const gerente = new Gerente("Ricardo", 5000, 12378945601);
gerente.cadastrarSenha(654321)

const diretorEstaLogado = SistemaAutentificacao.login(diretor, 123456)
const gerenteEstaLogado = SistemaAutentificacao.login(gerente, 654321)

console.log(diretorEstaLogado, gerenteEstaLogado)
