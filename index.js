// Code your solution here
function findMatching(array, name){
  return array.filter(element => element.toLocaleLowerCase() === name.toLocaleLowerCase())
}

function fuzzyMatch(array, name){
  return array.filter(element => element.indexOf(name) === 0)
}

function matchName(array, name){
  return array.filter(obj => obj.name === name)

}
