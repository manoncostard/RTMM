
if(typeof URL_DEV === 'undefined') {
    var URL_DEV = "http://localhost:8080"
    var PROD = "https://u7afvi9x1m.execute-api.eu-north-1.amazonaws.com/prod/"
}

function login() {
    const xhr = new XMLHttpRequest();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let loginInfo = {
        email: username,
        password: password 
    };
    let requestBody = JSON.stringify(loginInfo);
    xhr.open('POST', URL_DEV + `/api/v1/auth/authenticate`);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.addEventListener('readystatechange', function() {
        if(xhr.readyState === 4) {
            if(xhr.status !== 200) {
                switch(xhr.status) {
                    case 403 :
                        alert("The authentication information you provided does not seem to match our records.");
                        break;
                    default:
                        alert(`An error occured: ${xhr.status}. Message: ${xhr.statusText}`)
                }
            } else {
                let response = xhr.response;
                if(response !== "Mot de Passe éronné.") {
                    responseParsed = JSON.parse(response)
                    sessionStorage.setItem('jwtToken', responseParsed.token);
                    // window.location.href = "../RTMM-FRONT/home.html"
                    getHome();
                }
                return xhr.response;
            }  
        }
    });
    xhr.send(requestBody);
}

function getHome() {
    const xhr = new XMLHttpRequest();
    let jwtToken = sessionStorage.getItem('jwtToken');
    xhr.open('GET', URL_DEV + `/home`);
    xhr.setRequestHeader("Authorization", `Bearer ${jwtToken}`);
    xhr.addEventListener('readystatechange', function() {
        if(xhr.readyState === 4) {
            if(xhr.status !== 200) {
                console.log("failed to access homepage")
                window.location.href = "./login.html"
            } else {
                sessionStorage.setItem('homeContent', xhr.response);
                
                // Redirect to ./index.html
                window.location.href = "./index.html";
            }  
        }
    });
    xhr.send();
}

function getTesting() {
    const xhr = new XMLHttpRequest();
    let jwtToken = sessionStorage.getItem('jwtToken');
    xhr.open('GET', URL_DEV + `/testing`);
    xhr.setRequestHeader("Authorization", `Bearer ${jwtToken}`);
    xhr.addEventListener('readystatechange', function() {
        if(xhr.readyState === 4) {
            if(xhr.status !== 200) {
                console.log("failed to access homepage")
                window.location.href = "./login.html"
            } else {
                sessionStorage.setItem('testingContent', xhr.response);
                
                // Redirect to ./index.html
                window.location.href = "./testing.html";
            }  
        }
    });
    xhr.send();
}

function goHome() {
    window.location.href = "./index.html";
}

function goTesting() {
    window.location.href = "./testing-process.html";
}