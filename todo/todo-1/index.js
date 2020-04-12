var task="", li,nodeText;
var tasks = [];
var completed = [];
var active = [];
var obj = {};
var listele;
// document.getElementById("todo-ul").addEventListener("click",function(){
    
// });



function addTodo(){
    task = document.getElementById("todoInput").value;
    document.getElementById("todoInput").value = " ";
    tasks.push(task);
    obj[task]="active";
    li = document.createElement("li");
    nodeText = document.createTextNode(task);
    li.appendChild(nodeText);
    document.getElementById("todo-ul").appendChild(li);
    // li.addEventListener("click",function(){
    //     this.classList.toggle("strike");
    //     this.style.border = "solid 1px black";
    // });


    // document.getElementById("todoInput").value = "";

    // li.addEventListener("click",function(){
    //     this.classList.toggle("strike");
    //     if(obj[task]==="active"){
    //     // completed.push(task);
    //     // active[active.indexOf(task)]=null;
    //     obj[task]="completed";
    //     }
    //     else{
    //         // completed[completed.indexOf(task)]=null;
    //         // active.push(task);
    //         obj[task]="active"; 

    //     }
        
    // });
    
}
listele = document.querySelectorAll("#todo-ul li");
    for(var i=0;i<=listele.length; i++){
        console.log(i);
        listele[i].addEventListener("click",function(){
            this.classList.toggle("strike");
            this.style.border = "solid 1px black";
            if(obj[this.value]=="active"){
                obj[this.value]="complected";
            }
            else{
                obj[this.value]="active";
            }
        });
    }
