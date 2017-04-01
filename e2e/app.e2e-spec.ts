import { DonjaiShirtPage } from './app.po';

describe('donjai-shirt App', () => {
  let page: DonjaiShirtPage;

  beforeEach(() => {
    page = new DonjaiShirtPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
