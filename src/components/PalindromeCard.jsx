const PalindromeCard = ({ palindrome }) => (
    <div className="palindromes-card">
        <h3>{palindrome.name}</h3>
        <p><strong>Description: </strong> {palindrome.description}</p>
</div>
);

export default PalindromeCard;