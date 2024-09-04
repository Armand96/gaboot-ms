import { Module } from '@nestjs/common';
import { ProductServiceController } from './product-service.controller';
import { ProductServiceService } from './product-service.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as dotenv from 'dotenv';
import { Product } from './model/product.model';
import { ClientsModule, Transport } from '@nestjs/microservices';

dotenv.config();

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        SequelizeModule.forRootAsync({
            imports: [ConfigModule],
            name: 'writeConnection',
            useFactory: (configService: ConfigService) => ({
                dialect: 'mysql',
                host: configService.get('DB_WRITE_HOST'),
                port: parseInt(configService.get('DB_WRITE_PORT'), 10),
                username: configService.get('DB_WRITE_USERNAME'),
                password: configService.get('DB_WRITE_PASSWORD'),
                database: configService.get('DB_WRITE_NAME'),
                models: [Product],
                autoLoadModels: true,
                synchronize: true, // Disable this in production
            }),
            inject: [ConfigService],
        }),
        SequelizeModule.forRootAsync({
            imports: [ConfigModule],
            name: 'readConnection',
            useFactory: (configService: ConfigService) => ({
                dialect: 'mysql',
                host: configService.get('DB_READ_HOST'),
                port: parseInt(configService.get('DB_READ_PORT'), 10),
                username: configService.get('DB_READ_USERNAME'),
                password: configService.get('DB_READ_PASSWORD'),
                database: configService.get('DB_READ_NAME'),
                models: [Product],
                autoLoadModels: true,
                synchronize: false, // Read-only; no need to sync models
            }),
            inject: [ConfigService],
        }),
        SequelizeModule.forFeature([Product], 'writeConnection'),
        SequelizeModule.forFeature([Product], 'readConnection'),
    ],
    controllers: [ProductServiceController],
    providers: [ProductServiceService],
})
export class ProductServiceModule { }
