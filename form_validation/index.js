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

    // Clear previous errors
    Errname.innerHTML = "";
    Errnum.innerHTML = "";
    Erremail.innerHTML = "";
    Errpass.innerHTML = "";
    Errcpass.innerHTML = "";

    let valid = true;

    if (Name === "") {
        Errname.innerHTML = "Please enter Name";
        valid = false;
    }
    if (Num === "") {
        Errnum.innerHTML = "Please enter Number";
        valid = false;
    }
    if (Email === "") {
        Erremail.innerHTML = "Please enter Email";
        valid = false;
    }
    if (Pass === "") {
        Errpass.innerHTML = "Please enter Password";
        valid = false;
    }
    if (Cpass === "") {
        Errcpass.innerHTML = "Please confirm Password";
        valid = false;
    } else if (Cpass !== Pass) {
        Errcpass.innerHTML = "Passwords do not match";
        valid = false;
    }

    return valid; // prevents form submission if false
};