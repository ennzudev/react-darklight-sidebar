import AdbIcon from '@mui/icons-material/Adb';
import SideBarNavigationIcon from './SideBarNavigationIcon';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AdjustIcon from '@mui/icons-material/Adjust';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import useDarkMode from '../hooks/useDarkMode';
const SideBarNavigation = () => {
    const [isDarkMode, setIsDarkMode] = useDarkMode();

    const toggleDarkMode = (value) => {
        setIsDarkMode(value);
    };

    return (
        <div className='fixed top-0 left-0 h-screen w-16 flex flex-col justify-between m-0 shadow-lg bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white'>
            <div className='space-y-4'>
                <SideBarNavigationIcon
                    icon={<AccessTimeIcon />}
                    text='Time 🕑'
                />
                <SideBarNavigationIcon
                    icon={<AccountBalanceWalletIcon />}
                    text='Account 💵'
                />
                <SideBarNavigationIcon
                    icon={<AdjustIcon />}
                    text='Adjust 🎯'
                />
                <SideBarNavigationIcon
                    icon={<AdbIcon />}
                    text='Android 📱'
                />
            </div>
            <div>
                {isDarkMode ? (
                    <SideBarNavigationIcon
                        icon={<LightModeIcon />}
                        text='Enable light mode ☀️'
                        onClick={() => toggleDarkMode(!isDarkMode)}
                    />
                ) : (
                    <SideBarNavigationIcon
                        icon={<DarkModeIcon />}
                        text='Enable dark mode 🌙'
                        onClick={() => toggleDarkMode(!isDarkMode)}
                    />
                )}
            </div>
        </div>
    );
};

export default SideBarNavigation;