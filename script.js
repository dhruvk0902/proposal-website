function nextPopup(currentId, nextId) {
    document.getElementById(currentId).classList.add('hidden');
    document.getElementById(nextId).classList.remove('hidden');
}

document.getElementById('yesButton').addEventListener('click', function() {
    alert("Thank you for saying Yes! Let's plan our date.");
    // Add any additional effects or animations here
});

document.getElementById('noButton').addEventListener('mouseover', function() {
    var noButton = document.getElementById('noButton');
    noButton.style.position = 'absolute';
    noButton.style.top = Math.random() * (window.innerHeight - noButton.clientHeight) + 'px';
    noButton.style.left = Math.random() * (window.innerWidth - noButton.clientWidth) + 'px';
});
