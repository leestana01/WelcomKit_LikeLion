import { styled } from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import WelcomeKit from './WelcomeKit';
import SelectMenu from './SelectMenu';

const HeaderContainer = styled.header`
    display: flex;
    align-items: center;

    height: 80px;
    // padding: 10px;

    border-top : 3px solid #785A28;

    color: #D1C294;
    background: #0A161E;

    gap: 30px;
`;

export default function Header() {
    const location = useLocation();
    const navigate = useNavigate();
    const menus = [
      { name: '환영합니다', path: '/main' },
      { name: '멋쟁이사자처럼 소개', path: '/main/introduction' },
      { name: '마니또를 찾아라!', path: '/main/manitto' },
      { name: '운영진 전용 페이지', path: '/managerpage' },
    ];
  
    return (
      <HeaderContainer>
        <WelcomeKit onClick={() => navigate('/main/welcomekit/boxopen')}>운영진의 마음</WelcomeKit>
        {menus.map((menu) => (
          <SelectMenu
            key={menu.name}
            className={location.pathname === menu.path ? 'selected' : ''}
            onClick={() => navigate(menu.path)}
          >
            {menu.name}
          </SelectMenu>
        ))}
      </HeaderContainer>
    );
  };