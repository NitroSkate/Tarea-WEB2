 window.onload = init;
   
 function init() {
     let todoList = {
         listHTML: document.getElementById("todoList"),
         listTask: [],
         add(task, priority = false) {
             //Botones creados borrar y tachar
             let element = document.createElement("li");
             let p = document.createElement("p");
             p.innerText = task;
             element.appendChild(p);
             let t = document.createElement("input");
             t.type="button";
             t.value="Tachar";
             let e = document.createElement("input");
             e.type="button";
             e.value="Eliminar";
             p.appendChild(t);
             p.appendChild(e);
             t.addEventListener("click", function(){
                p.style.textDecoration ="line-through";
             });
             e.addEventListener("click", function(){
                console.log(this);
                let parent = this.parentNode.parentNode.parentNode;
                if(parent){
                    parent.removeChild(this.parentNode.parentNode);
                }
             });
             if (priority) {
                 this.listTask.unshift({
                     element,
                     task
                 });
                 this.listHTML.insertBefore(element, this.listHTML.childNodes[0]);
             } else {
                 this.listTask.push({
                     element,
                     task
                 });
                 this.listHTML.appendChild(element);
             }
         }
     }

     let form = document.managerTask;
     form.addEventListener("submit", (evt) => {
         evt.preventDefault();
         let task = form.task.value;

         let validTask = /.{2,}/;
         if (!validTask.test(task)) {
             console.log("Ingrese una descripcion clara");
             return false;
         }

         todoList.add(task, form.important.checked);

     });
 }