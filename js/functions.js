function Add() {
    let inputText = document.getElementById("input").value;
    const check_notDone = document.getElementById("not-done");
    check_notDone.checked = false;
    const check_done = document.getElementById("done");
    check_done.checked = false;
    const check_all = document.getElementById("all");
    check_all.checked = true;
    //const lis = document.querySelectorAll('li');
    const doneTasks = document.getElementsByClassName('_done');
    const notDoneTasks = document.getElementsByClassName('_notDone');
    const allTasks = document.getElementsByTagName('li');
    const filter = document.querySelector('.sorting')
    let item = allTasks;

    if (inputText !== "") {
        const ul = document.getElementById("tasks");

        const li = document.createElement("li");
        li.textContent = inputText;

        const btn = document.createElement("button");
        btn.id = "delete";
        btn.innerHTML = "<img src=\"del.png\" width=\"auto\" height=\"30\" alt=\"удалить\">";

        const check = document.createElement("input");
        check.type = "checkbox";
        check.id = "liCheck";
        check.className = "_notDone";

        li.appendChild(check);
        li.appendChild(btn);
        ul.appendChild(li);
        document.getElementById("input").value = '';
        display(doneTasks, notDoneTasks, true);

        btn.addEventListener('click', () => {
            ul.removeChild(li);
        });

        li.addEventListener('click', makeChecked);
        check.addEventListener('click', makeChecked);

        filter.addEventListener('click', event => {
            event.preventDefault();

            let currentFilter = event.target.closest('a');

            if (currentFilter) {
                if (currentFilter.getAttribute('id') === 'done')
                    display(doneTasks, notDoneTasks);

                if (currentFilter.getAttribute('id') === 'not-done')
                    display(notDoneTasks, doneTasks);

                if (currentFilter.getAttribute('id') === 'all') {
                    display(doneTasks, notDoneTasks, true);
                }
            }
        });

        function makeChecked() {
            if (!check.checked) {
                check.checked = true;
                li.id = "liChecked";
                check.className = "_done"
            } else {
                check.checked = false;
                li.id = null;
                check.className = "_notDone"
            }
        }

        function display(show, hide, isDisplayAll = false) {
            if (!isDisplayAll) {
                for (item of show) {
                    let tt = item.closest('li');
                    tt.style.visibility = 'visible';
                    tt.style.position = 'relative';
                }
                for (item of hide) {
                    let tt = item.closest('li');
                    tt.style.visibility = 'hidden';
                    tt.style.position = 'absolute';
                }
            } else {
                for (item of show) {
                    let tt = item.closest('li');
                    tt.style.visibility = 'visible';
                    tt.style.position = 'relative';
                }
                for (item of hide) {
                    let tt = item.closest('li');
                    tt.style.visibility = 'visible';
                    tt.style.position = 'relative';
                }
            }
        }
    }
}

function Clear(){
    const ul = document.getElementById("tasks");
    if (confirm("Вы уверены что хотите очистить список???")) {
        if (confirm("Даю последний шанс одуматься! Вы уверены??")) {
            ul.innerHTML="";
        } else {
            return;
        }
    } else {
        return;
    }
}

function Info(){
    alert("Добро пожаловать в мой ToDo-лист!\nВы можете ввести текст в " +
        "специальное окно и нажать на копку,\nчтобы добавить новый элемент! :D \nТакже информация фильтруется по завершенности! " +
        "\nПриятного время провождения!");
}
