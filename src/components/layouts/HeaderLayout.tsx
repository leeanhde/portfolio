import { Button } from 'antd';
import { memo, useState } from 'react';
import { MoonOutlined, SunOutlined } from '@ant-design/icons';
import { LANGUAGE_EN, LANGUAGE_VI, THEME } from '@/constants/common';

const HeaderLayout = () => {
  const [theme, setTheme] = useState(THEME.LIGHT);
  const [language, setLanguage] = useState(LANGUAGE_EN);

  const handleSwitchLanguage = () => {
    if (language === LANGUAGE_EN) {
      setLanguage(LANGUAGE_EN);
    } else {
      setLanguage(LANGUAGE_VI);
    }
  };

  const handleSwitchTheme = () => {
    if (theme === THEME.LIGHT) {
      setTheme(THEME.DARK);
    } else {
      setTheme(THEME.LIGHT);
    }
  };

  return (
    <div>
      <div className='flex-1 flex flex-col'>
        <div className='bg-white px-2 flex items-center justify-between h-15'>
          <div>IMG</div>
          <div>MENU</div>
          <div className='flex items-center gap-2'>
            <Button icon={language === LANGUAGE_EN ? 'EN' : 'VI'} onClick={handleSwitchLanguage} />
            <Button icon={theme === THEME.LIGHT ? <SunOutlined /> : <MoonOutlined />} onClick={handleSwitchTheme} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(HeaderLayout);
