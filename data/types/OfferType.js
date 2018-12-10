import { GraphQLID as ID, GraphQLNonNull as NonNull } from "graphql";

const OfferType = new ObjectType({
  name: "Offer",
  fields: {
    id: { type: new NonNull(ID) }
  }
});

export default OfferType;
