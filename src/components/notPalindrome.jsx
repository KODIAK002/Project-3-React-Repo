import React from "react";
import PalindromeCard from "./PalindromeCard";

const NotPalindrome = ({ palindromes }) => {
  const falsePalindromes = palindromes.filter((p) => p.isPalindrome === false);

  return (
    <div className="notPalindrome">
      <h2 style={{ color: "red" }}>Not Palindromes</h2>
      {falsePalindromes.length > 0 ? (
        falsePalindromes.map((p) => (
          <PalindromeCard key={p.text} palindrome={p} />
        ))
      ) : (
        <p>No false palindromes in current list.</p>
      )}
    </div>
  );
};

export default NotPalindrome;
