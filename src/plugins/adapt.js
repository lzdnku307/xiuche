let docEl = document.documentElement;
let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
let recalc = () => {
        let clientWidth = docEl.clientWidth > 414 ? 414 : docEl.clientWidth;
        // if (!clientWidth) return;
        if (clientWidth) {
            docEl.style.fontSize =  (clientWidth / 10) + 'px';
            if (document.body) {
                document.body.style.fontSize = docEl.style.fontSize;
            }
        }
    };
recalc();
if (document.addEventListener) {
    window.addEventListener(resizeEvt, recalc, false);
    document.addEventListener('DOMContentLoaded', recalc, false);
}

