import {
  Component
} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  add: string
  btn:boolean=false
  i:number=0
  todoarray:{value:string,edit:boolean,complete:boolean,index:number,btn:boolean}[]=new Array()

  addTodo(values) {

   if (values == "") {
    alert("please enter some task ")
  }
    else {
 
  this.todoarray.push({value:values,edit:false,complete:false,index:this.i,btn:true})
  this.i++
      this.add = ""
    console.log(this.todoarray)
    this.btn=false
    }
  }
  btndis(val){
    if(val==""){
      this.btn=false
    }
    else
    this.btn=true

  }
  
}
