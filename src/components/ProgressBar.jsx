import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function ProgressBar() {

    const percentage = 66;

    return (       
        <CircularProgressbar
            value={percentage}
            // text={`${percentage}%`}
            text={`Hoje`}
            background
            backgroundPadding={6}
            styles={buildStyles({
            backgroundColor: "#52B6FF",
            textColor: "#fff",
            pathColor: "#fff",
            trailColor: "transparent",
            root: {width: 91, height: 91}
            })}
        />
    );
}

export default ProgressBar;