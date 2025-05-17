
let clickCount = 0;


document.addEventListener('DOMContentLoaded', function() {
    console.log("Page has finished loading!");
    
    const button = document.getElementById('myButton');
    const clickCountDisplay = document.getElementById('clickCount');
    
    button.addEventListener('click', function() {
        clickCount++;
        clickCountDisplay.textContent = `Button clicks: ${clickCount}`;
        
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 100);
    });
});