const primeiroNome = prompt("Informe o primeiro nome: ");
const sobrenome = prompt("Informe o sobrenome: ");
const campoEstudo = prompt("Qual é o campo de estudo?");
const anoDeNascimento = prompt("Qual é o ano de nascimento?");

alert(
  "Recruta cadastrado com sucesso!\n" +
    "\n Nome completo: " +
    primeiroNome +
    " " +
    sobrenome +
    "\n Campo de estudo: " +
    campoEstudo +
    "\n Idade: " +
    (2023 - anoDeNascimento)
);
