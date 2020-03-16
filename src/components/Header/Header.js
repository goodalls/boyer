
import React from 'react'
import spacer from '../../Assets/spacer.gif';
import logo from '../../Assets/logo.gif';
import "./Header.scss";

export default function Header() {
  return (
    <div className="Header">

      <tr bgcolor="#330000">
        <td width="150"><img src={spacer} height="1" width="150" /></td>
        <td bgcolor="#330000" height="45" width="876">&nbsp;</td>
        <td>&nbsp;</td>
      </tr>

      <tr>
        <td width="150"><img src={spacer} height="1" width="150" /></td>
        <td><img src={spacer} height="2" /></td>
        <td><img src={spacer} height="2" /></td>
      </tr>

      <tr bgcolor="#99cc33">
        <td bgcolor="#99cc33" width="150"><img src={spacer} height="1" width="150" /></td>
        <td bgcolor="#99cc33" height="45">
          <table >
            <tbody>
              <tr>
                <td>
                  <div align="center"><img src={logo} height="136" width="534" /></div>
                </td>
                <td>
                  <div class="style1" align="center">Licensed Psychotherapist<br />&nbsp;
        4155 E Jewell Ave. Suite #225<br /> Denver, CO 80222<br /> 303-667-1627</div>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
        <td bgcolor="#99cc33">&nbsp;</td>
      </tr>
      
      <tr>
        <td width="150"><img src={spacer} height="1" width="150" /></td>
        <td><img src={spacer} height="2" /></td>
        <td><img src={spacer} height="2" /></td>
      </tr>
     
    </div>
  )
};

