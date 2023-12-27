function processTasks() {
  const tasks = [
    {
      name: 'Task 1',
      description: 'Complete assignment',
      status: 'Incomplete'
    },
    {
      name: 'Task 2',
      description: 'Read a chapter',
      status: 'Incomplete'
    },
    {
      name: 'Task 3',
      description: 'Exercise for 30 minutes',
      status: 'Incomplete'
    }
    // Add more tasks as needed
  ];

  for (let i = 0; i < tasks.length; i++) {
    const currentTask = tasks[i];

    // Display task details
    console.log(`Task: ${currentTask.name}`);
    console.log(`Description: ${currentTask.description}`);
    
    // Perform different actions based on task status
    if (currentTask.status === 'Incomplete') {
      console.log('Status: Incomplete. You need to work on this task.');
      // Additional logic for incomplete tasks
    } else {
      console.log('Status: Completed. Great job!');
      // Additional logic for completed tasks
    }

    // Add a line break for better readability
    console.log('\n');
  }
}

// Call the function to process tasks
processTasks();
