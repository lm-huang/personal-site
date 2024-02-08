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
    name: 'Hundsun Electronics',
    position: 'Intern | Software Development Engineer',
    url: 'https://en.hundsun.com/',
    startDate: '2022-07-01',
    endDate: '2022-10-01',
    highlights: [
      'Developed and maintained customized software solutions on-site in collaboration with clients',
      'Engineered a cloud storage reduction layer with Spring and Mybatis independently, enhancing query efficiency by 60% from Alibaba Cloud OSS and MySQL database',
      'Established APIs for contract downloading, fee calculation, and rules implementation for new product launching using Java servlet for clients',
      'Executed comprehensive unit tests using JUnit, ensuring robust code quality',
    ],
  },
  {
    name: 'Caitong Securities',
    position: 'Vice President | Asset Custody',
    url: 'https://www.ctsec.com/',
    startDate: '2017-07-01',
    highlights: [
      'Founded the department alongside the director from its inception, strategically laying the groundwork for the asset custody business. Achieved a milestone of CNY 257.2 billion in 2020 (from 22nd to 9th/104)',
      'Organized the coordination among 3 departments to drive synergies and promote the service to over 400 private funds. Captured a dominant share in the segmented market in 2019 (1st/22)',
    ],
  },
];

export default work;
