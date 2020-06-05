console.log("drag and drop");

const imgBox = document.querySelector(".imgBox");
const whiteBoxes = document.getElementsByClassName("whiteBox");

//event listner for draggable img box
imgBox.addEventListener("dragstart", (e) => {
    console.log("drag start triggered");
    //space before hold is must cause we have given multiple classes (1- img-box 2-hold) to the imgBox
    e.target.className += ' hold';
    //when we set settime out with time 0 that means it will gets execute at the end of the function
    setTimeout(() => {
        e.target.className = 'hide';
    }, 0);
});

imgBox.addEventListener("dragend", (e) => {
    console.log("dragend triggered");
    e.target.className = 'imgBox';
});

for (key of whiteBoxes) {
    console.log(key);

    key.addEventListener("dragenter", (e) => {
        console.log("dragenter triggered");
        e.target.className += ' dashed'
    });

    key.addEventListener("dragover", (e) => {
        console.log("dragover triggered");
        e.preventDefault();
    });

    key.addEventListener("dragleave", (e) => {
        console.log("dragleave triggered");
        e.target.className = 'whiteBox';
    });

    key.addEventListener("drop", (e) => {
        console.log("drop triggered");
        e.target.append(imgBox);
        console.log(e.target.append(imgBox))
    });


}

