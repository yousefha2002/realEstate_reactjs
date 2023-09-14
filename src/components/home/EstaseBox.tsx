import { Link } from 'react-router-dom'
import { Estate } from '../../types/Esatate'

type props = {
    estate : Estate
}

export default function EstaseBox({estate}:props) {
    return (
        <Link to="/estate/1">
            <div className='relative overlay overflow-hidden'>
                <div className='hover:scale-105 duration-300'>
                    <img alt="" className='h-[220px] w-[100%] transform transition-all'
                    src={`${process.env.REACT_APP_API_KEY}/uploads/${estate.images[0].path}`}/>
                </div>
                <div className='absolute z-[3] top-4 text-[#ccc] z-2 bg-primary right-4 px-3 py-1 rounded-tl-[4px] rounded-tr-[4px] rounded-br-[4px]'>
                    {estate.type===0?"إيجار":"تمليك"}
                </div>
                <div className='absolute bottom-4 text-white right-8 z-[3]'>
                    <h3 className='text-[14px] font-[500]'>{estate.price + ' ' + estate.currency.title}</h3>
                    <h2 className='text-[20px]'>{estate.title}</h2>
                </div>
            </div>
        </Link>
    )
}
