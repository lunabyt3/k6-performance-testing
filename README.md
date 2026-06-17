# K6 Performance Testing

## Load Test Scenario (100 Virtual Users)

Configuration:
* Virtual Users (VUs): 100
* Duration: 30 Seconds

## Test Results

| Metric                | Result           |
| --------------------- | ---------------- |
| Total Requests        | 22,358           |
| Failed Requests       | 0                |
| Average Response Time | 131.92 ms        |
| P95 Response Time     | 263.26 ms        |
| Throughput            | 738 Requests/sec |

## Conclusion

The application remained stable under a load of 100 concurrent users. No request failures were observed, and the average response time remained below 200 milliseconds, indicating good performance and responsiveness.


## Load Test Scenario (500 Virtual Users)

Configuration:
* Virtual Users (VUs): 500
* Duration: 1 Minute

## Test Results

| Metric                | Result           |
| --------------------- | ---------------- |
| Total Requests        | 75,177           |
| Failed Requests       | 892 (1.18%)      |
| Average Response Time | 129.95ms         |
| P95 Response Time     | 262.59ms         |
| Throughput            | 936 Requests/sec |

## Conclusion

While average response times remained low, request failures and connection timeout errors were observed under higher load. This suggests the system was approaching its scalability limits.