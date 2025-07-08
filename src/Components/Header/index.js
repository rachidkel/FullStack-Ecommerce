import { Link } from 'react-router-dom';
import logo from '../../assest/images/logo.png';
import  Button  from '@mui/material/Button';
import CountryDropdown from '../CountryDropDown';
import { FiUser } from "react-icons/fi";
import { IoBagOutline} from "react-icons/io5";
import SearchBox from './SearchBox/inex';
import Navigation from './Navigation';
import { useContext } from 'react';
import { MyContext } from '../../App';

const Header =()=>{

    const context= useContext(MyContext);
    return(
        <>
        <div className="headerWrapper">
            <header className="header">
                <div className="container">
                    <div className="row">
                        <div className="logoWrapper d-flex align-items-center col-sm-2">
                              <Link  to={'/'}><img src={logo} alt='logo'/></Link> 
                        </div>
                        

                        <div className='col-sm-10 d-flex align-items-center part2'>
                            
                            
                               <CountryDropdown/>
                            
                            
                           
                             
                            <SearchBox/>



                            <div className='part3 d-flex align-items-center ml-auto'>
                                <Button className='circle mr-3'><FiUser/></Button>
                                <div className='ml-auto cartTab d-flex align-items-center'>
                                    <span className='price'>$100 </span>
                                    <div className='position-relative ml-2'>
                                          <Button className='circle'><IoBagOutline/></Button>
                                        <span className='count  d-flex align-items-center justify-content-center'>1</span>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </header>
             

             <Navigation/>

           
           




          </div>
        </>
    )

}

export default  Header;