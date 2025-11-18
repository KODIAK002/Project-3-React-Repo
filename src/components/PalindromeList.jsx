import PalindromeCard from "./PalindromeCard";

const PalindromeList = ({ palindromes }) => {
    if (!palindromes || palindromes.length === 0) {
        return <p>No matching palindromes found.</p>;
    }
    //If there were no results return nothing was found
    return (
        <div className="palindromes-list">
            {palindromes.map((palindrome) => (
                <PalindromeCard key={palindrome.text /* changed .name to .text to match with the schema */} palindrome={palindrome} />
            ))}
        </div>
    );
};

export default PalindromeList;
