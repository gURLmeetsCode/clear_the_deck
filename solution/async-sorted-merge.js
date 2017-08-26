'use strict'

// Expected Runtime for MergeSort is quasilinear O(log(n)). The runtime is the same for best, worse and average time.
// MergeSort is a stable sort that is best used on objects in the case of elements with equal value.



// Call `printer.print(logEntry)` to print each entry of the merged output as they are ready.
// * This function will ensure that what you print is in fact in chronological order.
// * Call 'printer.done()' at the end to get a few stats on your solution!

module.exports = (logSources, printer) => {
  // console.log(logSources)
  function mergesort(logSources) {
     function merge(arr1, arr2){
       const totalElements = arr1.length + arr2.length;
       let result = [];
       let i = 0;
       let j = 0;
       while (i + j < totalElements) {
         if (j >= arr2.length || (i < arr1.length && arr1[i] <= arr2[j])){
           result.push(arr1[i]);
           i++;
         } else {
           result.push(arr2[j]);
           j++;
         }
       }
       return result;
     }

     function divide(arr) {
       if (arr.length < 2) { return arr; }
       const mid = Math.floor(arr.length / 2);
       return merge(divide(arr.slice(0, mid)), divide(arr.slice(mid)));
     }

     return divide(logSources);
   }

   console.log(mergesort(logSources));

  //  need a method that will iterate the merged array to retrieve the logEntry

  // A LogEntry is simply an object of the form:
  // * {
  // * 		date: Date,
  // * 		msg: String,
  // * }
  // *
  function traverse(mergesort(logEntry)){
      for (var key in logEntry) {
        if (obj.hasOwnProperty(key)) {
          var val = obj[key];
          console.log(val);
        }
      }
    }
   printer.print(logEntry);
}
