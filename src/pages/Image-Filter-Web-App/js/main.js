const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let img = new Image();
let fileName = "";

const downloadBtn = document.getElementById("download-btn");
const uploadFile = document.getElementById("upload-file");
const revertBtn = document.getElementById("revert-btn");

// Upload File
uploadFile.addEventListener("change", (e) => {
    //Get file
    const file = document.getElementById("upload-file").files[0];

    //Init FileReader
    const reader = new FileReader();

    if(file) {
        //Set file name
        fileName = file.name;
        //Read data as URL
        reader.readAsDataURL(file);
    }

    //add to canvas
    reader.addEventListener("load", () => {
        //create img
        img = new Image();
        //set src
        img.src = reader.result;
        //on image load, add to canvas
        img.onload = function() {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0, img.width, img.height);
            canvas.removeAttribute("data-caman-id"); // need to be delete
        };
    });

});

//Add filters and effects
//Using event delegation (not good practise)
document.addEventListener("click", (e) => {
    if(e.target.classList.contains("filter-btn")) {
        if(e.target.classList.contains("brightness-add")) {
            Caman("#canvas", img, function() { //arrow fnc doesn't work here
                this.brightness(5).render();
            });
        } else if (e.target.classList.contains("brightness-remove")) {
            Caman("#canvas", img, function () {
                this.brightness(-5).render();
            });
        } else if (e.target.classList.contains("contrast-add")) {
            Caman("#canvas", img, function () {
                this.contrast(5).render();
            });
        } else if (e.target.classList.contains("contrast-remove")) {
            Caman("#canvas", img, function () {
                this.contrast(-5).render();
            });
        } else if (e.target.classList.contains("saturation-add")) {
            Caman("#canvas", img, function () {
                this.saturation(5).render();
            });
        } else if (e.target.classList.contains("saturation-remove")) {
            Caman("#canvas", img, function () {
                this.saturation(-5).render();
            });
        } else if (e.target.classList.contains("vibrance-add")) {
            Caman("#canvas", img, function () {
                this.vibrance(5).render();
            });
        } else if (e.target.classList.contains("vibrance-remove")) {
            Caman("#canvas", img, function () {
                this.vibrance(-5).render();
            });
        } else if (e.target.classList.contains("vintage-add")) {
            Caman("#canvas", img, function () {
                this.vintage().render();
            });
        } else if (e.target.classList.contains("lomo-add")) {
            Caman("#canvas", img, function () {
                this.lomo().render();
            });
        } else if (e.target.classList.contains("clarity-add")) {
            Caman("#canvas", img, function () {
                this.clarity().render();
            });
        } else if (e.target.classList.contains("sincity-add")) {
            Caman("#canvas", img, function () {
                this.sinCity().render();
            });
        } else if (e.target.classList.contains("crossprocess-add")) {
            Caman("#canvas", img, function () {
                this.crossProcess().render();
            });
        } else if (e.target.classList.contains("pinhole-add")) {
            Caman("#canvas", img, function () {
                this.pinhole().render();
            });
        } else if (e.target.classList.contains("nostalgia-add")) {
            Caman("#canvas", img, function () {
                this.nostalgia().render();
            });
        } else if (e.target.classList.contains("hermajesty-add")) {
            Caman("#canvas", img, function () {
                this.herMajesty().render();
            });
        }
    }
})

// Download Event
downloadBtn.addEventListener("click", (e) => {
    //Get file extension
    const fileExtension = fileName.slice(-4); //-4 because we need to take for example: .jpg

    //Init new file name
    let newFileName;
    //Check img type
    if(fileExtension === ".jpg" || fileExtension === ".png") {
        newFileName = fileName.substring(0, fileName.length - 4) + "edited.jpg"; //because upload file have extension, so we need to delete 4 last signs
    }

    //Call download
    download(canvas, newFileName);
});

function download(canvas, fileName) {
    //init event
    let e;
    //create link
    const link = document.createElement("a");
    //set properties
    link.download = fileName;
    link.href = canvas.toDataURL("image/jpg", 0.8); //0.8 quality/compression of the jpg - while 1 would be 100%, 0.8 is 80%.
    // The lower the value, the lower the filesize, but the more artifacts you get.
    // Usually around 0.89 is the sweetspot for a low filesize but good quality.
    e = new MouseEvent("click");
    //dispatch event
    link.dispatchEvent(e);
}

// Remove filters
revertBtn.addEventListener("click", e => {
    Caman("#canvas", img, function () {
        this.revert();
    });
});