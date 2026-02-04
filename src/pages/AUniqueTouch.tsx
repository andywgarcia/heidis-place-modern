import '../styles.css';

export default function AUniqueTouch() {
  return (
    <div id="page">
      <div id="text">
        <div id="intro">
          <p>
            <i><b>A Unique Touch...</b></i>
          </p>
        </div>
        <p>
          Heidi's Place has creative solutions for your unique pieces. When you need just the right framing, we can help. Free design consultations with a framer trained in design and color theory give you the best options to enhance your unique piece.
        </p>
        <p>
          We are experienced with special cuts, inserting plaques, and even hand painting custom designs on the mats. At Heidi's Place you will find your unique styles for your personal enjoyment or gifts that last a lifetime.
        </p>
      </div>

      <div id="pictures">
        <table className="image-gallery" width="900" border="0" cellSpacing="5" cellPadding="7.5">
          <tbody>
            <tr>
              <td width="396">
                <img 
                  src="https://www.heidisplaceframes.com/Framing%20and%20other/May_2011_033.jpg" 
                  alt="boys" 
                  width="295" 
                />
              </td>
              <td width="372">
                <img 
                  src="https://www.heidisplaceframes.com/Framing%20and%20other/April%202007%20149.jpg" 
                  alt="uniform" 
                  width="295" 
                />
              </td>
              <td width="388">
                <img 
                  src="https://www.heidisplaceframes.com/Framing%20and%20other/June%202006%20027.jpg" 
                  alt="openings" 
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
