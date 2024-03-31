document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('inputBox');
    document.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            const buttonText = e.target.textContent;
            let string = input.value;
            switch (buttonText) {
                case '=':
                    input.value = eval(string);
                    break;
                case 'AC':
                    input.value = "";
                    break;
                case 'DEL':
                    input.value = string.slice(0, -1);
                    break;
                default:
                    input.value += buttonText;
            }
        }
    });
});
