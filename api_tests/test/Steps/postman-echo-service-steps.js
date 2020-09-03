const { Given, When, Then } = require('cucumber');
const fetch = require('node-fetch');
let url;
let cookies;
let cookieToBeRemoved;

Given('postman echo service', function () {
    url = 'https://postman-echo.com/';
});

When('I set three cookies', function () {
    cookies = "cookie1=chocko&cookie2=white&cookie3=black";
});

When('I set url to retrieve all cookies', function () {
    url + 'cookies'
});

When('I create a paramter to delete a specific cookie', function () {
    cookieToBeRemoved = "cookie1=chocko";
});

Then('the cookies are set', function () {
    fetch(url + 'cookies/set?' + cookies)
    .then(res => res.json())
    .then(json => console.log(json));
});

Then('the set of cookies is retrieved', function () {
    fetch(url + 'cookies')
    .then(res => res.json())
    .then(json => console.log(json));
});

Then('the cookie is removed from the set', function () {
    fetch(url + 'cookies/delete?' + cookieToBeRemoved)
    .then(res => res.json())
    .then(json => console.log(json));
});