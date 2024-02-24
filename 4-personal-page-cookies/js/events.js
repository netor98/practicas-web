const d = document;
const $color_border = d.getElementById('color-border');

const propertiesCookies = {};

const $background = d.getElementById('background');
const $background_enlaces = d.getElementById('background-enlaces');
const $color_enlaces = d.getElementById('color-enlaces');
const $color_text = d.getElementById('color-text');
const $background_text = d.getElementById('background-text');
const $btnRedondear = d.getElementById('btn-redondeo');
const $btnNoRedondear = d.getElementById('btn-noRed');
const $btnShadow = d.getElementById('btn-shadow');
const $btnNoShadow = d.getElementById('btn-no-shadow');

export const backgrounds = () => {
    $background.addEventListener('input', (e) => {
        d.body.style.background = e.target.value;
        propertiesCookies['background'] = e.target.value;
    });

    $background_enlaces.addEventListener('input', (e) => {
        d.querySelectorAll('a').forEach((ele) => {
            ele.style.background = e.target.value;
        });
        propertiesCookies['backgroundEnlaces'] = e.target.value;
    });

    $color_enlaces.addEventListener('input', (e) => {
        d.querySelectorAll('a').forEach((ele) => {
            ele.style.color = e.target.value;
        });
        propertiesCookies['colorEnlaces'] = e.target.value;
    });

    $color_text.addEventListener('input', (e) => {
        d.querySelectorAll('h3').forEach((ele) => {
            ele.style.color = e.target.value;
        });
        propertiesCookies['colorText'] = e.target.value;

        d.querySelectorAll('h2').forEach((ele) => {
            ele.style.color = e.target.value;
        });
    });

    $background_text.addEventListener('input', (e) => {
        d.querySelectorAll('h3').forEach((ele) => {
            ele.style.backgroundColor = e.target.value;
        });
        propertiesCookies['backgroundText'] = e.target.value;
    });

    $color_border.addEventListener('input', (e) => {
        d.querySelectorAll('img').forEach((ele) => {
            ele.style.borderColor = e.target.value;
        });
        propertiesCookies['colorBorderImg'] = e.target.value;
    });
};

export const optionsYesOrNo = () => {
    $btnRedondear.addEventListener('click', (e) => {
        d.querySelectorAll('a').forEach((ele) => {
            ele.style.borderRadius = '15px';
        });
        propertiesCookies['borderRadiusEnlace'] = '15px';
    });

    $btnNoRedondear.addEventListener('click', (e) => {
        d.querySelectorAll('a').forEach((ele) => {
            ele.style.borderRadius = '0px';
        });
        delete propertiesCookies.borderRadius;
    });

    $btnShadow.addEventListener('click', (e) => {
        d.querySelectorAll('img').forEach((ele) => {
            ele.style.boxShadow = '1px 12px 15px rgba(0,0,0,0.5)';
        });
        propertiesCookies['boxShadow'] = '1px 12px 15px rgba(0,0,0,0.5)';
    });

    $btnNoShadow.addEventListener('click', (e) => {
        d.querySelectorAll('img').forEach((ele) => {
            ele.style.boxShadow = 'none';
        });
        delete propertiesCookies.boxShadow;
    });
};

export const optionsRadious = () => {
    const $smallRadious = d.getElementById('btn-rad-small');
    const $medRadious = d.getElementById('btn-rad-med');
    const $highRadious = d.getElementById('btn-rad-high');

    $smallRadious.addEventListener('click', (e) => {
        d.querySelectorAll('img').forEach((ele) => {
            ele.style.borderRadius = '5px';
        });
        propertiesCookies['borderRadius'] = '5px';
    });

    $medRadious.addEventListener('click', (e) => {
        d.querySelectorAll('img').forEach((ele) => {
            ele.style.borderRadius = '15px';
        });
        propertiesCookies['borderRadius'] = '15px';
    });

    $highRadious.addEventListener('click', (e) => {
        d.querySelectorAll('img').forEach((ele) => {
            ele.style.borderRadius = '25px';
        });
        propertiesCookies['borderRadius'] = '25px';
    });
};

