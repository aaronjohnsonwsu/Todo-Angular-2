import { YoutubeAngular2Page } from './app.po';

describe('youtube-angular2 App', function() {
  let page: YoutubeAngular2Page;

  beforeEach(() => {
    page = new YoutubeAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
