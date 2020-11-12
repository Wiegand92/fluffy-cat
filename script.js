//When the page loads, place the paws in random spots on the grid.
window.addEventListener('DOMContentLoaded', () => {
    const paw = document.querySelectorAll(".paw");
    const house = document.querySelector(".house");
    house.style.gridArea = "1/1/span 101/span 51";
    paw.forEach(paw => {
        paw.style.gridArea = `${Math.floor(Math.random() * 96) +2}/ ${Math.floor(Math.random() * 46) +2}/span2/span2`;
    });
});

//Reset Button places the paws in new spots on the grid
const button = document.querySelector("#reset");
button.addEventListener("click", () =>  {
    const paw = document.querySelectorAll(".paw");
    paw.forEach(paw => {
        paw.style.gridArea = `${Math.floor(Math.random() * 96) +2}/ ${Math.floor(Math.random() * 46) +2}/span2/span2`;
    });
});

//When you click on the paw, open up the modal window, modal box, and picture.
const paws = document.querySelectorAll(".paw");
paws.forEach(paw => {
    paw.addEventListener("click", event => {
        const modal = paw.previousElementSibling;
        const modalbox = modal.firstElementChild;
        const pic = modalbox.firstElementChild;
        modal.style.display = "flex";
        modalbox.style.display = "inline-flex";
        pic.style.display = "block"
    });
});

//When you click on an open modal, close the modal window, modal box, and picture.
const modals = document.querySelectorAll(".modal")
modals.forEach(modal => {
    modal.addEventListener("click", event => {
        const modalbox= modal.firstElementChild;
        const pic = modalbox.firstElementChild;
        modal.style.display = "none";
        modalbox.style.display = "none";
        pic.style.display = "none";
    });
});
