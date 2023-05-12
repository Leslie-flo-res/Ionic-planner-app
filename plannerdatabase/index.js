const express = require('express');
const app = express();
const config = require('./config');
const Task = require('./models/task');
const Goal = require('./models/goal')
const cors = require('cors');




app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());



// test database 
config.authenticate()
.then(
function(){
console.log('Database Connected');
})
.catch(
    function(err){
      console.log(err);  
    }
);
//-----------------------------TASKS------------------------------------------//
// Get all tasks 
app.get('/tasks',function(req,res){
Task.findAll().then(function(results){
    res.status(200).send(results)
})
.catch(function(err){
    res.status(500).send(err)
     });
});


// create new task 
app.post('/tasks', function(req,res){
    let task_data = req.body;
    
    Task.create(task_data)
    .then(function(result){
        res.status(200).send(result); // result is the item that was created 
    })
    .catch(function(err){
        res.status(500).send(err);
    });
});

//update task progress level 
app.patch ('/tasks/update-status/:task_id',function(req,res){
    const task_id = parseInt(req.params.task_id);

//Find the task to update 
    Task.findByPk(task_id)
    .then(function(result){
        
        if(!result){
            res.status(404).send('Task not found');
            return;
        }
  result.status = req.body.status;

        //save the update into the database 
        result.save()
        .then(function(){
            res.status(200).send(result);
        })
        .catch(function(err){
            res.status(500).send(err);
        });
    })
    
    .catch(function(err){
        res.status(500).send(err);
    });
});

//-----------------------------GOALS--------------------------------------//
//-------------------------------------------------------------------//






// Get all tasks 
app.get('/goals',function(req,res){
    Goal.findAll().then(function(results){
        res.status(200).send(results)
    })
    .catch(function(err){
        res.status(500).send(err)
         });
    });
    
    
    // create new goal
    app.post('/goals', function(req,res){
        let goal_data = req.body;
        
        Goal.create(goal_data)
        .then(function(result){
            res.status(200).send(result); // result is the item that was created 
        })
        .catch(function(err){
            res.status(500).send(err);
        });
    });
    
    //update goal progress level 
    app.patch ('/goals/update-status/:task_id',function(req,res){
        const goal_id = parseInt(req.params.goal_id);
    
    //Find the task to update 
        Goal.findByPk(goal_id)
        .then(function(result){
            
            if(!result){
                res.status(404).send('Goal not found');
                return;
            }
      result.status = req.body.status;
    
            //save the update into the database 
            result.save()
            .then(function(){
                res.status(200).send(result);
            })
            .catch(function(err){
                res.status(500).send(err);
            });
        })
        
        .catch(function(err){
            res.status(500).send(err);
        });
    });


//server
    app.listen(3500,function(){
    console.log('Server running on port 3500...');
    
});