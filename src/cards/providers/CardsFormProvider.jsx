import React, { createContext, useContext, useEffect, useState } from "react";
import { getCards } from "../services/cardApiService";
import { initialEditCardForm } from "../initialForms/initialEditCardForm";
const CardsFormContext = createContext();
export default function CardsFormProvider({ children }) {
  const [cardsFormProvider, setCardFormProvider] = useState([]);

  useEffect(() => {
    if (cardsFormProvider.length < 1) {
      const getData = async () => {
        return await getCards();
      };
      const data = getData();
      data.then((result) => {
        setCardFormProvider(result.map(initialEditCardForm));
      });
    }
  }, [cardsFormProvider]);

  return (
    <CardsFormContext.Provider value={cardsFormProvider}>
      {children}
    </CardsFormContext.Provider>
  );
}
export const useCardsFormProvider = () => {
  const context = useContext(CardsFormContext);
  if (!context)
    throw new Error(" useCardsFormProvider must be used within a NameProvider");
  return context;
};
