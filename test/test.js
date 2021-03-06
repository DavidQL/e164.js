/*jslint browser: true, regexp: true, nomen: true, indent:2, white:true, sloppy:true, debug:true */
/*global require*/
/* vim: set ft=javascript: */

var e164 = require('../e164'), assert = require('assert');

assert.deepEqual({country: "Canada", code: "CA"}, e164.lookup('15141234567'));
assert.deepEqual({country: "Toll Free", code: "US"}, e164.lookup('18001231234'));
assert.deepEqual({country: "United States", code: "US"}, e164.lookup('18703434345'));
assert.deepEqual({country: "India", code: "IN"}, e164.lookup('9191'));
assert.deepEqual({country: "Norfolk Island", code: "NF"}, e164.lookup('672322424'));
assert.deepEqual({country: "ICO Global (Mobile Satellite Service)", code: "ZZ"}, e164.lookup('88112311'));
assert.deepEqual({country: "Canada", code: "CA"}, e164.lookup('1418'));
assert.deepEqual({country: "United States", code: "US"}, e164.lookup('1603'));
assert.deepEqual({country: "Malaysia", code: "MY"}, e164.lookup('603'));
assert.deepEqual(undefined, e164.lookup('0'));

console.log("ok");
