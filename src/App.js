import React from 'react';
import spacer from './Assets/spacer.gif';
import logo from './Assets/logo.gif';
import aspens from './Assets/aspens.jpg';
import swirl from './Assets/swirl.gif';
import './App.css';

function App() {
  return (
    <div className="App">
      <table className="table1">
        <tbody>
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
          <tr bgcolor="#330000">
            <td height="35">&nbsp;</td>
            <td bgcolor="#330000" height="35">
              <div class="style5" align="center">&copy; 2011 Cami Boyer&nbsp;&nbsp;&nbsp;<img src={swirl} align="absmiddle" width="60" />&nbsp;&nbsp;&nbsp;Licensed Professional Counselor, Licensed Addiction Counselor, Master Addictions Counselor</div>
            </td>
            <td height="35">&nbsp;</td>
          </tr>
        </tbody>
      </table>


    </div>
  );
}

export default App;
