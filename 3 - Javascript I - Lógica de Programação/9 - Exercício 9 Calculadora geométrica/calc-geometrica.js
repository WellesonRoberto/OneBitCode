function areaTriangulo() {
  const base = prompt("Digite a base do triângulo: ");
  const altura = prompt("Digite a altura do triângulo: ");
  return (base * altura) / 2;
}

function areaQuadrado() {
  const lado = prompt("Digite o lado do quadrado: ");
  return lado * lado;
}

function areaRetangulo() {
  const base = prompt("Digite a base do retângulo: ");
  const altura = prompt("Digite a altura do reângulo: ");
  return base * altura;
}

function areaTrapezio() {
  const baseMaior = parseFloat(prompt("Digite a base maior do trapézio: "));
  const baseMenor = parseFloat(prompt("Digite a base menor do trapézio: "));
  const altura = prompt("Digite a altura do trapézio: ");
  return ((baseMaior + baseMenor) * altura) / 2;
}

function areaCirculo() {
  const raio = prompt("Digite o raio do círculo: ");
  return 3.14 * raio * raio;
}

function exibirMenu() {
  return prompt(
    "Bem vindo(a) a calculadora geomértrica!\n\n" +
      "Selecione uma opção:\n\n" +
      "1. Área do triângulo\n" +
      "2. Área do quadrado\n" +
      "3. Área do retângulo\n" +
      "4. Área do trapézio\n" +
      "5. Área do círculo\n" +
      "6. Sair"
  );
}
function executar() {
  let opcao = "";
  do {
    opcao = exibirMenu();
    let resultado;

    switch (opcao) {
      case "1":
        resultado = areaTriangulo();
        break;
      case "2":
        resultado = areaQuadrado();
        break;
      case "3":
        resultado = areaRetangulo();
        break;
      case "4":
        resultado = areaTrapezio();
        break;
      case "5":
        resultado = areaCirculo();
        break;
      case "6":
        alert("Saindo...");
        break;
      default:
        alert("Opção inválida!");
    }

    if (resultado) {
      alert("Resultado: " + resultado + " m2");
    }
  } while (opcao !== "6");
}

executar();
