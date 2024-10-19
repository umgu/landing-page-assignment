import Button from '../components/Button';
import { getPublicURL } from '../utils';

const Header = () => {
    return (
        <div id="header" className='w-full h-auto p-4 bg-transparent flex flex-col lg:flex-row justify-center items-center lg:justify-between flex-wrap'>
            <div>
                <img src={getPublicURL("/images/logo.png")} alt="Askitect" />
            </div>
            <div>
                <ul className='flex gap-6 items-center list-none text-lg'>
                    <li><span className='menu-icon'>
                        AskitectAI
                        <img src={getPublicURL("/images/icon.png")} alt="AI"></img>
                    </span></li>
                    <li>Solutions</li>
                    <li>Pricing</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li><Button>Log in</Button></li>
                    <li><Button variant="secondary">Sign Up</Button></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;
