import { Brp4ComponentPage } from './app.po';

describe('brp4-component App', () => {
  let page: Brp4ComponentPage;

  beforeEach(() => {
    page = new Brp4ComponentPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
