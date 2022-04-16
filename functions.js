function Add() {
    let inputText = document.getElementById("input").value;

    if (inputText !== "") {
        const ul = document.getElementById("tasks");

        const li = document.createElement("li");
        li.textContent = inputText;

        const btn = document.createElement("button");
        btn.id = "delete";
        btn.innerHTML = "<img src=\"del.png\" width=\"auto\" height=\"30\" alt=\"удалить\">";

        const check = document.createElement("input");
        check.type = "checkbox";

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
            } else {
                check.checked = false;
                li.id = null;
            }
        });
        check.addEventListener('click', (e) => {
            if (!check.checked) {
                check.checked = true;
                li.id = "liChecked";
            } else {
                check.checked = false;
                li.id = null;
            }
        });
    }

    const check_notDone = document.getElementById("not-done");
    const check_done = document.getElementById("done");
    const check_all = document.getElementById("all");

    check_notDone.addEventListener("change", (e) => {
        if (check_notDone.checked) {
            check_done.checked = false;
            check_all.checked = false;
            let liList = document.getElementsByTagName('li');
            for (let i = 0; i < liList.length; i++) {
                if(liList[i].childNodes[0].nodeValue){
                    console.log(liList[i].children[0].value);
                    hide(liList[i]);
                }
            }
            //console.log(liList[0].children[0]);
            // for (let li in liList) {
            //     console.log(li.firstChild);
            //     // if(li.firstChild.checked){
            //     //     li.visible = false;
            //     // }
            // }
        }
    });
}
function hide(el) {
    if (!el.hasAttribute('displayOld')) {
        el.setAttribute("displayOld", el.style.display)
    }
    el.style.display = "none"
}

function show(el) {
    let old = el.getAttribute("displayOld");
    el.style.display = old || "";
}