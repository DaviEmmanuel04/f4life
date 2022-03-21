const btn = document.getElementById("btn_sub");
const btn_ok = document.getElementById("ok");

function verifica() {
    const email = document.getElementById("email");
    const msg = document.getElementById("mensagem");
    let valida = 0

    // if(){
    //     document.querySelector("#erro_email").classList.toggle("visivel")
    //     return 0;
    // }else{
    //     valida += 1;
    // }

    // Validações para o email
    let qtd = 0;
    for(let i = 0; i < email.value.length; i++){
        if(email.value[i] === "@"){
            qtd++;
        }
    }
    const emailVazio = email.value === "";
    const maisArroba = qtd > 1;
    const semArroba = email.value.indexOf("@") === -1;
    const semPonto = email.value.substr(email.value.indexOf("@")).indexOf(".") === -1;
    const nadaPosPonto = (email.value.substr(email.value.indexOf("@")).length - email.value.substr(email.value.indexOf("@")).indexOf(".")) === 1;
    const semDominio = email.value.indexOf(".") - email.value.indexOf("@") === 1 || email.value.indexOf(".") - email.value.indexOf("@") >17 ;
    const semUser = email.value.indexOf("@") === 0;
    const userGrande = email.value.indexOf("@") > 32;
    if (emailVazio || semArroba || semPonto || semDominio || semUser || userGrande || maisArroba || nadaPosPonto){
        email.value = "";
        // document.querySelector("#erro_email").classList.toggle("visivel")
        const erro_email = "Erro ao enviar formulário: email inválido"
        document.getElementById("alerta").innerHTML = erro_email;
        document.getElementById("alerta").classList.add("erro")

        if(document.getElementById("ok").classList.contains("invisivel")){
            document.getElementById("ok").classList.remove("invisivel");
            document.getElementById("ok").classList.add("visivel");
        }else{
            document.getElementById("ok").classList.add("visivel");
        }

        return 0;
    }else{
        valida += 1;
    }

    //sss
    if(msg.value == false){
        //alert("O campo mensagem deve ser preechido.");
        msg.value = "";
        const erro_msg = "Erro ao enviar formulário: preencha o campo mensagem"
        document.getElementById("alerta").innerHTML = erro_msg;
        document.getElementById("alerta").classList.add("erro")
        document.getElementById("alerta").classList.remove("enviou")

        if(document.getElementById("ok").classList.contains("invisivel")){
            document.getElementById("ok").classList.remove("invisivel");
            document.getElementById("ok").classList.add("visivel");
        }else{
            document.getElementById("ok").classList.add("visivel");
        }

        // document.querySelector("#erro_email").classList.remove("visivel")
        // document.querySelector("#erro_mensagem").classList.toggle("visivel")
        msg.focus();
        
    }else{
        valida += 1;
    }

    if(valida === 2){
        const user = email.value.substr(0, email.value.indexOf("@"));
        const mensagem = `Obrigado pelo contato, ${user} ;D`;
        msg.value = "";
        document.getElementById("alerta").innerHTML = mensagem;
        document.getElementById("alerta").classList.add("enviou");

        if(document.getElementById("ok").classList.contains("invisivel")){
            document.getElementById("ok").classList.remove("invisivel");
            document.getElementById("ok").classList.add("visivel");
        }else{
            document.getElementById("ok").classList.add("visivel");
        }
    }

}

function limpaAlerta() {
    document.getElementById("alerta").innerHTML = "";
    if(document.getElementById("ok").classList.contains("visivel")){
        document.getElementById("ok").classList.remove("visivel");
        document.getElementById("ok").classList.add("invisivel");
    }else{
        document.getElementById("ok").classList.add("invisivel");
    }
}

btn.onclick = verifica;
btn_ok.onclick = limpaAlerta;