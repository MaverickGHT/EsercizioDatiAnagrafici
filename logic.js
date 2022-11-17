import {User} from "./User.js";

let nameListener= document.getElementById("name");
let surnameListener= document.getElementById("surname");
let CFListener= document.getElementById("CF");
let dateOfBirthListener=document.getElementById("dateOfBirth");
let addressListener=document.getElementById("address");
let emailListener=document.getElementById("email");
let cellNumberListener= document.getElementById("cellNumber");
let jobsListener= document.getElementById("jobs");


let arrayUsers =[]; 
console.log(arrayUsers);

let submitListener= document.getElementById("Submit");
submitListener.addEventListener("click", function(){createUser()} , false);

let printListener= document.getElementById("Print");
printListener.addEventListener("click", function(){printUser()}, false);


function createUser () {
    let user= new User (nameListener.value, surnameListener.value, CFListener.value, dateOfBirthListener.value, addressListener.value, emailListener.value, cellNumberListener.value, jobsListener.value);
    arrayUsers[0]=user;
}

function printUser () {
    document.getElementById("Pname").textContent= "Nome: " + arrayUsers[0].getName();
    document.getElementById("Psurname").textContent= "Cognome: " + arrayUsers[0].getSurname();
    document.getElementById("PCF").textContent= "CF: " + arrayUsers[0].getCF();
    document.getElementById("PdateOfBirth").textContent= "Data di Nascita: " + arrayUsers[0].getDateOfBirth();
    document.getElementById("Paddress").textContent= "Indirizzo: " + arrayUsers[0].getAddress();
    document.getElementById("Pemail").textContent= "Email: " + arrayUsers[0].getEmail();
    document.getElementById("PcellNumber").textContent= "Numero di Telefono: " + arrayUsers[0].getCellNumber();
    document.getElementById("Pjobs").textContent= "Lavoro: " + arrayUsers[0].getJobs();
}
