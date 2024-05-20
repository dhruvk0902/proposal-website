function nextPopup(currentId, nextId) {
    document.getElementById(currentId).classList.remove('show');
    document.getElementById(currentId).classList.add('hidden');
    setTimeout(() =>
