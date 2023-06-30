import { UniqueIdService } from './unique-id.service';

describe(UniqueIdService.name, () => {
  let service: UniqueIdService = null;
  beforeEach(() => {
    service = new UniqueIdService();
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should generate id when called with prefix`, () => {
    const id = service.generateUniqueIdWithPrefix('test');
    expect(id.startsWith('test-')).toBeTruthy();
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should not generate duplicates IDs when called multiple times`, () => {
    const ids = new Set();
    for (let i = 0; i < 50; i++) {
      ids.add(service.generateUniqueIdWithPrefix('test'));
    }
    expect(ids.size).toBe(50);
  });

  it(`#${UniqueIdService.prototype.getNumberOfGeneratedUniqueIds.name} should return the number of generatedIds when called`, () => {
    service.generateUniqueIdWithPrefix('test');
    service.generateUniqueIdWithPrefix('test');
    expect(service.getNumberOfGeneratedUniqueIds()).toBe(2);
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should throw when called with empty`, () => {
    let cases = [null, undefined, '', '0'];
    cases.forEach((c) => {
      expect(() => service.generateUniqueIdWithPrefix(c))
        .withContext(`With value: ${c}`)
        .toThrow();
    });
  });
});
