import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-completelist',
  templateUrl: './completelist.component.html',
  styleUrls: ['./completelist.component.css']
})
export class CompletelistComponent implements OnInit {
@Input() todoarray;

nodata:boolean=true
  constructor() { }

  ngOnInit() {
  }
  chcompleted(completed) {
    let  index = this.todoarray.findIndex(x => x.index==completed);
        this.todoarray[index].complete=false
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
  btndis(val){
    if(val==""){
      this.nodata=false
    }
  else
  this.nodata=true
  }
  
}
