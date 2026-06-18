 const form = document.getElementById("loginForm");
        const username = document.getElementById("username");
        const password = document.getElementById("password");
        const checkbox = document.getElementById("checkbox");
        const existingBtn = document.getElementById("existing");

        // Show existing user button if credentials are saved
        function checkSavedUser() {
            const savedUsername = localStorage.getItem("username");
            const savedPassword = localStorage.getItem("password");

            if (savedUsername && savedPassword) {
                existingBtn.style.display = "inline-block";
            } else {
                existingBtn.style.display = "none";
            }
        }

        checkSavedUser();

        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const user = username.value;
            const pass = password.value;

            alert(`Logged in as ${user}`);

            if (checkbox.checked) {
                localStorage.setItem("username", user);
                localStorage.setItem("password", pass);
            } else {
                localStorage.removeItem("username");
                localStorage.removeItem("password");
            }

            checkSavedUser();
        });

        existingBtn.addEventListener("click", function () {
            const savedUsername = localStorage.getItem("username");

            if (savedUsername) {
                alert(`Logged in as ${savedUsername}`);
            }
        });
