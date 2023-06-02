import { FaSpinner } from 'react-icons/fa';
import logo from './assets/logo.png'

export default function Loading() {
 return  (
        <div className="h-screen flex items-center justify-center bg-blue-600">
            <div className='h-fit flex flex-col items-center justify-center gap-5'>
                <div className="w-full flex flex-col items-center justify-center m-auto">
                    <img priority="true" src={logo} alt="logo" className="w-1/3 h-1/2 object-cover" />
                    <FaSpinner color='#fff' className="animate-spin mt-5 text-4xl white" />
                </div>
            </div>
        </div>
    ) 
}