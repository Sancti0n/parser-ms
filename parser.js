const title = document.getElementsByClassName('nom_serie');
const editor = document.getElementsByClassName('editeur');
const nbVolume = document.getElementsByClassName('volume');
let temp = {};
for (let i=0;i<title.length;i=i+2) {
    const serie = {
        id: i/2,
        title: title[i].textContent,
        editor: editor[i].textContent,
        nbVolumes: nbVolume[i].textContent,
    }
    temp[serie.id] = serie;
}
JSON.stringify(temp);
