import {ButtonContainer} from './styles'

const Button = ({label, onClick, bgColor}) => {
    return (
      <ButtonContainer onClick={onClick} style={{ backgroundColor: bgColor, color: bgColor === '#D4D4D2' ? '#17181A' : 'white'}}>

        {label}
        
      </ButtonContainer>
    );
  }
  
  export default Button;
  