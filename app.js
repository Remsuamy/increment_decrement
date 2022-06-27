let numberbox = document.querySelector("#numberbox")
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const reset = document.querySelector("#reset")


let my_number = numberbox.value;

plus.addEventListener('click', function() {
    let existing_number = numberbox.value;
    my_number = existing_number;
    my_number++;
    numberbox.value = my_number;
})


minus.addEventListener('click', () => {
    let existing_number = numberbox.value;
    my_number = existing_number;
    my_number--;
    numberbox.value = my_number;
})

reset.addEventListener('click', function () {
    my_number = 0;
    numberbox.value = my_number;
})
