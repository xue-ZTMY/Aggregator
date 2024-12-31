import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Swap />
    </div>
  );
}

function Header() {
  return (
    <div>
      <SwitchPage />
      <Connect />
    </div>
  );
}

function SwitchPage() {
  return (
    <div >
      <a>兑换</a>
      <a>流动池</a>
      <a>投票</a>
      <a>图标</a>
    </div>
  )
}

function Connect() {
  return (
    <div >
      <div >
        <img src="./public/logo192.png" alt="eth" />
        <span class="Ethereum">Ethereum</span>
      </div>
      <button class="connect">连接钱包</button>
      <button class="menu">···</button>
    </div>
  )

}
function Swap() {
return(
  <div class="body">
    <div class="swap-page">
      <div class="swap-page-header">
        <span>兑换</span>
        <button>
          {/* <img src="./img/setup.png" alt="setup"/> */}
        </button>
      </div>
      <div class="swap-page-body">
        <div class="token1">
          <input type="text" inputmode="decimal" placeholder="0.0" />
          <button class="token1-btn">
            <div class="token1-info">
              {/* <img src="./img/ethereum.png" alt="eth"/> */}
              <span>ETH</span>
            </div>
          </button>
        </div>
        <button class="arrow">
          {/* <img src="./img/arrow.png" alt="arrow"/> */}
        </button>
        <div class="token2">
          <input type="text" inputmode="decimal" placeholder="0.0" />
          <button class="token2-btn">
            <div class="token2-info">
              <span>选择令牌</span>
            </div>
          </button>
        </div>
      </div>
      <div class="swap-page-footer">
        <button class="swap-page-footer-connect">连接钱包</button>
      </div>
    </div>
  </div>
)
}

export default App;
