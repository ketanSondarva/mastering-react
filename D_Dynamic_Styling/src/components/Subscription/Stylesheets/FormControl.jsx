import './Container.css'
import styled from 'styled-components';

// for information purpose, not used in any component!

const FormControl = styled.div`
    {
        color: ${props => props.color};
        box-shadow: 0 2px 8px rgba(0,0,0,0.25);
        border-radius: 12px;
    };
    &:hover {
        border:red;
    };
    &input {
        font: inherit;
        padding: 0.5rem;
        border-radius: 6px;
        border: 1px solid ${props => props.color};
        width: 20rem;
        max-width: 100%
    };
`;

export default FormControl