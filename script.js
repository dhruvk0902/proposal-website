document.getElementById('noButton').addEventListener('mouseover', function() {
    this.style.position = 'absolute';
    this.style.top = Math.random() * (window.innerHeight - this.offsetHeight) + 'px';
    this.style.left = Math.random() * (window.innerWidth - this.offsetWidth) + 'px';
});

document.getElementById('yesButton').addEventListener('click', function() {
    alert('Yay! Let\'s get to know each other better!');
    // Add more amazing graphics or actions here
});
