import { Model, Optional } from "sequelize";

interface PriceAttributes {
  id?: number;
  amount?: number;
  createAt?: Date;
  updatedAt?: Date;
}

export interface PriceInput extends Optional<PriceAttributes, "id"> {}
export interface PriceOutput extends Required<PriceAttributes> {}

module.exports = (sequelize: any, Datatypes: any) => {
  class Price
    extends Model<PriceAttributes, PriceInput>
    implements PriceAttributes
  {
    public id?: number;
    public amount?: number;
    public readonly createAt?: Date;
    public readonly updatedAt?: Date;

    static associate(models: any) {
      Price.belongsTo(models.Billing);
    }
  }

  Price.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Datatypes.INTEGER,
      },
      amount: {
        allowNull: false,
        type: Datatypes.INTEGER,
      },
    },
    {
      sequelize,
      underscored: false,
      timestamps: true,
      modelName: "Price",
    }
  );
  return Price;
};
