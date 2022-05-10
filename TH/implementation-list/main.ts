import {ArrayList} from "./ArrayList";

interface Post{
    title:string;
}

let arrayList= new ArrayList<Post>();
arrayList.add({title:"javaScript"});
arrayList.add({title:"php"});
arrayList.add({title:"c++"});
console.log(arrayList.get(2));
console.log(arrayList.size())
arrayList.remove();
console.log(arrayList.size());


