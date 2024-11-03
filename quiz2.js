let x = 2;
let score = 0;

let a = document.getElementById('a');
let b = document.getElementById('b');
let c = document.getElementById('c');
let d = document.getElementById('d');
let question = document.getElementById('question');
let scorearea = document.getElementById('scorearea');
let scorebox = document.getElementById('scorebox');
function next() {

    switch (x) {
        case 2:
            if (a.disabled == true || b.disabled == true || c.disabled == true || d.disabled == true) {
                question.innerText = "(2) What is the capital of japan?";
                let options = document.getElementById('options').style.display = "none";
                let options2 = document.getElementById('options2').style.display = "block";
                x = 3;
            }
            else
                alert('choose any option');
            break;
        case 3:
            if (a2.disabled == true || b2.disabled == true || c2.disabled == true || d2.disabled == true) {
                question.innerText = "(3)What is the smallest unit of life?";
                let options2 = document.getElementById('options2').style.display = "none";
                let options3 = document.getElementById('options3').style.display = "block";
                x = 4;
            }
            else
                alert('choose any option');
            break;
        case 4:
            if (a3.disabled == true || b3.disabled == true || c3.disabled == true || d3.disabled == true) {
                question.innerText = "(4)who invented the light bulb?";
                let options3 = document.getElementById('options3').style.display = "none";
                let options4 = document.getElementById('options4').style.display = "block";
                x = 5;
            }
            else
                alert('choose any option');
            break;

        case 5:
            if (a4.disabled == true || b4.disabled == true || c4.disabled == true || d4.disabled == true) {
                question.innerText = `(5)Which vitamin is known as the "sunshine vitamin"?`;
                let options4 = document.getElementById('options4').style.display = "none";
                let options5 = document.getElementById('options5').style.display = "block";
                x = 6;
            }
            else
                alert('choose any option');
            break;

        case 6:
            if (a5.disabled == true || b5.disabled == true || c5.disabled == true || d5.disabled == true) {
                question.innerText = `(6)Which is the longest river in the world ?`;
                let options5 = document.getElementById('options5').style.display = "none";
                let options6 = document.getElementById('options6').style.display = "block";
                x = 7;
            }
            else
                alert('choose any option');
            break;
        case 7:
            if (a6.disabled == true || b6.disabled == true || c6.disabled == true || d6.disabled == true) {
                question.innerText = `(7)Which element has the chemical symbol 'O'?`;
                let options6 = document.getElementById('options6').style.display = "none";
                let options7 = document.getElementById('options7').style.display = "block";
                x = 8;
            }
            else
                alert('choose any option');
            break;
        case 8:
            if (a7.disabled == true || b7.disabled == true || c7.disabled == true || d7.disabled == true) {
                question.innerText = `(8)In which yead did INDIA gain independence on earth?`;
                let options7 = document.getElementById('options7').style.display = "none";
                let options8 = document.getElementById('options8').style.display = "block";
                x = 9;
            }
            else
                alert('choose any option');
            break;
        case 9:
            if (a8.disabled == true || b8.disabled == true || c8.disabled == true || d8.disabled == true) {
                question.innerText = `(9)What is the hadest natural substance on earth ?`;
                let options8 = document.getElementById('options8').style.display = "none";
                let options9 = document.getElementById('options9').style.display = "block";
                x = 10;
            }
            else
                alert('choose any option');
            break;

        case 10:
            if (a9.disabled == true || b9.disabled == true || c9.disabled == true || d9.disabled == true) {
                question.innerText = `(10)Which country is known as the land of the "Rising sun" ?`;
                let options9 = document.getElementById('options9').style.display = "none";
                let options10 = document.getElementById('options10').style.display = "block";
                if (a10.disabled == true || b10.disabled == true || c10.disabled == true || d10.disabled == true) {
                    let next_btn = document.getElementById('next_btn').style.display = "none";
                    let see_score = document.getElementById('see_score').style.display = "block";
                }
            }
            else
                alert('choose any option');
            break;

    }
}



function correct() {
    if (a.disabled != true)
        score += 1;
    console.log(score);

    b.setAttribute("style", "color:white;  background: green;");
    function wrong() {
        a.disabled = true;
        c.disabled = true;
        d.disabled = true;
    }
    wrong();

}

function wronga() {
    a.setAttribute("style", "color:white;  background: red;");
    c.disabled = true;
    d.disabled = true;
    b.disabled = true;
}
function wrongc() {
    c.setAttribute("style", "color:white;  background: red;");
    a.disabled = true;
    b.disabled = true;
    d.disabled = true;


}
function wrongd() {
    d.setAttribute("style", "color:white;  background: red;");
    a.disabled = true;
    b.disabled = true;
    c.disabled = true;

}
// --------------------------------------------------2222-----------------------
let a2 = document.getElementById('a2');
let b2 = document.getElementById('b2');
let c2 = document.getElementById('c2');
let d2 = document.getElementById('d2');






