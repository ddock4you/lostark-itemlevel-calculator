import React from "react";
import Grade from "../assets/grade";

interface itemPartInfo {
    partname: string;
    changeGrade: any;
    itempart: any;
    maxHonningLevel: any;
    changeHonningLevel: any;
    handleBlur: any;
}

const ItemPart = ({
    partname,
    changeGrade,
    itempart,
    maxHonningLevel,
    changeHonningLevel,
    handleBlur,
}: itemPartInfo) => {
    return (
        <div className="itempart">
            <div>
                <p>{partname}</p>
                <dl>
                    <dt>등급</dt>
                    <dd>
                        <select onChange={changeGrade} value={itempart.grade}>
                            {Grade.map(({ name }) => (
                                <option value={name} key={name}>
                                    {name}
                                </option>
                            ))}
                        </select>
                    </dd>
                </dl>
                <dl>
                    <dt>강화수치</dt>
                    <dd>
                        <input
                            type="number"
                            value={itempart.honningLevel}
                            min="0"
                            max={`${maxHonningLevel(itempart.grade)}`}
                            onChange={changeHonningLevel}
                            onBlur={handleBlur}
                        />
                        <input
                            type="range"
                            min="0"
                            max={`${maxHonningLevel(itempart.grade)}`}
                            step="1"
                            value={itempart.honningLevel}
                            onChange={changeHonningLevel}
                        />
                    </dd>
                </dl>
            </div>
        </div>
    );
};

export default ItemPart;
