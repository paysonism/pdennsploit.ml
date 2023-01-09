function getCookie(name) {
    if (localStorage.getItem(name) != null) { return localStorage.getItem(name); }
    var nameEQ = name + "="; var ca = document.cookie.split(';'); for (var i = 0; i < ca.length; i++) { var c = ca[i]; while (c.charAt(0) == ' ') c = c.substring(1, c.length); if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length); }
    return null;
}
function isLoggedIn() { return getCookie("token") != null; }
function logout() { document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"; }