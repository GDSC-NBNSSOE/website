import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import EventIcon from '@mui/icons-material/Event';
import WorkIcon from '@mui/icons-material/Work';

interface HamburgerMenuProps {
  toggle: boolean;
  setToggle: any;
  currentRoute: any
}
const Sidebar: React.FC<HamburgerMenuProps> = ({ toggle, setToggle, currentRoute }) => {
  return (
    <div className='w-[70%] h-screen bg-white fixed top-0 left-0 flex flex-col border-2'>
      <div className='p-5 bg-blue-100 w-full mt-20 flex justify-start item-center border-2 gap-4' onClick={() => setToggle(!toggle)}><HomeIcon/><Link href="/" className={currentRoute === '/' ? 'text-red-700 text-xl font-bold' : 'text-black text-xl'}>Home</Link></div>
      <div className='p-5 bg-blue-100 w-full flex justify-start item-center border-2 gap-4' onClick={() => setToggle(!toggle)}><WorkIcon/><Link href="/projects" className={currentRoute === '/projects' ? 'text-red-700 text-xl font-bold' : 'text-black text-xl'}>Projects</Link></div>
      <div className='p-5 bg-blue-100 w-full flex justify-start item-center border-2 gap-4' onClick={() => setToggle(!toggle)}><GroupIcon/><Link href="/team" className={currentRoute === '/team' ? 'text-red-700 text-xl font-bold' : 'text-black text-xl'}>Team</Link></div>
      <div className='p-5 bg-blue-100 w-full flex justify-start item-center border-2 gap-4' onClick={() => setToggle(!toggle)}><EventIcon/><Link href="/events" className={currentRoute === '/events' ? 'text-red-700 text-xl font-bold' : 'text-black text-xl'}>Events</Link></div>
      {/* <div className='p-5 bg-blue-100 w-full flex justify-start item-center border-2'><Link href="/alumni" className={currentRoute === '/alumni' ? 'text-red-700 text-xl font-bold' : 'text-black text-xl'}>Alumni</Link></div> */}
      <div onClick={() => setToggle(!toggle)} className='absolute top-4 left-3'><CloseIcon className='text-4xl' /></div>
    </div>
  )
}

export default Sidebar