const normalizeCard = (card) => ({
  title: card.title,
  subtitle: card.subtitle,
  description: card.description,
  phone: card.phone,
  email: card.email,
  web: card.web,
  address: {
    state: card.state,
    country: card.country,
    city: card.city,
    street: card.street,
    zip: card.zip,
    houseNumber: card.houseNumber,
  },
  image: {
    url: card.url,
    alt: card.alt,
  },
  likes: [],
  user_id: card.user_id,
});

export default normalizeCard;
