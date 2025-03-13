function getAverage(courseResult){
    let total = 0;
    courseResult.forEach(record => { total += record.score });
    return (total/courseResult.length).toFixed(2);
}

function getMin(courseResult){
    let min = 100;
    courseResult.forEach(record => {
        if(record.score < min){
            min = record.score;
        }
    })
    return min;
}

function getMax(courseResult){
    let max = 0;
    courseResult.forEach(record => {
        if(record.score > max){
            max = record.score;
        }
    })
    return max;
}

export default function Statistic({courseResult}){
    return (
        <tbody>
            <tr className="statisticNumber">
                <td>{getAverage(courseResult)}</td>
                <td>{getMin(courseResult)}</td>
                <td>{getMax(courseResult)}</td>
            </tr>
        </tbody>
    );
}