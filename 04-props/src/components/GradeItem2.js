import React from 'react';
import PropTypes from 'prop-types';

const GradeItem2 = ({ name, sex, kor, eng, math, sinc }) => {
    const sum = parseInt(kor + eng + math + sinc);
    const avg = parseInt(sum / 4);

    return (
        <tr align="center">
            <td><strong>{name}</strong></td>
            <td>{sex}</td>
            <td>{kor}</td>
            <td>{eng}</td>
            <td>{math}</td>
            <td>{sinc}</td>
            <td><strong>{sum}</strong></td>
            <td><strong>{avg}</strong></td>
        </tr>
    );
};

GradeItem2.propTypes = {
    name: PropTypes.string.isRequired,
    sex: PropTypes.string.isRequired,
}

GradeItem2.defaultProps = {
    kor: 0,
    eng: 0,
    math: 0,
    sinc: 0,
}

export default GradeItem2;