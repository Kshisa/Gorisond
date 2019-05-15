import React from "react";
import Slider from "react-slick";
import { getposters, getfilmdata, updatecount, getnext, getlast} from '../actions/card'
import { connect } from 'react-redux'

class SimpleSlider extends React.Component {
  componentDidMount(){
    this.props.getposters()
  }
  next = () => {
    if (this.props.count < 4) {
        this.props.updatecount(this.props.count + 1)
    }
    if (this.props.count === 4) {
        this.props.updatecount(0)
        this.props.getnext(this.props.trigger, this.props.posters)
    }
  }
  last = () => {
    if (this.props.count > -4) {
      this.props.updatecount(this.props.count - 1)
    }
    if (this.props.count === -4) {
      this.props.updatecount(0)
      this.props.getlast(this.props.trigger, this.props.posters)
    }
  }
  imageClick = (n) => {
    this.props.getfilmdata(n)
  }
  render() {
    const { posters, count, trigger } = this.props
    let course = 0
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      beforeChange: (current, next) => {
		    if (next === 0 && current === 14)  { next = 15 }
		    if (next === 14 && current === 0)  { current = 15 }
        course = next - current
	    },
      afterChange: () => {
        if (course === 1) {
          this.next()
        }
		    if (course === -1) {
           this.last()
		    }
	    },
      slidesToShow: 5,
      slidesToScroll: 1
    };
return (
      <div>
        <p>count: {count} trigger: {trigger}</p>
        <Slider {...settings}>
        {posters.map(poster => (
          <div>
            <h3>
              <img
              className="image"
              src={'imgs/' + poster[1] +  'kad0.jpg'}
              alt=''
              onClick={() => this.imageClick(poster[0])}
              />
            </h3>
          </div>
        ))}
        </Slider>
      </div>

    );
  }
}
const mapStateToProps = (state) => ({
  posters: state.post.posters,
  count: state.post.count,
  trigger: state.post.trigger
})
export default connect(mapStateToProps, { getposters, getfilmdata, updatecount, getnext, getlast })(SimpleSlider)
