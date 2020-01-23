//let,const,templating string,class

var a='sudip';
var b=28;
//console.log("hi %s you are %s years old",a,b);
console.log(`hi ${a} you are ${b} years old`);//templating string

class users{

    constructor(){
        this.name="sudip";
        this.age=28;
    }
    getname(){
        this.email="sudipemail"
        return this.name;
    }
    getage()
{
    return this.age;
}
getemail(){
    return this.email;
}

}
var user=new users();
console.log(user.getname());
console.log(user.email);

