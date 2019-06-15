function getFirstSelector(selector){
  return document.querySelector(selector)
  
}

function nestedTarget(){
  var target = document.querySelector('#nested .target');
  return target;
}

function increaseRankBy(n){
  const rankedLists = document.querySelectorAll('.ranked-list')
  
  for(let i = 0; i < rankedLists.length; i++){
    let children = rankedLists[i].children;
    
    for(let c = 0; c < children.length; c++){
      let increase = children[c].innerHTML;
      increase = increase + n
    }
  }
}
/*
function increaseRankBy(n){
  const rankedLists = document.querySelectorAll('.ranked-list')
  const firstList = rankedLists[0]
  const secondList = rankedLists[1]

  let children = firstList.children
 for (let i = 0; i < children.length; i++){
	var result =  parseInt(children[i].innerHTML) + n;
	children[i].innerHTML = result
    // console.log( result);
}
  children = secondList.children;
  for (let i = 0; i < children.length; i++){
	result =  parseInt(children[i].innerHTML) + n;
	children[i].innerHTML = result
    // console.log( result);
}
      
}
*/
// <<<<<<< HEAD
// function deepestChild(){
//   var divs = document.querySelectorAll('div');
//   var current = 
//   var next= [];
//   var index =0
//   while(current || current === 0){
//     // if(Array.isArray(current))
//     for(let i = 0; i < current.length; i++){
//       next.push(current[i])
//     }
    
    
//   }
//   console.log(next) 
// }

// function deepestChild(){
//   var grandNode = document.getElementById('grand-node').querySelectorAll('div')
//   let result=[]
//   for(let i = 0; i > grandNode.length; i++){
//     result.push(grandNode[i])
//   }
//   return grandNode;
// }
/*
function deepestChild(){
  var grandNode = document.getElementById('grand-node').querySelectorAll('div')
 var result = Object.assign({}, grandNode)
 var empObj = {}
// for(let i = 0; i > grandNode.length; i++){
//     return grandNode[i].innerHTML
// }
return document.querySelector('#grand-node div div div div')
=======
function deepestChild(){
  var current = document.querySelectorAll('div');
  var next= [];
  var index =0
  while(current || current === 0){
    // if(Array.isArray(current))
    next.push(current[index])
    index++
  }
  console.log(next) 
>>>>>>> 70d3aaee0216fc19911a7788a7fdd3924d0f277f
}*/