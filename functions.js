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

        btn.addEventListener('click', (e) => {
            ul.removeChild(li);
        });

        li.addEventListener('click', (e) => {
            if (!check.checked) {
                check.checked = true;
                li.id = "liChecked";
                check.className="_done"
            } else {
                check.checked = false;
                li.id = null;
                check.className="_notDone"
            }
        });
        check.addEventListener('click', (e) => {
            if (!check.checked) {
                check.checked = true;
                li.id = "liChecked";
                check.className="_done"
            } else {
                check.checked = false;
                li.id = null;
                check.className="_notDone"
            }
        });

        // check_notDone.addEventListener("change", (e) => {
        //     if (check_notDone.checked) {
        //         check_done.checked = false;
        //         check_all.checked = false;
        //
        //         // for(let i=0; ll=lis[i]; i++) {
        //         //     if (ll[0].checked){
        //         //         ll.style.visibility = 'hidden';
        //         //         ll.style.position = 'absolute';
        //         //     }
        //         //     else {
        //         //         ll.style.visibility = 'visible';
        //         //         ll.style.position = 'relative';
        //         //     }
        //         // }
        //     }
        // });
        // check_done.addEventListener("change", (e) => {
        //     if (check_done.checked) {
        //         check_notDone.checked = false;
        //         check_all.checked = false;
        //         // for(let i=0; ll=lis[i]; i++) {
        //         //     if (ll[0].checked){
        //         //         ll.style.visibility = 'visible';
        //         //         ll.style.position = 'relative';
        //         //     }
        //         //     else{
        //         //         ll.style.visibility = 'hidden';
        //         //         ll.style.position = 'absolute';
        //         //     }
        //         // }
        //     }
        // });
        // check_all.addEventListener("change", (e) => {
        //     if (check_all.checked) {
        //         check_done.checked = false;
        //         check_notDone.checked = false;
        //         // for(let i=0; ll=lis[i]; i++) {
        //         //     if (ll[0].checked){
        //         //         ll.style.visibility = 'visible';
        //         //         ll.style.position = 'relative';
        //         //     }
        //         //     else{
        //         //         ll.style.visibility = 'visible';
        //         //         ll.style.position = 'relative';
        //         //     }
        //         // }
        //     }
        // });
        filter.addEventListener('click', event => {
            event.preventDefault();

            let currentFilter = event.target.closest('a');

            if (currentFilter){
                if (currentFilter.getAttribute('id') === 'done')
                    display(doneTasks, notDoneTasks);

                if (currentFilter.getAttribute('id') === 'not-done')
                    display(notDoneTasks, doneTasks);

                if (currentFilter.getAttribute('id') === 'all'){
                    display(doneTasks, notDoneTasks, true);
                }
            }
        });

        function display(show, hide, isDisplayAll = false){
            if (!isDisplayAll){
                for(item of show){
                    let tt = item.closest('li');
                    tt.style.visibility = 'visible';
                    tt.style.position = 'relative';
                }
                for(item of hide){
                    let tt = item.closest('li');
                    tt.style.visibility = 'hidden';
                    tt.style.position = 'absolute';
                }
            }
            else{
                for(item of show){
                    let tt = item.closest('li');
                    tt.style.visibility = 'visible';
                    tt.style.position = 'relative';
                }
                for(item of hide){
                    let tt = item.closest('li');
                    tt.style.visibility = 'visible';
                    tt.style.position = 'relative';
                }
            }
        }
    }


}

// function hide(el) {
//     if (!el.hasAttribute('displayOld')) {
//         el.setAttribute("displayOld", el.style.display)
//     }
//     el.style.display = "none"
// }
//
// function show(el) {
//     let old = el.getAttribute("displayOld");
//     el.style.display = old || "";
// }