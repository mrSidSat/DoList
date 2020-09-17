var list = document.getElementById('list');



function  Task (a)  {
   this.date = new Date().toString();
    this.creatediv = ()=>{
    let div  = document.createElement("div");
    var divsty = div.style;
    divsty.height = "50px";
    divsty.width = "100%";
    divsty.color = "white";
    divsty.border = "2px solid white"
    console.log(divsty)

    var p = document.createElement("p");
    p.innerHTML = this.date;
    console.log(p);
    div.appendChild(p);
    console.log(div)
    list.appendChild(div);
    }
}
var zap = new Task('a');
console.log(zap.creatediv());
