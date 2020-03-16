import React from 'react';
import "./Home.scss";
import spacer from '../../Assets/spacer.gif';
import aspens from '../../Assets/aspens.jpg';

export default function Home() {
    return (
        <div>
            <tr>
                <td width="150"><img src={spacer} height="1" width="150" /></td>
                <td><img src={spacer} height="2" /></td>
                <td><img src={spacer} height="2" /></td>
            </tr>
            <tr>
                <td>&nbsp;</td>
                <td bgcolor="#bed199">
                    <table border="0" cellpadding="0" cellspacing="20" width="100%">
                        <tbody>
                            <tr>
                                <td width="32%"><img src={aspens} width="400" /></td>
                                <td width="68%">
                                    <div align="center"><span class="style6">Great things are done <br /> by a series of small things <br /> brought together.<br /> <br /> ~ Vincent Van Gogh</span></div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
                <td>&nbsp;</td>
            </tr>
            <tr>
                <td>&nbsp;</td>
                <td><span class="style3"> </span>
                    <table border="0" cellpadding="0" cellspacing="20" width="100%">
                        <tbody>
                            <tr>
                                <td><span class="style3">Welcome! My goal as a therapist is to help others find the change, growth, or healing they are seeking. I strive to make my practice consistent with the basic tenants I believe about therapy. I believe that change is possible and though our past cannot change, we are still able to influence our future. I believe that therapy can assist us to gain a better perspective and insight to the solutions to achieve our goals. I recognize that commonly people have spent a great deal of time already trying to solve and overcome whatever issue they have at hand before they seek therapy. Though the desired result may not have been produced, the time spent can serve as a useful starting point in therapy to help us find the solutions that are the best match. I believe that it is possible to find happiness and peace in life, and that we can work together to find your solutions. </span></td>
                            </tr>
                        </tbody>
                    </table>
                </td>
                <td>&nbsp;</td>
            </tr>
        </div>
    )
};
