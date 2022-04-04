import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { useContext } from 'react';

import UserContext from '../../contexts/UserContext';

function ProgressBar() {

    const { progress } = useContext(UserContext);
    const percentage = progress;

    return (       
        <CircularProgressbar
            style={{ textDecoration: 'none'}}
            value={progress > 0 ? percentage : 0}
            //text={`${percentage}%`}
            text={`Hoje`}
            background
            backgroundPadding={6}
            styles={buildStyles({
            backgroundColor: "#52B6FF",
            textColor: "#fff",
            pathColor: "#fff",
            trailColor: "transparent",
            })}
        />
    );
}

export default ProgressBar;