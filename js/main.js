function setgif() {
    const gif = document.getElementById('animated-gif');
    gif.remove();
    stopConfetti();
}

const gifContainer = document.querySelector('.gif-container');
const gif = document.getElementById('animated-gif');
const text = document.getElementById('text');
const ball = document.getElementById('ball');

gifContainer.addEventListener('click', () => {
    // overlay.style.display = 'none'; // Скрываем оверлей при клике
    gif.setAttribute('src', 'image/Дизайн без названия (5).gif');
    ball.style.display = 'block';
    setTimeout(setgif, 1000);
    setTimeout("ball.style.transition = 'all 0.5'; ball.style.transform = `scale(1)`; ball.style.transform = `scale(120)`;", 100);
    setTimeout("document.body.style.background = 'black'; ball.remove();", 1000);
    // setTimeout('text.style.display = "inline-block"', 500);
    setTimeout("window.location.href = 'test.html';", 6000);
});

