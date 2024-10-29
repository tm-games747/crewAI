document.addEventListener("DOMContentLoaded", function() {
    const root = document.getElementById("root");
    const container = document.createElement("div");
    container.className = "container";

    const title = document.createElement("h1");
    title.textContent = "Welcome to CrewAI Showcase";

    const description = document.createElement("p");
    description.textContent = "This web app showcases the CrewAI framework.";

    container.appendChild(title);
    container.appendChild(description);
    root.appendChild(container);
});
