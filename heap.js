/**
* 1)Создать кучу                   -    <имя кучи> = new Heap()
* 2)Добавить элемент в кучу        -    <имя кучи>.insert(<объект, имеющий свойство "p", означающее его приоритет>)
* 3)Взять из кучи элемент 
*  с наибольшим приоритетом        -    <имя кучи>.extract()
* 4)Посмотреть элемент 
*  с наибольшим приоритетом        -    <имя кучи>.peekMin()      
* 5)Вернуть кучу в виде массива,
*  в котором все объекты
*  отсортированы по прио-
*  ритету (с высоким в 
*  начале массива)                 -    <>.getSortedArray()
*
* p - приоритет, чем меньше значение p, тем выше приоритет. Если A.p = 2, B.p = 21, то A приоритетнее B.
*/

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
Heap.prototype.siftDown = function(arr,i) {
	while (2*i < arr.length) {
		var j = i;
		if (arr[2*i].p < arr[j].p) {
			j = 2*i;
		}
		if ((2*i + 1 <= arr.length)&&(arr[2*i + 1].p < arr[j].p)) {
			j = 2*i + 1;
		}
		if (j == i) {
			break;
		}
		this.swap(arr,i,j);
		i = j;
	}
}
Heap.prototype.extract = function() {
	ext = this.arr[0];
	this.arr[0] = this.arr[this.arr.length - 1];
	this.arr.pop();
	this.siftDown(this.arr,0);
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
Heap.prototype.quicksort = function (arr) {
	var sort = function (l,r) {
		var x = this.random(l,r);
		for (var i = r; i < l; i++) {
			if (arr[i] > x) {
				for (var j = r; j >= l; j--) {
					if (arr[j] < x) break;
				}
				this.swap(arr,i,j);
			}
		}
		if (r - l > 2) {
			sort(l,r)
		}
	}
}
Heap.prototype.arr2heap = function(arr) {
	for(var i = arr.length; i >= 0; i--) {
		this.swap(arr,0,i)
		console.log(i);
		this.siftUp(arr,i);
	}
	
}
Heap.prototype.getSortedArray = function() {
	var newArray = this.arr.slice();
	return this.bubblesort(newArray);
}
