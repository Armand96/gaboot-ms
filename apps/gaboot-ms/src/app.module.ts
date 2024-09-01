import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductServiceModule } from 'apps/product-service/src/product-service.module';
import { BuyerServiceModule } from 'apps/buyer-service/src/buyer-service.module';
import { ApiGatewayModule } from 'apps/api-gateway/src/api-gateway.module';
import { OrderServiceModule } from 'apps/order-service/src/order-service.module';

@Module({
  imports: [ProductServiceModule, OrderServiceModule, BuyerServiceModule, ApiGatewayModule, ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
