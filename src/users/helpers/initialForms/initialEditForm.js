import { useUserApi } from "../../providers/UserApiProvider";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";

export default function initialEditForm() {
  const userApi = useUserApi();
  const navigate = useNavigate();
  let initialEditForm = "";
  if (!userApi) {
    navigate(ROUTES.ROOT);
  }
  if (userApi) {
    initialEditForm = {
      first: userApi.name.first,
      middle: userApi.name.middle,
      last: userApi.name.last,
      phone: userApi.phone,
      email: userApi.email,
      password: userApi.password,
      url: userApi.image.url,
      alt: userApi.image.alt,
      state: userApi.address.state,
      country: userApi.address.country,
      city: userApi.address.city,
      street: userApi.address.street,
      houseNumber: userApi.address.houseNumber,
      zip: userApi.address.zip,
      isBusiness: userApi.isBusiness,
      isAdmin: userApi.isAdmin,
      user_id: userApi.user_id,
    };
  }
  return initialEditForm;
}
