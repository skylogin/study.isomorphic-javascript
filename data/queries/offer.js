import { GraphQLID as ID, GraphQLNonNull as NonNull } from "graphql";

import Offer from "../models/Offer";
import OfferType from "../types/OfferType";

const offer = {
  type: OfferType,
  args: {
    id: { type: new NonNull(ID) }
  },
  resolve(_, { id }) {
    return Offer.findById(id);
  }
};

export default offer;