export const optionsBorder = () => {
    const $smallBtn = d.getElementById('btn-small-bord');
    const $medBtn = d.getElementById('btn-med-bord');
    const $highBtn = d.getElementById('btn-high-bord');

    $smallBtn.addEventListener('click', (e) => {
        d.querySelectorAll('img').forEach((ele) => {
            ele.style.border = '5px';
            ele.style.borderStyle = 'solid';
            ele.style.borderColor = $color_border.value;
        });
        propertiesCookies['border'] = `5px`;
        propertiesCookies['borderStyle'] = `solid`;
        propertiesCookies['borderColor'] = $color_border.value;
    });

    $medBtn.addEventListener('click', (e) => {
        d.querySelectorAll('img').forEach((ele) => {
            ele.style.border = '10px';
            ele.style.borderStyle = 'solid';
            ele.style.borderColor = $color_border.value;
        });

        propertiesCookies['border'] = `10px`;
        propertiesCookies['borderStyle'] = `solid`;
        propertiesCookies['borderColor'] = $color_border.value;
    });

    $highBtn.addEventListener('click', (e) => {
        d.querySelectorAll('img').forEach((ele) => {
            ele.style.border = '15px';
            ele.style.borderStyle = 'solid';
            ele.style.borderColor = $color_border.value;
        });
        propertiesCookies['border'] = `15px`;
        propertiesCookies['borderStyle'] = `solid`;
        propertiesCookies['borderColor'] = $color_border.value;
    });
};

export const sizeImg = () => {
    const $btnSmall = d.getElementById('btn-small-size');
    const $btnMed = d.getElementById('btn-med-size');
    const $btnHigh = d.getElementById('btn-high-size');
    console.log($btnHigh);

    $btnSmall.addEventListener('click', (e) => {
        d.querySelectorAll('img').forEach((ele) => {
            ele.style.minHeight = '50px';
            ele.style.maxHeight = '50px';
            ele.style.minWidth = '50px';
            ele.style.maxWidth = '50px';
        });
        propertiesCookies['minHeight'] = `50px`;
        propertiesCookies['maxHeight'] = `50px`;
        propertiesCookies['minWidth'] = `50px`;
        propertiesCookies['maxWidth'] = `50px`;
    });

    $btnMed.addEventListener('click', (e) => {
        d.querySelectorAll('img').forEach((ele) => {
            ele.style.minHeight = '200px';
            ele.style.maxHeight = '200px';
            ele.style.minWidth = '200px';
            ele.style.maxWidth = '200px';
        });

        propertiesCookies['minHeight'] = `200px`;
        propertiesCookies['maxHeight'] = `200px`;
        propertiesCookies['minWidth'] = `200px`;
        propertiesCookies['maxWidth'] = `200px`;
    });

    $btnHigh.addEventListener('click', (e) => {
        d.querySelectorAll('img').forEach((ele) => {
            ele.style.minHeight = '350px';
            ele.style.maxHeight = '350px';
            ele.style.minWidth = '350px';
            ele.style.maxWidth = '350px';
        });

        propertiesCookies['minHeight'] = `350px`;
        propertiesCookies['maxHeight'] = `350px`;
        propertiesCookies['minWidth'] = `350px`;
        propertiesCookies['maxWidth'] = `350px`;
    });
};

export const optionsFontSize = () => {
    const $smallBtn = d.getElementById('btn-small-font');
    const $medBtn = d.getElementById('btn-med-font');
    const $highBtn = d.getElementById('btn-high-font');

    $smallBtn.addEventListener('click', (e) => {
        d.querySelectorAll('h3').forEach((ele) => {
            ele.style.fontSize = '10px';
        });

        d.querySelectorAll('h2').forEach((ele) => {
            ele.style.fontSize = '10px';
        });
        propertiesCookies['fontSize'] = `10px`;
    });

    $medBtn.addEventListener('click', (e) => {
        d.querySelectorAll('h3').forEach((ele) => {
            ele.style.fontSize = '18px';
        });

        d.querySelectorAll('h2').forEach((ele) => {
            ele.style.fontSize = '18px';
        });
        propertiesCookies['fontSize'] = `18px`;
    });

    $highBtn.addEventListener('click', (e) => {
        d.querySelectorAll('h3').forEach((ele) => {
            ele.style.fontSize = '24px';
        });

        d.querySelectorAll('h2').forEach((ele) => {
            ele.style.fontSize = '24px';
        });
        propertiesCookies['fontSize'] = `24px`;
    });
};

export const restablecerStyles = () => {
    const $btn = d.getElementById('btn-res');
    $btn.addEventListener('click', (e) => {
        let cookies = document.cookie.split(';');
        console.log(cookies);

        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i];
            let eqPos = cookie.indexOf('=');
            let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
        }

        let allElements = d.querySelectorAll('*');
        allElements.forEach((ele) => {
            ele.removeAttribute('style');
        });
        alert('Configuración reestablecida');
        location.reload();
    });
};

