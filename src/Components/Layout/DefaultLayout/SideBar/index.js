import styles from './sideBar.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function Sidebar() {
    return <aside className={cx('wrapper')}>
        <h2>SIDEBAR</h2>
        </aside>;
}

export default Sidebar;
