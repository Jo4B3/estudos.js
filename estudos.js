/
function usuarios(nome){
    
    switch(nome){
        case "joabe":
        if(nome == "joabe"){

            console.log("seja bem vindo "+nome)
            console.log("desejas saber a previsão do tempo?")

            var a = "sim"

            if(a == "sim"){

        function temperatura(tempo){
            switch (tempo){
             case 50:case 40: case 36: case 30: case 20:
                console.log("esta calor hoje, "+tempo)
                break
            case 19: case 15: case 10:
                console.log("esta agradavel hoje, "+tempo)
                break
            default:
                console.log("esta frio hoje, "+tempo)
                break         


            }
           
        }
        temperatura(40)
        }  

    
        }
    
        break

     default:
        console.log("how are voce?")   
    }
    }
    
    usuarios("joabe")
