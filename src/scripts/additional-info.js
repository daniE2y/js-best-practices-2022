// JS script to manage CV additional info feature.

const additionalInfoBtn = document.getElementById('js-additional-info-btn');

additionalInfoBtn.addEventListener('click', function () {
    const additionalInfoSection = document.getElementById('js-additional-info-section');
    if (additionalInfoSection.style.display === 'none') {
        additionalInfoSection.style.display = 'block';
        this.textContent = 'Show less';
    } else {
        additionalInfoSection.style.display = 'none';
        this.textContent = 'Show more';
    }
});
