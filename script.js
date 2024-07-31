var loader = document.querySelector("#loader")
// set timeout basically dalay in execution
setTimeout(function(){
    loader.style.top = "-100%";
},3500)


document.addEventListener("DOMContentLoaded", () => {
    const scrollContainer = document.getElementById('scrollContainer');


    const emptySpace = document.createElement('div');
    emptySpace.style.height = '2000px'; // Set this to the desired scrollable height
    scrollContainer.appendChild(emptySpace);


    document.body.style.overflow = 'auto';
});
window.addEventListener('load', () => {
    const gradientDiv = document.getElementById('gradientBackground');

    // Example function to change gradient dynamically
    function changeGradient(color1, color2) {
        gradientDiv.style.background = `radial-gradient(${color1}, ${color2})`;
    }

    // Change the gradient after 3 seconds for demonstration
    // setTimeout(() => {
    //     changeGradient( "#000000","#000000");
    // }, 3000);
});



// TYPING ANIMATION

const text = "Welcome to CapiFy";
let index = 0;

function typeText() {
    if (index < text.length) {
        document.getElementById('typing-text').textContent += text.charAt(index);
        index++;
        setTimeout(typeText, 120); // Adjust the speed of typing here
    } else {
        document.getElementById('typing-text').textContent = text; // Ensure the full text is shown
        setTimeout(showShadowText, 200); // Show shadow text after typing completes
    }
}

function showShadowText() {
    document.getElementById('shadow-text').style.opacity = 0.6;
}

// window.onload = function() {
//     typeText();
// };
setTimeout(()=>{
    typeText();
},3600)


// new idea for home page keep animation of typing just till its end and then
// change the colour theme and like photo taken on mobile of dribble dark gradient 6th picture 
// page containing first PALLATE on one side 1)Amplify your Financial journey with capify text pallate in which CAPIFY is written in gradient colour and other text is in white  with gradient colour effect around the template
// second pallate on other side 2) breif intro (written in whatsapp me chat)of capify in card like pallate an gradient colour effect around it
document.getElementById('hamburger-menu').addEventListener('click', function() {
    document.getElementById('mobile-menu').classList.toggle('hidden');
});
