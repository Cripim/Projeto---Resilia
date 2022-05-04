function escolhaCerta(){
    let escolha;

    while(escolha !== 1 && escolha !== 2 ){
        escolha = Number(prompt("Escolha a alternativa 1, 2 ou 3"));

        if(escolha === 1){
            location.href ="./personagens/alice/fase1.html";
        } else if (escolha === 2){

            location.href ="./personagens/alice/fase1-gameover.html";

        } else if (escolha ===3){

            location.href 
            

        }
        
        else {
            alert("Resposta invalida! Por favor, utilize um dos numeros indicados.")
        } 


    }
}

