import '../styles.css';

export default function NeedleworkSpecialist() {
  return (
    <div id="page">
      <div id="text">
        <div id="intro">
          <p>
            <i><b>Needlework Specialist...</b></i>
          </p>
        </div>
        <p>
          Heidi's Place is your needlework specialist. We know that you spend valuable time making sure each stitch is done right, so we make sure it's framed right. With over 20 years experience, Heidi's Place ensures your needlework is stretched and framed correctly. Each piece is hand stretched using stainless steel pins. We never use glue or sticky boards that might damage or discolor your piece. Needlework rows are lined up straight and mats do not cut off rows or valuable stitches you took time to make. Then Heidi's Place helps you choose matting and a frame to enhance your piece and make it look its best. From stretching to fitting we provide the finest quality and service
        </p>
      </div>

      <div id="pictures">
        <table className="image-gallery" width="900" border="0" cellSpacing="5" cellPadding="7.5">
          <tbody>
            <tr>
              <td width="372">
                <img 
                  src="https://www.heidisplaceframes.com/Framing%20and%20other/DSC_0020.JPG" 
                  alt="needlework" 
                  width="295" 
                  height="220" 
                />
              </td>
              <td width="388">
                <img 
                  src="https://www.heidisplaceframes.com/Framing%20and%20other/May_2011_046.jpg" 
                  alt="in process" 
                  width="295" 
                  height="220" 
                />
              </td>
              <td width="396">
                <img 
                  src="https://www.heidisplaceframes.com/Framing%20and%20other/finished.jpg" 
                  alt="finished" 
                  width="295" 
                  height="220" 
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
