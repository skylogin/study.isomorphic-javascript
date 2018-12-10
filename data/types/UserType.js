import {
  GraphQLID as ID,
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull
} from "graphql";

const UserType = new ObjectType({
  name: "User",
  fields: {
    id: { type: new NonNull(ID) },
    email: { type: StringType },
    displayName: { type: StringType }
  }
});

export default UserType;