export const saveStyles = () => {
    const $btn = d.getElementById('btn-save');
    $btn.addEventListener('click', (e) => {
        storeObjectInCookies(propertiesCookies, 365);
        alert('Configuración guardada');
    });
};

function storeObjectInCookies(obj, daysToExpire) {
    for (const [key, value] of Object.entries(obj)) {
        setCookie(key, value, daysToExpire);
    }
}

function setCookie(name, value, days) {
    let expires = '';
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = '; expires=' + date.toUTCString();
    }
    document.cookie = name + '=' + (value || '') + expires + '; path=/';
}

export function getCookie(name) {
    var nameEQ = name + '=';
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1, cookie.length);
        }
        if (cookie.indexOf(nameEQ) == 0) {
            return cookie.substring(nameEQ.length, cookie.length);
        }
    }
    return null;
}

export const applyRules = () => {
    let background = getCookie('background');
    if (background) {
        d.body.style.background = background;
        $background.value = background;
    }

    let backgroundEnlaces = getCookie('backgroundEnlaces');
    if (backgroundEnlaces) {
        d.querySelectorAll('a').forEach((ele) => {
            ele.style.background = backgroundEnlaces;
        });
    }

    let colorEnlaces = getCookie('colorEnlaces');
    if (colorEnlaces) {
        d.querySelectorAll('a').forEach((ele) => {
            ele.style.color = colorEnlaces;
        });
    }

    let colorText = getCookie('colorText');
    if (colorText) {
        d.querySelectorAll('h2').forEach((ele) => {
            ele.style.color = colorText;
        });

        d.querySelectorAll('h3').forEach((ele) => {
            ele.style.color = colorText;
        });
    }

    let backgroundText = getCookie('backgroundText');
    if (backgroundText) {
        d.querySelectorAll('h2').forEach((ele) => {
            ele.style.background = backgroundText;
        });

        d.querySelectorAll('h3').forEach((ele) => {
            ele.style.background = backgroundText;
        });
    }

    let colorBorder = getCookie('colorBorderImg');
    if (colorBorder) {
        d.querySelectorAll('img').forEach((ele) => {
            ele.style.borderColor = colorBorder;
        });
    }

    let borderRadius = getCookie('borderRadiusEnlace');
    if (borderRadius) {
        d.querySelectorAll('a').forEach((ele) => {
            ele.style.borderRadius = borderRadius;
        });
    }

    let boxShadow = getCookie('boxShadow');
    if (boxShadow) {
        d.querySelectorAll('img').forEach((ele) => {
            ele.style.boxShadow = boxShadow;
        });
    }

    let borderRadiusImg = getCookie('borderRadius');
    if (borderRadiusImg) {
        d.querySelectorAll('img').forEach((ele) => {
            ele.style.borderRadius = '5px';
        });
    }

    let border = getCookie('border');
    let borderStyle = getCookie('borderStyle');
    let borderColor = getCookie('borderColor');

    if (border) {
        d.querySelectorAll('img').forEach((ele) => {
            ele.style.border = '5px';
        });
    }
    if (borderStyle) {
        d.querySelectorAll('img').forEach((ele) => {
            ele.style.borderStyle = borderStyle;
        });
    }

    if (borderColor) {
        d.querySelectorAll('img').forEach((ele) => {
            ele.style.borderColor = borderColor;
        });
    }

    let minHeight = getCookie('minHeight');
    if (minHeight) {
        d.querySelectorAll('img').forEach((ele) => {
            ele.style.minHeight = minHeight;
        });
    }

    let maxHeight = getCookie('maxHeight');
    if (minHeight) {
        d.querySelectorAll('img').forEach((ele) => {
            ele.style.maxHeight = maxHeight;
        });
    }

    let minWidth = getCookie('minWidth');
    if (minWidth) {
        d.querySelectorAll('img').forEach((ele) => {
            ele.style.minWidth = minWidth;
        });
    }

    let maxWidth = getCookie('maxWidth');
    if (maxWidth) {
        d.querySelectorAll('img').forEach((ele) => {
            ele.style.maxWidth = maxWidth;
        });
    }

    let fontSize = getCookie('fontSize');
    if (fontSize) {
        d.querySelectorAll('h3').forEach((ele) => {
            ele.style.fontSize = fontSize;
        });

        d.querySelectorAll('h2').forEach((ele) => {
            ele.style.fontSize = fontSize;
        });
    }
};
