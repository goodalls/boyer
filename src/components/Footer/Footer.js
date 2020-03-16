import React from 'react'
import swirl from '../../Assets/swirl.gif';
import "./Footer.scss";

export default function Footer() {
    return (
        <div className="Footer">

            <tr bgcolor="#330000">
                <td height="35">&nbsp;</td>
                <td bgcolor="#330000" height="35">
                    <div class="style5" align="center">&copy; 2020 Cami Boyer&nbsp;&nbsp;&nbsp;<img src={swirl} align="absmiddle" width="60" />&nbsp;&nbsp;&nbsp;Licensed Professional Counselor, Licensed Addiction Counselor, Master Addictions Counselor</div>
                </td>
                <td height="35">&nbsp;</td>
            </tr>
         
        </div>
    )
};
