module.exports = {
  launch: {
    defaultViewport: {
      width: 1920,
      height: 1080
    },
    dumpio: true,
    devtools: false,
    headless: true,
    slowMo: 100,
    args: [
      "--window-size=1920,1080",
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--homedir=/tmp",
      "--data-path=/tmp/data-path",
      "--disk-cache-dir=/tmp/cache-dir",
      "--remote-debugging-port=9222",
      '--proxy-server="direct://"',
      "--proxy-bypass-list=*",
      "--disable-background-timer-throttling",
      "--disable-backgrounding-occluded-windows",
      "--disable-renderer-backgrounding"
    ]
  },
  server: {
    command: `npm start`,
    port: 3001,
    launchTimeout: 30000,
    usedPortAction: "ignore",
    debug: true
  }
};
