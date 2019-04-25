import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  @Input() todoarray;

  nodata:boolean=true
  constructor() { }

  ngOnInit() {
  }
  checkboxclicked(todo) {
  let  index = this.todoarray.findIndex(x => x.index==todo);
  console.log(index)
    
         this.todoarray[index].complete=true

   

}
deleteItem(todo) {
  let  index = this.todoarray.findIndex(x => x.index==todo);
   this.todoarray.splice(index,1)
   
  
   console.log(this.todoarray)
  
}




editItem(todo) {
  let  index = this.todoarray.findIndex(x => x.index==todo);
  this.todoarray[index].edit=true
 
  
}
saveItem(edittodo,todo) {
  let  index = this.todoarray.findIndex(x => x.index==todo);
  this.todoarray[index].value=edittodo
  this.todoarray[index].edit=false
  
}
btndis(val,inn){
  let  index = this.todoarray.findIndex(x => x.index==inn);
  if(val==""){
    this.todoarray[index].btn=false
  }
else
this.todoarray[index].btn=true
}

}

