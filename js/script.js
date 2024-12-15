
document.getElementById('openCollegeModal').addEventListener('click', function () {
    // Hide the first modal
    const loginModal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
    loginModal.hide();

    // Show the second modal after the first is hidden
    setTimeout(() => {
        const collegeModal = new bootstrap.Modal(document.getElementById('collegeModal'));
        collegeModal.show();
    }, 300); // delay
});



document.getElementById('openSuccessModal').addEventListener('click', function () {
    // Hide the first modal
    const logModal = bootstrap.Modal.getInstance(document.getElementById('logModal'));
    logModal.hide();

    // Show the second modal after a short delay
    setTimeout(() => {
        const successModal = new bootstrap.Modal(document.getElementById('successModal'));
        successModal.show();
    }, 300); 
});
