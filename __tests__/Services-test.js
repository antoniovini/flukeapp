import { fetchPackage } from '../src/services/package';
import { fetchConsumption } from '../src/services/consumption';

// test the package get services
it('package services', async() => {
  const data = await fetchPackage();
  expect(data).toBeDefined();
})

// test user consumption get services
// if all params are correct
it('consumption services, success', async() => {
  const startDate = new Date();
  const endDate = new Date(startDate - 6 * 24 * 60 * 60 * 1000);
  const data = await fetchConsumption(startDate, endDate);
  expect(data).toBeDefined();
})

// test user consumption get services
// if are missing params
it('consumption services, missing arguments', async() => {
  try{
    await fetchConsumption();
  }catch(e){
    expect(e).toMatch("Missing arguments (startDate or endDate)");
  }
})