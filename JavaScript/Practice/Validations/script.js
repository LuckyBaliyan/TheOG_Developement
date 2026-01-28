document.addEventListener("DOMContentLoaded",()=>{
    const form = document.querySelector('form');

    const errorDiv = document.querySelector('.error');

    
    const nameInput = document.querySelector(".name");
    const emailInput = document.querySelector(".email");
    const passInput = document.querySelector(".pass");
    const repassInput = document.querySelector(".repass");

    function setError(message){
         errorDiv.innerHTML = message ? `<p>${message}</p>` : "";
    }

    // Remove error message on continue from where we mistaken 
    [nameInput, emailInput, passInput, repassInput].forEach(input => {
    input.addEventListener("input", () => {
      setError("");
    });
    });
  

    form.addEventListener('submit',(e)=>{
        e.preventDefault();
        setError('');

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const pass = passInput.value.trim();
        const repass = repassInput.value.trim();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        if(name === ""){
            setError("Name Shoul't be empty!!");
            return;
        }

        if(!emailRegex.test(email)){
            setError("Invalid Email !");
            return;
        }

        if(pass === null || pass.length < 8){
            setError("Invalid Password !");
            return;
        }

        if(pass !== repass){
            setError("Enter Correct Pass!");
            return;
        }

        alert("Form Submitted Sucessfully!");
    })
})