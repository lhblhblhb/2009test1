let name = "zhang"
let age = 22


let obj = {
    name,
    age,
    sex:"男"
}
let hello = function(){
    console.log("hello")
}
//模块导出,供其他模块使用
export {obj,hello}