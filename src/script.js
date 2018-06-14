$(document).ready(function () {

    window.onscroll = function () {
        docScroll();

    }

    let docScroll = () => {
        let windowScroll = document.body.scrollTop || document.documentElement.scrollTop,
            documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight,
            scrolled = (windowScroll / documentHeight) * 100;

        document.getElementById('myBar').style.width = scrolled + '%';
    }
});