import { Model, Optional } from "sequelize";

interface PurchaseAttributes {
  id?: number;
  type?: string;
  createAt?: Date;
  updatedAt?: Date;
}

export interface PurchaseInput extends Optional<PurchaseAttributes, "id"> {}
export interface PurchaseOutput extends Required<PurchaseAttributes> {}

module.exports = (sequelize: any, Datatypes: any) => {
  class Purchase
    extends Model<PurchaseAttributes, PurchaseInput>
    implements PurchaseAttributes
  {
    public id?: number;
    public type?: string;
    public readonly createAt?: Date;
    public readonly updatedAt?: Date;

    static associtate(models: any) {
      Purchase.belongsTo(models.Billing);
    }
  }
  Purchase.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Datatypes.INTEGER,
      },
      type: {
        allowNull: false,
        type: Datatypes.STRING,
      },
    },
    {
      sequelize,
      underscored: false,
      timestamps: true,
      modelName: "Purchase",
    }
  );
  return Purchase;
};
