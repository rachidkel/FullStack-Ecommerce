import React from 'react';
import  Button  from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa6";
import Dialog from '@mui/material/Dialog';
import { IoSearch } from "react-icons/io5";
import {MdClose} from "react-icons/md";
import { useState } from 'react';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CountryDropdown=()=>{

    const [isOpenModal, setisOpenModal]= useState(false);
    
    return(
        <>
        <Button className='countryDrop' onClick={()=>setisOpenModal(true)}>
          <div className='info d-flex flex-column'>
              <span className='label'>Your Location</span>
              <span className='name'>Algeria</span>
           </div>
           <span className='ml-auto'><FaAngleDown/></span>
       </Button>


        <Dialog  open={isOpenModal} onClose={()=>setisOpenModal(false)} className='locationModal' TransitionComponent={Transition}>
            <h4 className='mb-0'>Choose your Delivery Lovation</h4>
            <p>Enter your address and we will Specify the offer for you area.</p>
            <Button className='close' onClick={()=>setisOpenModal(false)}><MdClose/></Button>
             
            <div className='headerSeach w-100'>
              <input type='text' placeholder='Search your area...'/>
              <Button ><IoSearch/></Button>
            </div>

            <ul className='countrylist mt-3'>
                <li><Button onClick={()=>setisOpenModal(false)}> Alger </Button></li>
                <li><Button onClick={()=>setisOpenModal(false)}>Sétif  </Button></li>
                <li><Button onClick={()=>setisOpenModal(false)}> Annaba </Button></li>
                <li><Button onClick={()=>setisOpenModal(false)}> Boumerdès </Button></li>
                <li><Button onClick={()=>setisOpenModal(false)}>Batna  </Button></li>
                <li><Button onClick={()=>setisOpenModal(false)}>  Bejaïa</Button></li>
                <li><Button onClick={()=>setisOpenModal(false)}> Biskra </Button></li>
                <li><Button onClick={()=>setisOpenModal(false)}>  Constantine </Button></li>
                <li><Button onClick={()=>setisOpenModal(false)}> Blida </Button></li>
                <li><Button onClick={()=>setisOpenModal(false)}> Oran  </Button></li>
                <li><Button onClick={()=>setisOpenModal(false)}> Tizi Ouzou </Button></li>
                <li><Button onClick={()=>setisOpenModal(false)}> Tlemcen  </Button></li>
                <li><Button onClick={()=>setisOpenModal(false)}> Mostaganem </Button></li>
                <li><Button onClick={()=>setisOpenModal(false)}> Skikda</Button></li>
                <li><Button onClick={()=>setisOpenModal(false)}> Bouira</Button></li>

                <li><Button onClick={()=>setisOpenModal(false)}>  Tipaza </Button></li>
                <li><Button onClick={()=>setisOpenModal(false)}> Sidi Bel Abbès   </Button></li>
                <li><Button onClick={()=>setisOpenModal(false)}> Aïn Témouchent </Button></li>
                <li><Button onClick={()=>setisOpenModal(false)}> Guelma </Button></li>
                <li><Button onClick={()=>setisOpenModal(false)}> El Tarf</Button></li>

               






            </ul>
      


        </Dialog>



        </>
    )
}

export default CountryDropdown;




