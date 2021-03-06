﻿//This is a part of this repository: https://github.com/Baka9k/heapjs


function Heap() {
	this.arr = new Array();
}

Heap.prototype.div = function(x,y) {
	return (x-x%y)/y;
}
Heap.prototype.random = function (min, max) {
  return Math.random() * (max - min) + min;
}
Heap.prototype.swap = function(array,x,y) {
	var t = array[x];
	array[x] = array[y];
	array[y] = t;
}
Heap.prototype.siftUp = function(arr,i) {
	while ((i > 0)&&(arr[this.div(i,2)].p > arr[i].p)) {
		this.swap(arr,i,this.div(i,2));
		i = this.div(i,2);
	}
}
Heap.prototype.insert = function(i) {
	this.arr.push(i);
	this.siftUp(this.arr,this.arr.length - 1);
}
Heap.prototype.peekMin = function() {
	return this.arr[0];
}
Heap.prototype.siftDown = function(i) {
	while (2*i < this.arr.length) {
		var j = i;
		if (this.arr[2*i].p < this.arr[j].p) {
			j = 2*i;
		}
		if ((2*i + 1 <= this.arr.length)&&(this.arr[2*i + 1].p < this.arr[j].p)) {
			j = 2*i + 1;
		}
		if (j == i) {
			break;
		}
		this.swap(this.arr,i,j);
		i = j;
	}
}
Heap.prototype.extract = function() {
	var ext = this.arr[0];
	this.arr[0] = this.arr[this.arr.length - 1];
	this.arr.pop();
	this.siftDown(0);
	return ext;
}
Heap.prototype.bubblesort = function (arr) {
	for (var i = 0; i < arr.length - 1; i++) {
		for (var j = 0; j < arr.length - i - 1; j++) {
			if (arr[j].p < arr[j + 1].p) {
				this.swap(arr,j,j + 1);
			}
	    }
	}
}
Heap.prototype.getSortedArray = function() {
	var newArray = this.arr.slice();
	return this.bubblesort(newArray);
}
