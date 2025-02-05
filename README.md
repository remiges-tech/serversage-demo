# ServerSage

ServerSage is an observability product that helps monitor and visualize system metrics using Prometheus and Grafana.

## Local Development Setup

### Prerequisites
- Docker
- Docker Compose

### Getting Started

1. Start the services:
```bash
docker-compose up -d
```

2. Access the services:
   - Prometheus: http://localhost:9090
   - Grafana: http://localhost:3000

### Grafana Login
- Username: admin
- Password: serversage

### Adding Prometheus as a Data Source in Grafana
1. Log in to Grafana
2. Go to Configuration > Data Sources
3. Click "Add data source"
4. Select "Prometheus"
5. Set URL to: http://prometheus:9090
6. Click "Save & Test"

### Stopping the Services
```bash
docker-compose down
```

To remove all data volumes:
```bash
docker-compose down -v
```
