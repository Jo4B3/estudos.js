//estrutura do switch


function alunos(nota){

    //chamar o switch e indicar a ação
    
    switch(nota){
    
    //devemos por cases e indicar oq deve ser feito nela, e ao final da ação BREAK
    
    case 10:
    case 9:
    console.log("sua nota e perfeita")
    break
    
    case 8:
    case 7:
    console.log("boa nota")

    break
    
    //default e como se fosse o else
    
    default:
    console.log("tente de novo")
     }
    }
    
    alunos(10)
    
