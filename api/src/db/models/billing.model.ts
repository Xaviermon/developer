import { Model, Optional } from "sequelize";

interface BillingAttributes {
  id?: number;
  paymentDate?: Date;
  description?: string;
  createAt?: Date;
  updatedAt?: Date;
}

export interface BillingInput extends Optional<BillingAttributes, "id"> {}
export interface BillingOutput extends Required<BillingAttributes> {}

module.exports = (sequelize: any, Datatypes: any) => {
  class Billing
    extends Model<BillingAttributes, BillingInput>
    implements BillingAttributes
  {
    public id?: number;
    public paymentDate?: Date;
    public description?: string;
    public readonly createAt?: Date;
    public readonly updatedAt?: Date;

    static associate(models: any) {
      Billing.belongsTo(models.Person);
      Billing.hasMany(models.Price);
      Billing.hasMany(models.Purchase);
    }
  }

  Billing.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Datatypes.INTEGER,
      },
      paymentDate: {
        allowNull: false,
        type: Datatypes.DATE,
      },
      description: {
        allowNull: false,
        type: Datatypes.STRING,
      },
    },
    {
      sequelize,
      underscored: false,
      timestamps: true,
      modelName: "Billing",
    }
  );
  return Billing;
};
