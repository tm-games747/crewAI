document.addEventListener("DOMContentLoaded", function() {
    const root = document.getElementById("root");
    const container = document.createElement("div");
    container.className = "container";

    const title = document.createElement("h1");
    title.textContent = "Welcome to CrewAI Showcase";

    const description = document.createElement("p");
    description.textContent = "This web app showcases the CrewAI framework.";

    const runButton = document.createElement("button");
    runButton.textContent = "Run Crew";
    runButton.addEventListener("click", function() {
        fetch("/run-crew")
            .then(response => response.json())
            .then(data => {
                const result = document.createElement("pre");
                result.textContent = JSON.stringify(data, null, 2);
                container.appendChild(result);
            })
            .catch(error => {
                console.error("Error:", error);
            });
    });

    container.appendChild(title);
    container.appendChild(description);
    container.appendChild(runButton);
    root.appendChild(container);
});
