document.addEventListener("DOMContentLoaded", function () {
	// Клики по checkbox'у
	var checkboxesList = document.querySelectorAll('.checkbox');
	for (var i = 0; i < checkboxesList.length; i++) {
		checkboxesList[i].addEventListener('click', function (event) {
			var checkboxIsChecked = event.target.checked,
				parentElement = event.target.parentElement,
				doneClass = 'item-is-done';

			if (checkboxIsChecked) {
				if (!parentElement.classList.contains(doneClass)) {
					parentElement.classList.add(doneClass);
				}
			} else {
				if (parentElement.classList.contains(doneClass)) {
					parentElement.classList.remove(doneClass);
				}
			}
		});
	}

	// Клики по тексту
	var textsList = document.querySelectorAll('.todo-list-item-text');
	for (var i = 0; i < textsList.length; i++) {
		textsList[i].addEventListener('click', function (event) {
			event.target.parentElement.querySelector('.checkbox').click();
		});
	}

	// Клики по кнопке удалить
	var removeBottonsList = document.querySelectorAll('.remove-button');
	for (var i = 0; i < removeBottonsList.length; i++) {
		removeBottonsList[i].addEventListener('click', function (event) {
			var todoListItemClass = 'todo-list-item',
				parent = event.target.parentElement;

			// Условие, если браузер вернут не внопку, а дочерний элемент иконку
			if (!parent.classList.contains(todoListItemClass)) {
				parent = parent.parentElement;
			}

			parent.remove()
		});
	}
});
