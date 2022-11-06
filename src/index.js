import someLog from './js/some-module';
import './scss/style.scss';

function component() {

    const element = document.createElement('div');
    const btn = document.createElement('button');

    element.innerHTML = 'Hello World';

    btn.innerHTML = 'Click me and check the console!';
    btn.classList.add('red-button');
    btn.onclick = someLog;

    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());
