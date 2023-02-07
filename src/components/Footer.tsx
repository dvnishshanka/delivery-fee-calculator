import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

import { PageFooter } from './common/styled';

const Footer = () => {
  return (
    <PageFooter>
      <a href="https://www.linkedin.com/in/vidushani-nishshanka/">
        <FontAwesomeIcon icon={faCopyright} />
        <span> dvnishshanka</span>
      </a>
    </PageFooter>
  );
};

export default Footer;
