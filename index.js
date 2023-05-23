
let ans = "";

let eqn = document.getElementsByClassName("equation")[0];

let rslt = document.getElementsByClassName("result")[0];

let buttons = document.getElementsByTagName("button");

Array.from(buttons).forEach(btn => {
    btn.addEventListener("click", () => {
        // console.log(btn.id);
        if (btn.id != "ans" && btn.id != "del" && btn.id != "ac" && btn.id != "res") {
            eqn.innerText += btn.id;
        }
        else {
            switch (btn.id) {
                case "ans":
                    eqn.innerText += ans;
                    break;
                case "del":
                    let newTxt = eqn.innerText.substring(0, eqn.innerText.length - 1);
                    eqn.innerText = newTxt;
                    break;
                case "ac":
                    eqn.innerText = "";
                    rslt.innerText = "";
                    break;
                case "res":
                    rslt.innerText = eval(eqn.innerText);
                    ans = eval(eqn.innerText);
                    break;
                default:
                    break;
            }
        }
    });
});


