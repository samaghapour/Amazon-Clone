import { Language, ArrowDropDown } from '@material-ui/icons';
import Link from 'next/link';

const FooterThirdBox = () => {
  return (
    <div id='FooterThirdBox'>
      <div id='FooterThirdBoxCol1'>
        <Link href='/'>
          <div className='icon footer-brand' />
        </Link>
      </div>

      <div id='FooterThirdBoxCol2'>
        <div id='FooterThirdBoxLanguages'>
          <Language fontSize='small' />
          <span>English</span>
          <ArrowDropDown fontSize='small' />
        </div>

        <div id='FooterThirdBoxDollar'>
          <span>$ USD - U.S. Dollar</span>
        </div>

        <div id='FooterThirdBoxFlag'>
          <i />
          <span>United States</span>
        </div>
      </div>
    </div>
  );
};

export default FooterThirdBox;
