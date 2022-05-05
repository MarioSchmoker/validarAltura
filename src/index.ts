let btnCacular = document.getElementById("btnCalcular");
rotulo.innerHTML = "Ingresar altura en metros";

btnCalcular.addEventListener("click", () => {
  let Altura1 = document.getElementById("Altura.value");

  let Altura11: number = Number(Altura.value);

  if (Altura11 >= 1.3) {
    console.log("Ingreso Autorizado");
  } else {
    console.log("Prohibido Ingresar");
  }
});
