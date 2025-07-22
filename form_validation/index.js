let formvalid = () => {
    let Name = document.querySelector("#name").value.trim();
    let Num = document.querySelector("#num").value.trim();
    let Email = document.querySelector("#email").value.trim();
    let Pass = document.querySelector("#pass").value.trim();
    let Cpass = document.querySelector("#cpass").value.trim();

    let Errname = document.querySelector("#errname");
    let Errnum = document.querySelector("#errnum");
    let Erremail = document.querySelector("#erremail");
    let Errpass = document.querySelector("#errpass");
    let Errcpass = document.querySelector("#errcpass");

    

    if (Name === "") {
        Errname.innerHTML = "Please enter Name";
        return false;
    }



    if (Num === "") {
        Errnum.innerHTML = "Please enter Number";
        return false;
    }

    if (isNaN(Num)) {
        Errnum.innerHTML = "Enter only numbers";
        return false;
    }

    if (Num.length != 10) {
        Errnum.innerHTML = "Enter valid 10-digit number";
        return false;
    }

    

    if (Email === "") {
        Erremail.innerHTML = "Please enter Email";
        return false;
    }
    if(!(Email.includes('@') && Email.includes('.com'))){
        Erremail.innerHTML = "Please enter valid Email";
        return false;
     
    }


    
        
    if (Pass === "") {
        Errpass.innerHTML = "Please enter Password";
        return false;
    }

    if (Cpass === "") {
        Errcpass.innerHTML = "Please confirm Password";
        return false;
    }

    if (Cpass !== Pass) {
        Errcpass.innerHTML = "Passwords do not match";
        return false;
    }
    if (!(Pass.match(/[@$#]/) && Pass.match(/[123456789]/) && Pass.match(/[A-Z]/)  && Pass.match(/[a-b]/)) ){
        Errpass.innerHTML = "Please enter strong Password";
        return false;
    }

    return true;
}
