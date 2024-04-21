let secretNumber = parseInt(Math.random() * 100 + 1);
let attempts = 0;

function showMessage(id, message) {
    //exibe mensagem
    document.getElementById(id).innerHTML = message;
    document.getElementById(id).style.display = "block";
}


function hideMessage(id) {
    //oculta mensagem
    document.getElementById(id).style.display = "none";
}


function disableButton() {
    //desabilita botão de adivinhação
    document.getElementById("try").disabled = "true";
}


function checkNumber() {
    let guessedNumber = document.getElementById("guessedNumber").value;
    if (guessedNumber < 1 || guessedNumber > 100) {
        //chute não está entre 1 e 100
        showMessage("helpMessage", "Número inválido")
    } else {
        while (attempts < 10) {
            if (guessedNumber == secretNumber) {
                //chute é igual ao número secreto
                showMessage("finalMessage", "Você descobriu o número secreto!");
                hideMessage("helpMessage");
                disableButton();
                break;
            }
            if (guessedNumber != secretNumber) {
                //chute é diferente do número secreto
                attempts++;
                //informa se o chute é maior ou menor que o número secreto
                if (secretNumber > guessedNumber) {
                    showMessage("helpMessage", `O número secreto é maior que ${guessedNumber}. Você possui mais ${10 - attempts} tentativas.`);
                    break;
                } else {
                    showMessage("helpMessage", `O número secreto é menor que ${guessedNumber}. Você possui mais ${10 - attempts} tentativas.`);
                    break;
                }
            }
        }
        if (attempts >= 10) {
            //acabaram as tentativas
            showMessage("finalMessage", "Acabaram as tentativas!");
            hideMessage("helpMessage");
            disableButton();

        }
    }
}
