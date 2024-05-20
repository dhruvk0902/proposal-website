function nextPopup(currentId, nextId) {
    // Hide current popup
    document.getElementById(currentId).classList.remove('show');
    document.getElementById(currentId).classList.add('hidden');
    
    // Show next popup after a short delay
    setTimeout(() => {
        document.getElementById(nextId).classList.remove('hidden');
        document.getElementById(nextId).classList.add('show');
    }, 100);

    // Trigger heart animation
    triggerHeartAnimation();
}

function triggerHeartAnimation() {
    const heart = document.getElementById('heartAnimation');
    heart.classList.remove('hidden');
    heart.style.animation = 'none';
    heart.offsetHeight; // Trigger reflow
    heart.style.animation = null;
    heart.classList.add('heartPop');
}

document.getElementById('yesButton').addEventListener('click', function() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
    alert("Thank you for saying Yes! Let's plan our date.");
});

document.getElementById('noButton').addEventListener('mouseover', function() {
    var noButton = document.getElementById('noButton');
    noButton.style.position = 'absolute';
    noButton.style.top = Math.random() * (window.innerHeight - noButton.clientHeight) + 'px';
    noButton.style.left = Math.random() * (window.innerWidth - noButton.clientWidth) + 'px';
});
