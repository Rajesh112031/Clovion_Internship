document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('photoTitle').value;
    const fileInput = document.getElementById('photoFile');
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imgElement = document.createElement('img');
            imgElement.src = e.target.result;

            const photoItem = document.createElement('div');
            photoItem.classList.add('photo-item');
            photoItem.innerHTML = `
                <h3>${title}</h3>
            `;
            photoItem.appendChild(imgElement);

            const photosGrid = document.getElementById('photosGrid');
            photosGrid.appendChild(photoItem);
        };
        reader.readAsDataURL(file);
    }

    // Clear the form
    document.getElementById('photoTitle').value = '';
    fileInput.value = '';
});