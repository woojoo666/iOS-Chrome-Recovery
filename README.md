iOS Chrome Session Recovery
---------------------------

Note: this only works for jailbroken phones, as you need to access mobile Chrome's applicaton folder.

####Retrieving the Backup Files (THE SOONER THE BETTER!!!)

 1. Using some mobile file browser like iFile, go into
    `usr/var/mobile/applications/<chrome application id>/`
 2. Make a backup of `tmp/session.bak`, eg. upload to dropbox, email to yourself
 3. Hopefully the file was not yet overwritten by your new session

####Using the Recovery

 1. Make sure you have [Node.js](http://nodejs.org/) installed
 2. Copy your `session.bak` file to the root of this repository
 3. At the repository root, run `node app.js` on the command line
 4. The program extract all urls from `session.bak` and put them into "urls.txt"
 5. Finished! I recommend using [Session Buddy's](https://chrome.google.com/webstore/detail/session-buddy/edacconmaakjimmfgnblocblbcdcpbko?hl=en) import option to save all your urls or easily open them all at once
