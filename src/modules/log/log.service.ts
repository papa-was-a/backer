import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class LogService {
    @Inject('PREFIX') private readonly prefix: string
    log(str: string): void {
        console.log(`${this.prefix}${str}`)
    }

    error(str: string): void {
        console.error(str)
    }
}
