import React, {Component} from 'react';
import Particles from 'react-particles-js';


class ParticleContainer extends Component {
    render() {
        return ( 
           
      <Particles 
      position="relative"
      canvasClassName="canvas"
      height="2200px"
      width="100%"
      backgroundSize="100%"
      
        params={{ 
          
          particles: { 
            number: { 
              value: 700, 
              density: { 
                enable: true, 
                value_area: 4500, 
              } 
            }, 
          }, 
        }} 
      /> 
   
  
   ); 
}
} 
export default ParticleContainer;
