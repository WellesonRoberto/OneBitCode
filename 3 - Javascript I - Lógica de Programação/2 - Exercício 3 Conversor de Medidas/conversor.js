const medida = prompt("Insira um medida em metros: ");

const unidade = prompt(
  "Para qual unidade deseja converter?" +
    "\n1 - milimetro(mm)" +
    "\n2 - centimetro(mm)" +
    "\n3 - decimetro(mm)" +
    "\n4 - decametro(mm)" +
    "\n5 - hectometro(mm)" +
    "\n6 - quilometro(mm)"
);

switch (unidade) {
  case "1":
    alert("Resultado: " + medida + "m = " + medida * 1000 + "mm");
    break;
  case "2":
    alert("Resultado: " + medida + "m = " + medida * 100 + "cm");
    break;
  case "3":
    alert("Resultado: " + medida + "m = " + medida * 10 + "dm");
    break;
  case "4":
    alert("Resultado: " + medida + "m = " + medida / 10 + "dam");
    break;
  case "5":
    alert("Resultado: " + medida + "m = " + medida / 100 + "hm");
    break;
  case "6":
    alert("Resultado: " + medida + "m = " + medida / 1000 + "km");
    break;
  default:
    alert("Opção inválida.");
}
