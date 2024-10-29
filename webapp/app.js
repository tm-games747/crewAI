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
        // Show loading indicator
        const loadingIndicator = document.createElement("p");
        loadingIndicator.textContent = "Running crew, please wait...";
        container.appendChild(loadingIndicator);

        fetch("/run-crew")
            .then(response => response.json())
            .then(data => {
                // Remove loading indicator
                container.removeChild(loadingIndicator);

                const result = document.createElement("pre");
                result.textContent = JSON.stringify(data, null, 2);
                container.appendChild(result);
            })
            .catch(error => {
                // Remove loading indicator
                container.removeChild(loadingIndicator);

                const errorMessage = document.createElement("p");
                errorMessage.textContent = "Error: " + error.message;
                container.appendChild(errorMessage);
            });
    });

    container.appendChild(title);
    container.appendChild(description);
    container.appendChild(runButton);
    root.appendChild(container);
});
