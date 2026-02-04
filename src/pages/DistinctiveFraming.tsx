import '../styles.css';

export default function DistinctiveFraming() {
  return (
    <div id="page">
      <div id="text">
        <div id="intro">
          <p>
            <i><b>Distinctive Framing...</b></i>
          </p>
        </div>
        <p>
          The right custom framing can enhance your valuable art piece. Whether it's an original, poster, or a special photograph, Heidi's Place has the expertise to help you pick colors and designs to make your piece look its best. We are a home-based business with over 20 years experience bringing unsurpassed quality and design. Custom framing is an investment of your time and should not be rushed or interrupted.
        </p>
        <p>
          Heidi's Place will also come to you! If you would like to match your framing with your decor, we make personal house or business calls, bringing our samples to you. We value you as a customer and look forward to giving you the best custom framing service available.
        </p>
      </div>

      <div id="pictures">
        <table className="image-gallery" width="900" border="0" cellSpacing="5" cellPadding="7.5">
          <tbody>
            <tr>
              <td width="372">
                <img 
                  src="https://www.heidisplaceframes.com/Framing%20and%20other/P1010084.JPG" 
                  alt="framed pieces" 
                  width="295" 
                />
              </td>
              <td width="396">
                <img 
                  src="https://www.heidisplaceframes.com/Framing%20and%20other/P1010091.JPG" 
                  alt="framed pictures" 
                  width="295" 
                />
              </td>
              <td width="388">
                <img 
                  src="https://www.heidisplaceframes.com/Framing%20and%20other/P1010090.JPG" 
                  alt="framed piece" 
                  width="295" 
                />
              </td>
            </tr>
          </tbody>
        </table>

        <div id="foot">
          <p>
            Heidi's Place&copy;2011 &bull; Heidis.frames@gmail.com &bull; (425)489-2569 &bull; Bothell, WA 98012
          </p>
        </div>
      </div>
    </div>
  );
}
