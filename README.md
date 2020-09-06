
At the beginning it is necessary to create the empty file 'data.json' in the directory 'db' and use the command ```npm install```

Comands:
  app create  Generate a task to perform
  app show    Show the task list
  app update  Update task status
  app delete  Delete task


* create:
    Generate a task to perform
    
    Options:
    --desc, -d  Task description [required]

* show: Show tasks list

* update: Update task status
    Options:
        --desc, -d    Task description [required]
        --status, -s  Task status [default: false]

* delete: Delete task
    Options:
        --desc, -d  Task description [required]