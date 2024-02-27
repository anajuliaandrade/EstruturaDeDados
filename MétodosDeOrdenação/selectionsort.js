function heapsort(){
    let vetor =[5,55,80,1,7]
    alert(`Vetor desordenado: ${vetor}`)
    let menor
    for (let i=0; i<(vetor.length - 1); i++) {//define a quant vezes q vai percorrer o vetor
        menor=i
        for (let j =i+1; j<vetor.length; j++){//percorre vetor
            if(vetor[j]<vetor[menor]){
                menor=j
            }
        }
        if(i != menor){
            [vetor[i], vetor [menor]] = [vetor[menor], vetor[i]]
        }
    }
    alert(`Vetor ordenado: ${vetor}`)
}
heapsort()
