import { TestBed } from '@angular/core/testing';

import { FizzbuzzCheckerService } from './fizzbuzz-checker.service';

describe('FizzbuzzCheckerService', () => {
  let service: FizzbuzzCheckerService;
  
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FizzbuzzCheckerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should check return value of service', ()=>{

    expect(service.checkInput(0)).toBe('0');
    expect(service.checkInput(3)).toBe('Fizz');
    expect(service.checkInput(5)).toBe('Buzz');
    expect(service.checkInput(15)).toBe('FizzBuzz');
    expect(service.checkInput(-2)).toBe('-2'); //UI Doesn't allow negatives at the moment, but this may change

    expect(function(){service.checkInput(undefined)}).toThrow();
    expect(function(){service.checkInput(null)}).toThrow();
    //Null and undefined values should throw errors.


  });
});
