/**
 * Google Apps Script host for Symbiosis Lab.
 *
 * Setup:
 *  1. Create a new project at https://script.google.com
 *  2. Paste this file into Code.gs
 *  3. Add an HTML file named "index" (File > New > HTML) and paste in the full contents of index.html
 *  4. Deploy > New deployment > Web app (Execute as: Me; Who has access: your school domain)
 */
function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('Symbiosis Lab')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
