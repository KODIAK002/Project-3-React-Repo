import React from "react";
import PalindromeCard from "./PalindromeCard";

const IsPalindrome = ({ palindromes }) => {
  const truePalindromes = palindromes.filter((p) => p.isPalindrome === true);

  return (
    <div className="isPalindrome">
      <h2 style={{ color: "green" }}>Palindromes</h2>
      {truePalindromes.length > 0 ? (
        truePalindromes.map((p) => (
          <PalindromeCard key={p.text} palindrome={p} />
        ))
      ) : (
        <p>No true palindromes in current list.</p>
      )}
    </div>
  );
};

export default IsPalindrome;
