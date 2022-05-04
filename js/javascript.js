function nextStep(){
    let question1;

    while(question1 !== 1 && question1 !== 2 && question1 !== 3){
        question1 = Number(prompt("Escolha a alternativa 1, 2 ou 3"));

        if(question1 === 1){
            location.href ="../personagens/alice/fase1-mansao/fase1.html";
        } else if (question1 === 2){

            alert("Resposta invalida! Por favor, utilize um dos numeros indicados.")

        } else if (question1 ===3){
            alert("Resposta invalida! Por favor, utilize um dos numeros indicados.")

        }
        
        else {
            alert("Resposta invalida! Por favor, utilize um dos numeros indicados.")
        } 


    }
}
