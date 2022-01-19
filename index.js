function addingEventListener() {
    const input = document.getElementById('input');

    const clicky = function clickAlert() {
        alert('I was clicked!');
    }

    input.addEventListener('click', clicky);
}
