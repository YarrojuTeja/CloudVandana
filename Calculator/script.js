document.addEventListener('DOMContentLoaded', function() {
    let screen = document.getElementById('screen');
    let buttons = document.querySelectorAll('button');

    let screenValue = '';
    for (let item of buttons) {
        item.addEventListener('click', function(e) {
            let buttonText = e.target.getAttribute('data-num');
            if (buttonText == '=') {
                screen.value = eval(screenValue);
                screenValue = screen.value;
            } else if (buttonText == 'AC') {
                screenValue = '';
                screen.value = '';
            } else {
                screenValue += buttonText;
                screen.value = screenValue;
            }
        });
    }
});
