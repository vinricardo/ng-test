import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UniqueIdService {
  private numberOfGeneratedIds = 0;
  private regexPrefix = /^[A-Za-z]+[\w\-\:\.]*$/;

  generateUniqueIdWithPrefix(prefix: string): string {
    if (!prefix || !this.regexPrefix.test(prefix))
      throw new Error('Prefixo não pode ser vazio');
    const uniqueId = this.generateUniqueId();
    this.numberOfGeneratedIds++;
    return `${prefix}-${uniqueId}`;
  }

  getNumberOfGeneratedUniqueIds(): number {
    return this.numberOfGeneratedIds;
  }

  private generateUniqueId(): string {
    return uuidv4();
  }
}
