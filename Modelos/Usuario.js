import bcrypt from 'react-native-bcrypt';
import { NativeModules } from 'react-native';
import crypto from 'react-native-crypto';


const securePRNG = (size) => {
  return new Promise((resolve, reject) => {
    NativeModules.RCTDeviceInfo.generateSecureRandomBytes(size, (error, bytes) => {
      if (error) {
        reject(error);
      } else {
        resolve(bytes);
      }
    });
  });
};

crypto.randomBytes = (size, callback) => {
  securePRNG(size)
    .then((bytes) => {
      callback(null, bytes);
    })
    .catch((error) => {
      callback(error);
    });
};

class Usuario {
  #nome;
  #endereco;
  #listaEmprestimos;
  #cpf;
  #dataNascimento;
  #email;
  #senhaHash;

  async init(nome, endereco, cpf, dataNascimento, email, senha) {
    this.#nome = nome;
    this.#endereco = endereco;
    this.#listaEmprestimos = [];
    this.#cpf = cpf;
    this.#dataNascimento = dataNascimento;
    this.#email = email;

    try {
      const salt = await crypto.randomBytes(16).toString('base64');
      this.#senhaHash = await bcrypt.hashSync(senha, salt);
    } catch (error) {
      console.error('Erro ao gerar hash da senha:', error);
      throw error;
    }
  }

  static async create(nome, endereco, cpf, dataNascimento, email, senha) {
    const instance = new Usuario();
    await instance.init(nome, endereco, cpf, dataNascimento, email, senha);
    return instance;
  }

  get getNome() {
    return this.#nome;
  }

  get getEndereco() {
    return this.#endereco;
  }

  set setEndereco(endereco) {
    this.#endereco = endereco;
  }

  get getListaEmprestimos() {
    return this.#listaEmprestimos;
  }

  get getemail() {
    return this.#email;
  }

  set setemail(email) {
    this.#email = email;
  }

  async validarSenha(senha) {
    try {
      return await bcrypt.compareSync(senha, this.#senhaHash);
    } catch (error) {
      console.error('Erro ao validar senha:', error);
      throw error;
    }
  }

  adicionarEmprestimo(emprestimo) {
    this.#listaEmprestimos.push(emprestimo);
  }
}

export default Usuario;
