import http from 'k6/http';
import { sleep } from 'k6';

export default function () {

  var server_list = ["localhost:8081"]
  var endpoint_list = ["/init", "/order","/order/{id}","order_list","/total_order","/rejected_order","/cpu_task", "/random_sleep", "/random_status", "/chain", "/error_test"]

  // Additional API calls on port 8081
  var additionalEndpoints = [
    { method: 'GET', url: 'http://localhost:8082/api/users' },
    { method: 'GET', url: 'http://localhost:8082/api/users/1' },
    {
      method: 'POST',
      url: 'http://localhost:8082/api/users',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: "Savu Davre",
        email: "jane.sss@example.com",
        role: "USER"
      })
    },
    {
      method: 'PUT',
      url: 'http://localhost:8082/api/users/1',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: "Savu Davre",
        email: "jane.sss@example.com",
        role: "USER"
      })
    },
    { method: 'GET', url: 'http://localhost:8082/api/users/2' }
  ];

  additionalEndpoints.forEach(function(endpoint) {
    if (endpoint.method === 'GET') {
      http.get(endpoint.url);
    } else if (endpoint.method === 'POST') {
      http.post(endpoint.url, endpoint.body, { headers: endpoint.headers });
    } else if (endpoint.method === 'PUT') {
      http.put(endpoint.url, endpoint.body, { headers: endpoint.headers });
    }
  });

  // Existing API calls
  server_list.forEach(function(server) {
    endpoint_list.forEach(function(endpoint) {
      http.get("http://" + server + endpoint);
      if (endpoint == "/order" ) {
        http.put("http://" + server + endpoint);
        if (getRandom(1, 20) < 10 ){
          http.put("http://" + server + endpoint);
          http.del("http://" + server + endpoint);
        }
        http.post("http://" + server + endpoint);
      }
    });
  });
  sleep(0.2);
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}