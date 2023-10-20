import React from 'react';

const tasks = ["Finish exam", "Get some rest", "Go for a walk", "Clean the house", "Pay bills"];

function Tasks() {
  return (
    <div>
      <h2>Task List</h2>
      {tasks.map((task, index) => (
        <table key={task}>
          <thead>
        
          </thead>
          <tbody>
            <tr key={task}>
              <td>
              <i className="bi bi-patch-check"></i> {task}
              </td>
            </tr>
          </tbody>
        </table>
      ))}
    </div>
  );
}

export default Tasks;
