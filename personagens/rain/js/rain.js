function escolhaCerta(){
    let escolha;

    while(escolha !== 1 && escolha !== 2 && escolha !== 3 ){
        escolha = Number(prompt("Escolha a alternativa 1, 2 ou 3"));

        if(escolha === 1){
            location.href ="./fase1.html";

        } else if (escolha === 2){

            location.href ="./fase1-gameover.html";

        } else if (escolha === 3) {

            location.href = "./fase1-gameover.html";
        }
        
        else {
            alert("Resposta invalida! Por favor, utilize um dos numeros indicados.")
        } 
            
    }
}

function escolhaCerta2(){
    let escolha;

    while(escolha !== 1 && escolha !== 2 ){
        escolha = Number(prompt("Escolha a alternativa 1 ou 2"));

        if(escolha === 1){
            location.href ="./fase2.html";

        } else if (escolha === 2){

            location.href ="./fase1-gameover.html";

        } else {
            alert("Resposta invalida! Por favor, utilize um dos numeros indicados.")
        } 
            
     }
}

function escolhaCerta3(){
    let escolha;

    while(escolha !== 1 && escolha !== 2 ){
        escolha = Number(prompt("Escolha a alternativa 1 ou 2"));

        if(escolha === 1){
            location.href ="./fase3.html";

        } else if (escolha === 2){

            location.href ="./fase2-gameover.html";

        } else {
            alert("Resposta invalida! Por favor, utilize um dos numeros indicados.")
        } 
            
     }
}

function escolhaCerta4(){
    let escolha;

    while(escolha !== 1 && escolha !== 2 ){
        escolha = Number(prompt("Escolha a alternativa 1 ou 2"));

        if(escolha === 1){
            location.href ="./fase3-gameover.html";

        } else if (escolha === 2){

            location.href ="./fase4.html";

        } else {
            alert("Resposta invalida! Por favor, utilize um dos numeros indicados.")
        } 
            
     }
}