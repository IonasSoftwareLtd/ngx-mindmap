import { NgxMindmapPage } from './app.po';

describe('ngx-mindmap App', () => {
  let page: NgxMindmapPage;

  beforeEach(() => {
    page = new NgxMindmapPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
