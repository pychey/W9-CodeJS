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
                    <td>{record.score}</td>
              </tr>
            )}
            </tbody>
          </table>
        </div>
    );
}