var dados = {
  "prefixos": [
    "Bolso",
    "Bono",
    "Boro",
    "Bulba",
    "Bozo",
    "Bonso",
    "Bo",
    "Barto",
    "Bonzi",
    "Baro",
    "Bunda",
    "Boto",
    "Bolo",
    "Bonos",
    "Buce",
    "Bucen",
    "Bosni",
    "Bovo",
    "Bilo",
    "Bugo",
  ],
  "sufixos": [
    "naro",
    "sauro",
    "ro",
    "tário",
    "mario",
    "çaro",
    "maro",
    "saro",
    "xaro",
    "nauro",
    "valdo",
    "vo",
    "tauro",
    "nazo",
    "vazo",
    "noro",
    "tosco",
  ]
}
var prefixos = dados["prefixos"];
var sufixos = dados["sufixos"];

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
