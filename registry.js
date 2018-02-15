var requestify     = require("requestify");
	
const apiGatewayUrl = "http://" + "192.168.50.4:32161" + "/apps";
console.log("Registering microservice 1 " + apiGatewayUrl);
requestify.request(apiGatewayUrl, {
    method: "POST",
    body: {
        "appName": "microservicio1",
        "hostName": "192.168.50.5",
        "port": 30831,
        "service": "/microservicio1",
        "method": "GET"
    },
    headers: {
        'Content-Type': 'application/json'
    }
}).then(function (response) {
    console.log("Service registered successfully to " + apiGatewayUrl);
}).fail(function (response) {
    console.log("Fail register to " + apiGatewayUrl + " " + response);
});

console.log("Registering microservice 2 " + apiGatewayUrl);
requestify.request(apiGatewayUrl, {
    method: "POST",
    body: {
        "appName": "microservicio2",
        "hostName": "192.168.50.5",
        "port": 30747,
        "service": "/microservicio2",
        "method": "GET"
    },
    headers: {
        'Content-Type': 'application/json'
    }
}).then(function (response) {
    console.log("Service registered successfully to " + apiGatewayUrl);
}).fail(function (response) {
    console.log("Fail register to " + apiGatewayUrl + " " + response);
});