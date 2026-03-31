function logar() {
    let usuario = document.getElementById('inputUsuario').value
    let senha = document.getElementById('inputSenha').value

    if((usuario =="admin" || usuario == "admin@admin.com") && senha == '1234') {
        alert("Login efetuado com exito!")
        window.location.href = "home.html"
    } else {
        Swal.fire({
        title: "Acesso negado",
        text: "Usuario/Senha incorreta!! Volte nunca mais",
        icon: "error"
});
    }
}

function cadastrar() {
    let usuario = document.getElementById('inputUsuario').value
    let sobrenome = document.getElementById('inputSobrenome').value
    let senha = document.getElementById('inputSenha').value

    if(usuario == "" || sobrenome == "" || senha == "") {
        Swal.fire({
            title: "Acesso negado",
            text: "Usuario/Senha Não digitados!! Volte nunca mais",
            icon: "error"
        });
    } else {
        alert("Cadastro efetuado com exito!")
    }
}