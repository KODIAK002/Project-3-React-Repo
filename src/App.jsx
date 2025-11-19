import { useState } from "react"
import { useEffect } from "react";
//Use Effect is used to fetch data from an API or subscribe to a service or event, change the document title, set up timers or intervals or directly manipulate the DOM, in this case we are using it to fetch data from the localhost
import PalindromeList from "./components/PalindromeList";
import "./App.css";
import Navbar from "./components/navbar";
import IsPalindrome from "./components/isPalindrome";
import NotPalindrome from "./components/notPalindrome";

const API_URL = "http://localhost:3000/palindrome";

const App = () => {
  const [palindromes, setPalindromes] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState("home");

  //Searching
  const fetchPalindromes = async (searchTerm = "") => {
    setLoading(true);
    try {
      const response = await fetch(
        searchTerm ? `${API_URL}?search=${searchTerm}` : API_URL
      );
      const data = await response.json();
      setPalindromes(data || []); //updated it so that it just looks for a data array
    } catch (error) {
      console.log("Error fetching : ", error);
    } finally {
      setLoading(false);
    }
  };
//Random 4 using slice
  const fetchAllPalindromes = async () => {
    setLoading(true);
    let allPalindromes = [];
    let nextUrl = API_URL;
    //API returns results based on number of page so this keeps track of the next page of results
    try {
      while (nextUrl) {
        const response = await fetch(nextUrl);
        const data = await response.json();
        allPalindromes = [...allPalindromes, ...data.results];
        nextUrl = data.next;
        //API returns a next url to the next set of palindromes so we're updating the nextUrl to that value
      }
      //While loop fetches palindromes from the API until there are no pages then nextUrl becomes null, as pages are fetched we append the new palindromes to the allPalindromes array
      const shuffled = allPalindromes.sort(() => 0.5 - Math.random());
      //Shuffles array
      setPalindromes(shuffled.slice(0, 4));
      //After shuffling we're slicing the first 4 and setting them as the state
    } catch (error) {
      console.error("Error fetching", error);
    } finally {
      setLoading(false);
    }
    };
  useEffect(() => {
    fetchPalindromes();
  }, []);
  //Similar to componentDidMount but the empty array [] means this "effect" only runs once but useEffect runs after the component renders then we call fetchPalindromes to fetch from the API

  const handleSearch = (event) => {
    event.preventDefault();
    fetchPalindromes(query);
  };
//Calls fetchPalindromes with the search term from the user, fetching results based on search
   return (
    <div className="app">
      <Navbar setPage={setPage} />

      <h1>Palindromes</h1>

      {page === "home" ? (
        <>
          <form onSubmit={handleSearch} className="search-bar">
            <input
              type="text"
              placeholder="Search here..."
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            <button type="submit">Search</button>
            <button
              type="button"
              onClick={fetchAllPalindromes}
              className="random"
            >
              Surprise Me With 4
            </button>
          </form>
          <p className="results">
            Showing {palindromes.length} result{palindromes.length !== 1 ? "s" : ""}
          </p>
          {loading ? (
            <p>Loading palindromes...</p>
          ) : (
            <PalindromeList palindromes={palindromes} />
          )}
        </>
      ) : (
        <div className="split-view" style={{ display: "flex", gap: "20px" }}>
          <IsPalindrome palindromes={palindromes} />
          <NotPalindrome palindromes={palindromes} />
        </div>
      )}
    </div>
  );
};



export default App;
