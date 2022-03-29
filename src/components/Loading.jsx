import { Oval } from  'react-loader-spinner'
import styled from 'styled-components';

function Loading() {
    return(
        <Load>
            <Oval
            ariaLabel="loading-indicator"
            height={20}
            width={20}
            strokeWidth={5}
            color="#126BA5"
            secondaryColor="white"
            />
        </Load>
    );
}

export default Loading;

const Load = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;