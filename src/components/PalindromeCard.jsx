const PalindromeCard = ({ palindrome }) => (
    <div className="palindromes-card">
        <h3>{palindrome.text /* changed .name to .text to match with the schema */}</h3>
        <p><strong>Description: </strong> {palindrome.description}</p>
</div>
);

export default PalindromeCard;
