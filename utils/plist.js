const plist = {
  init(logoUrl,appUrl,appName) {
    let str = `
          <?xml version="1.0" encoding="UTF-8"?>
          <!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
          <plist version="1.0">
          <dict>
            <key>items</key>
            <array>
              <dict>
                <key>assets</key>
                <array>
                  <dict>
                    <key>kind</key>
                    <string>software-package</string>
                    <key>url</key>
                    <string>${appUrl}</string>
                  </dict>
                  <dict>
                    <key>kind</key>
                    <string>display-image</string>
                    <key>url</key>
                    <string>${logoUrl}</string>
                  </dict>
                  <dict>
                    <key>kind</key>
                    <string>full-size-image</string>
                    <key>url</key>
                    <string>${logoUrl}</string>
                  </dict>
                </array>
                <key>metadata</key>
                <dict>
                  <key>bundle-identifier</key>
                  <string>com.musiyoujia.mall</string>
                  <key>bundle-version</key>
                  <string>1.2.17</string>
                  <key>kind</key>
                  <string>software</string>
                  <key>platform-identifier</key>
                  <string>com.apple.platform.iphoneos</string>
                  <key>title</key>
                  <string>${appName}</string>
                </dict>
              </dict>
            </array>
          </dict>
          </plist>
          `;
          return str
  },
};

module.exports = plist;