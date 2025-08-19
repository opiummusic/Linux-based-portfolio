let command = '';
const outputArea = document.getElementById('Command_Line');

document.addEventListener('keydown', function (event) {
  if (event.keyCode === 13) {
    
    command = document.getElementById('userInput').value;

    const commonOutput = `<p> guest@terminal.maxwell.com$~ ${command}</p>`;
    
    if (command.startsWith('echo ')) {
      const echoedText = command.substring(5); // Extract text after 'echo '
      outputArea.innerHTML += `<p> guest@terminal.maxwell.com$~ ${command}</p> ` + `<p>${echoedText}</p>`;
    } else if (command === 'date') {
      const d = new Date();
      outputArea.innerHTML += `${commonOutput} 
        <p>${d}</p>`;
    } else if (command === 'help') {
      outputArea.innerHTML += `<p> guest@terminal.maxwell.com$~ ${command}</p>` + help;
    } else if (command === 'clear') {
      outputArea.innerHTML = ''; 
      var commandLine = document.getElementById("Command_Line");
      commandLine.insertAdjacentElement('beforebegin', userInputContainer);
    } else if (command === 'echo') {
      outputArea.innerHTML += `<p> guest@terminal.maxwell.com$~ ${command}</p>` + echo;
    } else if (command === 'whoami') {
      outputArea.innerHTML += `<p> guest@terminal.maxwell.com$~ ${command}</p> <br>` + whoami1;
    } else {
      outputArea.innerHTML += `<p> guest@terminal.maxwell.com$~ ${command}</p> ` + `<p>Command ${command} is not recognized... for now.</p>`;
    }    
    
    outputArea.innerHTML += '<hr class="invisible-hr">';
    document.getElementById('userInput').value = '';
    
   
  }
});


function moveDivUnderCommand() {
  var commandLine = document.getElementById("Command_Line");
  var userInputContainer = document.getElementById("userInputContainer");

  commandLine.insertAdjacentElement('afterend', userInputContainer);
}

moveDivUnderCommand();
userInput.focus();


document.getElementById('userInput').focus();

userInput.addEventListener('blur', function () {
  userInput.focus();
});


let whoami1 = "<p>My name is Maxwell Stevenson, I am a high school junior at Alta Highschool. I'm thinking of becoming a pentester, but anything hacking related would be fine. My best acheivment is probably my website <a>(https://maxwellstevenson.com)</a> or my snowboarding skills. My spare time is spend coding, reading, hacking or snowboarding.</p>"

let help = "<p>Commands:</p><span class='line-break'></span><p>echo- repeats phrases</p><span class='line-break'></span><p>whoami- Who am I? (Pronounced woah-mi)</p><span class='line-break'></span><p>clear- clears all previous commands</p><span class='line-break'></span><p>date- displays the time and date</p>"

let echo ="<p>Make sure to have a phrase after this command!</p>"

