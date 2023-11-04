document.querySelector("form").addEventListener("submit", function(event){
    var nome = document.querySelector("input[name='nome']");
    var email = document.querySelector("input[name='email']");
    var telefone = document.querySelector("input[name='telefone']");
    var mensagem = document.querySelector("textarea[name='mensagem']");

    var emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    var telefoneRegex = /^\(?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4,5})$/;

    if(nome.value === ""){
        alert("Por favor, preencha o campo Nome.");
        event.preventDefault();
    }

    if(email.value === "" || !emailRegex.test(email.value)){
        alert("Por favor, preencha o campo E-mail com um e-mail válido.");
        event.preventDefault();
    }

    if(telefone.value === "" || !telefoneRegex.test(telefone.value)){
        alert("Por favor, preencha o campo Telefone com um número de telefone válido.");
        event.preventDefault();
    }

    if(mensagem.value === ""){
        alert("Por favor, preencha o campo Mensagem.");
        event.preventDefault();
    }

    if(nome.value !== "" && email.value !== "" && telefone.value !== "" && mensagem.value !== "" && emailRegex.test(email.value) && telefoneRegex.test(telefone.value)){
        alert("Formulário enviado com sucesso!");
    }
});

Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Algo deu errado!',
    footer: '<a href>Por que estou tendo esse problema?</a>'
})



