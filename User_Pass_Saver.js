//Buttons
const SaveInfoBtn = document.getElementById("InfoSaver")
//list of Info 
var Websites = []
var Usernames = []
var Passwords = []
var Emails = []

//Input Functions
// For website info 
function ImportWeb(websiteInfo) {
    var websiteInfo = document.getElementById("Website_js").value
    Websites.push(websiteInfo);
    //Scroll Loop
    for(var a = 0; a < Websites.length; a++) {
        Website.textContent = Websites + "\n";
        
    } 
    
}
// Username info 
function ImportUser(userInfo) {
    var userInfo = document.getElementById("Username_js").value
    Usernames.push(userInfo);
    //Scroll Loop
    for(var b = 0; b < Usernames.length; b++) {
        Username.textContent = Usernames + "\n";
         
        
    } 
}
// For Password info 
function ImportPass(passInfo) {
    var passInfo = document.getElementById("Password_js").value
    Passwords.push(passInfo);
    //Scroll Loop
    for(var b = 0; b < Passwords.length; b++) {
        Password.textContent =  Passwords + "\n";
         
        
    } 
}
// For Email info 
function ImportMail(MailInfo) {
    var MailInfo = document.getElementById("Email_js").value
    Emails.push(MailInfo);
    //Scroll Loop
    for(var d = 0; d < Emails.length; d++) {
        Email.textContent =  Emails + "\n";
         
        
    } 
}

// On click Events for submission, etc. 
SaveInfoBtn.addEventListener("click",function() {
    ImportWeb()
    ImportUser()
    ImportMail()
    ImportPass()
})                           
