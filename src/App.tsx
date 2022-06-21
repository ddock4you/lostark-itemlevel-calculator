import React, { useRef, useState } from "react";
import usepart from "./hooks/usepart";
import Grade from "./assets/grade";
import ItemPart from "./components/ItemPart";
import styled from "styled-components";

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

    const headRef = useRef(null);

    const averageLevel = (
        (head.itemLevel +
            shoulders.itemLevel +
            chest.itemLevel +
            legs.itemLevel +
            hands.itemLevel +
            weapon.itemLevel) /
        6
    ).toFixed(2);

    return (
        <div className="wrap">
            티어:{" "}
            <select>
                <option>3티어 (고정)</option>
            </select>
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
