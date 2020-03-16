import React from 'react';
import "./Navigation.scss";

export default function () {
    return (
        <div className="Navigation">
              <tr bgcolor="#330000">
            <td height="33">&nbsp;</td>
            <td height="33">
              <table className="tableTwo">
                <tbody>
                  <tr>
                    <td width="13%">
                      <div align="center"><a href="index.htm" class="style4">HOME</a></div>
                    </td>
                    <td width="23%">
                      <div align="center"><a href="about.htm" class="style4">ABOUT ME</a></div>
                    </td>
                    <td width="22%">
                      <div align="center"><a href="services.htm" class="style4">SERVICES</a></div>
                    </td>
                    <td width="12%">
                      <div align="center"><a href="faq.htm" class="style4">FAQ</a></div>
                    </td>
                    <td width="30%">
                      <div align="center"><a href="contact.htm" class="style4">CONTACT ME</a></div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td height="33">&nbsp;</td>
          </tr>
            
        </div>
    )
}
