
interface IObj {
    name:string,
    age:number,
    location?:string //可选属性
    [propName:string]:any//省略对剩余不使用的值的变量类型定义

}
var obj1:IObj ={
    name:"jo",
    age:100
}


var obj2:any={
    aa:1
}



export default {}