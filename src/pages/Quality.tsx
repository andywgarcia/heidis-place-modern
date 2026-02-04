import '../styles.css';

export default function Quality() {
  return (
    <div id="page">
      <div id="text">
        <div id="intro">
          <p>
            <i><b>Quality...</b></i>
          </p>
        </div>
        <p>
          We want your art to be something you will treasure for a lifetime. Heidi's Place offers a full line of acid-free rag mats, UV glass, and museum quality mounting to protect your art from damaging effects of light and pollutants. We never compromise on quality and we use only real wood frames, no plastic or composite resin.
        </p>
        <p>
          At Heidi's Place quality and unique design come together to fit your style and decor at a price you can afford.
        </p>
      </div>

      <div id="pictures">
        <table className="image-gallery" width="900" border="0" cellSpacing="5" cellPadding="7.5">
          <tbody>
            <tr>
              <td width="372">
                <img 
                  src="https://www.heidisplaceframes.com/images/Heidi%202_24_11%20(38%20of%2049).jpg" 
                  alt="working" 
                  height="314" 
                />
              </td>
              <td width="388">
                <img 
                  src="https://www.heidisplaceframes.com/images/Heidi%202_24_11%20(45%20of%2049).jpg" 
                  alt="working2" 
                  width="467" 
                />
              </td>
              <td width="396">
                <img 
                  src="https://www.heidisplaceframes.com/images/Heidi%202_24_11%20(47%20of%2049).jpg" 
                  alt="frame" 
                  height="314" 
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
