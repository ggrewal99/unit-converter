import { FaRepeat } from 'react-icons/fa6';
import ThemeSwitcher from './ThemeSwitcher';

const Navbar = () => {
    return (
        <div className='fixed top-0 left-0 md:px-32 px-6 py-5 md:py-10 bg-base-200 w-full flex justify-between items-center opacity-90'>
            <FaRepeat className='md:text-3xl text-2xl' />
            <ThemeSwitcher />
        </div>
    );
};

export default Navbar;
