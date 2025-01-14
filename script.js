/*** Задание 1
Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown",
 необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.
 ***/

 document.querySelectorAll('.dropdown-item')
 .forEach(el => el.classList.add('super-dropdown'));

/*** Задание 2
У элемента с классом btn необходимо убрать класс "btn-secondary",
 если он присутствует у этого элемента, либо добавить, если такого класса
  у элемента не было.
 ***/

document.querySelector('.btn').classList.toggle('btn-secondary');

/*** Задание 3
 Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".
 ***/

  document.querySelector('.menu').classList.remove('dropdown-menu');

/*** Задание 4
 Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
`<a href="#">link</a>
 ***/

   document.querySelector('div.dropdown').insertAdjacentHTML('afterend', '<a href="#">link</a>');

/*** Задание 5
  У элемента с id "dropdownMenuButton" замените id на "superDropdown".
 ***/

document.getElementById('dropdownMenuButton').id = 'superDropdown';


/*** Задание 6
Добавьте атрибут data-dd со значением 3 элементу у которого
 существует атрибут "aria-labelledby" равный "dropdownMenuButton"
 используя dataset.
 ***/

  document.querySelector('[aria-labelledby="dropdownMenuButton"]').dataset.dd = "3";


/*** Задание 7
 Удалите атрибут type у элемента с классом "dropdown-toggle".
 ***/

document.querySelector('.dropdown-toggle').removeAttribute('type');