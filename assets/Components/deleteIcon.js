
const deleteIcon = () => {
    const i = document.createElement("i");
    i.classList.add('far', 'fa-trash-alt', 'trashIcon', 'icon');
    i.addEventListener('click', deleteTask);
    return i;
};

const deleteTask = (event) => {
    const parent = event.target.parentElement;
    parent.remove()
    console.log(parent)
};


export default deleteIcon;