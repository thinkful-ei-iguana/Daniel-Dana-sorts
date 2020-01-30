const _Node = require('./_Node');

class LinkedList {
  constructor() {
    this.head = null;
  }

  display() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }

  size() {
    let currentNode = this.head;
    let count = 0;
    if (!currentNode) {
      return count;
    }

    while (currentNode) {
      count++;
      currentNode = currentNode.next;
    }
    return count;
  }

  isempty() {
    return !this.head;
  }

  findPrevious(item) {
    if (!this.head) {
      return null;
    }

    let currNode = this.head;
    let previousNode = this.head;

    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null; //couldn't find item
      } else {
        previousNode = currNode;
        currNode = currNode.next;
      }
    }

    return previousNode;
  }

  findLast() {
    if (this.isempty()) {
      console.log(
        'empty list: yer lookin at the last thing '
      );
      return;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  find(item) {
    if (!this.head) {
      return null;
    }
    let currNode = this.head;

    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null; //couldn't find item
      } else {
        currNode = currNode.next;
      }
    }

    return currNode;
  }

  insertFirst(value) {
    //point to the head since it is either null or the first element
    this.head = new _Node(
      value,
      this.head
    );
  }

  insertLast(value) {
    if (this.head === null) {
      this.insertFirst(value);
    } else {
      let currNode = this.head;
      while (currNode.next !== null) {
        currNode = currNode.next;
      }
      //set the last node's next

      currNode.next = new _Node(
        value,
        null
      );
      console.log(
        new _Node(value, null)
      );
    }
  }

  remove(item) {
    if (!this.head) {
      return null;
    }
    //if it is the first one
    if (this.head.value === item) {
      return this.head;
    }
    //all others
    let currNode = this.head.next;
    let previousNode = this.head;

    while (
      currNode !== null &&
      currNode.value !== item
    ) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    } else {
      previousNode.next = currNode.next;
      //how come we don't delete it from memory? will it be garbage collection
    }
  }

  insertBefore(item, insert) {
    let currItem = this.head;
    let previousItem = this.head;
    if (!currItem) {
      console.log(
        'item does not exist'
      );
      return;
    }

    while (
      currItem !== null &&
      currItem.value !== item
    ) {
      previousItem = currItem;
      currItem = currItem.next;
    }

    if (currItem === null) {
      console.log(
        'item you want to insert before doesnt exist'
      );
      return;
    }
    let newitem = new _Node(
      insert,
      currItem
    );
    previousItem.next = newitem;
    console.log(
      `item inserted before ${currItem.value} and after ${previousItem.value}`
    );
  }

  insertAfter(item, insert) {
    let currItem = this.head;
    if (!currItem) {
      console.log(
        'item does not exist'
      );
      return;
    }

    while (
      currItem !== null &&
      currItem.value !== item
    ) {
      currItem = currItem.next;
    }

    if (currItem === null) {
      console.log(
        'item you want to insert after doesnt exist'
      );
      return;
    }
    let newitem = new _Node(
      insert,
      currItem.next
    );
    currItem.next = newitem;
    console.log(
      `item inserted after ${currItem.value}`
    );
  }

  insertAt(position, insert) {
    let currItem = this.head;
    if (position === 0) {
      this.head = new _Node(
        insert,
        this.head
      );
    }
    if (!currItem) {
      console.log('Empty LinkedList');
      return;
    }
    for (
      let i = 0;
      i < position - 1;
      i++
    ) {
      currItem = currItem.next;
    }
    let newNode = new _Node(
      insert,
      currItem.next
    );
    currItem.next = newNode;
    console.log(
      `inserted ${insert} at position ${position}. Before ${newNode.next.value} and after ${currItem.value}`
    );
    return;
  }

  reverse() {
    if (this.isempty()) {
      console.log(
        'empty list: yer lookin at the last thing '
      );

      return;
    }
    let currentNode = this.head;
    let previousNode = this.head;
    let lastNode;
    let count = 0;

    do {
      while (currentNode.next) {
        previousNode = currentNode; //points to head
        currentNode = currentNode.next; //this is the first node
      }
      // let lastNode = currentNode;
      currentNode.next = previousNode;
      previousNode.next = null;
      if (count === 0) {
        lastNode = currentNode;
        count++;
      }
      currentNode = this.head;
    } while (
      previousNode !== this.head
    );
    this.head = lastNode;
    this.display();
  }

  findMiddle() {
    let middle = Math.round(
      this.size() / 2
    ); //assumes you want to get the first middle with an even number
    if (this.isempty()) {
      console.log(
        'no middle  to an empty array'
      );
      return;
    }
    let currentNode = this.head;
    for (let i = 1; i < middle; i++) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  includes(node) {
    /**
     * checks to see if a node is in the linked list
     */
    console.log('doing stuff');
    if (this.isempty()) {
      console.log(
        'empty arrays can not have anything'
      );
      return;
    }
    let currentNode = this.head;

    while (
      currentNode &&
      currentNode !== node
    ) {
      currentNode = currentNode.next;
    }
    return !!currentNode; //if it exists then true, otherwise false
  }

  hascycle() {
    if (this.isempty()) {
      console.log(
        'empty arrays can not have cycles'
      );
      return;
    }
    let copyList = new LinkedList();
    let currentNode = this.head;
    let currentSection = new LinkedList();
    currentSection.head = this.head.next;
    //should check that the reference for a node is repeated not the value
    // while (currentSection.head) {
    while (currentNode) {
      //compares the current node to all the previous

      // if (
      //   currentSection.includes(
      //     currentNode
      //   )
      // ) {
      //   return true;
      // }
      if (currentNode.visited) {
        return true;
      }
      currentNode.visited = true;
      currentNode = currentNode.next;

      // currentSection.head =
      //   currentNode.next;
    }
    return false;
  }
}
module.exports = LinkedList;
