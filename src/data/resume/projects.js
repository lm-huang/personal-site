/* eslint-disable */
const projects = [
    {
        name: 'SDN Controller ',
        position: 'Golang, AWS',
        summary:'A fault-tolerant SDN controller with OpenFlow, deployed on AWS EKS for scalable network management',
        url: '',
        highlights: [
            'Designed and developed a custom SDN controller using OpenFlow protocol, integrating algorithms and data structure like Raft and MWMR for distributed system to reach consensus and simultaneous access',
            'Utilized network simulation tools such as Mininet for testing and validation, ensuring the correctness and robustness of the controller in various network scenario',
            'Deployed the controller on Amazon EKS involves creating the cluster, pushing Docker images, managing Kubernetes nodes, and monitoring container performance and logs through CloudWatch',
        ],
    },
    {
        name: '911',
        position: 'Data Analysis',
        summary:'Analysing the impact on OHCA(out-of-hospital cardiac arrest) survival rates based on EMS data from NEMSIS',
        url: 'https://github.com/lm-huang/OHCA',
        highlights: [
            'Developed an ETL pipeline to automate the data loading into an SQLite database, facilitating data imputation',
            'Conducted SQL query and analysed through NumPy and Seaborn to compare factors affecting OHCA survival rates ',
            'Implemented logistic regression, random forest, and XGBoost model respectively, achieving the best accuracy of 86.44% ',
        ],
    },
    {
        name: 'GuardianAt12',
        position: 'Frontend-backend Separated',
        summary:'An emergency express STD/HIV prophylaxis application for LGBTQ+ in China to minimize regrets',
        url: '',
        highlights: [
            'Leveraged Spring Boot as the framework, following Object-Oriented Design Principles throughout the implementation',
            'Exercised MySQL and Alibaba Cloud OSS to store data, using Mybatis to process data persistence and Redis to boost efficiency for manipulations over the medicine cart',
            'Developed RESTful APIs using Swagger and implemented order tracking through WebSockets API',
            'Configured statistical analysis and generated charts by Apache POI and Apache Echarts',
        ],
    },
    {
        name: 'Natours',
        position: 'Full Stack',
        url: '',
        summary: 'A pure, unbridled natural exploration route-booking application for adventurers ',
        highlights: [
            'Founded the department alongside the director from its inception, strategically laying the groundwork for the asset custody business. Achieved a milestone of CNY 257.2 billion in 2020 (from 22nd to 9th/104)',
            'Organized the coordination among 3 departments to drive synergies and promote the service to over 400 private funds. Captured a dominant share in the segmented market in 2019 (1st/22)',
        ],
    },
];

export default projects;