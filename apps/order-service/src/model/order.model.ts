import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Order extends Model {
    @Column
    productId: number;

    @Column
    productName: number;

    @Column
    invoice: string;

    @Column
    totalItem: number;

    @Column
    totalItemPrice: number;

    @Column
    status: string;
}
