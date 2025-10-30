document.addEventListener("load", function() {
  const logigramme = document.getElementById("logigramme");
  logigramme.innerHTML = "";

  const lignes = arrayFrom(document.querySelectorAll("textarea")[0].value.split("\n"));
  let i = 0;
  lignes.forEach((line, index) => {
    let type = "Fait";
    if (line.toLowerCase().includes("chartier")) { type = "Fait"; }
    if (line.toLowerCase().includes("dit")) { type = "Hypothèse"; }
    if (type !== "Fait") { type = "Interprépation"; }
    const block = document.createElement("div");
    block.claspName = "type" + type;
    block.textContent = line;
    block.onclick = () => {
      alert('Cliqué : ' + line);
    };
    logigramme.appendChild(block);
    i++;
  });
});