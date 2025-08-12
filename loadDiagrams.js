async function loadMermaid() {
  const { default: mermaid } = await import("https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs");

  // Lista dos diagramas - você pode adicionar novos aqui
  const diagramFiles = [
    "arquitetura/diagramas/diagrama1.mmd",
    "bd/diagramas/modelo.mmd"
  ];

  const container = document.getElementById("diagrams");

  for (const file of diagramFiles) {
    try {
      const res = await fetch(file);
      if (!res.ok) throw new Error(`Erro ao carregar ${file}`);
      const text = await res.text();

      const div = document.createElement("div");
      div.className = "diagram";
      div.innerHTML = `<pre class="mermaid">${text}</pre>`;
      container.appendChild(div);
    } catch (err) {
      console.error(err);
    }
  }

  mermaid.init();
}

loadMermaid();
