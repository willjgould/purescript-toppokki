import puppeteer from "puppeteer-core";

export const _puppeteer = puppeteer;

export const _launch = function(options) {
  return function() {
    return puppeteer.launch(options);
  };
}

export const _launchChromeAWS = function(chromium, options) {
  return function() {
    return chromium.puppeteer.launch(options);
  };
}

export const _newPage = function(browser) {
  return function() {
    return browser.newPage();
  };
}

export const _pages = function(browser) {
  return function() {
      return browser.pages();
  };
};

export const _goto = function(url, page) {
  return function() {
    return page.goto(url);
  };
}

export const _close = function(browser) {
  return function() {
    return browser.close();
  };
}

export const _content = function(page) {
  return function() {
    return page.content();
  };
}

export const _screenshot = function(options, page) {
  return function() {
    return page.screenshot(options);
  };
}

export const _pdf = function(options, page) {
  return function() {
    return page.pdf(options);
  };
}

export const _on = function(event, callback, page) {
  return page.on(event, callback);
}

export const _pageWaitForSelector = function(selector, options, page) {
  return function() {
    return page.waitForSelector(selector, options);
  };
}

export const _focus = function(selector, page) {
  return function() {
    return page.focus(selector);
  };
}

export const _select = function(selector, string, page) {
  return function() {
    return page.select(selector, string);
  };
}

export const _type = function(selector, content, options, page) {
  return function() {
    return page.type(selector, content, options);
  };
}

export const _setViewport = function(viewport, page) {
  return function() {
    return page.setViewport(viewport);
  };
}

export const _click = function(selector, page) {
  return function() {
    return page.click(selector);
  };
}

export const _waitForNavigation = function(options, page) {
  return function() {
    return page.waitForNavigation(options);
  };
}

export const _getLocationHref = function(page) {
  return function() {
    return page.evaluate(function() {
      return window.location.href;
    });
  };
}

export const _unsafeEvaluateOnNewDocument = function(string, page) {
  return function() {
     return page.evaluateOnNewDocument(string);
  }
}

export const _unsafeEvaluateStringFunction = function(string, page) {
  return function() {
    return page.evaluate(string);
  };
}

export const _unsafePageEval = function(selector, fnStr, page) {
  return function() {
    return page.$eval(selector, eval(fnStr));
  };
}

export const _unsafePageEvalAll = function(selector, fnStr, page) {
  return function() {
    return page.$$eval(selector, eval(fnStr));
  };
}

export const _keyboardDown = function(string, options, page) {
  return function() {
    return page.keyboard.down(string, options);
  };
}

export const _keyboardPress = function(key, options, page) {
  return function() {
    return page.keyboard.press(key, options);
  };
}

export const _keyboardSendCharacter = function(char, page) {
  return function() {
    return page.keyboard.sendCharacter(char);
  };
}

export const _keyboardType = function(text, options, page) {
  return function() {
    return page.keyboard.type(text, options);
  };
}

export const _keyboardUp = function(string, options, page) {
  return function() {
    return page.keyboard.up(string, options);
  };
}

export const _setUserAgent = function(string, page) {
  return function() {
    return page.setUserAgent(string);
  };
}

export const _bringToFront = function(page) {
  return function() {
    return page.bringToFront();
  };
};

export const _addScriptTag = function(url, page) {
  return function() {
      return page.addScriptTag({url: url});
  };
};

export const _consoleMessageText = function(consoleMessage) {
   return function() {
      let ret = consoleMessage.text();
      if(ret)
         return ret;
      else
         return "";
   };
};
