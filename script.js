window.addEventListener('load', homeLoaded(), false); function homeLoaded() {
    var os = new UAParser(navigator.userAgent).getOS(); if (os.name == "Android" || os.name == "iOS") { document.getElementById('detected-platform').innerText = `Download for ${os.name}`; } else if (os.name == "Windows") {
        var classList = document.getElementById('download-button').childNodes[0].classList; for (let i = 0; i < classList.length; i++) { document.getElementById('download-button').childNodes[0].classList.remove(classList[i]); }
        document.getElementById('download-button').childNodes[0].classList.add("fas"); document.getElementById('download-button').childNodes[0].classList.add("fa-x"); document.getElementById('download-button').classList.add("disabled"); document.getElementById('download-button').onclick = null; document.getElementById('detected-platform').innerHTML = `You can not download for Windows at the moment, you can <a href="https://dsc.gg/PDennSploit">join our Discord</a> if you want to download!`;
    } else {
        var classList = document.getElementById('download-button').childNodes[0].classList; for (let i = 0; i < classList.length; i++) { document.getElementById('download-button').childNodes[0].classList.remove(classList[i]); }
        document.getElementById('download-button').childNodes[0].classList.add("fas"); document.getElementById('download-button').childNodes[0].classList.add("fa-x"); document.getElementById('download-button').classList.add("disabled"); document.getElementById('download-button').onclick = null; document.getElementById('detected-platform').innerText = `There is no download for ${os.name} yet`;
    }
    easy_background("#features-preview-image", { slide: ["assets/images/nft/home.png"], delay: [2000, 2000, 2000, 2000] }); document.getElementById('features-preview-image').src = 'assets/images/invisible.png';
}
function downloadButtonClicked() {
    var os = new UAParser(navigator.userAgent).getOS(); if (os.name == 'Windows') { return; } else if (os.name == 'Android') { var link = document.createElement('a'); document.body.appendChild(link); link.href = ''; link.click(); document.getElementById('tutorial-button').href = ''; } else if (os.name == 'iOS') { var link = document.createElement('a'); document.body.appendChild(link); link.href = ''; link.click(); document.getElementById('tutorial-button').href = ''; } else { return; }
    document.getElementById('download-button').classList.add('disabled'); document.getElementById('download-button').src = ''; var link = document.createElement('a'); document.body.appendChild(link); link.setAttribute('data-bs-toggle', 'modal'); link.setAttribute('data-bs-target', ''); link.click(); document.getElementById('download-button').classList.remove('disabled');
}