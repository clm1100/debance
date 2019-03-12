// function copy(obj) {
//     let res;
//     if (typeof obj === "object") {
//         let newobj = {};
//         for (const key in obj) {
//             newobj[key] = copy(obj[key])
//         }
//         res = newobj
//     } else {
//         res = obj;
//     }
//     return res
// }

// var obj = {a:1};
// var newobj = copy(obj);
// console.log(newobj);






function copy(obj) {
    let res;
    if (typeof obj === "object") {
        if (Object.prototype.toString.call(obj) == "[object Date]") {
            res = obj;
            console.log("obj")
        }
        else if (Object.prototype.toString.call(obj) == "[object RegExp]") {
            res = obj;
        }
        else if (Object.prototype.toString.call(obj) == "[object Array]") {
            let arr = [];
            for (let i = 0; i < obj.length; i++) {
                arr[i] = copy(obj[i])
            }
            res = arr;
        } 
        else if (Object.prototype.toString.call(obj) == "[object Object]") {
            let newobj = {};
            for (const key in obj) {
                newobj[key] = copy(obj[key])
            }
            res = newobj
        }
    } else {
        res = obj;
    }
    return res
}

const obj1 = {
    x: 1, 
    y: 2
};
obj1.z = obj1;

var newobj = copy(obj1);


// // 测试代码
// var obj = {
//     a:1,
//     b:{name:2,hobby:[1,2,3,4]},
//     c:"333",
//     t:new Date()
// }
// let newobj = copy(obj);
// obj.b.hobby.push(22222);
// console.log(newobj);


// var obj  = {
//     name:"zs",
//     age:"18",
//     gender:"男",
//     hobby:["吃饭","唱歌","爬山"]
// }

// var newobj = {};
// for(var key in obj){
//     newobj[key] = obj[key];
// }
// console.log(newobj);
// newobj.hobby.push("旅游")
// console.log(obj)


// var obj  = {
//     name:"zs",
//     age:"18",
//     gender:"男",
//     hobby:["吃饭","唱歌","爬山"]
// }

// var newobj = Object.assign({},obj)
// console.log(newobj);
// newobj.hobby.push("旅游")
// console.log(obj)



// var obj  = {
//     name:"zs",
//     age:"18",
//     gender:"男",
//     hobby:["吃饭","唱歌","爬山"]
// }

// var newobj = {...obj}
// console.log(newobj);
// newobj.hobby.push("旅游")
// console.log(obj)



// var obj  = {
//     name:"zs",
//     age:"18",
//     gender:"男",
//     hobby:["吃饭","唱歌","爬山"]
// }

// var newobj = JSON.parse(JSON.stringify(obj));
// // 修改newobj中的hobby
// newobj.hobby.push("旅游")
// // 观察obj中的hobby的变化。
// console.log(obj)

var obj  = {
    name:"zs",
    age:"18",
    gender:"男",
    hobby:["吃饭","唱歌","爬山"]
}


; 


