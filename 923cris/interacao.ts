console.log("=== Adoção de Cachorro===");

const nome = ("Qual é o seu nome? ");
const idadeStr = ("Quantos anos você tem? ");
const idade = parseInt(idadeStr);

const racas = ["Labrador", "PAstor-Alema", "Buldog", "Dachishund", "Vira-lata"];
const indice = ("Qual raça de cachorro você quer?");

if (indice === -1) {
  console.log("Você cancelou a escolha.");
} else {
  console.log("\n=== Resumo do Pedido ===");
  console.log(`Nome: ${nome}`);
  console.log(`Idade: ${idade} anos`);
  console.log(`Raça escolhida: ${racas[indice]}`);
  console.log("\nObrigado por visitar o PetShop Virtual! ");
}
