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
}

module.exports = threeSum;
