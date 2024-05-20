function nextPopup(currentId, nextId) {
    // Hide current popup
    const currentPopup = document.getElementById(currentId);
    currentPopup.classList.remove('show');
    currentPopup.classList.add('hidden');
    
    // Show next popup after a short delay
    setTimeout(() => {
        const nextPopup = document.getElementById(nextId);
        nextPopup.classList.remove('hidden');
        nextPopup.classList.add('show');
    }, 100);

    // Trigger heart animation
    triggerHeartAnimation();
}

function triggerHeartAnimation() {
    const heart = document.getElementById('heartAnimation');
    heart.style.animation = 'none';
    heart.offsetHeight; // Trigger reflow
    heart.style.animation = null;
    heart.classList.remove('hidden');
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
