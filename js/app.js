var prefixos = [
  "Baba",
  "Babo",
  "Baro",
  "Barto",
  "Bilo",
  "Biro",
  "Bo",
  "Boba",
  "Bobo",
  "Boco",
  "Bodo",
  "Bofo",
  "Bogo",
  "Bojo",
  "Bolo",
  "Bolso",
  "Bomo",
  "Bondo",
  "Bono",
  "Bonos",
  "Bonso",
  "Bonzi",
  "Bopo",
  "Boro",
  "Bosni",
  "Boso",
  "Boto",
  "Bovo",
  "Bozo",
  "Buce",
  "Buco",
  "Bugo",
  "Bulba",
  "Bulbo",
  "Bunda",
  "Bunde",
  "Bundo",
];
var sufixos = [
  "baro",
  "caro",
  "charo",
  "daro",
  "faro",
  "garo",
  "jaro",
  "laro",
  "liro",
  "mario",
  "maro",
  "mauro",
  "naro",
  "nauro",
  "nazo",
  "noro",
  "paro",
  "ro",
  "saro",
  "sauro",
  "tauro",
  "tosco",
  "tário",
  "valdo",
  "varo",
  "vazo",
  "vo",
  "zaro",
  "çaro",
];

function novoNomeBonoro() {
  var prefixo = prefixos[Math.floor(Math.random() * prefixos.length)];
  var sufixo = sufixos[Math.floor(Math.random() * sufixos.length)];

  var nome = prefixo + sufixo;

  // Não quero dar nomes de pessoas reais, seria coincidência demais
  if (nome !== "Bolsonaro") {
    return nome;
  } else {
    return novoNomeBonoro();
  }
}

function imprimeNovoNome() {
  document.getElementById("bonoro").innerHTML = novoNomeBonoro();
}

imprimeNovoNome();
