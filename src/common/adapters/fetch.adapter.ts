import { Injectable } from '@nestjs/common';
import { HttpAdapter } from '../interfaces/http-adapter.interface';

@Injectable()
export class FetchAdapter implements HttpAdapter {
  async get<T>(url: string): Promise<T> {
    try {
      console.log('Adapter');
      const l = await fetch(url);
      return (await l.json()) as Promise<T>;
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
}
