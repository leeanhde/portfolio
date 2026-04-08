import { User } from '@/assets';
import { LANGUAGE_EN, LANGUAGE_VI, THEME } from '@/constants/common';
import { PATHS } from '@/constants/paths';
import type { HeaderMenuItem } from '@/interfaces/commom';
import { MoonOutlined, SunOutlined } from '@ant-design/icons';
import { Button, Image } from 'antd';
import { t } from 'i18next';
import { memo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const menuItem: HeaderMenuItem[] = [
  {
    key: 'home',
    label: 'header.home',
    path: PATHS.home,
  },
  {
    key: 'about',
    label: 'header.about',
    path: PATHS.about,
  },
  {
    key: 'contact',
    label: 'header.contact',
    path: PATHS.contact,
  },
];

const HeaderLayout = () => {
  const [theme, setTheme] = useState(THEME.LIGHT);
  const [language, setLanguage] = useState(LANGUAGE_EN);
  const navigate = useNavigate();

  const handleSwitchLanguage = () => {
    setLanguage((prev) => (prev === LANGUAGE_EN ? LANGUAGE_VI : LANGUAGE_EN));
  };

  const handleSwitchTheme = () => {
    setTheme((prev) => (prev === THEME.LIGHT ? THEME.DARK : THEME.LIGHT));
  };

  const handleClick = (path: string) => {
    navigate(path);
  };

  return (
    <div>
      <div className='flex-1 flex flex-col'>
        <div className='bg-white px-2 flex items-center justify-between h-15'>
          <div>
            <Image src={User} width={30} height={30} preview={false} />
          </div>

          <div className='flex gap-2'>
            {menuItem.map((item) => (
              <Button type='text' key={item.key} onClick={() => handleClick(item.path)}>
                {t(item.label)}
              </Button>
            ))}
          </div>

          <div className='flex items-center gap-2'>
            <Button onClick={handleSwitchLanguage}>{language === LANGUAGE_EN ? 'EN' : 'VI'}</Button>
            <Button icon={theme === THEME.LIGHT ? <SunOutlined /> : <MoonOutlined />} onClick={handleSwitchTheme} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(HeaderLayout);
