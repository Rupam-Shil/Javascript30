const todoBtn = document.querySelector('.addTodo');
const modal = document.querySelector('.modal');
const closebtn = document.querySelector('.closeModal');
todoBtn.addEventListener('click', () => {
	modal.classList.add('active');
});
closebtn.addEventListener('click', () => {
	modal.classList.remove('active');
});
