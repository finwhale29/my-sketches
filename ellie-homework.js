// const min = (nums) => {
//   let minimum = nums[0];
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] < minimum) {
//       minimum = nums[i];
//     }
//   }
//   return minimum;
// };

// const average = (nums) => {
//   let sum = 0;
//   for (let i = 0; i < nums.length; i++) {
//     sum += nums[i];
//   }
//   return sum / nums.length;
// };

// const swap = (nums, a, b) => {
//   StoreNum = nums[a];
//   nums[a] = nums[b];
//   nums[b] = StoreNum;
//   return nums;
// };

// const includes = (nums, a) => {
//   let ret = false;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === a) {
//       ret = true;
//     }
//   }

//   return ret;
// };

// const count = (nums, target) => {
//   let number = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === target) {
//       number += 1;
//     }
//   }
//   return number;
// };

// const unique = (things) => {
//   let list = [];

//   for (let i = 0; i < things.length; i++) {
//     let equal = [];
//     for (let j = 0; j < things.length; j++) {
//       if (things[i] != things[j]) {
//         equal.push(false);
//       } else {
//         equal.push(true);
//       }
//       console.log(things[i], things[j], );
//     }
//     if (equal.inculdes) {
//       list.push(things[i]);
//     }
//   }
//   return list;
// };

const unique = (things) => {
  const list = [things[0]];
  for (let i = 1; i < things.length; i++) {
    let s = 0;
    for (let j = 0; j < list.length; j++) {
      if (things[i] !== list[j]) {
        s += 1;
      }

      if (s === list.length) {
        list.push(things[i]);
      }
    }
  }

  return list;
};

const unique2 = (things) => {
  const results = [];

  const isAmongResults = (aThing) => {
    // return boolean;
    for (let i = 0; i < results.length; ++i) {
      const resultItem = results[i];
      if (resultItem === aThing) {
        return true;
      }
    }
    return false;
  };

  for (let i = 0; i < things.length; i++) {
    const current = things[i];
    if (!isAmongResults(current)) {
      results.push(current);
    }
  }

  return results;
};

const unique3 = (things) => {
  const results = {};

  for (let i = 0; i < things.length; i++) {
    const current = things[i];
    results[current] = "aaaa";
  }

  return Object.keys(results);
};

//--------------------------------------------------------------
//ANSWERS:

// PART 1 : MIN😸
// const min = (nums) => {
//   let minimum = nums[0];
//   for (let i = 1; i < nums.length; i++) {;
//     if (nums[i] < minimum) {
//       minimum = nums[i];
//     }
//   }
//   return minimum;
// };

// // PART 2 : AVERAGE👻
// const average = (nums) => {
//   let sum = 0;
//   for (let i = 0; i < nums.length; i++) {
//     sum += nums[i];
//   }
//   let ret = sum / nums.length;
//   return ret;
// };

// // PART 3: SWAP🎃
// const swap = (nums, i, j) => {
//   const storeNumber = nums[i];
//   nums[i] = nums[j];
//   nums[j] = storeNumber;

//   return nums;
// };

// console.log(min([1, 2, -3, 4, 5]));
// console.log(average([1, 2, 3, 4, 5]));
// console.log(swap([1, 2, 3, 4, 5], 3, 4));
// console.log(includes([1, 2, 30], 40));
// console.log(count([1, 2, 3, 3, 4, 4, 5, 5, 5], 3));
// console.log(
//   "unique",
//   unique(["apple", "bee", "apple", "banana", "bee", "truck"])
// );
// console.log(
//   "unique2",
//   unique2(["apple", "bee", "apple", "banana", "bee", "truck"])
// );
console.log(
  "unique3",
  unique3(["apple", "bee", "apple", "banana", "bee", "truck"])
);
