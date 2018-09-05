import React, { Component } from 'react';

class Sub2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coupon: '',
      currentPlan: 'bronze',
    };

    this.onCouponChange=this.onCouponChange.bind(this);
    this.switchPlan=this.switchPlan.bind(this);
    this.nextStep=this.nextStep.bind(this);
  }

  onCouponChange(event) {
    this.setState({
      coupon: event.target.value,
    })
  }

  switchPlan(currentPlan) {
    this.setState({
      currentPlan,
    })

  }

  nextStep() {
    let { currentPlan, coupon } = this.state;

    fetch('http://localhost:4000/api/customer/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          plan: currentPlan,
          coupon: coupon
        })
      }).then((res) => res.json()).then((response) => {
        console.log('response', response)
      }).catch(error => console.error('Error:', error));
  }

  render() {
    let { coupon, currentPlan, } = this.state;
    let plans = ['standard', 'premium'];

    return (
      <div>
        <div>
          <input
            type="text"
            placeholder="Coupon"
            value={coupon}
            onChange={this.onCouponChange}
          />
        </div>
        <div>
          <h2>Plans</h2>
          {
            (plans).map((plan, index) => {
              if(currentPlan == plan) {
                return(
                  <button key={'plan'+index} style={{
                    backgroundColor: '#03b4ae',
                  }}
                  onClick={() => this.switchPlan(plan)}
                  >
                    {plan}
                  </button>
                )
              }
              return(
                <button key={'plan'+index} style={{
                  backgroundColor: '#ffffff',
                }}
                onClick={() => this.switchPlan(plan)}
                >
                  {plan}
                </button>
              )
            })
          }
        </div>
        <div>
          <button onClick={this.nextStep}>Next</button>
        </div>
      </div>
    );
  }
}

export default Sub2;