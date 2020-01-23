function student (){
this.name="sudip";
this.age=27;

}

student.prototype={//prototype is similar to inheritance.

    address:"usa",
    getname:function(){
        return this.name;
    }
}
var stud=new student();
console.log(stud.getname());
console.log(stud.age);