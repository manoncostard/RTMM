function checkAuth() {
    const xhr = new XMLHttpRequest();
    let jwtToken = sessionStorage.getItem('jwtToken');
    xhr.open('GET', URL_DEV + `api/v1/auth/check`, false);
    xhr.setRequestHeader("Authorization", `Bearer ${jwtToken}`);
    xhr.addEventListener('readystatechange', function() {
        if(xhr.readyState === 4) {
            if(xhr.status !== 200) {
                let pathname = location.pathname;
                if(pathname !== "/login") {
                    // window.location.href = "./login.html"
                    console.log("transfer to login.")
                }
            } else {
                return xhr.response;
            }  
        }
    });
    xhr.send();
}
checkAuth();