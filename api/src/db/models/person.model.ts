import { Model, Optional } from "sequelize";

interface PersonAttributes {
  id?: number;
  name?: string;
  lastName?: string;
  age?: number;
  gender?: string;
  contact?: string;
  addres?: string;

  createAt?: Date;
  updatedAt?: Date;
}

export interface PersonInput extends Optional<PersonAttributes, "id"> {}
export interface PersonOutput extends Required<PersonAttributes> {}

module.exports = (sequelize: any, Datatypes: any) => {
  class Person
    extends Model<PersonAttributes, PersonInput>
    implements PersonAttributes
  {
    public id?: number;
    public name?: string;
    public lastName?: string;
    public age?: number;
    public gender?: string;
    public contact?: string;
    public addres?: string;
    public readonly createAt?: Date;
    public readonly updatedAt?: Date;

    static associate(models: any) {
      Person.hasMany(models.TypeUser);
      Person.hasMany(models.CompanyData);
      Person.hasMany(models.PersonState);
      Person.hasMany(models.Billing);
    }
  }

  Person.init(
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
      lastName: {
        allowNull: false,
        type: Datatypes.STRING,
      },
      age: {
        allowNull: false,
        type: Datatypes.INTEGER,
      },
      gender: {
        allowNull: false,
        type: Datatypes.STRING,
      },
      contact: {
        allowNull: false,
        type: Datatypes.STRING,
      },
      addres: {
        allowNull: false,
        type: Datatypes.STRING,
      },
    },
    {
      sequelize,
      underscored: false,
      timestamps: true,
      modelName: "Person",
    }
  );
  return Person;
};
