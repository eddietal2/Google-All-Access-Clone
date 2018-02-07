import { GAAPage } from './app.po';

describe('gaa App', () => {
  let page: GAAPage;

  beforeEach(() => {
    page = new GAAPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
