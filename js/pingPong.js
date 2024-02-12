// Store paragraph selector
const p = document.querySelector('p');

// Create ping function to modify paragraph text
const ping = () => {
    p.textContent = "(。・∀・)-🏓";
}

// Create pong function to modify paragraph text
const pong = () => {
    p.textContent = "🏓-(・∀・ 。)";
}

// Add button 1 event listener with ping callback functino
const button1= document.querySelector('button.btn1');
button1.addEventListener('click', ping);

// Add button 2 event listener with pong callback functino
const button2 = document.querySelector('button.btn2');
button2.addEventListener('click', pong);

// Store section selector
const section = document.querySelector('section');

// Print the selected target in section to console
section.addEventListener('click', event => {
	console.log(event.target);
});

/*
// Some additional code to add for later...

// Change the text between the quotation marks and run your code to see the name of your favorite language animated!
drawText('hello world');

// The code below will allow you to interact with the letters
bounceBubbles();
*/