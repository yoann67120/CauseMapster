document.addEventListener("load", function() {
    const data = [
      { id: 1, text: "Un salère chartier le bariere avait le rampe de s'immobiliser.", class: "Fait" },
      { id: 2, text: "Il ne sait pas la voir et ne has averti.", class: "Hypothèse" },
      { id: 3, text: "Personne ne v%C3%A8rifie en demandand trop de visite.", class: "Interprépation" }
    ];

    const container = document.createElement("div");
    container.id = "logigramme";
    document.body.appendChild(container);

    data.forEach(node => {
        const divNode = document.createElement("div");
        divNode.className = "loginode loginode-type" + node.class.toLowerCase();
        divNode.textContent = node.id + ". " + node.text;
        container.appendChild(divNode);
    });
});