const partition = (nums) => {
  let pivotran = Math.floor(Math.random() * nums.length);
  let pivot = nums[pivotran];
  
  let less = [];
  let greater = [];
  let pivotArray = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === pivot) {
      pivotArray.push(pivot);
    } 
    if (nums[i] < pivot) {
      less.push(nums[i]);
    }
    if (nums[i] > pivot) {
      greater.push(nums[i]);
    }
  }  
  
  // let finalArray = less.concat(pivot).concat(pivotArray).concat(greater);
  let finalArray = [...less,  ...pivotArray, ...greater];
  let pivotIndex = less.length;

  return {
    finalArray,
    pivotIndex,
  };
};

const returned = partition([46, 1, 23, 3, 46, 76, 100]);
console.log("returned", returned);
