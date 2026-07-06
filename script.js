const inputBox = document.getElementById("inputBox");
const buttons = document.querySelectorAll(".button");

let expression = "";

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const value = button.innerText;

        switch(value){

            case "AC":
                expression = "";
                inputBox.value = "";
                break;

            case "DEL":
                expression = expression.slice(0,-1);
                inputBox.value = expression;
                break;

            case "=":

                try{

                    expression = Function("return " + expression)().toString();
                    inputBox.value = expression;

                }catch{

                    inputBox.value = "Error";
                    expression = "";

                }   
                
                break;

            default:

                expression += value;
                inputBox.value = expression;

        }

    });

});
