const skills = [
  {
    title: 'Javascript',
    competency: 3,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'Java',
    competency: 4,
    category: ['Web Development', 'Languages', 'Java'],
  },
  {
    title: 'HTML/CSS',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Spring Boot',
    competency: 4,
    category: ['Web Development', 'Java'],
  },
  {
    title: 'Spring MVC',
    competency: 4,
    category: ['Web Development', 'Java'],
  },
  {
    title: 'Spring',
    competency: 4,
    category: ['Web Development', 'Java'],
  },
  {
    title: 'React',
    competency: 3,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Amazon Web Services',
    competency: 2,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'MongoDB',
    competency: 3,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'SQL/mySQL',
    competency: 3,
    category: ['Web Development', 'Databases', 'Languages'],
  },
  {
    title: 'Redis',
    competency: 3,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'Express.JS',
    competency: 3,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Git',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'AWS',
    competency: 3,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'Numpy',
    competency: 1,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Jupyter',
    competency: 1,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Python',
    competency: 2,
    category: ['Languages', 'Python', 'Data Science'],
  },
  {
    title: 'MATLAB',
    competency: 1,
    category: ['Languages'],
  },
  {
    title: 'Pandas',
    competency: 1,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Matplotlib',
    competency: 1,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Maven',
    competency: 3,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'Swagger',
    competency: 3,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'Postman',
    competency: 3,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'Lombok',
    competency: 2,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'Mybatis',
    competency: 4,
    category: ['Java', 'Web Development'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.flatMap(({ category }) => category)),
].sort().map((category, index) => ({
  name: category,
  color: colors[index],
}));

export { categories, skills };
