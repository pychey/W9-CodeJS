function isScoreFailing(score){
    return score < 50 ? <td className="warning">{score}</td> : <td>{score}</td>;
}

export default function Scores({courseName, courseResult}) {
    return (
        <div className="scores">
          <h1>{courseName}</h1>

          <table>
            <thead>
              <tr>
                <th>First name</th>
                <th>Last name</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {courseResult.map((record)=>
                <tr>
                    <td>{record.firstName}</td>
                    <td>{record.lastName}</td>
                    {isScoreFailing(record.score)}
              </tr>
            )}
            </tbody>
          </table>
        </div>
    );
}