function correct2() {
    if (a2.disabled != true)
        score += 1;
    console.log(score);

    c2.setAttribute("style", "color:white;  background: green;");
    function wrong() {
        a2.disabled = true;
        b2.disabled = true;
        d2.disabled = true;
    }
    wrong();
}

function wronga2() {
    a2.setAttribute("style", "color:white;  background: red;");
    c2.disabled = true;
    d2.disabled = true;
    b2.disabled = true;
}

function wrongb2() {
    b2.setAttribute("style", "color:white;  background: red;");
    a2.disabled = true;
    c2.disabled = true;
    d2.disabled = true;

}

function wrongd2() {
    d2.setAttribute("style", "color:white;  background: red;");
    a2.disabled = true;
    b2.disabled = true;
    c2.disabled = true;

}


// ------------------------------------------33333333333----------------------
let a3 = document.getElementById('a3');
let b3 = document.getElementById('b3');
let c3 = document.getElementById('c3');
let d3 = document.getElementById('d3');






function correct3() {
    if (a3.disabled != true)
        score += 1;
    console.log(score);

    d3.setAttribute("style", "color:white;  background: green;");
    function wrong() {
        a3.disabled = true;
        b3.disabled = true;
        c3.disabled = true;
    }
    wrong();
}

function wronga3() {
    a3.setAttribute("style", "color:white;  background: red;");
    c3.disabled = true;
    d3.disabled = true;
    b3.disabled = true;
}

function wrongb3() {
    b3.setAttribute("style", "color:white;  background: red;");
    a3.disabled = true;
    c3.disabled = true;
    d3.disabled = true;

}

function wrongc3() {
    c3.setAttribute("style", "color:white;  background: red;");
    a3.disabled = true;
    b3.disabled = true;
    d3.disabled = true;

}
// -------------------------------------------------44444444444444444-----------------------

let a4 = document.getElementById('a4');
let b4 = document.getElementById('b4');
let c4 = document.getElementById('c4');
let d4 = document.getElementById('d4');






function correct4() {
    if (b4.disabled != true)
        score += 1;
    console.log(score);

    a4.setAttribute("style", "color:white;  background: green;");
    function wrong() {
        b4.disabled = true;
        c4.disabled = true;
        d4.disabled = true;
    }
    wrong();
}

function wrongb4() {
    b4.setAttribute("style", "color:white;  background: red;");
    a4.disabled = true;
    c4.disabled = true;
    d4.disabled = true;
}

function wrongc4() {
    c4.setAttribute("style", "color:white;  background: red;");
    a4.disabled = true;
    b4.disabled = true;
    d4.disabled = true;

}

function wrongd4() {
    d4.setAttribute("style", "color:white;  background: red;");
    a4.disabled = true;
    b4.disabled = true;
    c4.disabled = true;

}
// ----------------------------------------555555555555555555555------------------------


let a5 = document.getElementById('a5');
let b5 = document.getElementById('b5');
let c5 = document.getElementById('c5');
let d5 = document.getElementById('d5');

function correct5() {
    if (b5.disabled != true)
        score += 1;
    console.log(score);

    d5.setAttribute("style", "color:white;  background: green;");
    function wrong() {
        a5.disabled = true;
        b5.disabled = true;
        c5.disabled = true;
    }
    wrong();
}

function wronga5() {
    a5.setAttribute("style", "color:white;  background: red;");
    b5.disabled = true;
    c5.disabled = true;
    d5.disabled = true;
}

function wrongb5() {
    b5.setAttribute("style", "color:white;  background: red;");
    a5.disabled = true;
    c5.disabled = true;
    d5.disabled = true;

}

function wrongc5() {
    c5.setAttribute("style", "color:white;  background: red;");
    a5.disabled = true;
    b5.disabled = true;
    d5.disabled = true;

}
// --------------------------------------666666666666666666666666666666------------------------

let a6 = document.getElementById('a6');
let b6 = document.getElementById('b6');
let c6 = document.getElementById('c6');
let d6 = document.getElementById('d6');

function correct6() {
    if (c6.disabled != true)
        score += 1;
    console.log(score);

    b6.setAttribute("style", "color:white;  background: green;");
    function wrong() {
        a6.disabled = true;
        d6.disabled = true;
        c6.disabled = true;
    }
    wrong();
}

function wronga6() {
    a6.setAttribute("style", "color:white;  background: red;");
    b6.disabled = true;
    c6.disabled = true;
    d6.disabled = true;
}

