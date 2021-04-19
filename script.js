var toggled = false;

function toggle() {
    if (!toggled) {
        toggled = true;
        document.getElementById('test').style.display = "none";
        return;
    } else if (toggled) {
        toggled = false;
        document.getElementById('test').style.display = "block";
        return;
    }

}

function Toggle() {
    if (!toggled) {
        toggled = true;
        document.getElementById('test_1').style.display = "none";
        document.getElementById('test_2').style.display = "none";
        return;
    } else if (toggled) {
        toggled = false;
        document.getElementById('test_1').style.display = "block";
        document.getElementById('test_2').style.display = "block";
        return;
    }

}

function reply() {
    if (!toggled) {
        toggled = true;
        document.getElementById('test_3').style.display = "none";
        return;
    } else if (toggled) {
        toggled = false;
        document.getElementById('test_3').style.display = "block";
        return;
    }

}
// like btn js
const like = document.getElementById('Like_btn');

const singleClick = () => {
    like.style.fontWeight = 'bold';
    like.style.background = '#bbe1fa';
    like.style.color = '#1b262c';
    like.innerHTML = '✔️ Liked';

}
const doubleClick = () => {
    like.style.fontWeight = 'normal';
    like.style.background = '#3282b8';
    like.style.color = '#fff';
    like.innerHTML = 'Like';
}

// 2nd step to call the function

var clickCount = 0;
like.addEventListener('click', function() {
    clickCount++;
    if (clickCount === 1) {
        singleClickTimer = setTimeout(function() {
            clickCount = 0;
            singleClick();
        }, 400);

    } else if (clickCount === 2) {
        clearTimeout(singleClickTimer);
        clickCount = 0;
        doubleClick();
    }
}, false);