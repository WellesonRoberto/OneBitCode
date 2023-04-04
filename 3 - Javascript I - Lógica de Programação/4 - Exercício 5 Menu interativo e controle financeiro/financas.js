let saldo = prompt("Informe a quantidade de dinheiro inicial");
saldo = parseFloat(saldo);
let opcao = "";

do {
  opcao = prompt(
    "Saldo disponível: R$ " +
      saldo +
      "\n1. Adicionar dinheiro" +
      "\n2. Retirar dinheiro" +
      "\n3. Sair"
  );

  switch (opcao) {
    case "1":
      saldo += parseFloat(prompt("Informe a ser adicionado:"));
      break;
    case "2":
      saldo -= prompt("Informe o valor a ser retirado:");
      break;
    case "3":
      alert("Saindo...");
      break;
    default:
      "Entrada inválida.";
  }
} while (opcao !== 3);
