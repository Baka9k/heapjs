/**
* 1)������� ����                   -    <��� ����> = new Heap()
* 2)�������� ������� � ����        -    <��� ����>.insert(<������, ������� �������� "p", ���������� ��� ���������>)
* 3)����� �� ���� ������� 
*  � ���������� �����������        -    <��� ����>.extract()
* 4)���������� ������� 
*  � ���������� �����������        -    <��� ����>.peekMin()      
* 5)������� ���� � ���� �������,
*  � ������� ��� �������
*  ������������� �� ����-
*  ������ (� ������� � 
*  ������ �������)                 -    <>.getSortedArray()
*
* p - ���������, ��� ������ �������� p, ��� ���� ���������. ���� A.p = 2, B.p = 21, �� A ������������ B.
*/

function Heap() {
	this.arr = new Array();
}

Heap.prototype.div = function(x,y) {
	return (x-x%y)/y;
}
Array.prototype.swap = function(x,y) {
	var t = this[x];
	this[x] = this[y];
	this[y] = t;
}
Heap.prototype.siftUp = function(i) {
	while ((i > 0)&&(this.arr[this.div(i,2)].p > this.arr[i].p)) {
		this.arr.swap(i,this.div(i,2));
		i = this.div(i,2);
	}
}
Heap.prototype.insert = function(i) {
	this.arr.push(i);
	this.siftUp(this.arr.length - 1);
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
		this.arr.swap(i,j);
		i = j;
	}
}
Heap.prototype.extract = function() {
	ext = this.arr[0];
	this.arr[0] = this.arr[this.arr.length - 1];
	this.arr.pop();
	this.siftDown(0);
}
Heap.prototype.bubblesort = function (arr) {
	for (var i = 0; i < arr.length - 1; i++) {
		for (var j = 0; j < arr.length - i - 1; j++) {
			if (arr[j].p < arr[j + 1].p) {
				arr.swap(j, j + 1);
			}
	    }
	}
}
Heap.prototype.getSortedArray = function() {
	var newArray = this.arr.slice();
	return this.bubblesort(newArray);
}
