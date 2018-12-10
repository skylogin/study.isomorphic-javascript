import faker from "faker";
import sequelize from "../sequelize";
import User from "./User";
import Offer from "./Offer";

Offer.belongsTo(User, { as: "author" });
User.hasMany(Offer, { as: "offers", foreignKey: "authorId" });

async function sync(options) {
  await sequelize.sync(options);
  if (options.force) {
    for (let i = 0; i < 50; i++) {
      const firstName = faker.name.firstName();
      const lastName = faker.name.lastName();
      await User.create({
        email: faker.internet.email(firstName, lastName),
        password: faker.internet.password(),
        displayName: faker.name.findName(firstName, lastName)
      });
    }
  }
}

export { sync as default, User, Offer };
