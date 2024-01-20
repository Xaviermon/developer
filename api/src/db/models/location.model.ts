import { Model, Optional } from "sequelize";

interface LocationAttritubes {
  id?: number;
  country?: string;
  currency?: string;
  createAt?: Date;
  updatedAt?: Date;
}

export interface LocationInput extends Optional<LocationAttritubes, "id"> {}
export interface LocationOutput extends Required<LocationAttritubes> {}

module.exports = (sequelize: any, Datatypes: any) => {
  class Location
    extends Model<LocationAttritubes, LocationInput>
    implements LocationAttritubes
  {
    public id?: number;
    public country?: string;
    public currency?: string;
    public readonly createAt?: Date;
    public readonly updatedAt?: Date;

    static associate(models: any) {
      Location.belongsTo(models.CompanyData);
    }
  }

  Location.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Datatypes.INTEGER,
      },
      country: {
        allowNull: false,
        type: Datatypes.STRING,
      },
      currency: {
        allowNull: false,
        type: Datatypes.STRING,
      },
    },
    {
      sequelize,
      underscored: false,
      timestamps: true,
      modelName: "Location",
    }
  );
  return Location;
};
