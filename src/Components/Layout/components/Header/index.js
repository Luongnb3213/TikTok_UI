import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/Images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner} from '@fortawesome/free-solid-svg-icons';


const cx = classNames.bind(styles);

function Header() {
    console.log(cx);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="tiktok" />
                </div>
                <div className={cx('search')}>
                    <input placeholder='Search account and videos....' spellCheck={true} />
                    <button className={cx('clear')}>
                        {/* Clear */}
                        <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                    </button>
                    {/* Loading */}
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner}></FontAwesomeIcon>
                    <button className={cx('search-btn')}>
                        {/* Search */}
                        <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                    </button>
                </div>

                <div className={cx('actions')}>
                    
                </div>
            </div>
        </header>
    );
}

export default Header;