function wrongc6() {
    c6.setAttribute("style", "color:white;  background: red;");
    a6.disabled = true;
    b6.disabled = true;
    d6.disabled = true;

}

function wrongd6() {
    d6.setAttribute("style", "color:white;  background: red;");
    a6.disabled = true;
    b6.disabled = true;
    c6.disabled = true;

}
// ------------------------------------------777777777777777777777777777-------------------------------
let a7 = document.getElementById('a7');
let b7 = document.getElementById('b7');
let c7 = document.getElementById('c7');
let d7 = document.getElementById('d7');






function correct7() {
    if (b7.disabled != true)
        score += 1;
    console.log(score);

    a7.setAttribute("style", "color:white;  background: green;");
    function wrong() {
        b7.disabled = true;
        c7.disabled = true;
        d7.disabled = true;
    }
    wrong();
}

function wrongb7() {
    b7.setAttribute("style", "color:white;  background: red;");
    a7.disabled = true;
    c7.disabled = true;
    d7.disabled = true;
}

function wrongc7() {
    c7.setAttribute("style", "color:white;  background: red;");
    a7.disabled = true;
    b7.disabled = true;
    d7.disabled = true;

}

function wrongd7() {
    d7.setAttribute("style", "color:white;  background: red;");
    a7.disabled = true;
    b7.disabled = true;
    c7.disabled = true;

}
// ------------------------------88888888888888888888888-----------------------

let a8 = document.getElementById('a8');
let b8 = document.getElementById('b8');
let c8 = document.getElementById('c8');
let d8 = document.getElementById('d8');

function correct8() {
    if (a8.disabled != true)
        score += 1;
    console.log(score);

    d8.setAttribute("style", "color:white;  background: green;");
    function wrong() {
        a8.disabled = true;
        b8.disabled = true;
        c8.disabled = true;
    }
    wrong();
}

function wronga8() {
    a8.setAttribute("style", "color:white;  background: red;");
    c8.disabled = true;
    d8.disabled = true;
    b8.disabled = true;
}

function wrongb8() {
    b8.setAttribute("style", "color:white;  background: red;");
    a8.disabled = true;
    c8.disabled = true;
    d8.disabled = true;

}

function wrongc8() {
    c8.setAttribute("style", "color:white;  background: red;");
    a8.disabled = true;
    b8.disabled = true;
    d8.disabled = true;

}
// --------------------------------------------9999999999999999999999---------------------------------


let a9 = document.getElementById('a9');
let b9 = document.getElementById('b9');
let c9 = document.getElementById('c9');
let d9 = document.getElementById('d9');


function correct9() {
    if (a9.disabled != true)
        score += 1;
    console.log(score);

    b9.setAttribute("style", "color:white;  background: green;");
    function wrong() {
        a9.disabled = true;
        c9.disabled = true;
        d9.disabled = true;
    }
    wrong();

}

function wronga9() {
    a9.setAttribute("style", "color:white;  background: red;");
    c9.disabled = true;
    d9.disabled = true;
    b9.disabled = true;
}
function wrongc9() {
    c9.setAttribute("style", "color:white;  background: red;");
    a9.disabled = true;
    b9.disabled = true;
    d9.disabled = true;


}
function wrongd9() {
    d9.setAttribute("style", "color:white;  background: red;");
    a9.disabled = true;
    b9.disabled = true;
    c9.disabled = true;

}
// ----------------------------------------1000000000000000000000000000-----------------------------------------------------
let a10 = document.getElementById('a10');
let b10 = document.getElementById('b10');
let c10 = document.getElementById('c10');
let d10 = document.getElementById('d10');






function correct10() {
    if (b10.disabled != true)
        score += 1;
    console.log(score);

    a10.setAttribute("style", "color:white;  background: green;");
    function wrong() {
        b10.disabled = true;
        c10.disabled = true;
        d10.disabled = true;
    }
    wrong();
}

function wrongb10() {
    b10.setAttribute("style", "color:white;  background: red;");
    a10.disabled = true;
    c10.disabled = true;
    d10.disabled = true;
}

function wrongc10() {
    c10.setAttribute("style", "color:white;  background: red;");
    a10.disabled = true;
    b10.disabled = true;
    d10.disabled = true;

}

function wrongd10() {
    d10.setAttribute("style", "color:white;  background: red;");
    a10.disabled = true;
    b10.disabled = true;
    c10.disabled = true;

}


function see_score() {

    let question = document.getElementById('question').style.display = "none";
    let options10 = document.getElementById('options10').style.display = "none";
    let options = document.getElementById('options').style.display = "none";
    let dd = document.getElementById('dd').style.display = "none";
scorearea.style.display = "block";
scorebox.innerText = score;
scorebox.setAttribute("style","color:white;")
if(score == 10)
    alert('hellow genius');

}