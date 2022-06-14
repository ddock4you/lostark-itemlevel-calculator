import React from "react";

const grade = ['희귀', '영웅', '전설', '유물(일반)', '유물(아브)', '고대', '에스더'];

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
                        {grade.map((v) => <option value={v}>{v}</option>)}
                    </select>
                </dd>
            </dl>
            <dl>
                <dt>강화수치</dt>
                <dd>
                    <input type="text" />
                </dd>
            </dl>
        </div>
    </div>;
};

export default App;
