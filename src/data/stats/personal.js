/* eslint-disable*/
const Age = () => {
  const birthDate = new Date(1993, 8, 27);
  const currentDate = new Date();
  const ageInMilliseconds = currentDate - birthDate;
  const ageInSeconds = ageInMilliseconds / 1000;
  const ageInMinutes = ageInSeconds / 60;
  const ageInHours = ageInMinutes / 60;
  const ageInDays = ageInHours / 24;
  const ageInYears = ageInDays / 365.25;
  const age = Math.floor(ageInYears);
  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'location',
    label: 'Current city',
    value: 'Portland, ME',
  },
];

export default data;
