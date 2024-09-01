import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Buyer extends Model {
    @Column
    name: string;

    @Column
    address: string;
}
