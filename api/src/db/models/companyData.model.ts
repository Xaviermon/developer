import { Model, Optional } from "sequelize";

interface CompanyDataAttributes {
  id?: number;
  name?: string;
  contact?: string;
  email?: string;
  password?: string;
  agreement?: string;
  createAt?: Date;
  updatedAt?: Date;
}

export interface CompanyDataInput
  extends Optional<CompanyDataAttributes, "id"> {}
export interface CompanyDataOutput extends Required<CompanyDataAttributes> {}

module.exports = (sequelize: any, Datatypes: any) => {
  class CompanyData
    extends Model<CompanyDataAttributes, CompanyDataInput>
    implements CompanyDataAttributes
  {
    public id?: number;
    public name?: string;
    public contact?: string;
    public email?: string;
    public password?: string;
    public agreement?: string;
    public readonly createAt?: Date;
    public readonly updatedAt?: Date;

    static associate(models: any) {
      CompanyData.belongsTo(models.Person);
      CompanyData.hasMany(models.Location);
    }
  }

  CompanyData.init(
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
      contact: {
        allowNull: false,
        type: Datatypes.STRING,
      },
      email: {
        allowNull: false,
        type: Datatypes.STRING,
      },
      password: {
        allowNull: false,
        type: Datatypes.STRING,
      },
      agreement: {
        allowNull: true,
        type: Datatypes.STRING,
      },
    },
    {
      sequelize,
      underscored: false,
      timestamps: true,
      modelName: "CompanyData",
    }
  );
  return CompanyData;
};
