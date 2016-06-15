## Binary heap data structure implementation in Javascript.

### Usage:
Create heap:
```javascript
var myHeap = new Heap();
```
Add element in heap:
```javascript
myHeap.insert(object);

//Where "object" is an object that has the "p" property, which means its priority, for example object.p = 10
//The smaller the "p" value, the higher the priority. If objectA.p = 2, objectB.p = 21, then objectA override objectB.
``` 
Get from the heap element with the highest priority:
```javascript
myHeap.extract()
```
Peek element with the highest priority:
```javascript
myHeap.peekMin();
```
Get heap as an array, in which objects are sorted by priority (high priority objects are in the beginning of the array):
```javascript
var arr = myHeap.getSortedArray();
```

<br>
<br>
---
<br>

### More about binary heap: 
https://en.wikipedia.org/wiki/Binary_heap <br>
https://www.cs.cmu.edu/~adamchik/15-121/lectures/Binary%20Heaps/heaps.html <br>
<img src="https://upload.wikimedia.org/wikipedia/commons/3/38/Max-Heap.svg" alt="Binary heap">

<br>
---
<br>

## Реализация структуры данных бинарная куча на Javascript.

### Использование:
Создать кучу:
```javascript
var myHeap = new Heap();
```
Добавить элемент в кучу:
```javascript
myHeap.insert(object);
//Где object - объект, имеющий свойство "p", означающее его приоритет, например object.p = 10
//Чем меньше значение p, тем выше приоритет. Если objectA.p = 2, objectB.p = 21, то objectA приоритетнее objectB.
``` 
Взять из кучи элемент с наибольшим приоритетом:
```javascript
myHeap.extract()
```
Посмотреть элемент с наибольшим приоритетом:
```javascript
myHeap.peekMin();
```
Получить кучу в виде массива, в котором все объекты отсортированы по приоритету (с высоким в начале массива):      
```javascript
var arr = myHeap.getSortedArray();
```