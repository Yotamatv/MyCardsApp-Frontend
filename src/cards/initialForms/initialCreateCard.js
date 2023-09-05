export const initialCreateCard = (user) => {
  const createCard = {
    title: "",
    subtitle: "",
    description: "",
    phone: "",
    email: "",
    web: "",
    url: "",
    alt: "",
    state: "",
    country: "",
    city: "",
    street: "",
    houseNumber: "",
    zip: "",
    user_id: user.id,
  };
  return createCard;
};
