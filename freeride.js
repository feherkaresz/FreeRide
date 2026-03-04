$(document).ready(function () {
    
    console.log("JS elindult");

//Bemutatkozás melletti galéria

const introKepek = [
    "IMG/img1.jpg",
    "IMG/img2.jpg",
    "IMG/img3.jpg",
    "IMG/img4.jpg",
    "IMG/img5.jpg"
];

let introIndex = 0;

function introFrissites() {
    $("#galleryImg").fadeOut(200, function () {
        $(this)
            .attr("src", introKepek[introIndex])
            .fadeIn(200);
    });
}

$("#next").on("click", function () {
    introIndex++;
    if (introIndex >= introKepek.length) {
        introIndex = 0;
    }
    introFrissites();
});

$("#prev").on("click", function () {
    introIndex--;
    if (introIndex < 0) {
        introIndex = introKepek.length - 1;
    }
    introFrissites();
});

// Képegaléria
    const kepek = [
        "FREERIDE/picture1.jpeg",
        "FREERIDE/picture2.jpeg",
        "FREERIDE/picture3.jpeg",
        "FREERIDE/picture4.jpeg",
        "FREERIDE/picture5.jpeg",
        "FREERIDE/picture6.jpeg",
        "FREERIDE/picture7.jpeg",
    ];

    let index = 0;

    function frissites() {
        $("#gallery").fadeOut(200, function () {
        $(this)
            .attr("src", kepek[index])
            .fadeIn(200)});

        $("#gallery-prev").prop("disabled", index === 0);
        $("#gallery-next").prop("disabled", index === kepek.length - 1);
    }

    $("#gallery-next").on("click", function () {
        if (index < kepek.length - 1) {
            index++;
            frissites();
        }
    });

    $("#gallery-prev").on("click", function () {
        if (index > 0) {
            index--;
            frissites();
        }
    });

    frissites();

// Űrlap kitöltés

    $("#registrationForm").on("submit", function (e) {

    e.preventDefault();

    let valid = true;

    $("#registrationForm input, #registrationForm textarea").each(function () {

        if ($(this).val().trim() === "") {
            $(this).addClass("error-input");
            valid = false;
        } else {
            $(this).removeClass("error-input");
        }

    });

    if (valid) {
        alert("Sikeres jelentkezés! 🚵‍♂️🔥");
        $("#registrationForm")[0].reset();
    }
    });

    // Scroll

    // Scroll figyelés
$(window).on("scroll", function () {
    if ($(this).scrollTop() > 300) {
        $("#scrollBtn").addClass("show");
    } else {
        $("#scrollBtn").removeClass("show");
    }
});

// Smooth scroll fel
$("#scrollTopBtn").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 600);
});
});
