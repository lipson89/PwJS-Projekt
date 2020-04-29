function heckForm(){
                var git1 = true;
                var git2 = true;
                var git3 = true;
                var contactName = document.getElementById("contactName");
                var contactEmail = document.getElementById("contactEmail");
                var contactInfo = document.getElementById("contactInfo");
                if (contactName.value == ""){
                    document.getElementById("errorName").innerHTML="<i class='material-icons'>warning</i>Podanie informacji jest wymagane!";
                    document.getElementById("errorName").className="alert alert-danger";
                    git1=false;
                }
                if (contactEmail.value == ""){
                    document.getElementById("errorEmail").innerHTML="<i class='material-icons'>warning</i>Podanie informacji jest wymagane!";
                    document.getElementById("errorEmail").className="alert alert-danger"; 
                    git2=false;
                }
                else { var email = contactEmail.value; 
                    var regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/; 
                    if(regex.test(email)==false) {
                        document.getElementById("errorEmail").innerHTML="<i class='material-icons'>warning</i>Niepoprawny email";
                        document.getElementById("errorEmail").className="alert alert-danger";
                        git2=false;
                    } 
                }
                if (contactInfo.value == ""){
                    document.getElementById("errorInfo").innerHTML="<i class='material-icons'>warning</i>Podanie informacji jest wymagane!";
                    document.getElementById("errorInfo").className="alert alert-danger";
                    git3=false;
                }
                if (git1==true){
                    document.getElementById("errorName").innerHTML="<i class='material-icons'>done</i>Dane wydają się być poprawne.";
                    document.getElementById("errorName").className="alert alert-success";
                }
                if (git2==true){
                    document.getElementById("errorEmail").innerHTML="<i class='material-icons'>done</i>Dane wydają się być poprawne.";
                    document.getElementById("errorEmail").className="alert alert-success";
                }
                if (git3==true){
                    document.getElementById("errorInfo").innerHTML="<i class='material-icons'>done</i> Dane wydają się być poprawne.";
                    document.getElementById("errorInfo").className="alert alert-success";
                }
                 
            }
function checkName(){
    var contactName = document.getElementById("contactName");
    var git=true;
    if (contactName.value == ""){
                    document.getElementById("contactName").className="border rounded border-danger";
                    git=false;
                }
    if (git==true){
                    document.getElementById("contactName").className="border rounded border-success";
                    document.getElementById("errorName").className="d-none";
                }
}
function checkEmail(){
    var contactEmail = document.getElementById("contactEmail");
    var git=true;
    if (contactEmail.value == ""){
                    document.getElementById("contactEmail").className="border rounded border-danger";
                    document.getElementById("errorEmail").className="d-none";
                    git=false; 
                }
                else { var email = contactEmail.value; 
                    var regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/; 
                    if(regex.test(email)==false) {
                        document.getElementById("contactEmail").className="border rounded border-danger";
                        document.getElementById("errorEmail").className="d-none";
                        git=false;
 
                    } 
                }
                if (git==true){
                    document.getElementById("contactEmail").className="border rounded border-success";
                    document.getElementById("errorEmail").className="d-none";
                }
}
function checkInfo(){
    var git=true;
    var contactInfo = document.getElementById("contactInfo");
    if (contactInfo.value == ""){
                    document.getElementById("contactInfo").className="border rounded border-danger";
                    git=false;
                }
    if (git==true){
                    document.getElementById("contactInfo").className="border rounded border-success";
                    document.getElementById("errorInfo").className="d-none";
                }
}