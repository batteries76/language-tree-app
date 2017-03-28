import { LanguageTreePage } from './app.po';

describe('language-tree App', () => {
  let page: LanguageTreePage;

  beforeEach(() => {
    page = new LanguageTreePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
