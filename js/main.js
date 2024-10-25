// JavaScript to handle file upload and image preview
const coverImageInput = document.getElementById('coverImage');
const coverImagePreview = document.getElementById('coverImagePreview');

coverImageInput.addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            coverImagePreview.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

document.getElementById('createPage').addEventListener('click', function() {
    const googlePlayLink = document.getElementById('googlePlayLink').value;
    const appleStoreLink = document.getElementById('appleStoreLink').value;
    const coverImageSrc = coverImagePreview.src;

    if (!googlePlayLink || !appleStoreLink || !coverImageSrc) {
        alert('Please upload a cover image and provide links to your game.');
        return;
    }

    // Placeholder for form submission or next step
    alert('Page created successfully! You can now proceed with the next step.');
});
