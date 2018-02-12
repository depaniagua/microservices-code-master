var requestify     = require("requestify");
	
const apiGatewayUrl = "http://" + API_GATEWAY + "/apps";
console.log("Registering microservice 1 " + apiGatewayUrl);
requestify.request(apiGatewayUrl, {
    method: "POST",
    body: {
        "appName": "microservicio1",
        "hostName": "ip_microservicio1",
        "port": port_microservicio1,
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
        "hostName": "ip_microservicio2",
        "port": port_microservicio2,
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