moves = {
    initial: {
        x: null, y: null
    },
    actual: {
        x: null, y: null
    }
};

window.onscroll = () => {


    let content = document.querySelector("#content");
    content.ontouchstart = function (e) {

        moves.initial = {
            x: e.changedTouches[0].clientX,
            y: e.changedTouches[0].clientY
        };

    }
    content.ontouchend = function (e) {
        console.log(moves);
    }
    content.ontouchmove = function (e) {
        moves.actual = {
            x: e.changedTouches[0].clientX,
            y: e.changedTouches[0].clientY
        };

        if (((moves.initial.y - moves.actual.y) >= 100)) {
            console.log("ENTRÓ");

            //ocultar
            let searchbar = document.querySelector("#searchbar");
            searchbar.classList.add("hide");
            let footer = document.querySelector("footer");
            footer.classList.add("hide");
        }
        if (((moves.initial.y - moves.actual.y) <= -100)) {
            console.log("SALIÓ");

            //ocultar
            let searchbar = document.querySelector("#searchbar");
            searchbar.classList.remove("hide");
            let footer = document.querySelector("footer");
            footer.classList.remove("hide");
        }
    }

}

let $photos = document.querySelectorAll('.element')

for (let i = 0; i < $photos.length; i++) {
    $photos[i].onclick = (e) => {
        console.log(e)
        let $zoomContainer = document.querySelector('.zoom-container')
        $zoomContainer.style.display = "none" ? $zoomContainer.style.display = "flex" : $zoomContainer.style.display = "none";
        $zoomContainer.classList.add('to-column')
        let $zoom = document.querySelector('.zoom')
        if ($zoom.childNodes.length > 0) {
            $zoom.removeChild($zoom.lastChild)
        }
        $zoom.appendChild($photos[i].cloneNode(true))


    }
}
