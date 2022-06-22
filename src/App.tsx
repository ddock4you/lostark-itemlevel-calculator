import React, { useRef, useState, ChangeEvent } from "react";
import usepart from "./hooks/usepart";
import GradeList from "./components/GradeList";
import ItemPart from "./components/ItemPart";
import styled from "styled-components";
import Grade from "./assets/grade";

// 유물(아브)는 20강까지, 에스더는 8강까지
// Head, Shoulders, Chest, Hands and Legs.

const ItemGroup = styled.div`
    & {
        display: flex;
        flex-wrap: wrap;
    }

    & > div {
        border: 1px solid #ddd;
    }
`;

const App = () => {
    const {
        item: head,
        changeGrade,
        changeHonningLevel,
        handleBlur,
        maxHonningLevel,
    } = usepart();

    const {
        item: hands,
        changeGrade: handsChangeGrade,
        changeHonningLevel: handsChangeHonningLevel,
        handleBlur: handsHandleBlur,
        maxHonningLevel: handsMaxHonningLevel,
    } = usepart();

    const {
        item: shoulders,
        changeGrade: shouldersChangeGrade,
        changeHonningLevel: shouldersChangeHonningLevel,
        handleBlur: shouldersHandleBlur,
        maxHonningLevel: shouldersMaxHonningLevel,
    } = usepart();

    const {
        item: chest,
        changeGrade: chestChangeGrade,
        changeHonningLevel: chestChangeHonningLevel,
        handleBlur: chestHandleBlur,
        maxHonningLevel: chestMaxHonningLevel,
    } = usepart();

    const {
        item: legs,
        changeGrade: legsChangeGrade,
        changeHonningLevel: legsChangeHonningLevel,
        handleBlur: legsHandleBlur,
        maxHonningLevel: legsMaxHonningLevel,
    } = usepart();

    const {
        item: weapon,
        changeGrade: weaponChangeGrade,
        changeHonningLevel: weaponChangeHonningLevel,
        handleBlur: weaponHandleBlur,
        maxHonningLevel: weaponMaxHonningLevel,
    } = usepart();

    const averageLevel = (
        (head.itemLevel +
            shoulders.itemLevel +
            chest.itemLevel +
            legs.itemLevel +
            hands.itemLevel +
            weapon.itemLevel) /
        6
    ).toFixed(2);

    const changeAllGrade = (e: ChangeEvent<HTMLSelectElement>) => {
        console.log(e.target.value);
        legsChangeGrade(e);
    };

    return (
        <div className="wrap">
            티어:{" "}
            <select>
                <option>3티어 (고정)</option>
            </select>
            <div className="change-all" style={{ border: "1px solid #ddd" }}>
                <p>일괄수정</p>
                <dl>
                    <dt>등급</dt>
                    <dd>
                        <GradeList
                            changeGrade={changeAllGrade}
                            itempart={Grade[0].name[0]}
                        />
                    </dd>
                </dl>
                <dl>
                    <dt>강화수치</dt>
                    <dd>
                        <input
                            type="number"
                            value="0"
                            min="0"
                            max="25"
                            // onChange={}
                            // onBlur={}
                        />
                        <input
                            type="range"
                            min="0"
                            max="25"
                            step="1"
                            value="0"
                            // onChange={changeHonningLevel}
                        />
                    </dd>
                </dl>
            </div>
            <ItemGroup>
                <ItemPart
                    partname="머리"
                    changeGrade={changeGrade}
                    itempart={head}
                    maxHonningLevel={maxHonningLevel}
                    changeHonningLevel={changeHonningLevel}
                    handleBlur={handleBlur}
                />
                <ItemPart
                    partname="팔"
                    changeGrade={handsChangeGrade}
                    itempart={hands}
                    maxHonningLevel={handsMaxHonningLevel}
                    changeHonningLevel={handsChangeHonningLevel}
                    handleBlur={handsHandleBlur}
                />
                <ItemPart
                    partname="어깨"
                    changeGrade={shouldersChangeGrade}
                    itempart={shoulders}
                    maxHonningLevel={shouldersMaxHonningLevel}
                    changeHonningLevel={shouldersChangeHonningLevel}
                    handleBlur={shouldersHandleBlur}
                />
                <ItemPart
                    partname="상의"
                    changeGrade={chestChangeGrade}
                    itempart={chest}
                    maxHonningLevel={chestMaxHonningLevel}
                    changeHonningLevel={chestChangeHonningLevel}
                    handleBlur={chestHandleBlur}
                />
                <ItemPart
                    partname="하의"
                    changeGrade={legsChangeGrade}
                    itempart={legs}
                    maxHonningLevel={legsMaxHonningLevel}
                    changeHonningLevel={legsChangeHonningLevel}
                    handleBlur={legsHandleBlur}
                />
                <ItemPart
                    partname="무기"
                    changeGrade={weaponChangeGrade}
                    itempart={weapon}
                    maxHonningLevel={weaponMaxHonningLevel}
                    changeHonningLevel={weaponChangeHonningLevel}
                    handleBlur={weaponHandleBlur}
                />
            </ItemGroup>
            <p>종합 평균 레벨: {averageLevel}</p>
        </div>
    );
};

export default App;
