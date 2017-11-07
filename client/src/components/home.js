import React from 'react';
import Swiper from 'swiper';
import ListItems from '../containers/list_items';
import ListItemPreview from '../containers/list_item_preview';

class Home extends React.Component {
  componentDidMount() {
    const { swiper } = this;
    this.swiperInstance = new Swiper(swiper, {
      autoplay: true,
    });
  }

  componentWillUnmount() {
    this.swiperInstance.destory();
  }

  render() {
    return (
      <div className="home">
        <div
          ref={(ref) => {
            this.swiper = ref;
          }}
          className="swiper-container"
        >
          <div className="swiper-wrapper">
            <div className="swiper-slide">A</div>
            <div className="swiper-slide">B</div>
          </div>
        </div>
        <ListItems />
        <ListItemPreview />
      </div>
    );
  }
}

export default Home;
