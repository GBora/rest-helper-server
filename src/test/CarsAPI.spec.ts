import CarsAPI from '../api/cars/CarsAPI';

describe('CARS API', () => {
    it('should return an undefined if you get ask for an ID that does not exist', async () => {
      const car: object = await CarsAPI.getById(0);
      expect(car).toBeFalsy();
    })
})