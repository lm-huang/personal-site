/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Amazon - Ads Creative X',
    position: 'Intern | Software Engineer ',
    url: '',
    startDate: '2025-06-01',
    endDate: '2025-08-22',
    highlights: [
      'Built scalable data transformation and querying workflows using AWS CDK and CloudFormation, cutting engineering turnaround time from months to minutes',
      'Spearheaded a cross-team work of engineering the EMR cluster template and GPU-based training docker image, enabling data scientists to access and process advertising datasets in compliance with Amazon security standards',
      'Engineered 700GB+ of production data using AWS Glue for ETL and SageMaker for training, integrated with MLflow to automate experiment tracking',
    ],
  },
  {
    name: 'IpserLab',
    position: 'Intern | Backend Software Engineer',
    url: '',
    startDate: '2017-07-01',
    endDate: '2018-06-30',
    highlights: [
      'Created a registration system for therapy kits integrated with RESTful APIs by Node.js, serving more than 800 clients',
      'Automated real-time data transformation and analysis by AWS Lambda to enable a scalable serverless architecture, reducing monthly cost by 54%',
      'Containerized backend services with Docker and orchestrated deployments using Kubernetes, streamlining CI/CD, workflows, and ensuring zero-downtime releases',
    ],
  },
  {
    name: 'Hundsun Electronics',
    position: 'Intern | Software Development Engineer',
    url: 'https://en.hundsun.com/',
    startDate: '2022-07-01',
    endDate: '2022-10-01',
    highlights: [
      'Restructured the workflow by splitting serial processes into parallel branches with an inclusive gateway, using ConcurrentHashMap for thread-safe cache management, achieving an 80% decrease in execution time',
      'Injected process services managed by Activiti into Spring Boot to enable cross-team collaboration by modularization',
      'Implemented a custom Kafka interceptor to enrich messages with dynamic field annotations, ensuring real-time processing at a rate exceeding 100,000 requests per second',
    ],
  },
];

export default work;
