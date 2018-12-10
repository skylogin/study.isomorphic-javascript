import DataType from "sequelize";
import Model from "../sequelize";

const User = Model.define("User", {
  id: {
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  email: { type: DataType.TEXT, validate: { isEmail: true } },
  password: { type: DataType.TEXT },
  displayName: { type: DataType.TEXT }
});

export default User;
