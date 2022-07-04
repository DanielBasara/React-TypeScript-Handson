interface Ifunc{
    getName:()=>string //接口只写公共的必须的规范
}



class A implements Ifunc{
a1(){
    
}
a2(){

}
getName(){
    return "CCC"
}


}
class B implements Ifunc{
a1(){
    
}
a2(){

}
getName(){
    return "CCC"
}


}

function init(obj:Ifunc){
obj.getName()
}

var objA = new A()
var objB= new B()

export default {}