import { Model, Optional } from "sequelize";

interface TypeUserAttributes {
  id?: number;
  name?: string;
  createAt?: Date;
  updatedAt?: Date;
}

export interface TypeUserInput extends Optional<TypeUserAttributes, "id"> {}
export interface TypeUserOutput extends Required<TypeUserAttributes> {}

module.exports = (sequelize: any, Datatypes: any) => {
  class TypeUser
    extends Model<TypeUserAttributes, TypeUserInput>
    implements TypeUserAttributes
  {
    public id?: number;
    public name?: string;
    public readonly createAt?: Date;
    public readonly updatedAt?: Date;

    static assocition(models: any) {
      TypeUser.belongsTo(models.Person);
    }
  }

  TypeUser.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Datatypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: Datatypes.STRING,
      },
    },
    {
      sequelize,
      underscored: false,
      timestamps: true,
      modelName: "TypeUser",
    }
  );
  return TypeUser;
};
