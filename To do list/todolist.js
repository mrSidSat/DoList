var list = document.getElementById('list');
var __task;


function  Task (task)  {
    console.log(task)
    this.date = new Date().toString().split(' ');
    var div  = document.createElement("div");
    var p = document.createElement("p");
   
       
    
            div.classList.add('task_div')
            console.log(this.date)
            var p = document.createElement("p");
            
            p.innerHTML =  this.date[0] + "," + this.date[1] + " " + this.date[2] + " " + this.date[3] + "<br>" + this.date[4] + "<br>" + task;
            
            div.appendChild(p);
            
            p.classList.add('tasks_');
            
           
           
        
            list.appendChild(div);
    }
     

function handelsubmit(){
    console.log()
    console.log(__task)
    Task(__task);
}
function varry(e){
    __task = e;
    console.log(e);
}

