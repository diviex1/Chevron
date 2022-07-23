// import React from 'react'
// import {FaChevronCircleLeft, FaChevronCircleRight} from 'react-icons/fa'
// import { details } from './Data'

// const Section = () => {
//     const [currentImg, setCurrentImg] = React.useState(1)
//     function handleLeft(){
//         setCurrentImg(currentImg +1)
//     }
   
//     function handleRight(){
//         setCurrentImg(currentImg -1)
//     }
    
//   return (
//     <div className='carousel'>
//         <div className='carousel-Inner' style={{backgroundImage:`url(${details[currentImg].img})`}}>
//             <div className='left'>
//             <FaChevronCircleLeft onClick={handleLeft} size={50}/>
//             </div>

//             <div className='center'>
//             {/* <img src={details[0].img} alt="" /> */}
//                 <h2>{details[0].title}</h2>
//             </div>

//             <div className='right'>
//                 <FaChevronCircleRight onClick={handleRight} size={50}/>
//             </div>

//         </div>
        
//     </div>
//   )
// }

// export default Section