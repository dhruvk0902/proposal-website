document.getElementById('noButton').addEventListener('mouseover', function() {
    this.style.position = 'absolute';
    this.style.top = Math.random() * (window.innerHeight - this.offsetHeight) + 'px';
    this.style.left = Math.random() * (window.innerWidth - this.offsetWidth) + 'px';
});

document.getElementById('yesButton').addEventListener('click', function() {
    document.body.innerHTML = '<h1>Yay! Let\'s get to know each other better!</h1>';
    const container = document.createElement('div');
    container.className = 'fireworks';
    document.body.appendChild(container);
    const fireworks = new Fireworks(container, { /* options */ });
    fireworks.start();
});
