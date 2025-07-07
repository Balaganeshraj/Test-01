// Example JS logic for tab switching
function showTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    document.getElementById(tabId).classList.add('active');

    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelector(`.tab[onclick="showTab('${tabId}')"]`).classList.add('active');
}

// Example for dark mode toggle
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('.theme-toggle-btn').classList.toggle('active');
}
