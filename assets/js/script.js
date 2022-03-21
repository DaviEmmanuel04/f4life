const btn = document.getElementById("btn_sub");

function verifica() {
    const email = document.getElementById("email");
    const msg = document.getElementById("mensagem");
    let valida = 0

    if(email.value === ""){
        document.querySelector("#erro_email").classList.toggle("visivel")
        return 0;
    }else{
        valida += 1;
    }

    // Validações para o email
    let qtd = 0;
    for(let i = 0; i < email.value.length; i++){
        if(email.value[i] === "@"){
            qtd++;
        }
    }
    const maisArroba = qtd > 1;
    const semArroba = email.value.indexOf("@") === -1;
    const semPonto = email.value.indexOf(".") === -1;
    const semDominio = email.value.indexOf(".") - email.value.indexOf("@") === 1 || email.value.indexOf(".") - email.value.indexOf("@") >17 ;
    const semUser = email.value.indexOf("@") === 0;
    const userGrande = email.value.indexOf("@") > 32;
    if (semArroba || semPonto || semDominio || semUser || userGrande || maisArroba){
        document.querySelector("#erro_email").classList.toggle("visivel")
        return 0;
    }else{
        valida += 1;
    }

    //sss
    if(msg.value === ""){
        //alert("O campo mensagem deve ser preechido.");
        document.querySelector("#erro_email").classList.remove("visivel")
        document.querySelector("#erro_mensagem").classList.toggle("visivel")
        return 0;
    }else{
        valida += 1;
    }

    if(valida === 3){
        const user = email.value.substr(0, email.value.indexOf("@"));
        alert(`Obrigado pelo contato, ${user} ;D`);
    }

}

btn.onclick = verifica;