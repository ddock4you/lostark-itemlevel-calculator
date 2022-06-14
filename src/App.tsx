import React from "react";
import Grade from './assets/grade';

console.log(Grade);

// 유물(아브)는 20강까지, 에스더는 8강까지

const App = () => {
    return <div className="wrap">
        티어: <select>
            <option>3티어 (고정)</option>
        </select>
        <div>
        
        </div>
        <div>
            <p>머리</p>
            <dl>
                <dt>등급</dt>
                <dd>
                    <select>
                        {Grade.map(({name}) => <option value={name} key={name}>{name}</option>)}
                    </select>
                </dd>
            </dl>
            <dl>
                <dt>강화수치</dt>
                <dd>
                    <input type="number" />
                    <input type="range" min="0" max="20" step="1"></input>
                </dd>
            </dl>
        </div>
    </div>;
};

export default App;
