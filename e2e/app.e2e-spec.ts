import { Ng2DemoPage } from './app.po';

describe('ng2-demo App', function() {
  let page: Ng2DemoPage;

  beforeEach(() => {
    page = new Ng2DemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
