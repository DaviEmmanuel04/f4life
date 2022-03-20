const btn = document.getElementById("btn_sub");

function verifica() {
    const email = document.getElementById("email");
    const msg = document.getElementById("mensagem");
    let valida = 0

    if(email.value === ""){
        alert("O campo email deve ser preenchido");
    }else{
        valida += 1;
    }

    // Validações para o email
    const semArroba = email.value.indexOf("@") === -1;
    const semPonto = email.value.indexOf(".") === -1;
    const semDominio = email.value.indexOf(".") - email.value.indexOf("@") === 1 || email.value.indexOf(".") - email.value.indexOf("@") >17 ;
    const semUser = email.value.indexOf("@") === 0;
    const userGrande = email.value.indexOf("@") > 32;
    if (semArroba || semPonto || semDominio || semUser || userGrande){
        alert("Email Inválido");
    }else{
        valida += 1;
    }

    //sss
    if(msg.value === ""){
        alert("O campo mensagem deve ser preechido.");
    }else{
        valida += 1;
    }

    if(valida === 3){
        const user = email.value.substr(0, email.value.indexOf("@"))
        alert(`Obrigado pelo contato, ${user} ;D`);
    }

}

btn.onclick = verifica;