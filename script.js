document.addEventListener("DOMContentLoaded", function () {
    // A legördülő menü azonosítása a megfelelő ID alapján
    var variantSelect = document.querySelector("#egyeb_list1_KT_airedale_terrier_b2_112_Teszt");

    // A szövegbeviteli és fájlfeltöltési mezők keresése (feltételezve, hogy ezek az ID-k)
    var textInput = document.querySelector("#page_artdet_product_param_spec_4710625");
    var fileUpload = document.querySelector("#page_artdet_product_param_spec_4710630");

    // Ha nem találhatóak az elemek, ne csináljunk semmit
    if (!variantSelect) return;

    // Ha a szövegmező vagy a fájlmező nem létezik, akkor adjuk őket hozzá dinamikusan
    if (!textInput) {
        textInput = document.createElement("textarea");
        textInput.id = "gravirozas_szoveg";
        textInput.name = "gravirozas_szoveg";
        textInput.placeholder = "Ide írja a gravírozandó szöveget...";
        textInput.style.display = "none"; // Alapból elrejtve
        textInput.style.marginTop = "10px";
        textInput.style.width = "100%";
        textInput.style.padding = "5px";
        variantSelect.parentNode.appendChild(textInput); // Hozzáadás a legördülő menü alá
    }

    if (!fileUpload) {
        fileUpload = document.createElement("input");
        fileUpload.id = "grafika_feltoltes";
        fileUpload.name = "grafika_feltoltes";
        fileUpload.type = "file";
        fileUpload.style.display = "none"; // Alapból elrejtve
        fileUpload.style.marginTop = "10px";
        variantSelect.parentNode.appendChild(fileUpload); // Hozzáadás a legördülő menü alá
    }

    // Eseményfigyelő a változat kiválasztásához
    variantSelect.addEventListener("change", function () {
        var selectedValue = variantSelect.value;

        // Ha a felhasználó "Szöveget kérek gravírozni" opciót választja
        if (selectedValue.includes("Szöveget kérek gravírozni")) {
            textInput.style.display = "block";
            fileUpload.style.display = "none";
        } 
        // Ha a felhasználó "Grafikát kérek gravírozni" opciót választja
        else if (selectedValue.includes("Grafikát kérek gravírozni")) {
            fileUpload.style.display = "block";
            textInput.style.display = "none";
        } 
        // Ha egyik sem, akkor mindkét mezőt elrejtjük
        else {
            textInput.style.display = "none";
            fileUpload.style.display = "none";
        }
    });
});
