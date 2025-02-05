# ServerSage

ServerSage is an observability product that helps monitor and visualize system metrics using Prometheus, Grafana, and AWS CloudWatch metrics.

## Local Development Setup

### Prerequisites
- Docker
- Docker Compose
- AWS Account with appropriate IAM credentials

### Getting Started

1. Set up AWS credentials:
   ```bash
   cp .env.example .env
   ```
   Edit `.env` and add your AWS credentials:
   - AWS_ACCESS_KEY_ID
   - AWS_SECRET_ACCESS_KEY

   The IAM user should have permissions to read CloudWatch metrics.

2. Start the services:
   ```bash
   docker-compose up -d
   ```

3. Access the services:
   - Prometheus: http://localhost:9090
   - Grafana: http://localhost:3000
   - CloudWatch Exporter: http://localhost:9106/metrics

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

### CloudWatch Metrics
The CloudWatch exporter is configured to collect the following metrics:
- EC2:
  - CPUUtilization
  - NetworkIn
  - NetworkOut
- RDS:
  - CPUUtilization
  - FreeStorageSpace

To modify the metrics being collected, edit `cloudwatch-exporter/config.yml`.

### Stopping the Services
```bash
docker-compose down
```

To remove all data volumes:
```bash
docker-compose down -v
```
