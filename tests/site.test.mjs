import test from 'node:test';import assert from 'node:assert/strict';import {readFile,access} from 'node:fs/promises';
const html=await readFile('index.html','utf8');
test('All internal anchors resolve',()=>{for(const [,id] of html.matchAll(/href="#([^"]+)"/g))assert.ok(html.includes(`id="${id}"`),id)});
test('All local assets exist',async()=>{for(const [,path] of html.matchAll(/(?:src|href)="\/(assets\/[^\"]+|styles.css|main.js)"/g))await access(path)});
test('Business schema has correct address, phone and hours',()=>{const schema=JSON.parse(html.match(/application\/ld\+json">(.*?)<\/script>/s)[1]);assert.equal(schema.telephone,'+19788766231');assert.equal(schema.address.streetAddress,'1295 Williston Rd');assert.equal(schema.openingHoursSpecification[0].dayOfWeek.length,6);assert.ok(!schema.openingHoursSpecification[0].dayOfWeek.includes('Monday'))});
