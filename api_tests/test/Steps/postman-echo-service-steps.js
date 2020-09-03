const { Given, When, Then } = require('cucumber');
const fetch = require('node-fetch');
let url;
let paramsToBePosted;
let paramsToBeRemoved;
let fullUrl;

Given('postman echo service', function () {
    url = 'https://postman-echo.com/';
});

When('I set three cookies', function () {
    paramsToBePosted = "cookie1=chocko&cookie2=white&cookie3=black";
});

When('I set url to retrieve all cookies', function () {
    fullUrl = url + 'cookies';
});

When('I create a parameter to delete a specific cookie', function () {
    paramsToBeRemoved = "cookie1=chocko";
});

Then('the cookies are set', function () {
    fetch(fullUrl+ '/set?' + paramsToBePosted)
    .then(res => res.json())
    .then(json => console.log(json));
});

Then('the set of cookies is retrieved', function () {
    fetch(fullUrl)
    .then(res => res.json())
    .then(json => console.log(json));
});

Then('the cookie is removed from the set', function () {
    fetch(fullUrl + '/delete?' + paramsToBeRemoved)
    .then(res => res.json())
    .then(json => console.log(json));
});