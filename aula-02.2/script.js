let login = "Erika23"
let senha = 123456

let loginUsuario = prompt("Digite seu usuário, porfavor");
let senhaUsuario = parseInt(prompt("Digite sua senha, por favor"));

let numero = 1

while(numero <= 3){

    if (loginUsuario == login && senha == senhaUsuario){
        alert ("Bem-vindx"); break;
        
    } else {
        alert ("Você errou, tente de novo"); 
        numero++;
        if(numero == 4){
            alert("ACABOU!")
        }
    } 

    }  

    