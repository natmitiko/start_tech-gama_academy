'use strict';

const limparCampo = (endereco) => {
    document.getElementById('logradouro').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
}

const preencherCampo = (endereco) => {
    document.getElementById('logradouro').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;
}

const soNumero = (numero) => /^[0-9]+$/.test(numero);

const cepValido = (cep) => cep.length == 8 && soNumero(cep);

const pesquisarCep = async() => {
    limparCampo();
    const cep = document.getElementById('cep').value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    
    if (cepValido(cep)){
        const dados = await fetch(url);
        const endereco = await dados.json();
        if (endereco.hasOwnProperty('erro')){
            document.getElementById('logradouro').value = 'CEP inexistente';
        } else {
            preencherCampo(endereco);
        }
    } else {
        document.getElementById('logradouro').value = 'Número inválido';
    }
    
}

document.getElementById('cep')
        .addEventListener('focusout', pesquisarCep);


// function validacaoCPF(cpf) {}

function envioDados() {
    console.log("enviando dados");
    var nome = document.getElementById("nome").value;
    var cargo = document.getElementById("cargo").value;
    var dia = document.getElementById("dia").value;
    var mes = document.getElementById("mes").value;
    var ano = document.getElementById("ano").value;    
    var civil = document.getElementById("civil").value;
    var sexo = document.getElementById("sexo").value;
    var cep = document.getElementById("cep").value;
    var logradouro = document.getElementById("logradouro").value;
    var numero = document.getElementById("numero").value;
    var complemento = document.getElementById("complemento").value;
    var bairro = document.getElementById("bairro").value;
    var cidade = document.getElementById("cidade").value;
    var estado = document.getElementById("estado").value;
    var celular = document.getElementById("celular").value;
    var tel_res = document.getElementById("tel_res").value;
    var tel_comer = document.getElementById("tel_comer").value;
    var contato = document.getElementById("contato").value;
    var email = document.getElementById("email").value;
    var identidade = document.getElementById("identidade").value;
    var cpf = document.getElementById("cpf").value;
    var veiculo = document.getElementById("veiculo").value;
    var cnh = document.getElementById("cnh").value;
    
    // var resultadoValidacaoCPF = validacaoCPF(cpf)

}