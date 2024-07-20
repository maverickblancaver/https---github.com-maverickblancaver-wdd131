window.onload = () => {
    // Get the current review count from localStorage
    let reviewCount = localStorage.getItem('reviewCount');

    // If no review count is found, initialize it to 0
    if (!reviewCount) {
        reviewCount = 0;
    } else {
        reviewCount = parseInt(reviewCount);
    }

    // Increment the review count
    reviewCount += 1;

    // Store the updated review count in localStorage
    localStorage.setItem('reviewCount', reviewCount);

    // Display the review count on the page
    document.getElementById('reviewCount').textContent = `Number of reviews completed: ${reviewCount}`;
};
