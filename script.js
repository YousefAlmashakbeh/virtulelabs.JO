document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('microscopeCanvas');
    const ctx = canvas.getContext('2d');
    const viewButton = document.getElementById('viewButton');
    const cellTypeSelect = document.getElementById('cellType');
    const cellTitle = document.getElementById('cellTitle');
    const cellDescription = document.getElementById('cellDescription');

    const cells = {
        animal: {
            title: 'Animal Cell',
            description: 'Animal cells are eukaryotic cells that contain a nucleus and other organelles enclosed within membranes.',
            image: 'animal-cell.JPG' // Placeholder, replace with actual path to the image
        },
        plant: {
            title: 'Plant Cell',
            description: 'Plant cells are also eukaryotic cells, but they have a cell wall and chloroplasts, which are not found in animal cells.',
            image: 'plant-cell.JPG' // Placeholder, replace with actual path to the image
        },
        bacteria: {
            title: 'Bacteria Cell',
            description: 'Bacterial cells are prokaryotic cells, meaning they do not have a nucleus. Their DNA is located in the nucleoid.',
            image: 'bacteria-cell.JPG' // Placeholder, replace with actual path to the image
        },
        fungal: {
            title: 'Fungal Cell',
            description: 'Fungal cells are eukaryotic cells with a cell wall made of chitin. They often have multiple nuclei within a single cell.',
            image: 'fungal-cell.JPG' // Placeholder, replace with actual path to the image
        },
        protist: {
            title: 'Protist Cell',
            description: 'Protist cells are eukaryotic cells that can be similar to animal, plant, or fungal cells. They often live in aquatic environments.',
            image: 'protist-cell.JPG' // Placeholder, replace with actual path to the image
        }
    };

    viewButton.addEventListener('click', () => {
        const cellType = cellTypeSelect.value;
        const cell = cells[cellType];
        cellTitle.textContent = cell.title;
        cellDescription.textContent = cell.description;
        drawCell(cell.image);
    });

    function drawCell(imageSrc) {
        const img = new Image();
        img.src = imageSrc;
        img.onload = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        };
    }
});
