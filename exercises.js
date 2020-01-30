const LinkedList = require('./LinkedList');
// Q1
// * 21, 1, 26, 45
// * 9
// * [21], [1]
// * [16, 49], [27, 39]

// Q2
// The pivot could have been either 14 or 17
// 10, 3, 9, 12, 19, 14, 17, 16, 13, 15 --First Partition Last
// 3, 9, 10, 12, 19, 14, 17, 16, 13, 15 --Second Partition Last
// 15, 13, 10, 3, 9, 12, 14, 16, 19, 17 -- First Partition First
// 12, 13, 10, 3, 9, 15, 14, 16, 19, 17 -- Second Partition First

// Q3
function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function qSort(
  arr,
  start = 0,
  end = arr.length
) {
  if (start >= end) {
    return arr;
  }

  const middle = partition(
    arr,
    start,
    end
  );
  arr = qSort(arr, start, middle);
  arr = qSort(arr, middle + 1, end);
  return arr;
}

function partition(arr, start, end) {
  const pivot = arr[end - 1];
  let j = start;
  for (
    let i = start;
    i < end - 1;
    i++
  ) {
    if (arr[i] <= pivot) {
      swap(arr, i, j++);
    }
  }
  swap(arr, end - 1, j);
  return j;
}
let arr = '89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5'
  .split(' ')
  .map(n => Number(n));

console.log(qSort(arr, 0, arr.length));

// function mergeSort(arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }

//   let middle = Math.floor(
//     arr.length / 2
//   );
//   let left = arr.slice(0, middle);
//   let right = arr.slice(
//     middle,
//     arr.length
//   );

//   left = mergeSort(left);
//   right = mergeSort(right);

//   arr = merge(arr, left, right);
//   return arr;
// }

// function merge(arr, left, right) {
//   let outputIndex = 0;
//   let rightIndex = 0;
//   let leftIndex = 0;

//   while (
//     leftIndex < left.length &&
//     rightIndex < right.length
//   ) {
//     if (
//       left[leftIndex] <
//       right[rightIndex]
//     ) {
//       arr[outputIndex++] =
//         left[leftIndex++];
//     } else {
//       arr[outputIndex++] =
//         right[rightIndex++];
//     }
//   }

//   for (
//     let i = leftIndex;
//     i < left.length;
//     i++
//   ) {
//     arr[outputIndex++] = left[i];
//   }
//   for (
//     let i = rightIndex;
//     i < right.length;
//     i++
//   ) {
//     arr[outputIndex++] = right[i];
//   }
//   return arr;
// }

// console.log(mergeSort(arr));

// function mergeSortll(ll) {
//   if (
//     ll.head === null ||
//     ll.head.next === null
//   ) {
//     return ll;
//   }

//   let slow = ll.head;
//   let fast = ll.head;
//   let slowest;
//   while (fast && fast.next) {
//     slowest = slow; //one behind
//     slow = slow.next;
//     fast = fast.next.next;
//   }

//   slowest.next = null;
//   let left = new LinkedList();
//   left.head = ll.head;

//   let right = new LinkedList();
//   right.head = slow;

//   left = mergeSortll(left);
//   right = mergeSortll(right);

//   ll = mergell(left, right);
//   return ll;
// }

// function mergell(left, right) {
//   let rightNode = right.head;

//   while (rightNode) {
//     if (
//       left.head.value < rightNode.value
//     ) {
//       right.insertBefore(
//         rightNode.value,
//         left.head
//       );
//       rightNode = rightNode.next;
//       left.head = left.head.next;
//     }

//     right.findLast().next = left.head;
//   }
//   return right;
// }
// let ll = new LinkedList();
// for (let value of arr) {
//   ll.insertLast(value);
// }

// mergeSortll(ll).display();

// 1 , 4 , 3 , 8 , 6 , 2
// i
// min: 1
// arrlength = 6
// max: 8

//buckets: 1  2  3  4  5  6  7  8
//         1  1 .1  1     1     1

function bucket(arr, min, max) {
  let bucket = Array(max).map(x => 0); //make sure to add min back to each index
  console.log(bucket);
  for (let i = 0; i < arr.length; i++) {
    bucket[arr[i] - min]++;
  }
  let j = 0;
  for (let i = 0; i < bucket.length; ) {
    // if (bucket[i] > 0) {
    while (bucket[i] > 0) {
      arr[j++] = i + min;
    }
    i++;
  }
  return arr;
}

console.log(bucket(arr, 1, 98));

function shuffle(arr) {
  let temp;
  let randidx;
  for (let place of arr) {
    randidx = Math.floor(
      Math.random() * (arr.length - 1)
    );
    temp = place;
    place = arr[randidx];
    arr[randidx] = temp;
  }
  return arr;
}

console.log(
  shuffle(bucket(arr, 1, 98))
);

const books = qSort;
