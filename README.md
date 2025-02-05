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

### Grafana Data Sources
Prometheus is automatically configured as the default data source in Grafana through the provisioning system. No manual configuration is required.

### CloudWatch Metrics
The CloudWatch exporter is configured to collect the following EC2 metrics:
- CPUUtilization
- NetworkIn
- NetworkOut
- EBSReadBytes
- EBSWriteBytes

To modify the metrics being collected, edit `cloudwatch-exporter/config.yml`.

### Dashboards
A pre-configured EC2 metrics dashboard is available in Grafana showing:
- CPU Utilization
- Network Traffic (In/Out)
- EBS Disk I/O (Read/Write)

The dashboard is automatically provisioned and will show metrics for all EC2 instances in your configured AWS region.

### Stopping the Services
```bash
docker-compose down
```

To remove all data volumes:
```bash
docker-compose down -v
```
