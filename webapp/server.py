from flask import Flask, send_from_directory, jsonify
from src.crewai import Agent, Crew, Task

app = Flask(__name__)

@app.route('/')
def serve_index():
    return send_from_directory('templates', 'index.html')

@app.route('/static/<path:path>')
def serve_static(path):
    return send_from_directory('static', path)

@app.route('/run-crew')
def run_crew():
    # Create instances of Agent, Task, and Crew
    agent = Agent(role="Example Role", goal="Example Goal", backstory="Example Backstory")
    task = Task(description="Example Task", agent=agent)
    crew = Crew(agents=[agent], tasks=[task])

    # Define tasks and agents, and configure them
    crew.tasks = [task]
    crew.agents = [agent]

    # Use the kickoff method of the Crew class
    result = crew.kickoff()

    # Handle the output of the tasks and display results
    return jsonify(result.raw)

if __name__ == '__main__':
    app.run(debug=True)
