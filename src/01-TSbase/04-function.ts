

function test1(a:number,b:number,c?:string):number{
return a+b
}
//?表示可选
var myname:number= test1(1,2)


interface IFunc{
    (a:number,b:number,c?:string):number
}

var myfunc2:IFunc =function (a,b,c){
    return a+b
    }
var xxx:number= myfunc2(2,3)



interface Iobj{
    name:string,
    age:number,
    getName:(name:string)=>string
}


var obj:Iobj={
    name:"jo",
    age:100,
    getName:(name:string)=>{
        return name
    }
}


obj.getName("aaa")


export default {}