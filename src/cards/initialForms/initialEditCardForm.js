export const initialEditCardForm = (card) => {
  const initialEditCard = {
    title: card.title,
    subtitle: card.subtitle,
    description: card.description,
    phone: card.phone,
    email: card.email,
    web: card.web,
    url: card.image.url,
    alt: card.image.alt,
    state: card.address.state,
    country: card.address.country,
    city: card.address.city,
    street: card.address.street,
    houseNumber: card.address.houseNumber,
    zip: card.address.zip,
    id: card._id,
    user_id: card.user_id,
  };

  return initialEditCard;
};
