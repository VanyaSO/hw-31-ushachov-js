let bodyChilds = document.body.childNodes;

const arr = [];

for(let li of bodyChilds){
    arr.push(document.querySelector('ul > li').innerHTML);
}

console.log(arr);