import React, { Component } from "react";
import Coin from "../Coin/Coin";
import "./CoinFlipper.css";

class CoinFlipper extends Component {
  constructor(props) {
    super(props);
    // State üzerinde paranın başlangıçtaki durumunu veriyoruz, başlangıçta "tura" olsun.
    // Daha sonra şu anda paranın dönüp dönmeme durumunu da veriyoruz, başlangıçta para atılmamış olduğundan "false" olarak verdik.
    this.state = {
      total:0,
      yazi:0,
      tura:0,
      side: "tura",
      flipping: false,
    };
  }
  handleClick = () => {
    // "At!" butonuna tıkladığımızda paranın dönmesini istiyoruz, bu yüzden "flipping" durumunu "true" yapıyoruz.
    this.setState({ flipping: true });
    // 1 saniye kadar dönmesi yeterli, bu yüzden 1 saniye sonra "flipping" durmunu tekrar "false" yapıyoruz.
    setTimeout(() => this.setState({ flipping: false }), 1000);
    this.setState({total : this.state.total +1});

    (Math.random()>=0.5) ? this.setState({tura:this.state.tura+1,side:"tura"}) : this.setState({yazi:this.state.yazi+1,side:"yazi"});
  };

  render() {
    return (
      <div className="CoinFlipper">
        <h1>Yazı mı Tura mı?</h1>
        <Coin side={this.state.side} flipping={this.state.flipping} />
        <button onClick={this.handleClick}>At!</button>
        <p>
          Toplam<strong> {this.state.total} </strong>atıştan <br />
          <strong> {this.state.tura} </strong>ü tura <br />
          <strong> {this.state.yazi} </strong>si yazı
        </p>
      </div>
    );
  }
}

export default CoinFlipper;
