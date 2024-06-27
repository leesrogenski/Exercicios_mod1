process.stdout.write("digite sua idade  \n");
process.stdout.once("data", function (data) {
    const YEAR = 2024;
    let idade = parseInt (data.toString() .trim());
    let ano = YEAR - idade;
    process.stdout.write("Olá, você nasceu em: " +  ano);

    process.stdout.write("\n Você está apto para fazer sua CNH");
    let CNH = parseInt (data.toString() .trim());
    if (idade >=18) {
    } else if (idade <18) {
        console.log("\n você não está apto para fazer CNH! \n")
    
    process.exit();
}});


// metodos para calcular a idade.
