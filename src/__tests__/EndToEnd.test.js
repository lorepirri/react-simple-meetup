import puppeteer from 'puppeteer';

describe('show/hide an event details', () => {
  // Problem: "Timeout - Async callback was not invoked within the 5000ms timeout specified by jest"
  // https://stackoverflow.com/questions/49603939/async-callback-was-not-invoked-within-the-5000ms-timeout-specified-by-jest-setti
  jest.setTimeout(30000);    
  let browser;
  let page;
  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 250,
    });
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.Event');
  });

  afterAll(() => {
    browser.close();
  });

  test('An event element is collapsed by default', async () => {
    const detailsPanel = await page.$('.Event .details-panel');
    expect(detailsPanel).toBeNull();
  });

  test('User can expand an event to see its details', async () => {
    await page.click('.Event .details');

    const detailsPanel = await page.$('.Event .details-panel');
    expect(detailsPanel).toBeDefined();
  });

  test('User can expand an event to see its details', async () => {
    await page.click('.Event .details');

    const detailsPanel = await page.$('.Event .details-panel');
    expect(detailsPanel).toBeNull();
  });
});
