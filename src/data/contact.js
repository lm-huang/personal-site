import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faWeixin } from '@fortawesome/free-brands-svg-icons/faWeixin';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'https://github.com/lm-huang',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://www.linkedin.com/in/lm-huang/',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: '',
    label: 'Weixin',
    icon: faWeixin,
  },
  {
    link: 'contact',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
