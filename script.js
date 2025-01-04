// Time -> O(n) | Space -> O(1)
function longestPeak(array) {

  if (array.length < 3) {
    return 0;
  }

  let lengthOfLongestPeak = 0;
  let currentPeakLength = 0;
  
  for (let i = 1; i < array.length - 1; i++) {
    let firstElement = array[i - 1];
    let secondElement = array[i + 1];

    if (array[i] > firstElement && array[i] > secondElement) {
      peak = array[i];

      let leftIndex = i - 1;
      while (leftIndex > 0 && array[leftIndex] > array[leftIndex - 1]) {
        leftIndex--;
      }

      let rightIndex = i + 1;
      while (rightIndex < array.length - 1 && array[rightIndex] > array[rightIndex + 1]) {
        rightIndex++;
      }

      currentPeakLength = rightIndex - leftIndex + 1;
      
    }
    if (currentPeakLength > lengthOfLongestPeak) {
        lengthOfLongestPeak = currentPeakLength;
    }
  }
  return lengthOfLongestPeak;
}


