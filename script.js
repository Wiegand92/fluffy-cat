window.addEventListener('load', () => {
    const paw = document.querySelectorAll(".paw");
    paw.forEach(paw => {
        paw.style.gridArea = `${Math.floor(Math.random() * 97)}/ ${Math.floor(Math.random() * 47)}/span2/span2`;
    });
})

//Reset Button
const button = document.querySelector("#reset");
button.addEventListener("click", () =>  {
    const paw = document.querySelectorAll(".paw");
    paw.forEach(paw => {
        paw.style.gridArea = `${Math.floor(Math.random() * 97)}/ ${Math.floor(Math.random() * 47)}/span2/span2`;
    });
});

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
