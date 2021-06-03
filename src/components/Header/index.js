import React from 'react'
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import SettingsIcon from '@material-ui/icons/Settings';
import './header.css'

const Header = () => {
    return (
        <div className="header__app">
             <div className="info__user">
             <div className="logo__app">
                <img src="https://doithuong.storage.googleapis.com/wp-content/uploads/2019/10/11104904/yowin-club-logo.png" alt="" />
            </div>
                 <div className="avata__user">
                    <img src="https://store-images.s-microsoft.com/image/apps.28411.13510798887593857.411c7070-8254-4bc7-9822-93212e9b3eaa.d5650289-0ad1-4560-ac30-38a18a1847bb" alt="" />
                 </div>
                 <div className="name__user">
                    <p>devtaixiu</p>
                 </div>
             </div>
             <div className="sodu__user">
                <button>
                   $10000
                </button>
             </div>
             <div className="setting__user">
                 <div className="thongbao">
                  <NotificationsActiveIcon />
                  <p>Sự Kiện </p>
                 </div>
                 <div className="caidat">
                 <SettingsIcon />
                 <p>Cài Đặt</p>
                 </div>
             </div>
        </div>
    )
}

export default Header
