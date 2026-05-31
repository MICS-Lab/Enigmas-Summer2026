
function checkPassword0() {
  var password = document.getElementById("password0").value;
  var sha_password = SHA256(password.replace(/ /g, ''));
  if (
    sha_password ==
    "936f6af81f1f8fd9318cfde987bcf123ec996fcae1c7bd1cb09416eb52eb1ee8"
  ) {
    document.getElementById("enigma0-check").style = "display: block";
    document.getElementById("enigma0-no-check").style = "display: none";
  } else {
    document.getElementById("enigma0-no-check").style = "display: block";
    document.getElementById("enigma0-check").style = "display: none";
    document.getElementById("password0").value = "";
  }
  final_code();
}

checkPassword0();


function checkPassword1() {
  var password = document.getElementById("password1").value;
  var sha_password = SHA256(password.replace(/ /g, ''));
  if (
    sha_password ==
    "8c1f1046219ddd216a023f792356ddf127fce372a72ec9b4cdac989ee5b0b455"
  ) {
    document.getElementById("enigma1-check").style = "display: block";
    document.getElementById("enigma1-no-check").style = "display: none";
  } else {
    document.getElementById("enigma1-no-check").style = "display: block";
    document.getElementById("enigma1-check").style = "display: none";
    document.getElementById("password1").value = "";
  }
  final_code();
}

checkPassword1();


function checkPassword2() {
  var password = document.getElementById("password2").value;
  var sha_password = SHA256(password.replace(/ /g, ''));
  if (
    sha_password ==
    "f369cb89fc627e668987007d121ed1eacdc01db9e28f8bb26f358b7d8c4f08ac"
  ) {
    document.getElementById("enigma2-check").style = "display: block";
    document.getElementById("enigma2-no-check").style = "display: none";
  } else {
    document.getElementById("enigma2-no-check").style = "display: block";
    document.getElementById("enigma2-check").style = "display: none";
    document.getElementById("password2").value = "";
  }
  final_code();
}

checkPassword2();


function checkPassword3() {
  var password = document.getElementById("password3").value;
  var sha_password = SHA256(password.replace(/ /g, ''));
  if (
    sha_password ==
    "e629fa6598d732768f7c726b4b621285f9c3b85303900aa912017db7617d8bdb"
  ) {
    document.getElementById("enigma3-check").style = "display: block";
    document.getElementById("enigma3-no-check").style = "display: none";
  } else {
    document.getElementById("enigma3-no-check").style = "display: block";
    document.getElementById("enigma3-check").style = "display: none";
    document.getElementById("password3").value = "";
  }
  final_code();
}

checkPassword3();


function checkPassword4() {
  var password = document.getElementById("password4").value;
  var sha_password = SHA256(password.replace(/ /g, ''));
  if (
    sha_password ==
    "cd9fb1e148ccd8442e5aa74904cc73bf6fb54d1d54d333bd596aa9bb4bb4e961"
  ) {
    document.getElementById("enigma4-check").style = "display: block";
    document.getElementById("enigma4-no-check").style = "display: none";
  } else {
    document.getElementById("enigma4-no-check").style = "display: block";
    document.getElementById("enigma4-check").style = "display: none";
    document.getElementById("password4").value = "";
  }
  final_code();
}

checkPassword4();

