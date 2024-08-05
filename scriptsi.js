document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const voteForm = document.getElementById('voteForm');
    let votes = {
        candidate1: 0,
        candidate2: 0
    };

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        // Perform login logic (e.g., authentication)
        alert('Logged in successfully');
    });

    voteForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const selectedCandidate = document.querySelector('input[name="candidate"]:checked').value;
        if (selectedCandidate === 'Candidate 1') {
            votes.candidate1 += 1;
        } else if (selectedCandidate === 'Candidate 2') {
            votes.candidate2 += 1;
        }
        updateResults();
        alert('Vote submitted successfully');
    });

    function updateResults() {
        document.getElementById('candidate1Votes').textContent = votes.candidate1;
        document.getElementById('candidate2Votes').textContent = votes.candidate2;
    }
});
