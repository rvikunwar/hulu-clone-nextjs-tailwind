import Image from 'next/image';
import hululogo from '../public/images/hululogo.png'
import HeaderItem from './HeaderItem';
import { 
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon 
    } from '@heroicons/react/outline'

function Header() {
    return (
        <header className="flex flex-col sm:flex-row m-5 justify-between 
                            items-center h-auto ">
            <div className="w-full sm:w-auto flex flex-grow items-center justify-evenly 
                            max-w-2xl mt-5 overflow-scroll scrollbar-hide" >
                <HeaderItem title="HOME" Icon={HomeIcon}/>
                <HeaderItem title="TRENDING" Icon={LightningBoltIcon}/>
                <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon}/>
                <HeaderItem title="COLLECTIONS" Icon={CollectionIcon}/>
                <HeaderItem title="SEARCH" Icon={SearchIcon}/>
                <HeaderItem title="ACCOUNT" Icon={UserIcon}/>
            </div>
            <Image 
                src={hululogo} 
                height={90} 
                width={140}
                alt="logo"
                className="object_contain"/>
                
        </header>
    )
}

export default Header



