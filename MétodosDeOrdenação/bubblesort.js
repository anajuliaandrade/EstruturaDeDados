function bubblesort (){
    let vetor =[5,55,80,1,7]
    alert(`Vetor desordenado: ${vetor}`)
    let aux
    let controle 
    for (let i=0; i<(vetor.length - 1); i++) {//define a quant vezes q vai percorrer o vetor
        controle= true;
        for (let j =0; j<vetor.length; j++){//percorre vetor
            if(vetor[j]>vetor[j+1]){
                aux= vetor[j]
                vetor[j]= vetor[j+1]
                vetor[j+1]= aux
                controle= false
            }
        }
        if (controle == true){
            break;
        }
    }
    alert(`Vetor ordenado: ${vetor}`)
}