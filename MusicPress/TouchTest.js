/**
 * @author brendanhorlick1997@gmail.com (Brendan Horlick)
 * date: 17/10/2017
 */

class TouchTest
{

  init()
  {

  }
  update()
  {

  }
  draw()
  {

  }
  /**
   * Tests if the device running is a touch device.
   * this will report false on a browser running on a non-touch device,
   * but will return true if you are using a laptop with a touch screen.
   */
  is_touch_device()
  {
    return 'ontouchstart' in window;
  }






}
