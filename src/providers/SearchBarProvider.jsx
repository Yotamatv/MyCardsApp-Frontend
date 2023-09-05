import React from "react";
import { createContext } from "react";
import useCards from "../cards/hooks/useCards";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
const SearchBarContext = createContext();
export default function SearchBarProvider({ children }) {
  const { cards, handleGetCards } = useCards();
  const [searchedCards, setSearchedCards] = useState([]);
  useEffect(() => {
    handleGetCards();
  }, []);

  const handleChange = (e) => {
    setSearchedCards(
      cards &&
        cards.filter((card) =>
          card.title.toLowerCase().includes(e.target.value.toLowerCase())
        )
    );
  };
  return (
    <SearchBarContext.Provider value={{ searchedCards, handleChange }}>
      {children}
    </SearchBarContext.Provider>
  );
}
export const useSearchBar = () => {
  const context = useContext(SearchBarContext);
  if (!context)
    throw new Error("useSearchBarProvider must be used within a NameProvider");
  return context;
};
