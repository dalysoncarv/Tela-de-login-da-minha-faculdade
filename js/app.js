document.addEventListener("DOMContentLoaded", function () {
    
    var btnSignin = document.querySelector("#signin");
    var btnSignup = document.querySelector("#signup");
    var body = document.querySelector("body");
    var form = document.querySelector(".form");
    var emailInput = document.querySelector("#email");
    var passwordInput = document.querySelector("#password");
    var toggleThemeBtn = document.querySelector("#toggle-theme");
    
    
    btnSignin.addEventListener("click", function () {
        body.className = "sign-in-js";
        localStorage.setItem("authMode", "login");
    });

    btnSignup.addEventListener("click", function () {
        body.className = "sign-up-js";
        localStorage.setItem("authMode", "signup");
    });

   
    var savedMode = localStorage.getItem("authMode");
    if (savedMode) {
        body.className = savedMode === "login" ? "sign-in-js" : "sign-up-js";
    }

    
    function validateForm(event) {
        event.preventDefault();
        var email = emailInput.value.trim();
        var password = passwordInput.value.trim();
        
        if (!email.includes("@") || email.length < 5) {
            alert("Por favor, insira um email válido.");
            return;
        }

        if (password.length < 6) {
            alert("A senha deve ter pelo menos 6 caracteres.");
            return;
        }

        alert("Login realizado com sucesso!");
    }

    form.addEventListener("submit", validateForm);

    function adjustLayout() {
        if (window.innerWidth <= 1040) {
            body.classList.add("mobile-layout");
        } else {
            body.classList.remove("mobile-layout");
        }
    }

    window.addEventListener("resize", adjustLayout);
    adjustLayout(); 

    
    function toggleTheme() {
        var currentTheme = localStorage.getItem("theme") || "light";
        var newTheme = currentTheme === "light" ? "dark" : "light";

        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    }

    toggleThemeBtn.addEventListener("click", toggleTheme);

   
    var savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        document.documentElement.setAttribute("data-theme", savedTheme);
    }
});
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.body.classList.add(currentTheme);
}


const themeToggle = document.querySelector('.theme-toggle');


themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark-mode');
    } else {
        localStorage.removeItem('theme');
    }
});
