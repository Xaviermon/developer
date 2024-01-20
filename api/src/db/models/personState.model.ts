import { Model, Optional } from "sequelize";

interface PersonStateAttributes {
  id?: number;
  name?: string;
  createAt?: Date;
  updatedAt?: Date;
}

export interface PersonStateInput
  extends Optional<PersonStateAttributes, "id"> {}
export interface PersonStateOutput extends Required<PersonStateAttributes> {}

module.exports = (sequelize: any, Datatypes: any) => {
  class PersonState
    extends Model<PersonStateAttributes, PersonStateInput>
    implements PersonStateAttributes
  {
    public id!: number;
    public name!: string;
    public readonly createAt!: Date;
    public readonly updatedAt!: Date;

    static associate(models: any) {
      PersonState.belongsTo(models.Person);
    }
  }

  PersonState.init(
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
      modelName: "PersonState",
    }
  );
  return PersonState;
};
