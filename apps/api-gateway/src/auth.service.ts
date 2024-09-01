import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthService {
  constructor(private readonly httpService: HttpService) {}

  async validateToken(token: string) {
    const secret = process.env.JWT_SECRET;
    // Add logic to validate token
  }
}
