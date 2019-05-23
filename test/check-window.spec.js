'use strict';

const {By, Target} = require('@applitools/eyes.webdriverio');

describe('EyesServiceTest', () => {

  beforeEach(() => {
    browser.url('http://applitools.github.io/demo/TestPages/FramesTestPage/');
  });

  it.skip('checkWindow', () => {
    browser.eyesCheckWindow('main');
  });

  it.skip('checkWindow - no title', () => {
    browser.eyesCheckWindow();
  });

  it('checkRegion', () => {
    browser.eyesCheckWindow('main', Target.region(By.id("overflowing-div")));
  });

  it.skip('checkFrame', () => {
    browser.eyesCheckWindow('main', Target.frame("frame1"));
  });

});
