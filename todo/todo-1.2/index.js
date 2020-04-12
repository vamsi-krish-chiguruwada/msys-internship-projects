// var task="", li,nodeText;
// var tasks = [];

// var completed = [];
// var active = [];
// var obj = {};
// var listele;

// dictin=
// // document.getElementById("todo-ul").addEventListener("click",function(){
    
// // });



// function addTodo(){
//     task = document.getElementById("todoInput").value;
//     console.log(task);
//     document.getElementById("todoInput").value = " ";
//     tasks.push(task);
//     obj[task]="active";
//     li = document.createElement("li");
//     nodeText = document.createTextNode(task);
//     li.appendChild(nodeText);
//     document.getElementById("todo-ul").appendChild(li);
//     // li.addEventListener("click",function(){
//     //     this.classList.toggle("strike");
//     //     this.style.border = "solid 1px black";
//     // });


//     // document.getElementById("todoInput").value = "";

//     // li.addEventListener("click",function(){
//     //     this.classList.toggle("strike");
//     //     if(obj[task]==="active"){
//     //     // completed.push(task);
//     //     // active[active.indexOf(task)]=null;
//     //     obj[task]="completed";
//     //     }
//     //     else{
//     //         // completed[completed.indexOf(task)]=null;
//     //         // active.push(task);
//     //         obj[task]="active"; 

//     //     }
        
//     // });
    
// }
// listele = document.querySelectorAll("#todo-ul li");
//     for(var i=0;i<=listele.length; i++){
//         console.log(i);
//         listele[i].addEventListener("click",function(){
//             this.classList.toggle("strike");
//             this.style.border = "solid 1px black";
//             if(obj[this.value]=="active"){
//                 obj[this.value]="complected";
//             }
//             else{
//                 obj[this.value]="active";
//             }
//         });
//     }
 var tasks = [];
 var task;
 var obj = {"active":[], "completed":[]};
 var isActive = true;

 var all;
 var pend;
 var complected;
 function addTodo(){
    task = document.getElementById("todoInput").value;
    tasks.push(task);
    obj["active"].push(task);
    console.log(task);
    let newli = document.createElement("li");
    let nodetext = document.createTextNode(task);
    newli.appendChild(nodetext);
    console.log(newli);
    document.getElementById("todo-ul").appendChild(newli);
    document.getElementById("todoInput").value = "";

    
    newli.addEventListener("click",function(){
        // console.log(newli.textContent);
        // isActive = ()=>newli.textContent in obj["active"];
        // console.log(isActive);
        if(!this.textContent in obj["active"]){
            obj["completed"].splice(obj["completed"].indexOf(newli.textContent),1);
            obj["active"].push(newli.textContent)

        }
        else{
            obj["active"].splice(obj["active"].indexOf(newli.textContent),1);
            obj["completed"].push(newli.textContent)

        }
        console.log("li clicked");
        this.classList.toggle("strike");
    });

    all = document.querySelector("#todo-ul").innerHTML;
    console.log(all);
 }



 function showPending(){
     var pendingUl = document.createElement("ul")
     for(let i=0;i<obj["active"].length;i++){
         var li = document.createElement("li");
         var nodeText = document.createTextNode(obj["active"][i])
         li.appendChild(nodeText);
         pendingUl.appendChild(li);
        //  pendingUl.appendChild(document.createElement("br"));
     }
     document.querySelector("#span-todo-ul").innerHTML=pendingUl.innerHTML;
 }


 function showCompleted(){
    var pendingUl = document.createElement("ul")
    for(let i=0;i<obj["completed"].length;i++){
        var li = document.createElement("li");
        var nodeText = document.createTextNode(obj["completed"][i])
        li.appendChild(nodeText);
        pendingUl.appendChild(li);
       //  pendingUl.appendChild(document.createElement("br"));
    }
    document.querySelector("#span-todo-ul").innerHTML=pendingUl.innerHTML;

 }


 function showAll(){
    document.querySelector("#span-todo-ul").innerHTML=all;
    addTodo();


 }
// document.getElementsById("todo-ul").document.addEventListener("click",function(){
//    console.log("ul clicked");
//     var arr = document.querySelectorAll("ul li");
//     for(var i=0;i<arr.length;i++){
//         arr[i].addEventListener("click",function(){
//             // console.log("li clicked");
//             arr[i].classList.toggle("strike"); 

//         });
//     }

// })


// var arr = document.querySelectorAll("li");
// for(var i=0;i<arr.length;i++){
//     arr[i].addEventListener("click",function(){
//         // console.log("li clicked");
//         this.classList.toggle("strike"); 
//     })
// }

 



//  var listOFlis = document.querySelectorAll("#todo-ul li");
//  console.log(listOFlis);

// console.log("hello");
//  var listOfLis = document.querySelectorAll("ul li");
//  console.log(listOfLis);
//  function addTodo(){
//  task = document.getElementById("todoInput").Value;
//  obj["active"].push(task);
//  var newLi = document.createElement("li");
//  newLi.appendChild(document.createTextNode(task));
//  document.getElementById("todo-ul").appendChild(newLi);
//  document.getElementById("todoInput").Value= " ";

// }