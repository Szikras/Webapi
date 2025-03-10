document.addEventListener("DOMContentLoaded", function () {
    // A legördülő menü elemének elérése
    var variantSelect = document.getElementById("egyeb_list1_KT_airedale_terrier_b2_112_Teszt");

    // A szövegbeviteli mező elemének elérése
    var szovegMezo = document.getElementById("page_artdet_product_param_spec_4696445");

    if (variantSelect && szovegMezo) {
        // Eseménykezelő a legördülő menü változásaira
        variantSelect.addEventListener("change", function () {
            var selectedValue = variantSelect.value;

            // Ha a "Szöveget kérek gravírozni" opció van kiválasztva
            if (selectedValue === "Szöveget kérek gravírozni a másik oldalra") {
                szovegMezo.style.display = "block";  // Megjeleníti a szövegbevitelt
            } else {
                szovegMezo.style.display = "none";   // Elrejti a szövegbevitelt
            }
        });
    }
});
