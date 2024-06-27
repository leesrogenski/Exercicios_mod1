let tabuada = "";

process.stdout.write("digite um numero: \n");
    process.stdin.once("data", function (data){
        tabuada = Number(data.toString().trim());
            
        let i = parseInt(data.toString().trim());

        for(let i = 1; i <= 10; i ++){
            console.log(tabuada + 'x' + i + "=" + tabuada * i);
        }
            process.exit();
        
    })


    // calcular tabuadas e multiplicação.
    