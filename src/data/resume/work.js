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
    name: '1 Thing',
    position: 'Intern | Backend Software Engineer ',
    url: 'https://www.1thing.org/',
    startDate: '2024-08-01',
    endDate: '2024-11-01',
    highlights: [
      'Created a registration system for therapy kits integrated with RESTful APIs by Node.js serving more than 800 clients',
      'Automated real-time data transformation and analysis by AWS lambda to enable scalable serverless management, reducing monthly cost by 54% compared to a provisioned instance',
      'Performed cleaning of the data using PostgreSQL on Linux servers, achieving a 27% reduction in query latency',
    ],
  },
  {
    name: 'Hundsun Electronics',
    position: 'Intern | Software Development Engineer',
    url: 'https://en.hundsun.com/',
    startDate: '2022-07-01',
    endDate: '2022-10-01',
    highlights: [
      'Developed and maintained customized software solutions on-site in collaboration with clients',
      'Restructured the workflow by splitting serial processes into parallel branches with a parallel gateway, using ConcurrentHashMap for thread-safe context management and implementing a merge node for result aggregation, achieving an 81% decrease in execution time',
      'Developed a query interface leveraging Elastic Search to retrieve Rowkeys for HBase, resulting in a 73% improvement in query speed',
      'Addressed the need for real-time message handling over 1,000,000 per second by using Kafka to process user actions and inventory updates instantaneously',
    ],
  },
  {
    name: 'Caitong Securities',
    position: 'Quantitative Research | Research Institute',
    url: 'https://www.ctsec.com/',
    startDate: '2017-07-01',
    endDate: '2018-06-30',
    highlights: [
      'Designed and implemented a Deep Q-Network (DQN)-based index timing strategy. Tested the sensitivity of the discount factor gamma and performed parameter optimization. Achieved a Sharpe ratio of 1.05 over three years on the CSI 1000 index',
      'Optimized the multi-factor model by designing factor layering to address non-linear characteristics of the factors. Backtested the framework resulting in a 126.40% improvement in return and a 20.73% reduction in maximum drawdown',
      '•\tUtilized Pandas and NumPy for data processing, and managed parallel computing using the multiprocessing module, achieving a reduction in strategy execution time from 2 hours to 45 minutes on Alibaba Cloud',
    ],
  },
];

export default work;
