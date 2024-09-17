function findFirstDuplicate(arr) {
  // type your code here
  let hash = []
  for(let i = 0; i<arr.length; i++){
    // console.log(arr[i])
    if(hash.includes(arr[i])){
      return arr[i]
    }
    hash.push(arr[i])
    // console.log(hash)
  }
  return -1

}
// function findFirstDuplicate(arr){
//   let duplicate = new Set()
//   for(let i = 0; i<arr.length; i++){
//     if(duplicate.has(arr[i])){
//       return arr[i]
//     } else{
//       duplicate.add(arr[i])
//     }
//   }
//   return -1
// }



if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution
