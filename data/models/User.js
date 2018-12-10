import DataType from "sequelize";
import Model from "../sequelize";

const batch = { keys: new Set(), task: null };

const User = Model.define(
  "User",
  {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    email: { type: DataType.TEXT, validate: { isEmail: true } },
    password: { type: DataType.TEXT },
    displayName: { type: DataType.TEXT }
  },
  {
    classMethods: {
      load(id) {
        if (!batch.keys.size) {
          batch.task = new Promise((resolve, reject) => {
            process.nextTick(() => {
              this.constructor.prototype.findAll
                .call(this, {
                  where: { id: Array.from(batch.keys) }
                })
                .then(data => {
                  batch.keys.clear();
                  resolve(data);
                }, reject);
            });
          });
        }

        batch.keys.add(id);
        return batch.task.then(data => data.find(x => x.id === id));
      }
    }
  }
);

export default User;
