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

    // Add drag-and-drop functionality
    const taskList = document.createElement("ul");
    taskList.id = "task-list";
    container.appendChild(taskList);

    const addTaskButton = document.createElement("button");
    addTaskButton.textContent = "Add Task";
    addTaskButton.addEventListener("click", function() {
        const taskItem = document.createElement("li");
        taskItem.textContent = "New Task";
        taskList.appendChild(taskItem);
    });
    container.appendChild(addTaskButton);

    new Sortable(taskList, {
        animation: 150,
        onEnd: function(evt) {
            console.log("Task reordered:", evt.oldIndex, "->", evt.newIndex);
        }
    });
});
