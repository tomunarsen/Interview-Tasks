//================= ЗНАЙТИ ДОВЖИНУ НАЙБІЛЬШ ВЛОЖЕНОГО ДЕРЕВА ==================//

const {log,table} = console;

const wrapper = document.querySelector('#wrapper'); // Дерево
var arrayRoots = Array.from(wrapper.children); // Масив 1 рівня вложеності
var array = Array(arrayRoots.length).fill(1); // 

arrayRoots.map((i,x,a)=> {
    function deepTree(tree) {
        for(let d = 0 ; d < tree.children.length ;d++) {
            deepTree(tree.children[d], array[x] +=1 );
        };
    };
    deepTree(i);
});

var maxDepth = Math.max(...array) | 0;
var out = document.querySelector('#out'); // елемент куди виводимо
out.textContent =  `Найбіль вложений кронінь ${array.indexOf(maxDepth)} з вложеність ${maxDepth} ;`;