
const numbers: number[] = [1, 2, 3, 4]
const names:string[] = ['Snake', 'Ocelot', 'Otacon', 'Naomi']

/** Also can be written using a generic array type, Array<elemType> **/
//
// let numbers: Array<number> = [1, 2, 3, 4]
// let names: Array<string> = ['Snake', 'Ocelot', 'Otacon', 'Naomi']

// duyet mang

// for(let i=0; i<array.length; i++) {
//     console.log(array[i])
// }
//
// for(const item of array) {
//     console.log(item)
// }
//
// array.forEach(item => {
//     console.log(item)
// })


// Chèn: Thêm một chỉ mục

/** add to the end **/
// array.push(5)

// /** add to the beginning **/
// array.unshift(0)
//
// /** add in a specific index position **/
// array.splice(3, 0, 8) // add 8 in the index 3

//Xoá: Xoá một chỉ mục

/** remove from the end **/
// array.pop()

// /** remove from the beginning **/
// array.shift()
//
// /** remove from a specific index position **/
// array.splice(2, 1) // remove from index 2

//Chuỗi là mảng ký tự
let str = "aabbccdd"
let occurrences = 0

for(let i=0; i < str.length; i++) {
    if(str[i] === "c") {
        occurrences++
    }
}

console.log(occurrences) // prints 2