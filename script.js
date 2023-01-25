function threeSum(arr, target) {
  //your code here
  
	 arr.sort((a, b) => a - b);
  let closestSum = Infinity;
  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right =arr.length - 1;
    while (left < right) {
      let sum =arr[i] +arr[left] +arr[right];
      if (sum === target) {
        return sum;
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
      closestSum = Math.abs(sum - target) < Math.abs(closestSum - target) ? sum : closestSum;
    }
  }
  return closestSum;
	
  // This function first sorts the input array and then uses a nested loop to find three integers in the array whose sum is closest to the target. The outer loop iterates through each element of the array, and the inner loop uses two pointers (left and right) to find two other integers that sum to the target. The function keeps track of the closest sum found so far and returns it at the end

//      // Sort the array
//      arr.sort((a, b) => a - b);

//      // To store the closest sum
//     // not using INT_MAX to avoid
//     // overflowing condition
//      let closestSum = 1000000000;
 
//      // Fix the smallest number among
//      // the three integers
//      for (let i = 0; i < arr.length - 2; i++)
//      {
 
//          // Two pointers initially pointing at
//          // the last and the element
//          // next to the fixed element
//          let ptr1 = i + 1, ptr2 = arr.length - 1;
 
//          // While there could be more pairs to check
//          while (ptr1 < ptr2) {
 
//              // Calculate the sum of the current triplet
//              let sum = arr[i] + arr[ptr1] + arr[ptr2];
 
//              // If the sum is more closer than
//              // the current closest sum
//              if (Math.abs(1*target - sum) < Math.abs(1*target - closestSum))
//              {
//                  closestSum = sum;
//              }
 
//              // If sum is greater than x then decrement
//              // the second pointer to get a smaller sum
//              if (sum > target) {
//                  ptr2--;
//              }
 
//              // Else increment the first pointer
//              // to get a larger sum
//              else {
//                  ptr1++;
//              }
//          }
//      }
 
//      // Return the closest sum found
//      return closestSum;
//  }
}

module.exports = threeSum;
