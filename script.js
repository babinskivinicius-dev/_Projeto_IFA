document.addEventListener("DOMContentLoaded", function () {


    /* =========================
       TAMANHO DO TEXTO
    ========================= */

    let currentFontSize =
        parseInt(
            localStorage.getItem("fontSize")
        ) || 18;


    let highContrast =
        localStorage.getItem("highContrast")
        === "true";


    const btnIncrease =
        document.getElementById("btn-increase");


    const btnDecrease =
        document.getElementById("btn-decrease");


    const btnContrast =
        document.getElementById("btn-contrast");


    const status =
        document.getElementById("a11y-status");



    function announce(message) {

        if (status) {

            status.textContent = "";

            setTimeout(function () {

                status.textContent = message;

            }, 100);

        }

    }



    function applySettings() {

        document.body.style.fontSize =
            currentFontSize + "px";


        if (highContrast) {

            document.body.classList.add(
                "high-contrast"
            );

        } else {

            document.body.classList.remove(
                "high-contrast"
            );

        }

    }



    /* AUMENTAR */

    if (btnIncrease) {

        btnIncrease.addEventListener(
            "click",
            function () {

                if (currentFontSize < 28) {

                    currentFontSize += 2;

                    localStorage.setItem(
                        "fontSize",
                        currentFontSize
                    );

                    applySettings();

                    announce(
                        "Texto aumentado para "
                        + currentFontSize
                        + " pixels."
                    );

                }

            }
        );

    }



    /* DIMINUIR */

    if (btnDecrease) {

        btnDecrease.addEventListener(
            "click",
            function () {

                if (currentFontSize > 14) {

                    currentFontSize -= 2;

                    localStorage.setItem(
                        "fontSize",
                        currentFontSize
                    );

                    applySettings();

                    announce(
                        "Texto diminuído para "
                        + currentFontSize
                        + " pixels."
                    );

                }

            }
        );

    }



    /* ALTO CONTRASTE */

    if (btnContrast) {

        btnContrast.addEventListener(
            "click",
            function () {

                highContrast =
                    !highContrast;


                localStorage.setItem(
                    "highContrast",
                    highContrast
                );


                applySettings();


                announce(

                    highContrast

                    ? "Modo de alto contraste ativado."

                    : "Modo de alto contraste desativado."

                );

            }
        );

    }



    /* APLICA CONFIGURAÇÕES */

    applySettings();

});