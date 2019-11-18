let login = "Erika23"
let senha = 123456



let maximoTentativa = 3
let tentativaAtual = 1

while(tentativaAtual <= maximoTentativa){
    
    let loginUsuario = prompt("Digite seu usuário, porfavor");
    let senhaUsuario = parseInt(prompt("Digite sua senha, por favor"));
        
        if (loginUsuario == login && senha == senhaUsuario){
            alert ("Bem-vindx " + loginUsuario); 

        tentativaAtual = maximoTentativa;
        
        } else {
        
            if(tentativaAtual == 3){
                alert("Numero permitido de tentativas, sorry")
            }else {
                alert("Login inválido, tente novamente")
            }
        } 
        tentativaAtual++;
}  

    