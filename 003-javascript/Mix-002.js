function processTasks() {
  const tasks = [
    {
      name: 'Assignment',
      description: 'Complete a challenging programming assignment',
      category: 'Study',
      status: 'Incomplete',
      priority: 'High'
    },
    {
      name: 'Read Book',
      description: 'Read a chapter of a novel',
      category: 'Leisure',
      status: 'Incomplete',
      priority: 'Medium'
    },
    {
      name: 'Exercise',
      description: 'Go for a jog or hit the gym',
      category: 'Health',
      status: 'Incomplete',
      priority: 'High'
    },
    {
      name: 'Write Blog Post',
      description: 'Create an engaging blog post',
      category: 'Writing',
      status: 'Incomplete',
      priority: 'Medium'
    },
    // Add more tasks as needed
  ];

  for (let i = 0; i < tasks.length; i++) {
    const currentTask = tasks[i];

    // Display task details
    console.log(`Task: ${currentTask.name}`);
    console.log(`Description: ${currentTask.description}`);
    console.log(`Category: ${currentTask.category}`);
    console.log(`Priority: ${currentTask.priority}`);

    // Perform decision-making based on priority and category
    if (currentTask.status === 'Incomplete') {
      if (currentTask.priority === 'High') {
        console.log('Status: High priority. You should focus on this task.');
        // Additional logic for high-priority tasks
      } else {
        console.log('Status: Medium priority. Consider working on this task.');
        // Additional logic for medium-priority tasks
      }
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
    
