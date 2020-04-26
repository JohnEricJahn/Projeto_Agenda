const mongoose = require('mongoose');
const validator = require('validator');

// bcryptjs -- Gera um hash para "criptografarmos" a senha assim protegendo os usuarios de possiveis vazamentos do banco de dados
const bcryptjs = require('bcryptjs');

// Modelando quais dados deverão existir no LoginSchema.
const LoginSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true }
});

const LoginModel = mongoose.model('Login', LoginSchema);

// A classe Login será responsavel pela validação completa dos dados que virão do Controller.
class Login {
    constructor(body) {
        this.body = body;
        this.errors = [];
        this.user = null;
    }

    async login() {
        this.valida();
        if (this.errors.length > 0) return;

        this.user = await LoginModel.findOne({ email: this.body.email });

        if (!this.user) {
            this.errors.push('Usuario não existe');
            return;
        }

        if (!bcryptjs.compareSync(this.body.password, this.user.password)) {
            this.errors.push('Senha Invalida');
            this.user = null;
            return;
        }

    }

    async register() {
        // Neste primeiro momento estamos checando a modelagem do formulario bem como algumas regras de validacao criadas
        this.valida();
        if (this.errors.length > 0) return;

        // Fazemos novamente a checagem para evitar duplicacao de usuarios
        await this.userExists();
        if (this.errors.length > 0) return;

        // Utilizando a extensao bcrypt
        const salt = bcryptjs.genSaltSync();
        this.body.password = bcryptjs.hashSync(this.body.password, salt);


        // Após feito as validações inserimos o novo usuario na base dados. Lembrando que operacoes com a base dados costumam retornar promisses.
        // Por isso tornamos nossa função de register async e o comando que esta criando o usuario na base dados usamos await
        // Nao estou utilizando o bloco try aqui, pois usaremos a funcao register nos controllers e la o erro sera tratado
        this.user = await LoginModel.create(this.body);
    }

    // Esse método é responsavel por checkar na base dados se um usuario já existe, como de costume quando mexemos na base dados utilizamos promisses
    async userExists() {
        this.user = await LoginModel.findOne({ email: this.body.email });
        if (this.user) this.errors.push("Usuário ja existe");
    }

    valida() {
        this.cleanUp();
        // O e-mail precisa ser valido - Caso não seja é adicionado um erro no array de erros.
        if (!validator.isEmail(this.body.email)) this.errors.push('E-mail Invalido');
        // A senha precisa ter entre 3 e 50 caracteres - Caso não tenha, é adicionado um erro no array de erros.
        if (this.body.password.length < 3 || this.body.password.length > 50) this.errors.push('A senha precisa ter entre 3 e 50 caracteres');
    }

    cleanUp() {
        // Verificando se os dados que estão chegando do Controller pelo body são uma String, caso não seja atribuimos a uma string vazia
        for (let key in this.body) {
            if (typeof this.body[key] !== 'string') {
                this.body[key] = '';
            }
        }

        // Para evitar que o csrf token venha junto com o formulario, estamos garantindo que o formulario tenha apenas estes dados.
        this.body = {
            email: this.body.email,
            password: this.body.password
        }
    }
}

// Exportando a classe de login
module.exports = Login;
