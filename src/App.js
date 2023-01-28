import './App.css';
import Item from './component/Item';
import TocIcon from '@mui/icons-material/Toc';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsRemoteIcon from '@mui/icons-material/SettingsRemote';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import { motion } from 'framer-motion';
import { useState } from 'react';


function App() {
 const[open,setOpen] =useState(true);

//for collapsing sidebar
const handleToggle = () => {
  setOpen(!open)
}



const sideContainerVariants ={
  true :{
    width:'15rem',
  }, 
  false: {
    transition: {
      delay:0.6
    }
  }
}

const sidebarVariants={
  true:{},
  false: {
    width:'3rem',
    transition :{
      delay: 0.4
    }
  }
}


const profileVariants ={
  true: {
    alignSelf : "center",
    width: '4rem'
  },
  false: {
    alignSelf: 'flex-start',
    marginTop : '2rem',
    width: '3rem'
  }
}





  return (
 <div className="App">
    <motion.div
    data-Open = {open}
    variants={sideContainerVariants}
    initial={`${open}`}
    animate={`${open}`}
   
     className="sidebar_container">


     {/* sidebar div */}
        <motion.div className="sidebar"
        initial={`${open}`}
    animate={`${open}`}
    variants={sidebarVariants}>
            {/* lines_icon */}
            <motion.div 
            whileHover={{
              scale:1.2,
              rotate:180,
              backgroundColor:"rgba (255,255,255,0.3)",
              backdropFilter:"blur(3.5px)",
              WebkitBackdropFilter:"blur(3.5px)",
              border:"1px solid rgba(255,255,255,0.18)",
              transition : {
                delay:0.2,
                duration:0.4,
              }
            }}
            onClick={handleToggle}
            className="lines_icon">
                <TocIcon/>
            </motion.div>


            {/* profile */}
            <motion.div
            layout
            className="profile"
             initial={`${open}`}
            animate={`${open}`}
            variants={profileVariants}
            transition={{duration:0.4}}
            whileHover={{
              backgroundColor:"rgba (255,255,255,0.3)",
              boxShadow:"0 8px 32px 0 rgba(31,38,135,0.37)",
              backdropFilter:"blur(5.5px)",
              WebkitBackdropFilter:"blur(5.5px)",
              border:"1px solid rgba(255,255,255,0.18)",
              cursor:'pointer'
            }}
            >
                <img
                    src="https://scontent.fskp2-1.fna.fbcdn.net/v/t1.6435-9/47271118_1840840259347779_8304310530852519936_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=vKVK3h9LEl4AX98hN6X&_nc_ht=scontent.fskp2-1.fna&oh=00_AfAHYXaE_tO7TMkdOCCdz9ua9g9CYuSiTDAJt1Ibn0E2Ww&oe=63D41B8A"
                    alt="profile_img"/>
            </motion.div>


            {/* groups */}
            <div className="groups">
                    {/*Group 1   */}
                <div className="group">
                
                    <motion.h3 
                    animate={{opacity: open ? 1 : 0 ,height : open? 'auto' : 0}}
                    >ANALTICTS</motion.h3>
                    <Item icon={<DashboardIcon />}
                      name='Dashboard'/>
                      <Item icon={<BarChartIcon/>} 
                      name='Performance '/>
                </div>
            </div>
            {/* group 2 */}
            <div className="group">
              <motion.h3
              animate={{opacity: open ? 1 : 0 ,height : open? 'auto' : 0}}
              >Content</motion.h3>
              <Item icon={<AttachMoneyIcon/>}
              name='Sales' />
              <Item icon={<AssignmentTurnedInIcon/>} 
                name='Checklist'
              />
              <Item icon={<AccountCircleIcon/>} 
              name='Customers'/>
            </div>
            <div className="group">
              {/* group 3  */}
              <motion.h3
              animate={{opacity: open ? 1 : 0 ,height : open? 'auto' : 0}}
              >CUSTOMIZATION</motion.h3>
               <Item icon={<SettingsRemoteIcon/>} 
               name='Segments'/>
               <Item icon={<ColorLensIcon/>} 
                name='Themems'
               />
            </div>
        </motion.div>
    </motion.div>
     
     
     
     
     
     
     
     
     <div className="body_container">
    
     {/* i am body
     <hr/>i am a body
     <hr/>i am a body
     <hr/>i am a body
     <hr/>i am a body
     <hr/>i am a body
     <hr/>i am a body
     <hr/>i am a body
     <hr/>i am a body
     <hr/>i am a body
     <hr/>i am a body
     <hr/>i am a body
     <hr/>i am a body
     <hr/>i am a body
     <hr/>i am a body
     <hr/>i am a body
     <hr/>i am a body */}
     </div>
    </div>
  );
}

export default App;
