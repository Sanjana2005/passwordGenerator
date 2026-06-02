const lengthSlider = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");

lengthSlider.addEventListener("input", () => {
lengthValue.textContent = lengthSlider.value;
});

function generatePassword(){

const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz";
const nums = "0123456789";
const sym = "!@#$%^&*()_+?><";

let chars = "";

if(document.getElementById("uppercase").checked)
chars += upper;

if(document.getElementById("lowercase").checked)
chars += lower;

if(document.getElementById("numbers").checked)
chars += nums;

if(document.getElementById("symbols").checked)
chars += sym;

let password = "";

for(let i=0;i<lengthSlider.value;i++){
password += chars.charAt(
Math.floor(Math.random()*chars.length)
);
}

document.getElementById("password").value = password;

updateStrength(password);
}

function updateStrength(password){

const bar = document.getElementById("strengthBar");
const text = document.getElementById("strengthText");

if(password.length < 8){
bar.style.width = "30%";
bar.style.background = "#ef4444";
text.innerText = "Strength: Weak";
}
else if(password.length < 14){
bar.style.width = "65%";
bar.style.background = "#f59e0b";
text.innerText = "Strength: Medium";
}
else{
bar.style.width = "100%";
bar.style.background = "#22c55e";
text.innerText = "Strength: Strong";
}
}

function copyPassword(){

const password =
document.getElementById("password");

navigator.clipboard.writeText(
password.value
);

alert("Password Copied Successfully");
}

generatePassword();